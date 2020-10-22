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
    await queryInterface.bulkInsert('courses', [
      {nombre: 'Análisis y diseño de sistemas 1 (Sección N)', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
      {nombre: 'Análisis y diseño de sistemas 2 (Sección A+)', created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('courses', null, {});
  }
};
