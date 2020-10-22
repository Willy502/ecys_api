'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      carnet: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: Sequelize.INTEGER
      },
      nombres: {
        allowNull: false,
        type: Sequelize.STRING
      },
      apellidos: {
        allowNull: false,
        type: Sequelize.STRING
      },
      contrasenia: {
        allowNull: false,
        type: Sequelize.STRING
      },
      correo: {
        allowNull: false,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('users');
  }
};