const withGuard = (req, res, next) => { //checks if the user is logged in
  // If the user is not logged in, redirect the request to the login route
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }//next middleware in the chain
};
//If the user is not logged in 
const apiGuard = (req, res, next) => {
  if (!req.session.logged_in) { //this is the response
    res.status(403).json({ msg: 'you must login to perform this action' });
  } else {
    next();
  }//next middleware in the chain
};

const withoutGuard = (req, res, next) => { 
  if (!req.session.logged_in) { //If the user is not logged in
    next(); //next middleware in the chain
  } else {
    res.redirect('/');
  }//redirects the user to the '/' route
};
//exports the three middleware functions so that they can be imported/used in other files
module.exports = { withGuard, apiGuard, withoutGuard };