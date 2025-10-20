'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('transaction_vendor_point_purchase', 'razorpay_order_id', {
      type: Sequelize.STRING,
      allowNull: true,
      comment: 'Reference to order ID',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('transaction_vendor_point_purchase', 'razorpay_order_id');
  }
};
