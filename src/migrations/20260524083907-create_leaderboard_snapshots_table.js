'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

    async up(queryInterface, Sequelize) {

        await queryInterface.createTable('leaderboard_snapshots', {

            id: {
                type: Sequelize.BIGINT,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            user_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
            },

            total_score: {
                type: Sequelize.FLOAT,
                allowNull: false,
                defaultValue: 0,
            },

            rank: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },

            snapshot_date: {
                type: Sequelize.DATEONLY,
                allowNull: false,
            },

            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },

        });

        await queryInterface.addIndex('leaderboard_snapshots', ['user_id'], {
            name: 'idx_leaderboard_snapshots_user_id'
        });

        await queryInterface.addIndex('leaderboard_snapshots', ['snapshot_date'], {
            name: 'idx_leaderboard_snapshots_snapshot_date'
        });

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.dropTable('leaderboard_snapshots');

    }

};