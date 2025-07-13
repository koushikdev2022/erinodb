'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('admins', {
            id: {
                type: Sequelize.BIGINT,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            username: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            full_name: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            mobile: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            otp: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            otp_expired_at: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            role_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'roles',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
                comment: "role id",
            },
            avatar: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            status: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 1,
                comment: "1 for => active 0 for => not active",
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

        await queryInterface.dropTable('admins');

    }
};
