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
      await queryInterface.createTable('vendor_bank_account_details', {
        id: {
          type: Sequelize.BIGINT,
          autoIncrement: true,
          primaryKey: true,
        },
        vendor_id: {
            type: Sequelize.BIGINT,
            allowNull: false,
            comment: 'Reference to vendors table',
        },
        account_number:{
          type:Sequelize.STRING,
          allowNull:false,
        },
        ifsc_code:{
          type:Sequelize.STRING,
          allowNull:false,
        },
        is_primary:{
          type:Sequelize.TINYINT,
          allowNull:false,
          defaultValue:0,
          comment: '1 = PRIMARY 0 = NOT PRIMARY',
        },
        status:{
          type:Sequelize.TINYINT,
          allowNull:false,
          defaultValue:1,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updated_at: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        }
      })
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
