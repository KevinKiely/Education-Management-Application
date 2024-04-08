const createCourseForm = document.getElementById('create-course-form');

const createCourseFormHandler = async (e) => {
  e.preventDefault();
  try {
    const name = createCourseForm.coursename.value;
    const description = createCourseForm.coursedesc.value;

    if (!name.trim().length || !description.trim().length) {
      return;
    }
    const response = await fetch('/api/courses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description }),
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to add a new course');
    }
  } catch (error) {
    console.log(error);
  }
};

createCourseForm.addEventListener('submit', createCourseFormHandler);
