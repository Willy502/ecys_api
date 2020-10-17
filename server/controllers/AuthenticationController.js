// Models
const User = require('../models').user;
// Base Controller
let { onSuccess, onError } = require('./BaseController');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const jwt = require('jsonwebtoken');

module.exports = {
    
    // Register method
    async register(request, response) {

        let body = request.body;
        
        var password = body.password != null ? bcrypt.hashSync(body.password, 10) : null;
        
        return await User
        .create({
            carnet: body.carnet,
            nombres: body.nombres,
            apellidos: body.apellidos,
            contrasenia: password,
            correo: body.correo,
            created_at: Date.now(),
            updated_at: Date.now()
        })
        .then((result) => {
            
            delete result.dataValues.contrasenia;
            delete result.dataValues.created_at;
            delete result.dataValues.updated_at;

            let token = jwt.sign({
                user: result
            }, process.env.SEED);

            response.status(201).send(
                onSuccess({user: result, token}, "Cuenta creada exitosamente.", 201)
            );

        })
        .catch((error) => {
            response.status(500).send(
                onError(error, "Operación fallida.", 500)
            );
        });

    }

};