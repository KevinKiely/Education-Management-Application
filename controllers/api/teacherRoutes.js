const { Teacher } = require('../../models');
const router = require('express').Router();
const validateCreateTeacher = require('../../middleware/validateCreateTeacher');
const validateTeacherLoginInfo = require('../../middleware/validateTeacherLoginInfo');

router.post('/login', validateTeacherLoginInfo, async (req, res) => {
  try {
    const { email, password } = req.body;

    const dbTeacherData = await Teacher.findOne({ where: { email } });

    if (!dbTeacherData) {
      return res.status(400).json({ message: 'Bad Request', error: 'Incorrect email or password. Please try again' });
    }

    const validPassword = dbTeacherData.checkPassword(password);

    if (!validPassword) {
      return res.status(400).json({ message: 'Bad Request', error: 'Incorrect email or password. Please try again' });
    }

    const teacherObj = dbTeacherData.get({ plain: true });
    const exclude = ['password'];
    const teacher = {};
    for (let prop in teacherObj) {
      if (!exclude.includes(prop)) {
        teacher[prop] = teacherObj[prop];
      }
    }

    req.session.save(() => {
      req.session.user_id = dbTeacherData.id;
      req.session.logged_in = true;
      req.session.name = dbTeacherData.name;
      res.status(200).json({ message: 'success', data: teacher });
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', message: error });
  }
});

router.post('/', validateCreateTeacher, async (req, res) => {
  try {
    const existingTeacher = await Teacher.findOne({
      where: { email: req.body.email },
    });

    if (existingTeacher !== null) {
      return res.status(400).json({ error: 'Bad Request', message: 'That email is already taken' });
    }

    const dbTeacherData = await Teacher.create(req.body);

    req.session.save(() => {
      req.session.user_id = dbTeacherData.id;
      req.session.logged_in = true;
      req.session.name = dbTeacherData.name;
      res.status(201).json({ message: 'Teacher created', data: {} });
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', message: error });
  }
});


router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
