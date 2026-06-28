'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn('vendor_payout_transactions', 'razorpay_contact_id', {
            type: Sequelize.STRING,
            allowNull: true,
            after: 'refund_history_id',
        });

        await queryInterface.addColumn('vendor_payout_transactions', 'razorpay_fund_account_id', {
            type: Sequelize.STRING,
            allowNull: true,
            after: 'razorpay_contact_id',
        });

        await queryInterface.addColumn('vendor_payout_transactions', 'razorpay_payout_id', {
            type: Sequelize.STRING,
            allowNull: true,
            after: 'razorpay_fund_account_id',
        });

        await queryInterface.addColumn('vendor_payout_transactions', 'razorpay_response', {
            type: Sequelize.JSON,
            allowNull: true,
            after: 'razorpay_payout_id',
        });

        await queryInterface.addColumn('vendor_payout_transactions', 'processed_at', {
            type: Sequelize.DATE,
            allowNull: true,
            after: 'razorpay_response',
        });

        await queryInterface.addIndex('vendor_payout_transactions', ['razorpay_payout_id'], {
            name: 'idx_vendor_payout_transactions_razorpay_payout_id'
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn('vendor_payout_transactions', 'razorpay_contact_id');
        await queryInterface.removeColumn('vendor_payout_transactions', 'razorpay_fund_account_id');
        await queryInterface.removeColumn('vendor_payout_transactions', 'razorpay_payout_id');
        await queryInterface.removeColumn('vendor_payout_transactions', 'razorpay_response');
        await queryInterface.removeColumn('vendor_payout_transactions', 'processed_at');
    }
};