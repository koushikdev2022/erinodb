'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('vendor_wallet', {
            id: {
                type: Sequelize.BIGINT,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            vendor_point: {
                type: Sequelize.BIGINT,
                allowNull: false,
                defaultValue: 0,
            },
            vendor_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
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

        // Add indexes for better performance
        await queryInterface.addIndex('vendor_wallet', ['vendor_id'], {
            name: 'idx_vendor_wallet_vendor_id'
        });

        await queryInterface.addIndex('vendor_wallet', ['status'], {
            name: 'idx_vendor_wallet_status'
        });

        await queryInterface.addIndex('vendor_wallet', ['vendor_id', 'status'], {
            name: 'idx_vendor_wallet_vendor_status'
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('vendor_wallet');
    }
};
