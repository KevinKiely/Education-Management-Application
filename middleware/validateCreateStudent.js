const validateCreateStudent = (req, res, next) => {
  const { courseId, name, gradeLevel, grade } = req.body;
  if (name.trim().length === 0 || !gradeLevel || !courseId || !grade) {
    return res.status(400).json({ error: 'Bad Request', message: 'Please make sure to fill out all fields' });
  }
  next();
};

module.exports = validateCreateStudent;
