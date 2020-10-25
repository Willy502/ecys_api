// Models
const User = require('../models').user;
const ApprovedCourse = require('../models').approved_course;
const Pensum = require('../models').pensum;
const Course = require('../models').course;
// Base Controller
let { onSuccess, onError } = require('./BaseController');
const { Op } = require('sequelize');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {

    // Retrieve my account
    async account(request, response) {

        return await User
        .findOne({
            where: {
                carnet: request.user.carnet
            },
            include: [{
                model: ApprovedCourse,
                attributes: ['nota_aprobada'],
                include: [{
                    model: Pensum,
                    as: 'pensum',
                    attributes: ['creditos', 'semestre'],
                    include: [{
                        model: Course,
                        as: 'course',
                        attributes: ['nombre']
                    }]
                }]
            }]
        })
        .then((result) => {

            delete result.dataValues.contrasenia;
             
            if (result != null) {

                var creditosTotales = 0;

                for (var c = 0; c < result.dataValues.approved_courses.length; c++) {
                    var approved = result.dataValues.approved_courses[c];

                    creditosTotales += approved.pensum.creditos;

                    var  approved_course = {
                        nota_aprobada: approved.nota_aprobada,
                        creditos: approved.pensum.creditos,
                        semestre: approved.pensum.semestre,
                        curso: approved.pensum.course.nombre
                    }
                    
                    result.dataValues.approved_courses[c].dataValues = approved_course;
                }

                result.dataValues.creditos = creditosTotales;

                response.status(200).send(
                    onSuccess({user: result}, "Cuenta recuperada exitosamente.", 200)
                );

            } else {

                response.status(401).send(
                    onError(result, "La cuenta no ha podido ser recuperada.", 401)
                );

            }

        })
        .catch((error) => {
            
            response.status(500).send(
                onError(error, "Falló la operación.", 500)
            );         //error => res.status(400).send(error)

        });
    },
    
    // Update user
    async update(request, response) {

        let body = request.body;

        return await User
        .update({
            nombres: body.nombres,
            apellidos: body.apellidos,
            correo: body.correo,
            updated_at: Date.now()
        }, {
            where: {
                carnet: request.user.carnet
            }, 
            returning: true,
            plain: true
        })
        .then((result) => {
            
            delete result[1].dataValues.created_at;
            delete result[1].dataValues.updated_at;
            delete result[1].dataValues.contrasenia;

            let token = jwt.sign({
                user: result[1]
            }, process.env.SEED);

            response.status(200).send(
                onSuccess({user: result[1], token}, "Cuenta actualizada exitosamente.", 200)
            );
        })
        .catch((error) => {
            response.status(500).send(
                onError(error, 'Falló la operación.', 500)
            ); 
        });
    },

    // Retrieve somebody's account
    async somebodysAccount(request, response) {

        return await User
        .findOne({
            where: {
                carnet: request.params.carnet
            },
            include: [{
                model: ApprovedCourse,
                attributes: ['nota_aprobada'],
                include: [{
                    model: Pensum,
                    as: 'pensum',
                    attributes: ['creditos', 'semestre'],
                    include: [{
                        model: Course,
                        as: 'course',
                        attributes: ['nombre']
                    }]
                }]
            }]
        })
        .then((result) => {
             
            delete result.dataValues.contrasenia;
             
            if (result != null) {

                var creditosTotales = 0;

                for (var c = 0; c < result.dataValues.approved_courses.length; c++) {
                    var approved = result.dataValues.approved_courses[c];
                    
                    creditosTotales += approved.pensum.creditos;

                    var  approved_course = {
                        nota_aprobada: approved.nota_aprobada,
                        creditos: approved.pensum.creditos,
                        semestre: approved.pensum.semestre,
                        curso: approved.pensum.course.nombre
                    }
                    
                    result.dataValues.approved_courses[c].dataValues = approved_course;
                }

                result.dataValues.creditos = creditosTotales;

                response.status(200).send(
                    onSuccess({user: result}, "Cuenta recuperada exitosamente.", 200)
                );

            } else {

                response.status(401).send(
                    onError(result, "La cuenta no ha podido ser recuperada.", 401)
                );

            }

        })
        .catch((error) => {
            
            response.status(500).send(
                onError(error, "Falló la operación.", 500)
            );

        });
    },

    // Get secure token to change password
    async forgotPassword(request, response) {
     
        let body = request.body;

        return await User
        .findOne({
            where: {
                [Op.and]: [
                    {
                        correo: body.correo
                    },
                    {
                        carnet: body.carnet
                    }
                ]
            }
        })
        .then((result) => {

            if (result != null) {

                delete result.dataValues.contrasenia;

                let token = jwt.sign({
                    user: result
                }, process.env.SEED);

                response.status(200).send(
                    onSuccess({token}, "Utiliza el token para cambiar de contraseña.", 200)
                );

            } else {
                response.status(401).send(
                    onError(result, "Los datos de usuario no han sido validados.", 401)
                );
            }

        })
        .catch((error) => {

            response.status(500).send(
                onError(error, "Falló la operación.", 500)
            );

        });

    },

    // Update password
    async updatePassword(request, response) {

        let body = request.body;
        var password = body.password != null ? bcrypt.hashSync(body.password, 10) : null;

        return await User
        .update({
            contrasenia: password,
            updated_at: Date.now()
        }, {
            where: {
                carnet: request.user.carnet
            }, 
            returning: true,
            plain: true
        })
        .then((result) => {
            
            delete result[1].dataValues.created_at;
            delete result[1].dataValues.updated_at;
            delete result[1].dataValues.contrasenia;

            response.status(200).send(
                onSuccess({user: result[1]}, "Contraseña actualizada exitosamente.", 200)
            );
        })
        .catch((error) => {
            response.status(500).send(
                onError(error, 'Falló la operación.', 500)
            ); 
        });
    },

};