'use strict';

const { defaultValueSchemable } = require('sequelize/lib/utils');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('vendors', 'is_deleted', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue:0,
      after: 'is_only_otp_registered',
      
    });
    await queryInterface.addColumn('vendors', 'last_login', {
      type: Sequelize.DATE,
      allowNull: true,
      after: 'avatar',
      
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
