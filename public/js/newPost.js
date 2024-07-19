const newFormHandler = async function (event) {//see comment.js in /public/js folder for explanation
  event.preventDefault();//see comment.js in /public/js folder for explanation
  //Retrieves the values entered in an input fields where the names are "post-title" and "post-body"
  const title = document.querySelector('input[name="post-title"]').value;//line 7 (make array of <name>)
  const body = document.querySelector('textarea[name="post-body"]').value;//line 10 (make array of <name>)
//POST request to the /api/posts endpoint 
  await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({//stringnifies the following 
      title,//data values in JSON format from lines 4-5
      body,
    }),//see comment.js in /public/js folder for explanation
    headers: { 'Content-Type': 'application/json' },
  });
//see comment.js in /public/js folder for explanation
  document.location.replace('/dashboard');
};
//Adds an event listener to the form with the id "new-post-form" to listen for 
document
  .querySelector('#new-post-form')//line 5 id
  .addEventListener('submit', newFormHandler);
//the 'submit' event and call the entire function