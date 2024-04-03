const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      pageTitle: 'Home',
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', message: error });
  }
});

router.get('/login', (req, res) => {
  try {
    res.render('login', {
      pageTitle: 'Login',
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
      pageTitle: 'Profile',
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
});

module.exports = router;
