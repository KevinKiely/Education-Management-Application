const router = require('express').Router();
const withAuth = require('../middleware/withAuth');

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

router.get('/courses', withAuth, (req, res) => {
  try {
    res.render('subjects', {
      pageTitle: 'Subjects',
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
});

router.get('/profile', withAuth, (req, res) => {
  try {
    res.render('profile', {
      pageTitle: 'profile',
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
});

module.exports = router;
