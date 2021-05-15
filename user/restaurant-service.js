const config = require('config.json');
const jwt = require('jsonwebtoken');
const knex = require('../knex');


module.exports={
    getRestaurants,
    getRestaurant
}

async function getRestaurants(){
    return knex('restaurant');
}

async function getRestaurant(id){
    return knex('restaurant').joinRaw('owner').where({OWNER_ID: id});
}
