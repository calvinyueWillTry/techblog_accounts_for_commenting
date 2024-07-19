const router = require('express').Router();//new router object using Express's Router function
const { Post, Comment, User } = require('../models/');//from the models folder
//const { withGuard, withoutGuard } = require('../utils/authGuard');
//GET requests to the root URL '/'
router.get('/', async (req, res) => { 
  try { //fetches all posts from the database
    const postData = await Post.findAll({ 
      include: [User], // includes associated user data
    });
//map through the array of posts
    const posts = postData.map((post) => post.get({ plain: true }));
//renders the 'home' template with the posts 
    res.render('home', { posts, loggedIn: req.session.logged_in });
  } catch (err) { //and a flag indicating if the user is logged in
    res.status(500).json(err);
  }
});
//handles GET requests to '/post/:id', where :id is a dynamic parameter representing the post's ID
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, { //It fetches a specific post by ID
      include: [ //includes associated user and comment data
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    if (postData) {
      const post = postData.get({ plain: true });
//renders the 'post' template with the post details
      res.render('post', { post, loggedIn: req.session.logged_in });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//handles GET requests to '/login' 
router.get('/login',  (req, res) => {
//renders the 'signin' template for user login
  try {
    res.render('signin');
  } catch (err) {
    res.status(500).json(err);
  }
});
//handles GET requests to '/signup' 
router.get('/signup',  (req, res) => {
  try { //renders the 'register' template for user registration
    res.render('register');
  } catch (err) {
    res.status(500).json(err);
  }
});
//line exports the router object so that it can be used in other parts of the application
module.exports = router;
