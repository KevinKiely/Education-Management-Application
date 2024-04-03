const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    res.render('homepage');
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', message: error });
  }
});

router.get('/login', (req, res) => {
  try {
    if (req.session.logged_in) {
      return res.redirect('/');
    }
    res.render('login');
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
});

module.exports = router;
