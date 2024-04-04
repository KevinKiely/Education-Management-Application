const { Student } = require('../models');

const studentSeeds = [
  { name: 'Emma Smith', grade_level: 9 },
  { name: 'Liam Johnson', grade_level: 10 },
  { name: 'Olivia Williams', grade_level: 11 },
  { name: 'Noah Jones', grade_level: 12 },
  { name: 'Ava Brown', grade_level: 9 },
  { name: 'William Davis', grade_level: 10 },
  { name: 'Sophia Miller', grade_level: 11 },
  { name: 'James Wilson', grade_level: 12 },
  { name: 'Isabella Moore', grade_level: 9 },
  { name: 'Benjamin Taylor', grade_level: 10 },
];

const seedStudents = () => Student.bulkCreate(studentSeeds, { returning: true });

module.exports = seedStudents;
