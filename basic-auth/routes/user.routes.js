const express = require("express");
const router = express.Router();
const { isLoggedOut } = require("../middleware/route-guard.js");

router.get("/profile", isLoggedOut, (req, res, next) => {
  res.render("users/user-profile", { userInSession: req.session.currentUser });
});

module.exports = router;
