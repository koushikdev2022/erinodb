'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn('users', 'is_deleted', {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
            comment: "0 -> not deleted, 1->deleted"
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn('users', 'is_deleted');
    }
};
