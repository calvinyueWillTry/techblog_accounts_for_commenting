//sets up a Sequelize connection to a MySQL database (schema.sql from db folder)
const Sequelize = require('sequelize');//imports the Sequelize library, which is an ORM (Object-Relational Mapping) for Node.js
require('dotenv').config();//loads and configures the dotenv module, 
//allowing one to read variables from a .env file and store them in process.env
let sequelize;
//checks if there is a JAWSDB_URL variable (allowing this to be processed on Heroku via JawsDB)
if (process.env.JAWSDB_URL) {//https://www.jawsdb.com/ This is the SQL database
  sequelize = new Sequelize(process.env.JAWSDB_URL);//creates a Sequelize connection using the provided URL
} else {//If not, it uses the following variables
  sequelize = new Sequelize( //creates a connection to a local MySQL database
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    { //additional configuration options
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }//this is the port that Heroku JawsDB uses
  );
}
//the object representing the database connection is exported, 
module.exports = sequelize;
//so that it can be used in other parts of the application