const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Course extends Model {}

Course.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    course_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 40],
      },
    },
    teacher_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'teacher',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'course',
  }
);

module.exports = Course;
