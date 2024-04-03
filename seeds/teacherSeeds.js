const { Teacher } = require('../models');

const teacherSeeds = [
  {
    name: 'Emily Johsnon',
    email: 'ejohsnon@gmail.com',
    password: 'Test12345%',
  },
  {
    name: 'Nathan Thompson',
    email: 'nthompson@gmail.com',
    password: 'Test12345%',
  },
  {
    name: 'Ava Carter',
    email: 'acarter@gmail.com',
    password: 'Test12345%',
  },
  {
    name: 'Jacob Martinez',
    email: 'jmartinez@gmail.com',
    password: 'Test12345%',
  },
  {
    name: 'Mia Roberts',
    email: 'mroberts@gmail.com',
    password: 'Test12345%',
  },
];

const seedTeachers = () => Teacher.bulkCreate(teacherSeeds, { returning: true });

module.exports = seedTeachers;
