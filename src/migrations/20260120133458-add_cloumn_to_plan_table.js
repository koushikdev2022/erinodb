'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Adding the 'title' field to the 'plans' table.
     * We use TEXT type as requested to allow for longer descriptions.
     */
    await queryInterface.addColumn('plans', 'title', {
      type: Sequelize.TEXT,
      allowNull: true,
      after: 'plan_name' // Places it logically after the name in supported DBs like MySQL
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Reverting the change by removing the 'title' column.
     */
    await queryInterface.removeColumn('plans', 'title');
  }
};