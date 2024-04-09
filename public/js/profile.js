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
document.querySelector('#logout').addEventListener('click', function () {
  document.location.replace('/login');
});

