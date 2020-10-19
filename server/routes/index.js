// Middleware
const { checkToken } = require('../middlewares/authentication');
// Controllers
const authenticationController = require('../controllers').authentication;
const userController = require('../controllers').user;

module.exports = (app) => {
    
    // Authentication routes
    app.post('/api/users/register', authenticationController.register); // register
    app.post('/api/users/login', authenticationController.login); // Login

    // User routes
    app.get('/api/user', checkToken, userController.account); // Datos de mi cuenta
    app.put('/api/user', checkToken, userController.update); // Actualizar mi cuenta


}