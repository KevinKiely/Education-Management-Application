const router = require('express').Router();
const withAuth = require('../middleware/withAuth');
const { Course, Student, StudentCourse, Teacher } = require('../models');

router.get('/', async (req, res) => {
  try {
    if (req.session.logged_in) {
      return res.redirect('/dashboard');
    }

    res.render('login', {
      pageTitle: 'login',
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', message: error });
  }
});

router.get('/signup', async (req, res) => {
  try {
    if (req.session.logged_in) {
      return res.redirect('/dashboard');
    }

    res.render('signup', {
      pageTitle: 'signup',
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', message: error });
  }
});

router.get('/dashboard', withAuth, (req, res) => {
  try {
    res.render('dashboard', {
      pageTitle: 'dashboard',
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
});

router.get('/courses', withAuth, async (req, res) => {
  try {
    const dbCoursesData = await Course.findAll({
      where: {
        teacher_id: req.session.teacher_id,
      },

      include: [
        { model: Teacher, attributes: ['id', 'name'] },
        { model: Student, through: StudentCourse },
      ],
    });

    const courses = dbCoursesData.map((course) => course.get({ plain: true }));

    res.render('subjects', {
      pageTitle: 'Subjects',
      courses,
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
});

router.get('/courses/create', withAuth, (req, res) => {
  try {
    res.render('create-course-form', {
      pageTitle: 'Add Course',
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    const dbTeacherData = await Teacher.findByPk(req.session.teacher_id, {
      attributes: ['name', 'id'],
      include: [{ model: Course, attributes: ['course_name'] }],
    });

    const profile = dbTeacherData.get({ plain: true });

    res.render('profile', {
      pageTitle: 'profile',
      profile,
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
});

module.exports = router;
