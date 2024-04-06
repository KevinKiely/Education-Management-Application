const { Teacher } = require('../models');
const bcrypt = require('bcrypt');

let teacherData = [
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

const seedTeachers = async () => {
  // Hash passwords for each teacher
  const hashedTeacherData = await Promise.all(
    teacherData.map(async (teacher) => {
      const hashedPassword = await bcrypt.hash(teacher.password, 10);
      return {
        ...teacher,
        password: hashedPassword,
      };
    })
  );

  // Bulk create teachers with hashed passwords
  await Teacher.bulkCreate(hashedTeacherData, { returning: true });
};

module.exports = seedTeachers;
