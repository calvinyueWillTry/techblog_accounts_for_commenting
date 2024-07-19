const router = require('express').Router();//imports the Express Router to define routes
const { Comment } = require('../../models/'); //Comment.js from the models folder
const { apiGuard } = require('../../utils/authGuard'); //imports the apiGuard function from the authGuard.js
//a POST request is made to this route
router.post('/', apiGuard, async (req, res) => { //If the request passes the guard
  try { //executes an asynchronous function that tries to create a new comment
    const newComment = await Comment.create({
      ...req.body, //using the data from the request body
      userId: req.session.user_id,//user ID stored in the session
    }); //comment creation is successful, 
    res.json(newComment);//it sends a JSON response containing the newly created comment
  } catch (err) {
    res.status(500).json(err);
  }
});
//exported to be used in other parts of the application
module.exports = router;
