'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('access_plans', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            plan_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                comment: 'Reference to plans table',
            },
            access_name: {
                type: Sequelize.STRING(255),
                allowNull: false,
                comment: 'Access plan name that accepts emoji characters',
                charset: 'utf8mb4',
                collate: 'utf8mb4_unicode_ci'
            },
            status: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 1,
                comment: '1 = active, 0 = inactive'
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            }
        }, {
            charset: 'utf8mb4',
            collate: 'utf8mb4_unicode_ci'
        });

        // Add indexes for better performance
        await queryInterface.addIndex('access_plans', ['status']);
        await queryInterface.addIndex('access_plans', ['plan_id']);
        await queryInterface.addIndex('access_plans', ['plan_id', 'status']);
        await queryInterface.addIndex('access_plans', ['access_name']);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('access_plans');
    }
};
