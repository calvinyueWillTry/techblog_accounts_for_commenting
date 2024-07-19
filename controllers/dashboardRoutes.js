const router = require('express').Router();//imports the Router class from the Express.js library
const { Post } = require('../models'); //from Post.js in models folder
const { withGuard } = require('../utils/authGuard');//imports the withGuard middleware 
//from the authGuard.js form the utils folder
router.get('/', withGuard, async (req, res) => { //route is accessed when the user visits the root path
  try { //uses the withGuard middleware to protect the route, ensuring 
    const postData = await Post.findAll({ //that only authenticated users can access it
      where: {
        userId: req.session.user_id,
      }, //fetches all posts from the database that belong to the currently logged-in user
    }); 
//map through the array of posts
    const posts = postData.map((post) => post.get({ plain: true }));
//fetched data is then rendered using a Handlebars template called 'dashboard' and additional data
    res.render('dashboard', { //passing in the posts 
      dashboard: true,
      posts, //line 13
      loggedIn: req.session.logged_in,//whether the user is logged in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
//GET this route when the user wants to create a new post
router.get('/new', withGuard, (req, res) => {//uses the withGuard middleware to protect the route
  res.render('Posting', { //renders a Handlebars template called 'Posting', creating a new post
    dashboard: true,
    loggedIn: req.session.logged_in,
  });
});
//GET this route when the user wants to edit a specific post
router.get('/edit/:id', withGuard, async (req, res) => {
  try { //fetches the post with the specified id from the database
    const postData = await Post.findByPk(req.params.id);
//if found, that will be the "post" that is being dealt with
    if (postData) {
      const post = postData.get({ plain: true });
//renders a template called 'editPost' with the post data for editing
      res.render('editPost', {
        dashboard: true,
        post,
        loggedIn: req.session.logged_in,
      });
    } else { //if not found
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//exports the defined router to be used in the main application file
module.exports = router;
