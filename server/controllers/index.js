const authentication = require('./AuthenticationController');
const user = require('./UserController');
const post = require('./PostController');
const course = require('./CourseController');
const professor = require('./ProfessorController');
const courseProfessor = require('./CourseProfessorController');
const comment = require('./CommentController');

module.exports = {
    authentication,
    user,
    post,
    course,
    professor,
    courseProfessor,
    comment
};