'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('users', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            full_name: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            username: {
                type: Sequelize.STRING(255),
                allowNull: false,
                unique: true,
            },
            password: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING(255),
                allowNull: false,
                unique: true,
            },
            mobile: {
                type: Sequelize.STRING(255),
                allowNull: false,
                unique: true,
            },
            otp: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            validate_otp: {
                type: Sequelize.DATE,
                allowNull: true,
                comment: "otp validate date"
            },
            lat: {
                type: Sequelize.FLOAT,
                allowNull: true,
            },
            long: {
                type: Sequelize.FLOAT,
                allowNull: true,
            },
            avatar: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            is_otp_verified: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
                comment: "1->otp verified, 0->otp not verified"
            },
            is_only_otp_registered: {
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 0,
                comment: "0 -> otp not verified, 1->only otp registered, 2->full registered"
            },
            status: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 1
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: true,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: true,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('users');
    }
};
