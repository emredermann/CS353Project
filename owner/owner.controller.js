const express = require('express');
const router = express.Router();
const ownerService = require('./owner.service');
const registerService = require('./register-service');
// routes

router.post('/authenticate', authenticate);
router.put('/register',register);
router.get('/reviews/:id',getReviews);
router.get('/orders/:id',getOrderHistory);
router.get('/restaurant/:id',getOwnerRestaurants);
module.exports = router;


function authenticate(req, res, next) {
   
    ownerService.authenticate(req.body)
        .then(user => res.json(user))
        .catch(next);
}

function register(req,res,next){
    registerService.register(req.body).then(user => res.json(user))
    .catch(next);
}

function getReviews(req,res,next){
    ownerService.getReviews(req.params.id).then(user => res.json(user))
    .catch(next);
}

function getOrderHistory(req,res,next){
    ownerService.getOrderHistory(req.params.id).then(user => res.json(user))
    .catch(next);
}

function getOwnerRestaurants(req,res,next){
    ownerService.getOwnerRestaurants(req.params.id).then(user => res.json(user))
    .catch(next);
}