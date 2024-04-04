const { Teacher } = require('../../models');
const router = require('express').Router();
const validateCreateTeacher = require('../../middleware/validateCreateTeacher');

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
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error', message: error });
  }
});

router.get('/', async (req, res) => {});

module.exports = router;
