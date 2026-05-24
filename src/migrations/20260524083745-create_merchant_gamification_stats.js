'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('merchant_gamification_stats', {

            id: {
                type: Sequelize.BIGINT,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            vendor_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
                unique: true,
            },

            total_customers: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },

            repeat_customers: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },

            referral_customers: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },

            engagement_score: {
                type: Sequelize.FLOAT,
                allowNull: false,
                defaultValue: 0,
            },

            merchant_badge: {
                type: Sequelize.STRING,
                allowNull: true,
            },

            leaderboard_rank: {
                type: Sequelize.INTEGER,
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

        await queryInterface.addIndex('merchant_gamification_stats', ['vendor_id'], {
            name: 'idx_merchant_gamification_stats_vendor_id'
        });

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.dropTable('merchant_gamification_stats');

    }

};