'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('price_points', [
            {
                id: 1,
                point: 1,
                price: 1.00,
                status: 1,
                created_at: new Date(),
                updated_at: new Date()
            }
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('price_points', {
            id: 1
        });
    }
};
