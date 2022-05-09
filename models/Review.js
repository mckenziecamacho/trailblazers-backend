const mongoose = require("../db/connection");

const reviewSchema = new mongoose.Schema (
    {
        title: String,   
        rating: String,
        body: String,
        author: String
    });

const Review = mongoose.model("Review", reviewSchema)

module.exports = Review;