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
    await queryInterface.changeColumn('vendor_shops', 'lat', {
      type: Sequelize.DECIMAL(10, 8),
      allowNull: false,
    });
    await queryInterface.changeColumn('vendor_shops', 'long', {
      type: Sequelize.DECIMAL(11, 8),
      allowNull: false,
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
