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
    await queryInterface.createTable('vendors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username:{
        type: Sequelize.STRING,
        allowNull: false
      },
      password:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false
      },
      mobile:{
        type: Sequelize.STRING,
        allowNull: false
      },
      brand_name:{
        type: Sequelize.STRING,
        allowNull: false
      },
      otp:{
        type: Sequelize.STRING,
        allowNull: true,
      
      },
      otp_expired_at:{
        type: Sequelize.DATE,
        allowNull: true,
 
      },
      avatar:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      status:{
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue:1
      },
      is_otp_verified:{
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue:0,
        comment: "1->otp verified, 0->otp not verified"
      },
      is_only_otp_registered: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: "0 -> otp not verified, 1->only otp registered, 2->full registered"
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
        onUpdate: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
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
