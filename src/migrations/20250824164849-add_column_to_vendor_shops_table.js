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
    await queryInterface.addColumn('vendor_shops', 'start_time', {
      type: Sequelize.TIME,
      allowNull: true,
      after: 'shop_name',
      
    });
    await queryInterface.addColumn('vendor_shops', 'end_time', {
      type: Sequelize.TIME,
      allowNull: true,
      after: 'start_time',
      
    });
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
