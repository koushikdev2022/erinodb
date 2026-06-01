'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('user_gamification_wallets', {

            id: {
                type: Sequelize.BIGINT,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            user_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
                unique: true,
            },

            total_points: {
                type: Sequelize.BIGINT,
                allowNull: false,
                defaultValue: 0,
            },

            available_points: {
                type: Sequelize.BIGINT,
                allowNull: false,
                defaultValue: 0,
            },

            redeemed_points: {
                type: Sequelize.BIGINT,
                allowNull: false,
                defaultValue: 0,
            },

            expired_points: {
                type: Sequelize.BIGINT,
                allowNull: false,
                defaultValue: 0,
            },

            current_level: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 1,
            },

            total_visits: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },

            total_referrals: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },

            streak_days: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },

            last_activity_at: {
                type: Sequelize.DATE,
                allowNull: true,
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
            },

        });

        await queryInterface.addIndex('user_gamification_wallets', ['user_id'], {
            name: 'idx_user_gamification_wallet_user_id'
        });

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.dropTable('user_gamification_wallets');

    }

};