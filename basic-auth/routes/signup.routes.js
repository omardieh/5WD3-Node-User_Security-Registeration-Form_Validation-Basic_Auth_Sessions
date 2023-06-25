const express = require("express");
const router = express.Router();
const bcryptjs = require("bcryptjs");
const mongoose = require("mongoose");
const { isLoggedIn } = require("../middleware/route-guard.js");

const User = require("../models/User.model");

const saltRounds = 10;

// root route : "/signup"
router.get("/", isLoggedIn, (req, res, next) => {
  res.render("auth/signup");
});

router.post("/", (req, res, next) => {
  // console.log("The form data: ", req.body);
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.render("auth/signup", {
      errorMessage:
        "All fields are mandatory. Please provide your username, email and password.",
    });
    return;
  }

  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!regex.test(password)) {
    res.status(500).render("auth/signup", {
      errorMessage:
        "Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter.",
    });
    return;
  }

  bcryptjs
    .genSalt(saltRounds)
    .then((salt) => {
      // console.log("Salt: ", salt);
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
    .catch((error) => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.status(500).render("auth/signup", { errorMessage: error.message });
      } else if (error.code === 11000) {
        res.status(500).render("auth/signup", {
          errorMessage: "Either username or email is already used.",
        });
      } else {
        next(error);
      }
    });
});

module.exports = router;
