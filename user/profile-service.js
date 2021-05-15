const config = require('config.json');
const jwt = require('jsonwebtoken');
const knex = require('../knex');


module.exports={
    getUser,
    getStudent,
    getUserLectures,
    addLecture,
    removeLecture,
    
}



async function getUser(id){
   return knex('register').where('student_code',id)
   .join('student', function() {
    this.on(function() {
      this.on('register.student_code', '=', 'student.stu_code')
    })
  })
   .select('student.stu_code','student.stu_pass','student.stu_name','student.stu_surname','register.co_code','register.l_code');    
}

async function getStudent(id){
    knex('student').where('stu_code',id);
}

async function getUserLectures(id){
    return knex('register').where('student_code',id);
    
}

async function addLecture(lecture){
    knex.insert(lecture).into('register').then((addedStu)=>{
    if(!addedStu)
    {
        throw 'Cannot add this student'
     }
    ;}).catch(function(err){
        throw err;      
    })
    return true;
}

async function removeLecture(info){
    
    let fields = info.split('~');
    let tempCourse = fields[0];
    let tempStu = fields[1];

    let value = true;
   

    knex('register').where({
      co_code: tempCourse,
      student_code: tempStu,
      sem_code : 20211
    }).del().then((removecLec)=> {
        if(!removecLec){
            value = false;
            return false;
        }
        
    }).catch(function(err){
      throw err;
           
    });
    return value;
}