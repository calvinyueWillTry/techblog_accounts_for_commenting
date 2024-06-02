const commentFormHandler = async function (event) {
  event.preventDefault();

  const postId = document.querySelector('input[name="post-id"]').value;//line 35 
  const body = document.querySelector('textarea[name="comment-body"]').value;//line 39

  if (body) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        postId,
        body,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      document.location.replace('/login');//see homeRoutes and userRoutes
    }
  }
};

document
  .querySelector('#new-comment-form')//line 29
  .addEventListener('submit', commentFormHandler);
