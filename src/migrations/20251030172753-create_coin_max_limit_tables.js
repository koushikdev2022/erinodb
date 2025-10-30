'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // admin_shop_coin_set_limits
    await queryInterface.createTable('admin_shop_coin_set_limits', {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      coin_use_percent_max_limit: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      status: {
        type: Sequelize.TINYINT,
        comment: '0 = Inactive, 1 = Active',
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    // vendor_shop_coin_set_limits
    await queryInterface.createTable('vendor_shop_coin_set_limits', {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      vendor_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      vendor_shop_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      coin_use_percent_max_limit: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      status: {
        type: Sequelize.TINYINT,
        comment: '0 = Inactive, 1 = Active',
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    // vendor_coin_set_limits
    await queryInterface.createTable('vendor_coin_set_limits', {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      vendor_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      coin_use_percent_max_limit: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      status: {
        type: Sequelize.TINYINT,
        comment: '0 = Inactive, 1 = Active',
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('admin_shop_coin_set_limits');
    await queryInterface.dropTable('vendor_shop_coin_set_limits');
    await queryInterface.dropTable('vendor_coin_set_limits');
  }
};
