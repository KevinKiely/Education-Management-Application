const router = require('express').Router();
const teacherRoutes = require('./teacherRoutes');
const courseRoutes = require('./courseRoutes');
const studentRoutes = require('./studentRoutes');

router.use('/teachers', teacherRoutes);
router.use('/courses', courseRoutes);
router.use('/students', studentRoutes);

module.exports = router;
