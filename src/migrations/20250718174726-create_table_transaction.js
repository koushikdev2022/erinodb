'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('transactions', {
            id: {
                type: Sequelize.BIGINT,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            user_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
                comment: 'Reference to users',
            },
            amount: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
                comment: 'Transaction amount',
            },
            payment_intend: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },

            // ✅ Enum to define the type of transaction movement (e.g., credit/debit)
            transaction_type: {
                type: Sequelize.ENUM('debit', 'credit'),
                allowNull: false,
            },

            // ✅ Enum to define the purpose/category of the transaction
            transaction_purpose: {
                type: Sequelize.ENUM('topup', 'withdraw', 'refund', 'purchase', 'adjustment'),
                allowNull: false,
                defaultValue: 'purchase',
                comment: 'Purpose of transaction (e.g., refund, withdraw)',
            },

            transaction_success: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: 'success',
            },

            remarks: {
                type: Sequelize.STRING,
                allowNull: true,
                comment: 'Additional notes or reason (e.g. refund reason)',
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

        // ✅ Indexes
        await queryInterface.addIndex('transactions', ['user_id']);
        await queryInterface.addIndex('transactions', ['transaction_type']);
        await queryInterface.addIndex('transactions', ['transaction_purpose']);
        await queryInterface.addIndex('transactions', ['transaction_success']);
        await queryInterface.addIndex('transactions', ['created_at']);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('transactions');
    }
};
