const loginFormHandler = async function (event) {
  event.preventDefault();

  const usernameEl = document
    .querySelector('#username-input-login')// line 8: id from login.handlebars
    .value.trim();
  const passwordEl = document
    .querySelector('#password-input-login')//line 12: id from login.handlebars
    .value.trim();

  const response = await fetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify({
      username: usernameEl,
      password: passwordEl,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to login');
  }
};

document
  .querySelector('#login-form')//line 5 <form id="login-form" class="card-body">
  .addEventListener('submit', loginFormHandler);//button for page
