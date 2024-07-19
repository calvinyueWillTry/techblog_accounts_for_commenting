const loginFormHandler = async function (event) { //takes an event parameter to handle the form submission event
  event.preventDefault();//see comment.js in /public/js folder for explanation
//retrieves the values entered in the username and password input fields of the login form
  const usernameEl = document
    .querySelector('#username-input-login')// line 8: id from login.handlebars
    .value.trim(); //trim removes any leading or trailing whitespace
  const passwordEl = document
    .querySelector('#password-input-login')//line 12: id from login.handlebars
    .value.trim();
//makes a POST request to the /api/users/login endpoint using the fetch API
  const response = await fetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify({
      username: usernameEl, //calls the input from line lines 4-6
      password: passwordEl, //calls the input from line lines 7-9
    }), //see comment.js in /public/js folder for explanation
    headers: { 'Content-Type': 'application/json' },
  });
 //see comment.js in /public/js folder for explanation
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to login');
  }
};
//When the submit button is clicked, the entire function is called to handle the form submission
document
  .querySelector('#login-form')//line 5 <form id="login-form" class="card-body">
  .addEventListener('submit', loginFormHandler);//button for page
