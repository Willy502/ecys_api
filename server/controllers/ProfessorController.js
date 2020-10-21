// Models
const Professor = require('../models').professor;
// Base Controller
let { onSuccess, onError } = require('./BaseController');
const { Op } = require('sequelize');

module.exports = {

    // Get courses
    async retrieveProfessors(request, response) {

        return await Professor
        .findAll()
        .then((result) => {
            if (result != null) {
                response.status(200).send(
                    onSuccess({professors: result}, "Profesores recuperados exitosamente.", 200)
                );
            } else {
                response.status(404).send(
                    onError(result, "Profesores no encontrados", 404)
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