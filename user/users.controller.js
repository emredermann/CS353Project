const express = require('express');
const router = express.Router();
const userService = require('./user.service');
const profileService = require('./profile-service');
const restaurantService = require('./restaurant-service');
const registerService = require('./register-service');

// routes

router.get('/table',getRestaurants);
router.post('/authenticate', authenticate);
router.put('/register',register);
router.get('/users/:id',getUser);
router.get('/menu/:id', getRestaurantMenu); 
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
function register(req,res,next){
    
    registerService.register(req.body).then(user => res.json(user))
    .catch(next);
}

function getUser(req,res,next){
    userService.getUser(req.params.id).then(user => res.json(user))
    .catch(next);
}
function getRestaurantMenu(req,res,next){
    console.log("Here");
    userService.getRestaurantMenu(req.params.id).then(user => res.json(user))
    .catch(next);
}