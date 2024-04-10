async function login(event) {
  event.preventDefault();
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  // Send fetch request to add a new dish
  const response = await fetch(`/api/teachers/login`, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),

    headers: {
      'Content-Type': 'application/json',
    },
  });

  // If an account is successfully created, go to login page. Otherwise, send an alert
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Login failed');
  }
}

function createAccount(){
document.location.replace('/signup');
}

document.querySelector('.login-form').addEventListener('submit', login);

document.querySelector('#create-account-btn').addEventListener('submit', createAccount);

