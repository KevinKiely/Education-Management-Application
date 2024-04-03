const { StudentCourse } = require('../models');

const studentCourseSeeds = [
  { student_id: 1, course_id: 1, grade: 85 },
  { student_id: 1, course_id: 2, grade: 70 },
  { student_id: 1, course_id: 3, grade: 92 },
  { student_id: 2, course_id: 1, grade: 88 },
  { student_id: 2, course_id: 2, grade: 75 },
  { student_id: 2, course_id: 3, grade: 95 },
  { student_id: 3, course_id: 1, grade: 80 },
  { student_id: 3, course_id: 2, grade: 68 },
  { student_id: 3, course_id: 3, grade: 90 },
  { student_id: 4, course_id: 1, grade: 92 },
  { student_id: 4, course_id: 2, grade: 85 },
  { student_id: 4, course_id: 3, grade: 98 },
  { student_id: 5, course_id: 1, grade: 78 },
  { student_id: 5, course_id: 2, grade: 70 },
  { student_id: 5, course_id: 3, grade: 82 },
  { student_id: 6, course_id: 1, grade: 85 },
  { student_id: 6, course_id: 2, grade: 75 },
  { student_id: 6, course_id: 3, grade: 90 },
  { student_id: 7, course_id: 1, grade: 92 },
  { student_id: 7, course_id: 2, grade: 85 },
  { student_id: 7, course_id: 3, grade: 95 },
  { student_id: 8, course_id: 1, grade: 78 },
  { student_id: 8, course_id: 2, grade: 70 },
  { student_id: 8, course_id: 3, grade: 80 },
  { student_id: 9, course_id: 1, grade: 85 },
  { student_id: 9, course_id: 2, grade: 72 },
  { student_id: 9, course_id: 3, grade: 88 },
  { student_id: 10, course_id: 1, grade: 90 },
  { student_id: 10, course_id: 2, grade: 80 },
  { student_id: 10, course_id: 3, grade: 92 },
];

const seedStudentCourses = () => StudentCourse.bulkCreate(studentCourseSeeds, { returning: true });

module.exports = seedStudentCourses;
