const { Course } = require('../../models');
const router = require('express').Router();
const withAuth = require('../../middleware/withAuth');
const validateCreateCourse = require('../../middleware/validateCreateCourse');

router.post('/', withAuth, validateCreateCourse, async (req, res) => {
  try {
    const { name, description } = req.body;

    await Course.create({
      course_name: name,
      course_description: description,
      teacher_id: req.session.teacher_id,
    });

    res.status(201).json({ message: 'Student created' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', message: error });
  }
});

module.exports = router;
