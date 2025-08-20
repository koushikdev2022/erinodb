'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const subscriptionTokensData = [
      {
        id: 1,
        plain_id: 1, // Earns Base
        coin: 100,
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        plain_id: 2, // Earns Boost
        coin: 500,
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        plain_id: 3, // Earns Pro
        coin: 1500,
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 4,
        plain_id: 4, // Earns Elite
        coin: 3000,
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      }
    ];

    await queryInterface.bulkInsert('subscription_token', subscriptionTokensData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('subscription_token', null, {});
  }
};
