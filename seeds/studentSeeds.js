const { Student } = require('../models');

const studentSeeds = [
  { name: 'Emma Smith' },
  { name: 'Liam Johnson' },
  { name: 'Olivia Williams' },
  { name: 'Noah Jones' },
  { name: 'Ava Brown' },
  { name: 'William Davis' },
  { name: 'Sophia Miller' },
  { name: 'James Wilson' },
  { name: 'Isabella Moore' },
  { name: 'Benjamin Taylor' },
];

const seedStudents = () => Student.bulkCreate(studentSeeds, { returning: true });

module.exports = seedStudents;
