'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('course_professors', {
      id_catedratico_curso: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      curso_codigo_curso: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: 'courses', key: 'codigo_curso' }
      },
      catedratico_no_catedratico: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: 'professors', key: 'no_catedratico' }
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
    await queryInterface.dropTable('course_professors');
  }
};