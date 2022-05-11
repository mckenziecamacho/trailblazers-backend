const Trail = require("../models/Trail");

module.exports = {
  index: (req, res) => {
    Trail.find({})
      .populate("review")
      .then(trails => {
        res.json(trails);
      });
  }
};