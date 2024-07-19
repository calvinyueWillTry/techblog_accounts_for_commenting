const logout = async () => {//logs the user out of the application
  const response = await fetch('/api/users/logout', { //makes a POST request to the /api/users/logout endpoint using the fetch API
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  }); //see comment.js in /public/js folder for explanation
//see comment.js in /public/js folder for explanation
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);//see comment.js in /public/js folder for explanation
  } //see https://developer.mozilla.org/docs/Web/API/Response/type for what statusText means
};
//event listener is added to the click event of the element with the id logout
document.querySelector('#logout').addEventListener('click', logout);
//when the logout button is clicked, it calls the entire function