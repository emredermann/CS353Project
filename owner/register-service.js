const config = require('config.json');
const jwt = require('jsonwebtoken');
const knex = require('../knex');


module.exports={
    register
   }

async function register({Ausername, Apassword, Aphone,Arestname,Aregion }){
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
  
    result = await knex('owner').insert({OWNER_ID:maxID}).catch(err=>{
        
        throw "Internal Server Error";});
        
    if(result === "Internal Server Error"){
       
           return result;
    }
    
    let restID = await knex('restaurant').select('RESTAURANT_ID').max('RESTAURANT_ID',{as:'maxRes'}).then((user)=>{
        try{
            return  user[0].maxRes;
        }
        catch{
            
           return 0;
        } 
        
    });
    restID= restID + 1;

    
    result = await knex('restaurant').insert({OWNER_ID:maxID,REGION_NAME:Aregion,RESTAURANT_ID:restID, RESTAURANTNAME: Arestname,}).catch(err=>{
        
        throw "Internal Server Error";});
        
    if(result === "Internal Server Error"){
        
           return result;
    }
    
    return maxID;
}


