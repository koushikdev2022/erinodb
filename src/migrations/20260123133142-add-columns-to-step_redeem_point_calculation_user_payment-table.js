'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn(
      'step_redeem_point_calculation_user_payment',
      'vendor_id',
      {
        type: Sequelize.BIGINT,
        allowNull: true,
        after: 'id'
      }
    );

    await queryInterface.addColumn(
      'step_redeem_point_calculation_user_payment',
      'vendor_shop_id',
      {
        type: Sequelize.BIGINT,
        allowNull: true,
        after: 'vendor_id'
      }
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
