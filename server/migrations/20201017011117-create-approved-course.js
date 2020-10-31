'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('approved_courses', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      user_carnet: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'carnet' }
      },
      pensum_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: false,
        references: { model: 'pensums', key: 'id' }
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
          fields: ['user_carnet', 'pensum_id']
        }
      ]
  });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('approved_courses');
  }
};