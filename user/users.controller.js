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
router.get('/:id',getUser);
router.get('/menu/:id', getRestaurantMenu); 
router.get('/item/:id',getItemOptions);     
router.get('/combos/:id',getUserCombos);
router.get('/combo/:id',getCombo);
router.delete('/combo/rem/:id',removeCombo);
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
    
    userService.getRestaurantMenu(req.params.id).then(user => res.json(user))
    .catch(next);
}
function getItemOptions(req,res,next){
    userService.getItemOptions(req.params.id).then(user => res.json(user))
    .catch(next);
}

function getUserCombos(req,res,next){
    userService.getUserCombos(req.params.id).then(user => res.json(user))
    .catch(next);
}
function getCombo(req,res,next){
    userService.getCombo(req.params.id).then(user => res.json(user))
    .catch(next);
}
function removeCombo(req,res,next){
    console.log("aaa");
    userService.removeCombo(req.params.id).then(user => res.json(user))
    .catch(next);
}