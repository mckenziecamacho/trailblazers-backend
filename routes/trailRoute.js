const express = require("express");
const router = express.Router();
const trailsController = require("../controllers/trails");

router.get("/", trailsController.index);

module.exports = router;