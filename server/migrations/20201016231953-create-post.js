'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mensaje: {
        allowNull: false,
        type: Sequelize.STRING
      },
      user_carnet: {
        allowNull: false,
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: { model: 'users', key: 'carnet' }
      },
      fecha: {
        allowNull: false,
        type: Sequelize.DATE
      },
      course_professor_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: { model: 'course_professors', key: 'id' }
      },
      course_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: { model: 'courses', key: 'id' }
      },
      professor_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: { model: 'professors', key: 'id' }
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