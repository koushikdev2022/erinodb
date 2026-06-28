'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('vendor_payout_transactions', {

            id: {
                type: Sequelize.BIGINT,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            vendor_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
            },

            vendor_wallet_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
            },

            refund_history_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
            },

            razorpay_contact_id: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },

            razorpay_fund_account_id: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },

            razorpay_payout_id: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },

            requested_points: {
                type: Sequelize.BIGINT,
                allowNull: false,
                defaultValue: 0,
            },

            requested_amount: {
                type: Sequelize.DECIMAL(12,2),
                allowNull: false,
                defaultValue: 0,
            },

            commission_percent: {
                type: Sequelize.FLOAT,
                allowNull: false,
                defaultValue: 0,
            },

            commission_amount: {
                type: Sequelize.DECIMAL(12,2),
                allowNull: false,
                defaultValue: 0,
            },

            gst_percent: {
                type: Sequelize.FLOAT,
                allowNull: false,
                defaultValue: 18,
            },

            gst_amount: {
                type: Sequelize.DECIMAL(12,2),
                allowNull: false,
                defaultValue: 0,
            },

            net_amount: {
                type: Sequelize.DECIMAL(12,2),
                allowNull: false,
                defaultValue: 0,
            },

            currency: {
                type: Sequelize.STRING(10),
                allowNull: false,
                defaultValue: 'INR',
            },

            payment_mode: {
                type: Sequelize.STRING(50),
                allowNull: false,
                defaultValue: 'IMPS',
            },

            payment_reference: {
                type: Sequelize.STRING(255),
                allowNull: true,
                comment: 'UTR / Bank Reference Number',
            },

            status: {
                type: Sequelize.TINYINT,
                allowNull: false,
                defaultValue: 0,
                comment: '0=Pending,1=Processing,2=Success,3=Failed',
            },

            failure_reason: {
                type: Sequelize.TEXT,
                allowNull: true,
            },

            processed_at: {
                type: Sequelize.DATE,
                allowNull: true,
            },

            remarks: {
                type: Sequelize.TEXT,
                allowNull: true,
            },

            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },

            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            }

        });

        await queryInterface.addIndex(
            'vendor_payout_transactions',
            ['vendor_id'],
            {
                name: 'idx_vendor_payout_vendor_id'
            }
        );

        await queryInterface.addIndex(
            'vendor_payout_transactions',
            ['refund_history_id'],
            {
                name: 'idx_vendor_payout_refund_history_id'
            }
        );

        await queryInterface.addIndex(
            'vendor_payout_transactions',
            ['status'],
            {
                name: 'idx_vendor_payout_status'
            }
        );

        await queryInterface.addIndex(
            'vendor_payout_transactions',
            ['razorpay_payout_id'],
            {
                name: 'idx_vendor_payout_razorpay_payout_id'
            }
        );

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.dropTable('vendor_payout_transactions');

    }

};