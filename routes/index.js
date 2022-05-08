const express = require("express");
const router = express.Router();

router.use("/", require("./application.js"));
router.use("/api/trails", require("./trails.js"));
router.use("/api/reviews", require("./reviews.js"));

router.all("*", (req, res) => {
  res.status(400).send();
});

module.exports = router;
