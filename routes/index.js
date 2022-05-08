const express = require("express");
const router = express.Router();

router.use("/", require("./application.js"));
router.use("/api/trail", require("./trail.js"));
router.use("/api/review", require("./review.js"));

router.all("*", (req, res) => {
  res.status(400).send();
});

module.exports = router;
