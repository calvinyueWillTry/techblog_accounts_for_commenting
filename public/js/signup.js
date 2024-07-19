const signupFormHandler = async function (event) {//see comment.js in /public/js folder for explanation
  event.preventDefault();//see comment.js in /public/js folder for explanation
//Retrieves the trimmed values entered in the input fields with the ids "username-input-signup" and "password-input-signup"
  const usernameEl = document
    .querySelector('#username-input-signup')//line 9 id 
    .value.trim();
  const passwordEl = document
    .querySelector('#password-input-signup')//line 13 id 
    .value.trim();
//Checks if the password is at least 8 characters long and if a username is provided
  if (passwordEl.length >= 8 && usernameEl) { //if so, Makes a POST request to the '/api/users' endpoint
    const response = await fetch('/api/users', { //with the value defined from lines 4-9
      method: 'POST',
      body: JSON.stringify({//see comment.js in /public/js folder for explanation
        username: usernameEl,
        password: passwordEl,
      }),//see comment.js in /public/js folder for explanation
      headers: { 'Content-Type': 'application/json' },
    });
//see comment.js in /public/js folder for explanation
    if (response.ok) {
      document.location.replace('/');
    } else { 
      alert('Failed to sign up');
    } //see comment.js in /public/js folder for explanation
  } else { //f the password length is less than 8 characters or no username is provided
    alert(
      'Please include both a username and password, and make sure your password is at least 8 characters long'
    );
  }//see comment.js in /public/js folder for explanation
};
//Adds an event listener to the form with the id "signup-form" to listen for 
document
  .querySelector('#signup-form')//line 6 id
  .addEventListener('submit', signupFormHandler);//line 15 type 
//the 'submit' event, calling the entire function