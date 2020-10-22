// Models
const Post = require('../models').post;
const Professor = require('../models').professor;
const Course = require('../models').course;
const Comment = require('../models').comment;
const Course_Professor = require('../models').course_professor;
const User = require('../models').user;
// Base Controller
let { onSuccess, onError } = require('./BaseController');
const { Op } = require('sequelize');

module.exports = {

    // Get posts
    async retrievePosts(request, response) {

        let filter = request.params.filter;
        let search = {};


        switch(filter) {
            case "all":
                search = {
                    attributes: {
                        exclude: [
                            'courseId', 'courseProfessorId', 'professorId', 'userCarnet', 'created_at', 'updated_at'
                        ]
                    },
                    include: [{
                        model: Professor,
                        as: 'professor'
                    }, {
                        model: Course,
                        as: 'course'
                    }, {
                        model: User,
                        as: 'user',
                        attributes: {
                            exclude: [
                                'contrasenia', 'created_at', 'updated_at'
                            ]
                        }
                    }]
                };
                break;

            case "catedratico":
                search = {
                    attributes: {
                        exclude: [
                            'courseId', 'courseProfessorId', 'professorId', 'userCarnet', 'created_at', 'updated_at'
                        ]
                    },
                    include: [{
                        model: Professor,
                        as: 'professor',
                        where: { nombres: { [Op.like]: '%' + request.params.search.toUpperCase() + '%' } }
                    }, {
                        model: Course,
                        as: 'course'
                    }, {
                        model: User,
                        as: 'user',
                        attributes: {
                            exclude: [
                                'contrasenia', 'created_at', 'updated_at'
                            ]
                        }
                    }]
                };
                break;

            case "curso":
                search = {
                    attributes: {
                        exclude: [
                            'courseId', 'courseProfessorId', 'professorId', 'userCarnet', 'created_at', 'updated_at'
                        ]
                    },
                    include: [{
                        model: Professor,
                        as: 'professor'
                    }, {
                        model: Course,
                        as: 'course',
                        where: { nombre: { [Op.like]: '%' + request.params.search + '%' } }
                    }, {
                        model: User,
                        as: 'user',
                        attributes: {
                            exclude: [
                                'contrasenia', 'created_at', 'updated_at'
                            ]
                        }
                    }]
                };
                break;
        }

        return await Post
        .findAll(search)
        .then((result) => {
            if (result != null) {
                response.status(200).send(
                    onSuccess({posts:result}, "Publicaciones recuperadas exitosamente.", 200)
                );
            } else {
                response.status(404).send(
                    onError(result, "Publicaciones no encontradas", 404)
                );
            }
        })
        .catch((error) => {
            response.status(500).send(
                onError(error, 'Falló la operación.', 500)
            );
        });

    },

    // Create post
    async createPost(request, response) {

        let body = request.body;
        
        return await Post
        .create({
            mensaje: body.mensaje,
            user_carnet: request.user.carnet,
            fecha: Date.now(),
            course_professor_id: body.course_professor_id,
            course_id: body.course_id,
            professor_id: body.professor_id,
            tipo: body.tipo,
            created_at: Date.now(),
            updated_at: Date.now()
        })
        .then((result) => {
            
            delete result.dataValues.created_at;
            delete result.dataValues.updated_at;

            response.status(201).send(
                onSuccess({post: result}, "Publicación creada exitosamente.", 201)
            );

        })
        .catch((error) => {
            response.status(500).send(
                onError(error, 'Falló la operación.', 500)
            );
        });

    },

}