const validateTeacherLoginInfo = (req, res, next) => {
  const { email, password } = req.body;
  if (email.trim().length === 0 || password.trim().length === 0) {
    return res.status(400).json({ error: 'Bad Request', message: 'Please make sure to fill out all fields' });
  }
  next();
};

module.exports = validateTeacherLoginInfo;
