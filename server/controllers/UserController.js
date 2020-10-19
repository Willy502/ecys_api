// Models
const User = require('../models').user;
// Base Controller
let { onSuccess, onError } = require('./BaseController');
const { Op } = require('sequelize');
const jwt = require('jsonwebtoken');

module.exports = {

    // Retrieve my account
    async account(request, response) {

        return await User
        .findOne({
            where: {
                id: request.user.carnet
            }
        })
        .then((result) => {

            delete result.dataValues.contrasenia;
             
            if (result != null) {

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
            }
        })
        .then((result) => {
             
            delete result.dataValues.contrasenia;
             
            if (result != null) {

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
                    onSuccess({user: result, token}, "Utiliza el token para cambiar de contraseña.", 200)
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

        return await User
        .update({
            contrasenia: body.nombres,
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