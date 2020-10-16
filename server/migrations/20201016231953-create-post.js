'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts', {
      id_publicacion: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mensaje: {
        allowNull: false,
        type: Sequelize.STRING
      },
      usuario_carne: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      fecha: {
        allowNull: false,
        type: Sequelize.DATE
      },
      curso_catedratico_idcatedratico_curso: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      curso_codigo_curso: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      catedratico_nocatedratico: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      tipo: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts');
  }
};