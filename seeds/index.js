const sequelize = require('../config/connection');
const seedTeachers = require('./teacherSeeds');
const seedCourses = require('./courseSeeds');
const seedStudents = require('./studentSeeds');
const seedStudentCourses = require('./studentCourseSeeds');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await seedTeachers();
  await seedCourses();
  await seedStudents();
  await seedStudentCourses();

  process.exit(0);
};

seedDatabase();
