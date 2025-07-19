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
    await queryInterface.addColumn('vendors', 'first_name', {
      type: Sequelize.STRING,
      allowNull: false,
      after: 'id',
      
    });
    await queryInterface.addColumn('vendors', 'last_name', {
      type: Sequelize.STRING,
      allowNull: false,
      after: 'first_name',
      
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
