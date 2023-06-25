const express = require("express");
const router = express.Router();

// root route : "/users"
router.get("/profile", (req, res, next) => {
  res.render("users/user-profile");
});

module.exports = router;
