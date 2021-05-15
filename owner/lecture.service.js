const config = require('config.json');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
  

module.exports = {
    getLectures,
    addLecture,
    updateLecture,
    removeLecture,
   
}
async function getLectures(){
  

  return knex('lecture')
    .join('academics','lecture.a_code', '=', 'academics.aca_code')
    .join('classroom', 'lecture.class_no', '=', 'classroom.class_code')
    .select('lecture.lec_code', 'lecture.c_code','lecture.day','lecture.hour','academics.aca_name','academics.aca_surname',
      'classroom.class_name','classroom.parentcode');        
}

async function addLecture(lecture){
  console.log("add Lecture çalıştı");
  let value = true;
  if(!lecture.a_code){lecture.a_code = 1};
  if(!lecture.class_no || lecture.class_no == ""){lecture.class_no = "N/A"};
  
  knex.insert(lecture).into('lecture').then((addedLec)=>{
    if(!addedLec)
    {
        throw 'Invalid information';
    }
    ;})
    return value;
}

async function updateLecture(old_id,lecture){

  let fields = old_id.split('~');
  let tempCode = fields[0];
  let tempCourse = fields[1];

  let tempClass = knex.select('class_code').from('classroom').where({
    class_name:  lecture.class_name,
    parentcode: lecture.parentcode});
  let tempAcademic = knex.select('aca_code').from('academics').where({
    aca_name: lecture.aca_name,
    aca_surname: lecture.aca_surname
  })
  

  if(!tempClass || !tempAcademic){
    
    throw 'Invalid Classroom or Faculty Member'} 

 

  knex('lecture').where({
    c_code: tempCourse,
    lec_code: tempCode
  }).update({
    lec_code: lecture.lec_code,
    c_code: lecture.c_code,
    day: lecture.day,
    hour: lecture.hour,
    a_code: tempAcademic,
    class_no: tempClass
    }).then(function(numberOfUpdatedRows) {
        if(numberOfUpdatedRows) {
          return true;
        }
        else{
            throw 'Internal Error'
        }
    }).catch(function(err){
      

      throw err;
           
   }); 

   

   let test = knex.select('*').from('register').where({
     co_code: tempCourse,
     l_code: tempCode
   })
   
   
   if(test!= undefined){
     
    knex('register').where({
      co_code: tempCourse,
      l_code: tempCode
    }).update({
      co_code: lecture.c_code,
      l_code: lecture.lec_code
      }).then(function(numberOfUpdatedRows) {
          if(numberOfUpdatedRows) {
            return true;
          }
          else if (numberOfUpdatedRows == 0) {
            return;       
          }
          else { throw 'internal error'}
      }).catch(function(err){
        
        throw err;
             
     }); 
   }
   
  

    return true;
}

async function removeLecture(lc){
  
  let fields = lc.split('~');
  let tempCode = fields[0];
  let tempCourse = fields[1];

  
  let value = true;
  knex('lecture').where({
    lec_code: tempCode,
    c_code: tempCourse
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