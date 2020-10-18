// Middleware
const { checkToken } = require('../middlewares/authentication');
// Controllers
const authenticationController = require('../controllers').authentication;

module.exports = (app) => {
    
    // Authentication routes
    app.post('/api/users/register', authenticationController.register); // register
    app.post('/api/users/login', authenticationController.login); // Login

}