const { Course } = require('../models');

const courseSeeds = [
  {
    course_name: 'Mathematics',
    course_description: 'description of mathematics',
    teacher_id: 1,
  },
  {
    course_name: 'English Literature',
    course_description: 'description of english literature',

    teacher_id: 2,
  },
  {
    course_name: 'Physics',
    course_description: 'description of physics',

    teacher_id: 3,
  },
  {
    course_name: 'History',
    course_description: 'description of history',

    teacher_id: 4,
  },
  {
    course_name: 'Biology',
    course_description: 'description of biology',

    teacher_id: 5,
  },
];

const seedCourses = () => Course.bulkCreate(courseSeeds, { returning: true });

module.exports = seedCourses;
