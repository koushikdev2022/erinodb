'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('plans', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        comment: 'Plan price with 2 decimal places'
      },
      currency: {
        type: Sequelize.STRING(10),
        allowNull: false,
        defaultValue: 'INR',
        comment: 'Currency code (e.g., INR, USD)'
      },
      frequency: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: '1 = monthly, 3 = 3 months, 6 = 6 months, 12 = 1 year'
      },
      plan_name: {
        type: Sequelize.STRING(255),
        allowNull: false,
        comment: 'Name of the plan'
      },
      price_id: {
        type: Sequelize.STRING(255),
        allowNull: false,
        comment: 'External price ID reference'
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
        comment: '1 = active, 0 = inactive'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });

    // Add indexes for better performance
    await queryInterface.addIndex('plans', ['status']);
    await queryInterface.addIndex('plans', ['frequency']);
    await queryInterface.addIndex('plans', ['price_id']);
    await queryInterface.addIndex('plans', ['plan_name']);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('plans');
  }
};
