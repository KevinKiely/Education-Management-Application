const Teacher = require('./Teacher');
const Course = require('./Course');
const Student = require('./Student');
const StudentCourse = require('./StudentCourse');

Teacher.hasMany(Course, {
  foreignKey: 'teacher_id',
  onDelete: 'CASCADE',
});

Course.belongsTo(Teacher, {
  foreignKey: 'teacher_id',
});

Course.belongsToMany(Student, { through: StudentCourse, foreignKey: 'course_id' });
Student.belongsToMany(Course, { through: StudentCourse, foreignKey: 'student_id' });

module.exports = { Teacher, Course, Student, StudentCourse };

