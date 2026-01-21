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
    await queryInterface.createTable('user_referrals', {
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
      vendor_shop_id: {
          type: Sequelize.BIGINT,
          allowNull: false,
          comment: 'Reference to vendor shops table',
      },
      referral_id: {
          type: Sequelize.STRING,
          allowNull: false,
          unique:true,
      },
      refer_user_id: {
          type: Sequelize.BIGINT,
          allowNull: false
      },
      refered_user_id: {
          type: Sequelize.BIGINT,
          allowNull: false,
      },
      purchase_complete: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 0,
        comment: "0 = not buy from both parties, 1 = refered user bought 2 = refer user bought"
      },
      status: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 1,
        comment: "0 = inactive, 1 = active"
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
