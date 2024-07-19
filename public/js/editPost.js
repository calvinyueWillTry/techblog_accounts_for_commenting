const postId = document.querySelector('input[name="post-id"]').value;
//This variable is assigned the input element, with the name "post-id" from the document and gets its value
const editFormHandler = async function (event) { //handles the click event on a delete button
  event.preventDefault();//see comment.js in /public/js folder for explanation
//gets the value of the title and body of the post from the following input fields
  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('textarea[name="post-body"]').value;
//sends a DELETE request to the server to delete the post with the specified postId
  await fetch(`/api/posts/${postId}`, { 
    method: 'PUT', //see comment.js in /public/js folder for explanation
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  document.location.replace('/dashboard');
};
//sends a DELETE request to the server  to delete the post with the specified postId. 
const deleteClickHandler = async function () {
  await fetch(`/api/posts/${postId}`, {
    method: 'DELETE',
  });
//After the deletion is completed, it redirects the user to the dashboard page
  document.location.replace('/dashboard');
};
//adds an event listener to the element with the id "edit-post-form" to listen for the form submission event
document
  .querySelector('#edit-post-form')
  .addEventListener('submit', editFormHandler);//calls the function form line 3
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);
//handles the click event on a delete button. It called the function on line 23. 