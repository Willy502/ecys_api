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
      carnet: {
        allowNull: false,
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: { model: 'users', key: 'carnet' }
      },
      fecha: {
        allowNull: false,
        type: Sequelize.DATE
      },
      id_catedratico_curso: {
        allowNull: false,
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: { model: 'course_professors', key: 'id_catedratico_curso' }
      },
      codigo_curso: {
        allowNull: false,
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: { model: 'courses', key: 'codigo_curso' }
      },
      no_catedratico: {
        allowNull: false,
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: { model: 'professors', key: 'no_catedratico' }
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