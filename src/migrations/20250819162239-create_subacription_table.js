'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('vendor_subscriptions', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      user_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      plan_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      razorpay_subscription_id: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      razorpay_customer_id: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      razorpay_plan_id: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      subscription_start_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      subscription_end_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      current_start: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      current_end: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      subscription_type: {
        type: Sequelize.TINYINT,
        allowNull: true,
      },
      subscription_status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "active",
      },
      status: {
        type: Sequelize.TINYINT,
        allowNull: true,
        defaultValue: 1,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('vendor_subscriptions');
  },
};
