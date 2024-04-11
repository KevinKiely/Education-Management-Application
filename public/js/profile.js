
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
document.querySelector('#logout').addEventListener('click', function() {
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



document.querySelector('#edit-profile').addEventListener('click', openForm);
document.querySelector('#save-profile').addEventListener('click', saveProfile);
document.querySelector('#close-form').addEventListener('click', closeForm);

 // Function to open the popup form
 function openForm() {
  document.getElementById("popupForm").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

// Function to save form answers to local storage and update profile page
function saveProfile() {
  var savedName= document.querySelector('#name').value;
  var savedSpecialty= document.querySelector('#specialty').value;
  var savedAboutMe= document.querySelector('#about-me').value;
  var savedEmail= document.querySelector('#email').value;

console.log("Profile Saved!");


localStorage.setItem("savedName", savedName);
localStorage.setItem("savedSpecialty", savedSpecialty);
localStorage.setItem("savedAboutMe", savedAboutMe);
localStorage.setItem("savedEmail", savedEmail);

loadProfile();
}

function loadProfile() {
  //Loads stored teacher name
  var teacherName= document.querySelector('#teacher-name');
  teacherName.textContent=(localStorage.getItem("savedName"));

//Loads stored teacher specialty
  var teacherSpecialty= document.querySelector('#teacher-specialty');
  teacherSpecialty.textContent=(localStorage.getItem("savedSpecialty"));

//loads stored teacher aboutme section
  var teacherAboutMe= document.querySelector('#teacher-about-me');
  teacherAboutMe.textContent=(localStorage.getItem("savedAboutMe"));

  //loads stored teacher preferred email
  var teacherEmail= document.querySelector('#teacher-email');
  teacherEmail.textContent=(localStorage.getItem("savedEmail"));

}


// Function to close the popup form
function closeForm() {
  document.getElementById("popupForm").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}


loadProfile();





