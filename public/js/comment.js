const commentFormHandler = async function (event) { //synchronous function that takes an event parameter
  event.preventDefault(); //prevent the default behavior of form submission, which would cause the page to reload
//using document.querySelector, retrieves the values of the postId and body fields  from the comment form
  const postId = document.querySelector('input[name="post-id"]').value;//line 35 
  const body = document.querySelector('textarea[name="comment-body"]').value;//line 39
//checks if the body of the comment is not empty
  if (body) { //if it has something, then makes a POST request 
    const response = await fetch('/api/comments', { //to the /api/comments endpoint 
      method: 'POST', //with the variables from lines 4-5 in the request body
      body: JSON.stringify({ //request is made using the fetch API with the method set to 'POST',
        postId, //JSON format stringified
        body,
      }), //'Content-Type' header set to 'application/json'
      headers: {
        'Content-Type': 'application/json',
      },
    });
//If the response from the server is successful
    if (response.ok) {
      document.location.reload(); //page is reloaded to display the new comment
    } else { //or selse user is redirected to the login page
      document.location.replace('/login');//see homeRoutes and userRoutes
    }
  }
};
//an event listener is added to the comment form element  (line 28), 
document
  .querySelector('#new-comment-form')//line 29
  .addEventListener('submit', commentFormHandler);//listening for the 'submit' event
//When submitted, the entire function is called to handle the form submission