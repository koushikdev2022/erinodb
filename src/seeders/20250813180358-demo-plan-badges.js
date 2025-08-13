'use strict';

/** @type {import('sequelize-cli').Seed} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('plan_badges', [{
            batch_name: 'Verified Earno Merchant',
            plan_id: 2,
            batch_avatar: null,
            status: 1,
            created_at: new Date(),
            updated_at: new Date()
        }, {
            batch_name: 'Earno Champion',
            plan_id: 4,
            batch_avatar: null,
            status: 1,
            created_at: new Date(),
            updated_at: new Date()
        }], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('plan_badges', {
            batch_name: {[Sequelize.Op.in]: ['Verified Earno Merchant', 'Earno Champion']}
        });
    }
};
