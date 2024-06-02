const newFormHandler = async function (event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;//line 7 (make array of <name>)
  const body = document.querySelector('textarea[name="post-body"]').value;//line 10 (make array of <name>)

  await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      body,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#new-post-form')//line 5 id
  .addEventListener('submit', newFormHandler);
