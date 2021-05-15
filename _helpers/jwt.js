const expressJwt = require('express-jwt');
const config = require('config.json');

module.exports = jwt;

function jwt() {
    const { secret } = config;
    return expressJwt({ secret, algorithms: ['HS256'] }).unless({
        path: [
            // public routes that don't require authentication
            '/login',
            '/user/table',
            '/user/authenticate',
            '/delivery/authenticate',
            '/owner/authenticate',
            '/user/register',
            '/delivery/register',
            '/owner/register'
        ]
    });
}
