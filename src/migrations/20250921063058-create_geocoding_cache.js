'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('geocoding_cache', {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      address_hash: {
        type: Sequelize.CHAR(64),
        allowNull: false,
        unique: true
      },
      raw_address: {
        type: Sequelize.STRING(500),
        allowNull: false
      },
      formatted_address: {
        type: Sequelize.STRING(500),
        allowNull: false
      },
      place_id: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      lat: {
        type: Sequelize.DECIMAL(10, 7),
        allowNull: false
      },
      lng: {
        type: Sequelize.DECIMAL(10, 7),
        allowNull: false
      },
      location_type: {
        type: Sequelize.STRING(50),
        allowNull: false,
        defaultValue: 'GEOMETRIC_CENTER'
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      expires_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      access_count: {
        type: Sequelize.INTEGER.UNSIGNED,
        defaultValue: 1
      }
    });

    // Add indexes
    await queryInterface.addIndex('geocoding_cache', ['address_hash'], {
      name: 'idx_address_hash'
    });
    
    await queryInterface.addIndex('geocoding_cache', ['expires_at'], {
      name: 'idx_expires_at'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('geocoding_cache');
  }
};
