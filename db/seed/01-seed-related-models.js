const Trail = require('../../models/Trail');
const Review = require('../../models/Review');
const trailRawData = require('../data/trailRaw.json');
const reviewRawData = require('../data/reviewRaw.json');

Trail.find({})
    .then(trails => {
        console.log(trails)
        trails.forEach(trail => {
            let trailJSON = trailRawData.find(trailJSON => trailJSON.name === trail.name)
            Review.findEach({title: trailJSON.review})
            let reviewJSON = reviewRawData.find(reviewJSON => reviewJSON.name === review.name)
                .then(reviews => {
                    trail.reviews = [(reviews._id, reviews.title,reviews.rating,reviews.body,reviews.author,rev_code)]
                    trail.save()
                })
        })
    })