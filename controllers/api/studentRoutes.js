const { Student, StudentCourse } = require('../../models');
const router = require('express').Router();
const withAuth = require('../../middleware/withAuth');
const validateCreateStudent = require('../../middleware/validateCreateStudent');

router.post('/', withAuth, validateCreateStudent, async (req, res) => {
  try {
    const { name, gradeLevel, courseId, grade } = req.body;

    const dbStudentData = await Student.create({
      name,
      grade_level: gradeLevel,
    });

    const dbStudent = dbStudentData.get({ plain: true });

    await StudentCourse.create({
      student_id: dbStudent.id,
      course_id: courseId,
      grade,
    });

    res.status(201).json({ message: 'Student created' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', message: error });
  }
});





module.exports = router;
