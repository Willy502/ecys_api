// Models
const Course = require('../models').course;
// Base Controller
let { onSuccess, onError } = require('./BaseController');
const { Op } = require('sequelize');

module.exports = {

    // Get courses
    async retrieveCourses(request, response) {

        return await Course
        .findAll()
        .then((result) => {
            if (result != null) {
                response.status(200).send(
                    onSuccess({courses: result}, "Cursos recuperados exitosamente.", 200)
                );
            } else {
                response.status(404).send(
                    onError(result, "Cursos no encontrados", 404)
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