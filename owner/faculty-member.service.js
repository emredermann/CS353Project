const config = require('config.json');
const jwt = require('jsonwebtoken');
const knex = require('../knex');

  
    
module.exports = {
    getMembers,
    addMember,
    updateMember,
    removeMember,

}
async function getMembers(){
    
    return knex.select('*').from('academics').whereNot('aca_code',1);
        
}

async function addMember(member){
    let value = true;
    knex.insert(member).into('academics').then((addedM)=>{
        if(!addedM)
        {
            throw 'Internal Server Error'
        }
        ;})
    return value;
}

async function updateMember(old_id,member){
    var value = true;
    knex('academics').where('aca_code',old_id).update({
        aca_code: member.aca_code,
        aca_name: member.aca_name,
        aca_surname: member.aca_surname,
        email: member.email,
        startdate: member.startdate
        }).then(function(numberOfUpdatedRows) {
            if(numberOfUpdatedRows) {
                
                value = true;
                return true;
            }
            else if(numberOfUpdatedRows == 0) {
                return false;
            }
            else {throw 'Internal Error'};
        }).catch(function(err){
            throw err;
                   
        }); 
        
        let test = knex.select('*').from('lecture').where('a_code',old_id);
        if(!test){return true;}

        knex('lecture').where('a_code',old_id).update({
        a_code: member.aca_code
        }).then(function(numberOfUpdatedRows) {
            if(numberOfUpdatedRows) {
                
                value = true;
                return true;
            }
            else{
                
                return false;
            }
        }).catch(function(err){
            throw err;        
        }); 
        return value;
}

async function removeMember(member_id){
    let value = true;
    knex('academics').where('aca_code',member_id).del().then((removedMem)=> {
        if(!removedMem){
           throw 'Internal Server Error'
        } 
    });
    return value;
}