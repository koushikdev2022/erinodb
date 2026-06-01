'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('gamification_actions', {

            id: {
                type: Sequelize.BIGINT,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            action_key: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },

            action_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            base_points: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },

            multiplier_enabled: {
                type: Sequelize.TINYINT,
                allowNull: false,
                defaultValue: 0,
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

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.dropTable('gamification_actions');

    }

};