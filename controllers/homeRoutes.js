const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    res.render('login', {
      pageTitle: 'login',
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', message: error });
  }
});

router.get('/dashboard', (req, res) => {
  try {
    res.render('dashboard', {
      pageTitle: 'dashboard',
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
});

router.get('/subjects', (req, res) => {
  try {
    res.render('subjects', {
      pageTitle: 'Subjects',
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
});

router.get('/profile', (req, res) => {
  try {
    res.render('profile', {
      pageTitle: 'profile',
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
});

module.exports = router;
