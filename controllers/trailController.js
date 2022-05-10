//controllers/trailController.js
//control is what we use to serve up our data from our db
// require the Express module
const express = require('express');
const res = require('express/lib/response');
const { findOneAndUpdate } = require('../models/Trail');
// instantiate a router -- this will hold all the logic
// for the URLs + methods for this resource
const router = express.Router();
// import the Trail model
const Trail = require('../models/Trail');

router.get('/', (req, res, next) =>{
    Trail.find({})
        .then((trails) => res.json(trails))
        .catch(next)
})

router.get('/:id', async (req, res, next) =>{
    try{
        const trail = await Trail.findById(req.params.id).populate('owner');
        res.json(trail)
        
    } catch(error){
        next(error);
    }
})