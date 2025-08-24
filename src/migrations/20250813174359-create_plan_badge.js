'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('plan_badges', {
            id: {
                allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER,
            }, batch_name: {
                type: Sequelize.STRING, allowNull: false,
            }, plan_id: {
                type: Sequelize.BIGINT, allowNull: false, comment: 'Reference to plans table',
            }, batch_avatar: {
                type: Sequelize.STRING, allowNull: true,
            }, status: {
                type: Sequelize.INTEGER, allowNull: false, defaultValue: 1, comment: '1 = active, 0 = inactive'
            }, created_at: {
                type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            }, updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                onUpdate: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('plan_badges');
    }
};
