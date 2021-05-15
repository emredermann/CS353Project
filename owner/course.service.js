const config = require('config.json');
const jwt = require('jsonwebtoken');
const knex = require('../knex');

module.exports = {
    getCourses,
    addCourse,
    updateCourse,
    removeCourse,
}

async function getCourses(){
   
    return knex.select('*').from('course');
}

async function addCourse(course){

    let value = true;
    knex.insert(course).into('course').then((addedC)=>{
        if(!addedC)
        {
            throw 'Cannot add this course'
        }
        ;}).catch((err)=>{
            throw err;
        })
    return value;

}


async function removeCourse(c_code){
    
    let value = true;
    knex('course').where('course_code' ,c_code).del().then((removedCou)=> {
        if(!removedCou){
           throw 'Internal Server Error'
        }
        
    });
    return value;
    
}
   
async function updateCourse(old_id,course){
    var value = true;
    knex.select('*').from('course').where('course_code',old_id).update({
        course_code: course.course_code,
        course_name:course.course_name,
        ismandatory: course.ismandatory
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

    let test = knex.select('*').from('lecture').where('c_code',old_id)
    if(test){
    knex('lecture').where('c_code',old_id).update({
        c_code: course.course_code
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
                     
    });  }
        
    return value;
}