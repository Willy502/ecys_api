'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('approved_courses', {
      carnet: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'carnet' }
      },
      id_curso_pensum: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: { model: 'pensums', key: 'id_curso_pensum' }
      },
      nota_aprobada: {
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
    }, {
      indexes: [
        {
          unique: true,
          fields: ['carnet', 'id_curso_pensum']
        }
      ]
  });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('approved_courses');
  }
};