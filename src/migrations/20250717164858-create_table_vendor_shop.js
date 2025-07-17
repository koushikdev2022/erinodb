'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('vendor_shops', {
            id: {
                type: Sequelize.BIGINT,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            vendor_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
                comment: 'Reference to vendors table',
            },
            shop_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            gst_no: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            shop_address: {
                type: Sequelize.JSON,
                allowNull: false,
            },
            zip: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            lat: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            long: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            avatar: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            cat_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
                defaultValue: 0,
                comment: "Category ID, 0 if not required"
            },
            status: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
                comment: "0 = inactive, 1 = active"
            },
            is_deleted: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
                comment: "0 = not deleted, 1 = deleted"
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
            }
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('vendor_shops');
    }
};
