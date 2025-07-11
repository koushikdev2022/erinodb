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
      shop_name:{
        type: Sequelize.STRING,
        allowNull: false
      },
      location_address:{
        type: Sequelize.TEXT('long'),
        allowNull: false,
      },
      full_address:{
        type: Sequelize.TEXT('long'),
        allowNull: true,
      },
      otp:{
        type: Sequelize.STRING,
        allowNull: true,
      
      },
      otp_expired_at:{
        type: Sequelize.DATE,
        allowNull: true,
 
      },
      lat:{
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      longitude:{
        type: Sequelize.FLOAT,
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
      is_verified:{
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue:0
      },
      is_otp_verified:{
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue:0
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
