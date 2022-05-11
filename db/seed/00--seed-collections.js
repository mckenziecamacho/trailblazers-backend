const Trail = require('../../models/Trail');
const Review = require('../../models/Review');
const trailRawData = require('../data/trailRaw.json');
const reviewRawData = require('../data/reviewRaw.json');

const trailInfo = trailRawData.map(trailRawItem => {
    const newTrail = {}
    newTrail.name = trailRawItem.name
    newTrail.location = trailRawItem.location
    newTrail.image = trailRawItem.image
    newTrail.difficulty = trailRawItem.difficulty
    newTrail.miles = trailRawItem.miles
    newTrail.terrain = trailRawItem.terrain
    newTrail.duration = trailRawItem.duration
    newTrail.overview = trailRawItem.overview
    newTrail.website = trailRawItem.website
    return newTrail;
})

Trail.deleteMany({})
    .then(() => {
        Trail.create(trailInfo)
        .then(trails =>{
            console.log(trails)
        })
        .catch(error =>{
            console.log (error)
        })
    })
    const reviewInfo = reviewRawData.map(reviewRawItem => {
        const newReview = {}
        newReview.title = reviewRawItem.title
        newReview.rating = reviewRawItem.rating
        newReview.body = reviewRawItem.body
        newReview.author = reviewRawItem.author
        return newReview;

<<<<<<< HEAD
=======
const reviewInfo = reviewRawData.map(reviewRawItem => {
    const newReview = {}
    newReview.title = reviewRawItem.title
    newReview.rating = reviewRawItem.rating
    newReview.body = reviewRawItem.body
    newReview.author = reviewRawItem.author
    return newReview;
>>>>>>> a5d491ff08893091e5f160ef683cab27790b3498
})

Review.deleteMany({})
    .then(() => {
        Review.create(reviewInfo)
        .then(reviews => {
            console.log(reviews)
        })
        .catch(error =>{
            console.log(err)
        })
}   )
