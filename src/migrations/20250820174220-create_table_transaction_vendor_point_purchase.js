'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transaction_vendor_point_purchase', {
      id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      vendor_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      transaction_price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true,
      },
      transaction_point: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      type: {
        type: Sequelize.STRING(255),
        allowNull: true,
        comment: "credit, debit, subscription"
      },
      status: {
        type: Sequelize.STRING(255),
        allowNull: true,
        comment: "initiate, cancel, confirm, failed"
      },
      date_transaction: {
        type: Sequelize.DATE,
        allowNull: false,
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
    await queryInterface.dropTable('transaction_vendor_point_purchase');
  }
};
