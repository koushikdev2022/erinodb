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
            vendor_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
            },
            coin: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            exp_date: {
                type: Sequelize.DATEONLY,
                allowNull: true,
            },
            type: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            status: {
                type: Sequelize.TINYINT,
                allowNull: false,
                defaultValue: 1,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: true,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: true,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('vendor_wallet');
    }
};
