const Trail = require('../../models/Trail');
const Review = require('../../models/Review');
const trailRawData = require('../data/trailRaw.json');
const reviewRawData = require('../data/reviewRaw.json');

Trail.find({})
    .then(trails => {
        console.log(trails)
        trails.forEach(trail => {
            let trailJSON = trailRawData.find(trailJSON => trailJSON.name === trail.name)
            Review.findOne({title: trailJSON.review})
                .then(review => {
                    trail.review = review._id
                    trail.save()
                })
        })
    })