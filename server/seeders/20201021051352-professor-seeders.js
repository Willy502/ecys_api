'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('professors', [
      {nombres: 'JOSE RICARDO', apellidos: 'MORALES PRADO', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombres: 'WILLIAM SAMUEL', apellidos: 'GUEVARA ORELLANA', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('professors', null, {});
  }
};
