const { Course } = require('../models');

const courseSeeds = [
  {
    course_name: 'Mathematics',
    teacher_id: 1,
  },
  {
    course_name: 'English Literature',
    teacher_id: 2,
  },
  {
    course_name: 'Physics',
    teacher_id: 3,
  },
  {
    course_name: 'History',
    teacher_id: 4,
  },
  {
    course_name: 'Biology',
    teacher_id: 5,
  },
];

const seedCourses = () => Course.bulkCreate(courseSeeds, { returning: true });

module.exports = seedCourses;
