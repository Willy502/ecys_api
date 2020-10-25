// Models
const ApprovedCourse = require('../models').approved_course;
// Base Controller
let { onSuccess, onError } = require('./BaseController');
const { Op } = require('sequelize');

module.exports = {

    // Create post
    async createApprovedCourse(request, response) {

        let body = request.body;
        
        return await ApprovedCourse
        .create({
            pensum_id: body.pensum_id,
            user_carnet: request.user.carnet,
            nota_aprobada: body.nota_aprobada,
            created_at: Date.now(),
            updated_at: Date.now()
        })
        .then((result) => {
            
            delete result.dataValues.created_at;
            delete result.dataValues.updated_at;

            response.status(201).send(
                onSuccess({approved_course: result}, "Curso aprobado agregado exitosamente.", 201)
            );

        })
        .catch((error) => {
            response.status(500).send(
                onError(error, 'Falló la operación.', 500)
            );
        });

    },

}