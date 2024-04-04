async function createAccount(event) {
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    
    // Send fetch request to add a new dish
    const response = await fetch(`/api/teacherRoutes.js`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        password,
      }),

      headers: {
        'Content-Type': 'application/json',
      },
    });

      
    
    // If an account is successfully created, go to login page. Otherwise, send an alert
    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert('Signup failed');
    }
  }
  
  document.querySelector('#signup-submit').addEventListener('submit', createAccount);