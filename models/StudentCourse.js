const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class StudentCourse extends Model {}

StudentCourse.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    student_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'student',
        key: 'id',
      },
    },
    grade: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    course_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'course',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'student_course',
  }
);

module.exports = StudentCourse;
