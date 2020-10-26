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
   await queryInterface.bulkInsert('pensums', [
    {course_id: 1, creditos: 5, semestre: 8, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
    {course_id: 2, creditos: 5, semestre: 9, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
    {course_id: 3, creditos: 5, semestre: 6, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
    {course_id: 4, creditos: 4, semestre: 7, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
    {course_id: 5, creditos: 5, semestre: 7, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
    {course_id: 6, creditos: 4, semestre: 8, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
    {course_id: 7, creditos: 4, semestre: 6, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
    {course_id: 8, creditos: 4, semestre: 10, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
    {course_id: 9, creditos: 5, semestre: 5, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
    {course_id: 10, creditos: 0, semestre: 7, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
    {course_id: 11, creditos: 4, semestre: 9, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
    {course_id: 12, creditos: 4, semestre: 3, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
    {course_id: 13, creditos: 5, semestre: 4, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
    {course_id: 14, creditos: 3, semestre: 4, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
    {course_id: 15, creditos: 2, semestre: 3, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
    {course_id: 16, creditos: 4, semestre: 6, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
    {course_id: 17, creditos: 5, semestre: 9, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
    {course_id: 18, creditos: 5, semestre: 10, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
    {course_id: 19, creditos: 3, semestre: 5, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
    {course_id: 20, creditos: 5, semestre: 6, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
    {course_id: 21, creditos: 4, semestre: 5, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
    {course_id: 22, creditos: 0, semestre: 7, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
    {course_id: 23, creditos: 3, semestre: 7, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
    {course_id: 24, creditos: 3, semestre: 5, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
    {course_id: 25, creditos: 4, semestre: 6, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
    {course_id: 26, creditos: 4, semestre: 7, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
    {course_id: 27, creditos: 4, semestre: 8, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
    {course_id: 28, creditos: 3, semestre: 8, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
    {course_id: 29, creditos: 3, semestre: 9, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
    {course_id: 30, creditos: 5, semestre: 7, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
    {course_id: 31, creditos: 4, semestre: 8, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
    {course_id: 32, creditos: 4, semestre: 9, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
    {course_id: 33, creditos: 6, semestre: 10, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
    {course_id: 34, creditos: 5, semestre: 6, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
    {course_id: 35, creditos: 5, semestre: 7, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP')},
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('pensums', null, {});
  }
};
