const express = require("express");
const router = express.Router();

router.get("/profile", (req, res, next) => {
  res.render("users/user-profile", { userInSession: req.session.currentUser });
});

module.exports = router;
