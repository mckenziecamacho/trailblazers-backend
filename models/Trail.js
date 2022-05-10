const mongoose = require("../db/connection");

const trailSchema = new mongoose.Schema(
    {
        name: String,
        location: String,
        image: String,
        difficulty: String,
        miles: Number,
        terrain: String,
        duration: String,
        overview: String,
        website: String,
        review: [{
            type: mongoose.Schema.Types.ObjectId,
            text: String,
            ref: 'Review'
        }]
    })

const Trail = mongoose.model("Trail",trailSchema);
module.exports = Trail
