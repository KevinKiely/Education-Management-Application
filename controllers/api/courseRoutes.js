const { Course } = require('../../models');
const router = require('express').Router();
const withAuth = require('../../middleware/withAuth');
//const validateCreateCourse = require('../../middleware/validateCreateCourse');

router.post('/', withAuth, async (req, res) => {
  try {
    console.log(req.body);
    //    await Course.create({
    //      course_name: req.body.courseName,
    //      course_description: req.body.courseDescription,
    //      teacher_id: req.session.teacher_id,
    //    });
    //
    res.status(201).json({ message: 'Course created' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', message: error });
  }
});

module.exports = router;
