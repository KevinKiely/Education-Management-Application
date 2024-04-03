const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    res.render('homepage');
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', message: error });
  }
});

module.exports = router;
