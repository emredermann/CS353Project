const config = require('config.json');
const jwt = require('jsonwebtoken');
const knex = require('../knex');


module.exports={
    register
   }

async function register({Ausername, Apassword, Aphone }){
    let maxID = await knex('user').select('USER_ID').max('USER_ID',{as:'max'}).then((user)=>{
        try{

            return  user[0].max;
        }
        catch{
        console.log('here2');
           return 0;
        } 
        
    });
    maxID= maxID + 1;
    let result = await knex('user').insert({ USER_ID:maxID,NAME:Ausername, PHONE:Aphone, PASSWORD:Apassword}).catch(err=>{
        console.log('here3');
        throw "Internal Server Error";});
    if(result === "Internal Server Error"){
        return result;
    }

    result = await knex('delivery_guy').insert({DELIVERY_GUY_ID: maxID, isAVAILABLE:false}).catch(err=>{
        console.log('here1');
        throw "Internal Server Error";});
        
    if(result === "Internal Server Error"){
           return result;
    }
    return maxID;
}

