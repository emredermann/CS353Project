const config = require('config.json');
const jwt = require('jsonwebtoken');
const knex = require('../knex');

const ownerService = require('./owner.service');
  
module.exports = {
    getStudents,
    addStudent,
    removeStudent,
    //findStudent,
    updateStudent,
    getStudent,
    //hasLecture
}
async function getStudent(id){
    return knex.select('*').from('student').where('stu_code',id);
}
async function getStudents(){
    
    return knex.select('*').from('student');
        
}

async function addStudent(student){
    
    let value = true;
    knex.insert(student).into('student').then((addedStu)=>{
        if(!addedStu)
        {
            throw 'Cannot add this student'
        }
        ;}).catch(function(err){
            throw err;
                 
        })
        return value;
    
}

async function removeStudent(student_code){
    
    let value = true;
    knex('student').where('stu_code' ,student_code).del().then((removedStu)=> {
        if(!removedStu){
           throw 'Internal Server Error'
        }
        
    }).catch(function(err){
        throw err;
             
    })
    return true;
    
}
   
async function updateStudent(old_id,student){

    let check = knex('student').where('stu_code',old_id);
    if(!check.stu_id){throw 'Student not found';}

    knex('student').where('stu_code',old_id).update({
        stu_name: student.stu_name,
        stu_surname: student.stu_surname,
        stu_code: student.stu_code,
        stu_pass: student.stu_pass
        }).then(function(numberOfUpdatedRows) {
            if(numberOfUpdatedRows) {
                return true;
            }
            else{
                return false;
            }
        }).catch(function(err){
            throw err;
                 
        });      

        check = knex('register').where('student_code', old_id);
        if(!check.student_code){return;}

         knex('register').where('student_code', old_id).update({student_code:student.stu_code}).then(function(numberOfUpdatedRows) {
         if(numberOfUpdatedRows) {
            return true;
          }
         else{
             return false;
            }
     }).catch(function(err){
         throw err;
             
     }); 
    return true;
}

/*
async function findStudent(stu_id){
    return this.students.find(s => s.id == stu_id);
}




async function hasLecture(id,l_id){
    let test = false;
    let Astudent = this.students.find(s => s.id == id);

    for(let i = 0; i < Astudent.lectures.length;i++){
      if(Astudent.lectures[i].id == l_id){ test = true;}
    }
    return test;
}*/