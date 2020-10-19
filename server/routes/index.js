// Middleware
const { checkToken } = require('../middlewares/authentication');
// Controllers
const authenticationController = require('../controllers').authentication;
const userController = require('../controllers').user;
const postController = require('../controllers').post; 

module.exports = (app) => {
    
    // Authentication routes
    app.post('/api/user/register', authenticationController.register); // register
    app.post('/api/user/login', authenticationController.login); // Login

    // User routes
    app.get('/api/user', checkToken, userController.account); // Datos de mi cuenta
    app.put('/api/user', checkToken, userController.update); // Actualizar mi cuenta
    app.get('/api/user/:carnet', checkToken, userController.somebodysAccount); // Datos de la cuenta de X usuario
    app.post('/api/user/forgot-password', userController.forgotPassword); // Ha olvidado su contraseña

    // Post routes
    app.get('/api/posts/:filter/:search', checkToken, postController.retrievePosts); // Retrieve posts with filters
}