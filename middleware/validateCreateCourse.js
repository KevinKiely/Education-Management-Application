const validateCreateCourse = (req, res, next) => {
  const { courseName, courseDescription } = req.body;
  if (courseName.trim().length === 0 || courseDescription.trim().length === 0) {
    return res.status(400).json({ error: 'Bad Request', message: 'Please make sure to fill out all fields' });
  }
  next();
};

module.exports = validateCreateCourse;
