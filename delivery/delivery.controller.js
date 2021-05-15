const express = require('express');
const router = express.Router();
const deliveryService = require('./delivery.service');
const registerService = require('./register-service');
// routes

router.post('/authenticate', authenticate);
router.put('/register',register);

module.exports = router;


function authenticate(req, res, next) {
   
    deliveryService.authenticate(req.body)
        .then(user => res.json(user))
        .catch(next);
}

function register(req,res,next){
    registerService.register(req.body).then(user => res.json(user))
    .catch(next);
}