const express = require('express');
const router = express.Router();
const ownerService = require('./owner.service');
const registerService = require('./register-service');
// routes

router.post('/authenticate', authenticate);
//router.get('/', getAll);
router.put('/register',register);
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