const express = require("express");
const router = express.Router();

router.post("/", (req, res, next) => {
  req.session.destroy((err) => {
    if (err) next(err);
    res.redirect("/login");
  });
});

module.exports = router;
