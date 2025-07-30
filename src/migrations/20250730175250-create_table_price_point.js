'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('price_points', {
            id: {
                type: Sequelize.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            point: {
                type: Sequelize.INTEGER,
                allowNull: false,
                comment: 'Number of points'
            },
            price: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
                comment: 'Price value in rupees'
            },
            status: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 1,
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
        await queryInterface.addIndex('price_points', ['status']);
        await queryInterface.addIndex('price_points', ['point']);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('price_points');
    }
};
