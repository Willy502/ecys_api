// Middleware
const { checkToken } = require('../middlewares/authentication');
// Controllers
const authenticationController = require('../controllers').authentication;
const userController = require('../controllers').user;
const postController = require('../controllers').post;
const courseController = require('../controllers').course;
const professorController = require('../controllers').professor;
const courseProfessorController = require('../controllers').courseProfessor;

module.exports = (app) => {
    
    // Authentication routes
    app.post('/api/user/register', authenticationController.register); // register
    app.post('/api/user/login', authenticationController.login); // Login

    // User routes
    app.get('/api/user', checkToken, userController.account); // Datos de mi cuenta
    app.put('/api/user', checkToken, userController.update); // Actualizar mi cuenta
    app.get('/api/user/:carnet', checkToken, userController.somebodysAccount); // Datos de la cuenta de X usuario
    app.post('/api/user/forgot-password', userController.forgotPassword); // Ha olvidado su contraseña
    app.put('/api/user/password', checkToken, userController.updatePassword); // Actualizar contraseña

    // Post routes
    app.get('/api/posts/:filter/:search?', checkToken, postController.retrievePosts); // Recuperar publicaciones filtrando
    app.post('/api/post', checkToken, postController.createPost); // Crear nueva publicación

    // Get necesary objects for posts
    app.get('/api/courses', checkToken, courseController.retrieveCourses); // Recuperar todos los cursos
    app.get('/api/professors', checkToken, professorController.retrieveProfessors); // Recuperar todos los cursos
    app.get('/api/course-professors', checkToken, courseProfessorController.retrieveCoursesProfessors); // Recuperar todos los cursos

}