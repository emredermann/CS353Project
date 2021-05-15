const config = require('config.json');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const { first } = require('../knex');

// users hardcoded for simplicity, store in a db for production applications
/*const users = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User', type:'student' },
{ id: 2, username: 'admin', password: 'admin', firstName: 'AdT', lastName: 'AdUser', type:'admin' }];*/

module.exports = {
    authenticate,
    getAll
};


async function authenticate({ username, password }) {
    
    let result = await knex('user').join('owner','OWNER_ID','=','USER_ID').where({USER_ID: username, PASSWORD: password}).then((user)=>{
        
        try{
            user[0].USER_ID;
        }
        catch{
        
            throw 'Invalid ID or Password';
        }
        const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '7d' });
    
        return {
                   
            ...omitPassword(user),
              token
         };
        ;}).catch(function(err){
            throw err;
                 
        })      
        
    return result;
    
}

async function getAll() {
    
  
    
}


// helper functions
function omitPassword(user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}