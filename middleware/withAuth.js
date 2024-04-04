const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    return res.redirect('/');
  } else {
    next();
  }
};

module.exports = withAuth;
