const router = require('express').Router();//imports the Router class from the Express.js library
const { User } = require('../../models');//from User.js in models folder
//Express router that handles user authentication functionalities
router.post('/', async (req, res) => { 
  try {//Creates a new user in the database
    const userData = await User.create(req.body);//using the data from the request body
//saves the user's ID, username, and login status in the session
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.logged_in = true;
//Sends back the user data in JSON format with a status code of 200 if registration is successful
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});
//Finds a user in the database
router.post('/login', async (req, res) => { 
  try {//based on the provided username
    const userData = await User.findOne({
      where: { username: req.body.username },
    });
//if that user's Data can't be found
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }
//checks if the password provided in the request
    const validPassword = await userData.checkPassword(req.body.password);
//matches the user's password in the database.
    if (!validPassword) { //otherwise, doesn't come through
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }
//If the login credentials are correct, 
    req.session.save(() => {
      req.session.user_id = userData.id;//it saves the user's ID,
      req.session.username = userData.username;//username,
      req.session.logged_in = true;//login status in the session

      res.status(200).json({
        userData,
        message: 'You are now logged in!',
      });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});
//Destroys the session 
router.post('/logout', (req, res) => {
  if (req.session.logged_in) { // if the user is logged in
    req.session.destroy(() => { //Sends a status code 204 (No Content) 
      res.status(204).end();//if the logout is successful
    });
  } else {
    res.status(404).end();
  }
});
//export these via router
module.exports = router;
