'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.addColumn('processed_webhook_events', 'processed_at', {
        type: Sequelize.DATE,
        allowNull: true,
        comment: 'The timestamp when the event was processed'
      }),
      queryInterface.addColumn('processed_webhook_events', 'event_name', {
        type: Sequelize.STRING(255),
        allowNull: true,
        comment: 'Name of the webhook event'
      })
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.removeColumn('processed_webhook_events', 'processed_at'),
      queryInterface.removeColumn('processed_webhook_events', 'event_name')
    ]);
  }
};
