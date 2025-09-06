'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('days', [
      {
        day: 'Sunday',
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        day: 'Monday',
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        day: 'Tuesday', 
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        day: 'Wednesday',
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        day: 'Thursday',
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        day: 'Friday',
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        day: 'Saturday',
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
