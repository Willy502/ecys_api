// Models
const Post = require('../models').post;
// Base Controller
let { onSuccess, onError } = require('./BaseController');
const { Op } = require('sequelize');
const jwt = require('jsonwebtoken');

module.exports = {

    // Get posts
    async retrievePosts(request, response) {

        let filter = request.params.filter;
        let search = request.params.search;

        switch(filter) {
            case "all":

                break;

            case "catedratico":

                break;

            case "curso":

                break;
        }

        return await Post
        .findAll({
            where: {
                 
            }
        })
        .then((result) => {

        })
        .catch((error) => {
            response.status(500).send(
                onError(error, 'Falló la operación.', 500)
            ); 
        });

    }

}