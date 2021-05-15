const config = require('config.json');
const jwt = require('jsonwebtoken');
const knex = require('../knex');

module.exports = {
    getClassrooms,
    addClassroom,
    updateClassroom,
    removeClassroom,
}

async function getClassrooms(){
    return knex.select('*').from('classroom').whereNot('class_code', 'N/A');
}

async function addClassroom(classroom){

    let value = true;
    knex.insert(classroom).into('classroom').then((addedCl)=>{
        if(!addedCl)
        {
            throw 'Internal Server Error'
        }
        ;})
    return value;
}


async function updateClassroom(old_id,classroom){

    var value = true;
    knex('classroom').where('class_code',old_id).update({
        class_code: classroom.class_code,
        class_name:classroom.class_name,
        type: classroom.type,
        parentcode: classroom.parentcode
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

    let t = knex('classroom').where('parentcode',old_id);
    if(t){
    knex('classroom').where('parentcode',old_id).update({            
        parentcode: classroom.parentcode
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
    });}
    
    let test = knex('lecture').where('class_no',old_id);

    if(test){
    knex('lecture').where('class_no',old_id).update({
        class_no: classroom.class_code
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
    }); }
    return true;
}

async function removeClassroom(cl_id){
    let value = true;
    knex('classroom').where('class_code' ,cl_id).del().then((removedCl)=> {
        if(!removedCl){
           throw 'Internal Server Error'
        }
        
    });
    return value;
}