// Go to Homepage
document.querySelector('#homepage').addEventListener('click', function () {
  document.location.replace('/dashboard');
});

// Go to Myclasses tab
document.querySelector('#myClasses').addEventListener('click', function () {
  document.location.replace('/courses');
});

// Go to My profile
document.querySelector('#profile').addEventListener('click', function () {
  document.location.replace('/profile');
});

//Log out, redirects to login.handlebars
document.querySelector('#logout').addEventListener('click', function(){

  fetch('/api/teachers/logout', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      }
  })
  .then(data => {
      console.log("User logged out successfully");
      document.location.replace('/');
  })
  .catch(error => {
      console.error.log("Error: ", error);
  })
});


// Navigates to create course form
document.querySelector('#create-course-form').addEventListener('click', function (){
  document.location.replace('/courses/create');
});
