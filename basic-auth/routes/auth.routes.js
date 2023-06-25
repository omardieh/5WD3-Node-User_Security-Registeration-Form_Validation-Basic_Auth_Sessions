const express = require("express");
const router = express.Router();
const bcryptjs = require("bcryptjs");
const User = require("../models/User.model");

const saltRounds = 10;

// root route : "/signup"
router.get("/", (req, res, next) => {
  res.render("auth/signup");
});
router.post("/", (req, res, next) => {
  console.log("The form data: ", req.body);
  const { username, email, password } = req.body;
  bcryptjs
    .genSalt(saltRounds)
    .then((salt) => {
      console.log("Salt: ", salt);
      return bcryptjs.hash(password, salt);
    })
    .then((hashed) => {
      return User.create({
        username,
        email,
        passwordHash: hashed,
      });
    })
    .then((userFromDb) => res.redirect("/users/profile"))
    .catch((err) => console.log(err));
});

module.exports = router;
