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
        
           return 0;
        } 
        
    });
    maxID= maxID + 1;
    let result = await knex('user').insert({NAME:Ausername, USER_ID:maxID, PHONE:Aphone, PASSWORD:Apassword}).catch(err=>{
        throw "Internal Server Error";});
    if(result === "Internal Server Error"){
        return result;
    }

    result = await knex('delvery_guy').insert({DELIVERY_GUY_ID:maxID,IS_AVAILABLE:false}).catch(err=>{
        throw "Internal Server Error";});
        
    if(result === "Internal Server Error"){
           return result;
    }
    return maxID;
}


