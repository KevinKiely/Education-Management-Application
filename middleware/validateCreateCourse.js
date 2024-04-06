const validateCreateCourse = (req, res, next) => {
  const { name, description } = req.body;
  if (name.trim().length === 0 || description.trim().length === 0) {
    return res.status(400).json({ error: 'Bad Request', message: 'Please make sure to fill out all fields' });
  }
  next();
};

module.exports = validateCreateCourse;
