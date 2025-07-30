'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categories', {
      id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      cat_name: {
        type: Sequelize.STRING(255),
        allowNull: false,
        comment: 'Category name'
      },
      cat_short_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
        comment: 'Category short name'
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: '1 = active, 0 = inactive'
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

    // Add indexes for better performance
    await queryInterface.addIndex('categories', ['status']);
    await queryInterface.addIndex('categories', ['cat_name']);
    await queryInterface.addIndex('categories', ['cat_short_name']);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('categories');
  }
};