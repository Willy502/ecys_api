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
   await queryInterface.bulkInsert('course_professors', [
    {course_id: 1, professor_id: 1,  created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
    {course_id: 2, professor_id: 2,  created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('course_professors', null, {});
  }
};