// Models
const Comment = require('../models').comment;
// Base Controller
let { onSuccess, onError } = require('./BaseController');
const { Op } = require('sequelize');

module.exports = {

    // Create post
    async createComment(request, response) {

        let body = request.body;
        
        return await Comment
        .create({
            mensaje: body.mensaje,
            user_carnet: request.user.carnet,
            post_id: body.post_id,
            created_at: Date.now(),
            updated_at: Date.now()
        })
        .then((result) => {
            
            delete result.dataValues.created_at;
            delete result.dataValues.updated_at;

            response.status(201).send(
                onSuccess({comment: result}, "Comentario realizado exitosamente.", 201)
            );

        })
        .catch((error) => {
            response.status(500).send(
                onError(error, 'Falló la operación.', 500)
            );
        });

    },

}