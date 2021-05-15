const express = require('express');
const router = express.Router();
const userService = require('./user.service');
const profileService = require('./profile-service');
const restaurantService = require('./restaurant-service');
const registerService = require('./register-service');

// routes

router.get('/table',getRestaurants);
router.post('/authenticate', authenticate);
router.get('/', getAll);
router.put('/register',register);
module.exports = router;

function getRestaurants(req,res,next){

    restaurantService.getRestaurants().then(users => res.json(users))
    .catch(next);
}

function authenticate(req, res, next) {
   
    userService.authenticate(req.body)
        .then(user => res.json(user))
        .catch(next);
}

function getAll(req, res, next) {
   
    userService.getAll()
        .then(users => res.json(users))
        .catch(next);
}

function register(req,res,next){
    
    registerService.register(req.body).then(user => res.json(user))
    .catch(next);
}