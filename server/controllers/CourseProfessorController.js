// Models
const CourseProfessor = require('../models').course_professor;
const Professor = require('../models').professor;
const Course = require('../models').course;
// Base Controller
let { onSuccess, onError } = require('./BaseController');
const { Op } = require('sequelize');

module.exports = {

     // Get courses
     async retrieveCoursesProfessors(request, response) {

        return await CourseProfessor
        .findAll({
            attributes: {
                exclude: [
                    'professorId', 'courseId', 'created_at', 'updated_at'
                ]
            },
            include: [{
                model: Professor,
                as: 'professor'
            }, {
                model: Course,
                as: 'course'
            }]
        })
        .then((result) => {
            if (result != null) {
                response.status(200).send(
                    onSuccess({Course_Professor: result}, "Cursos con catedrático recuperados exitosamente.", 200)
                );
            } else {
                response.status(404).send(
                    onError(result, "Cursos con catedrático no encontrados", 404)
                );
            }
        })
        .catch((error) => {
            response.status(500).send(
                onError(error, 'Falló la operación.', 500)
            );
        });

    }

}