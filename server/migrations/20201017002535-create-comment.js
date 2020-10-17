'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('comments', {
      id_comentario: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mensaje: {
        allowNull: false,
        type: Sequelize.STRING
      },
      id_publicacion: {
        allowNull: false,
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: { model: 'posts', key: 'id_publicacion' }
      },
      carnet: {
        allowNull: false,
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: { model: 'users', key: 'carnet' }
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
    await queryInterface.dropTable('comments');
  }
};