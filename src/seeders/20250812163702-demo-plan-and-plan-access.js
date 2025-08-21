'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Insert plans data
    const plansData = [
      {
        id: 1,
        price: 100.00,
        currency: 'INR',
        frequency: 12, // monthly
        plan_name: 'Earno Base',
        price_id: 'plan_R6tUSO4140lJzs',
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        price: 499.00,
        currency: 'INR',
        frequency: 12, // monthly
        plan_name: 'Earno Boost',
        price_id: 'plan_R6tVB1PndJBYgA',
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        price: 1499.00,
        currency: 'INR',
        frequency: 12, // monthly
        plan_name: 'Earno Pro',
        price_id: 'plan_R6tVnpoaVN5BvD',
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 4,
        price: 2999.00,
        currency: 'INR',
        frequency: 12, // monthly
        plan_name: 'Earno Elite',
        price_id: 'plan_R6tWVaQ5M8VFzT',
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      }
    ];

    await queryInterface.bulkInsert('plans', plansData, {});

    // Insert access plans data
    const accessPlansData = [
      // Earns Base (Plan ID: 1)
      {
        plan_id: 1,
        access_name: '📱 App Listings on Expense Upto',
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        plan_id: 1,
        access_name: '📊 Basic Customer Insights',
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        plan_id: 1,
        access_name: '💰 Refund upto to each 10% commission',
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      // Earns Boost (Plan ID: 2)
      {
        plan_id: 2,
        access_name: '📱 App Listings on Expense Upto',
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        plan_id: 2,
        access_name: '🔍 Advanced Top Priority Support',
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        plan_id: 2,
        access_name: '📊 Basic Customer Insights',
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        plan_id: 2,
        access_name: '💰 Refund upto to each 10% commission',
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      // Earns Pro (Plan ID: 3)
      {
        plan_id: 3,
        access_name: '📱 All of Boost Plan Features',
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        plan_id: 3,
        access_name: '📈 Monthly watchlist and Permission report',
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        plan_id: 3,
        access_name: '💰 Refund upto to each 8% commission',
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },

      // Earns Elite (Plan ID: 4)
      {
        plan_id: 4,
        access_name: '🌟 All of Pro Plan Features',
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        plan_id: 4,
        access_name: '📊 Monthly provision in customer push',
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        plan_id: 4,
        access_name: '🎯 Dedicated Account Manager',
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        plan_id: 4,
        access_name: '💰 Refund upto to each 6% commission',
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      }
    ];

    await queryInterface.bulkInsert('access_plans', accessPlansData, {});
  },

  async down (queryInterface, Sequelize) {
    // Remove access plans first (due to foreign key relationship)
    await queryInterface.bulkDelete('access_plans', null, {});

    // Then remove plans
    await queryInterface.bulkDelete('plans', null, {});
  }
};
