'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('wallets', {
            id: {
                type: Sequelize.BIGINT,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            user_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
                comment: 'Reference users',
            },
            balance: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
                comment: 'Current wallet balance',
            },
            currency: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: 'INR',
                comment: 'Currency code',
            },
            is_active: {
                type: Sequelize.TINYINT,
                allowNull: false,
                defaultValue: 1,
                comment: '0 = inactive, 1 = active',
            },
            is_freezed: {
                type: Sequelize.TINYINT,
                allowNull: false,
                defaultValue: 0,
                comment: '0 = not freezed, 1 = freezed',
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

        // ✅ Indexing for better performance on common queries
        await queryInterface.addIndex('wallets', ['user_id']);
        await queryInterface.addIndex('wallets', ['is_active']);
        await queryInterface.addIndex('wallets', ['is_freezed']);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('wallets');
    }
};
