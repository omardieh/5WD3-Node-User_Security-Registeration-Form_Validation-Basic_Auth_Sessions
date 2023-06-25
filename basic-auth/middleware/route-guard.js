const isLoggedOut = (req, res, next) => {
  if (!req.session.currentUser) {
    return res.redirect("/login");
  }
  next();
};

const isLoggedIn = (req, res, next) => {
  if (req.session.currentUser) {
    return res.redirect("/users/profile");
  }
  next();
};

module.exports = {
  isLoggedIn,
  isLoggedOut,
};
