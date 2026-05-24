'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('gamification_campaigns', {

            id: {
                type: Sequelize.BIGINT,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            campaign_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            multiplier: {
                type: Sequelize.FLOAT,
                allowNull: false,
                defaultValue: 1,
            },

            start_date: {
                type: Sequelize.DATE,
                allowNull: false,
            },

            end_date: {
                type: Sequelize.DATE,
                allowNull: false,
            },

            applicable_action: {
                type: Sequelize.STRING,
                allowNull: true,
            },

            status: {
                type: Sequelize.TINYINT,
                allowNull: false,
                defaultValue: 1,
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

        await queryInterface.addIndex('gamification_campaigns', ['status'], {
            name: 'idx_gamification_campaigns_status'
        });

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.dropTable('gamification_campaigns');

    }

};