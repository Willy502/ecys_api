// Models
const Course = require('../models').course;
const ApprovedCourse = require('../models').approved_course;
const Pensum = require('../models').pensum;
// Base Controller
let { onSuccess, onError } = require('./BaseController');
const { Op } = require('sequelize');

module.exports = {


    // Retrieve pensums
    async pensum(request, response) {

        return await Pensum
        .findAll({
            attributes: ['creditos', 'semestre'],
                include: [{
                    model: Course,
                    as: 'course',
                    attributes: ['nombre']
            }]
        })
        .then((result) => {
             
            if (result != null) {

                response.status(200).send(
                    onSuccess({pensums: result}, "Pensums recuperados exitosamente.", 200)
                );

            } else {

                response.status(401).send(
                    onError(result, "Los pensums no han podido ser recuperados.", 401)
                );

            }

        })
        .catch((error) => {
            
            response.status(500).send(
                onError(error, "Falló la operación.", 500)
            );         //error => res.status(400).send(error)

        });
    },

    // Retrieve courses not approved
    async pensumsNotCoursed(request, response) {

        return await Pensum
        .findAll({
            attributes: ['creditos', 'semestre'],
                include: [{
                    model: Course,
                    as: 'course',
                    attributes: ['nombre']
            }, {
                model: ApprovedCourse,
                where: {
                    user_carnet: request.user.carnet
                },
                required: false
            }]
        })
        .then((result) => {
             
            if (result != null) {

                for (var i = 0; i < result.length; i++) {

                    if (result[i].dataValues.approved_courses.length != 0) {
                        delete result[i];
                    } else {
                        delete result[i].dataValues.approved_courses;
                    }
    
                }
                
                result = result.filter(function(x) {return x !== null});

                response.status(200).send(
                    onSuccess({pensums: result}, "Pensums recuperados exitosamente.", 200)
                );

            } else {

                response.status(401).send(
                    onError(result, "Los pensums no han podido ser recuperados.", 401)
                );

            }

        })
        .catch((error) => {
            
            response.status(500).send(
                onError(error, "Falló la operación.", 500)
            );         //error => res.status(400).send(error)

        });

    }

}