const path = require('path');//Node.js module for working with file and directory paths
const express = require('express');//Web framework for Node.js (a cross-platform, open-source JavaScript runtime environment)
const session = require('express-session');//Middleware for managing session data in Express
const exphbs = require('express-handlebars');//View engine for Express that integrates Handlebars.js
const routes = require('./controllers');//accsses the controllers folder
const helpers = require('./utils/helpers');//accsses the helper.js file in the utils folder
//these are helper functions to be used in Handlebars templates
const sequelize = require('./config/connection');//Promise-based Node.js ORM for MySQL, PostgreSQL, SQLite, and more
const SequelizeStore = require('connect-session-sequelize')(session.Store);//Connects Sequelize with Express session

const app = express();//Creates an instance of Express app
const PORT = process.env.PORT || 3011;//Sets up the port for the app to listen on, defaulting to 3011

// Sets up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });//Custom helpers (line 6) are passed to the Handlebars engine

const sess = {//Sets up session configuration    
  secret: 'Super secret secret',//with a secret key,
  cookie: { //cookie settings,
    maxAge: 300000,//5 minutes
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false, //Forces the session to be saved back to the session store, even if the session wasn't modified
  saveUninitialized: true,//Forces a session that is “uninitialized” to be saved to the store. A session is uninitialized when it is new but not modified
  store: new SequelizeStore({ //and a Sequelize session store to store session data in the database
    db: sequelize, //from line 8
  }),
};

app.use(session(sess));//utilizes lines 17-30

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
//Configures middleware for parsing JSON and URL-encoded data,  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));//serving static files from the 'public' directory,

app.use(routes);//and using the defined routes (line 5)
//line 8.Establishes a connection to the database
sequelize.sync({ force: false }).then(() => { //Syncs the models with the database, ensuring the tables are created if they don't exist
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`)); //server and listens on the specified port. 
});//Outputs a message to the console once the server is running
