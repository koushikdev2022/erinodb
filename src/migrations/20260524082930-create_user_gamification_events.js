'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('user_gamification_events', {

            id: {
                type: Sequelize.BIGINT,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            user_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
            },

            vendor_id: {
                type: Sequelize.BIGINT,
                allowNull: true,
            },

            vendor_shop_id: {
                type: Sequelize.BIGINT,
                allowNull: true,
            },

            action_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
            },

            reference_type: {
                type: Sequelize.STRING,
                allowNull: true,
            },

            reference_id: {
                type: Sequelize.BIGINT,
                allowNull: true,
            },

            base_points: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },

            bonus_points: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },

            total_points: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },

            multiplier: {
                type: Sequelize.FLOAT,
                allowNull: false,
                defaultValue: 1,
            },

            event_meta: {
                type: Sequelize.JSON,
                allowNull: true,
            },

            expiry_at: {
                type: Sequelize.DATE,
                allowNull: true,
            },

            reversed_at: {
                type: Sequelize.DATE,
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

        await queryInterface.addIndex('user_gamification_events', ['user_id'], {
            name: 'idx_user_gamification_events_user_id'
        });

        await queryInterface.addIndex('user_gamification_events', ['vendor_shop_id'], {
            name: 'idx_user_gamification_events_shop_id'
        });

        await queryInterface.addIndex('user_gamification_events', ['action_id'], {
            name: 'idx_user_gamification_events_action_id'
        });

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.dropTable('user_gamification_events');

    }

};