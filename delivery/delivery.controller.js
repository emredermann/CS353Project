const express = require('express');
const router = express.Router();
const deliveryService = require('./delivery.service');
const registerService = require('./register-service');
// routes

router.post('/authenticate', authenticate);
router.put('/register',register);
router.get('/orders/new/:id',getNewDeliveryOrders);
router.get('/orders/old/:id',getOldDeliveryOrders);
router.get('/orders/:id',getOrderDetails);
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

function getNewDeliveryOrders(req,res,next){
    
    deliveryService.getNewDeliveryOrders(req.params.id).then(user => res.json(user))
    .catch(next);
}

function getOldDeliveryOrders(req,res,next){
    
    deliveryService.getOldDeliveryOrders(req.params.id).then(user => res.json(user))
    .catch(next);
}
function getOrderDetails(req,res,next){
    deliveryService.getOrderDetails(req.params.id).then(user => res.json(user))
    .catch(next);
}