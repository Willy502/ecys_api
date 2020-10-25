// Middleware
const { checkToken } = require('../middlewares/authentication');
// Controllers
const authenticationController = require('../controllers').authentication;
const userController = require('../controllers').user;
const postController = require('../controllers').post;
const courseController = require('../controllers').course;
const professorController = require('../controllers').professor;
const courseProfessorController = require('../controllers').courseProfessor;
const commentController = require('../controllers').comment;
const approvedCourseController = require('../controllers').approved;
const pensumController = require('../controllers').pensum;

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
    app.get('/api/post/:post_id', checkToken, postController.getPost); // Recuperar publicacion
    app.post('/api/post', checkToken, postController.createPost); // Crear nueva publicación

    // Get necesary objects for posts
    app.get('/api/courses', checkToken, courseController.retrieveCourses); // Recuperar todos los cursos
    app.get('/api/professors', checkToken, professorController.retrieveProfessors); // Recuperar todos los cursos
    app.get('/api/course-professors', checkToken, courseProfessorController.retrieveCoursesProfessors); // Recuperar todos los cursos

    // Comments
    app.post('/api/comment', checkToken, commentController.createComment); // Crear comentario

    // Approved course
    app.post('/api/approved-course', checkToken, approvedCourseController.createApprovedCourse); // Agregar curso aprobado

    // Pensum
    app.get('/api/pensum', checkToken, pensumController.pensum); // Recuperar los cursos del pensum
    app.get('/api/pensum/not-approved', checkToken, pensumController.pensumsNotCoursed); // Recuperar los cursos del pensum no cursados

}