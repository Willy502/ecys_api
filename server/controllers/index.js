const authentication = require('./AuthenticationController');
const user = require('./UserController');
const post = require('./PostController');
const course = require('./CourseController');

module.exports = {
    authentication,
    user,
    post,
    course
};