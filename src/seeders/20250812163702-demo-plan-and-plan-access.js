'use strict';

/** @type {import('sequelize-cli').Seed} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // 1. Clear existing data to avoid duplicates or conflicts
    await queryInterface.bulkDelete('access_plans', null, {});
    await queryInterface.bulkDelete('plans', null, {});

    // 2. Insert Plans Data
    const plansData = [
      {
        id: 1,
        plan_name: 'Earno Basic',
        title: 'For everyday local merchants getting started with digital rewards.',
        price: 100.00,
        currency: 'INR',
        frequency: 12, // 12 Months (Yearly)
        price_id: 'plan_ScIBrh53wclVSi',
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        plan_name: 'Earno Boost',
        title: 'Give your store a boost in branding and visibility.',
        price: 499.00,
        currency: 'INR',
        frequency: 12, // 12 Months (Yearly)
        price_id: 'plan_Si2ENat3qPinvg',
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        plan_name: 'Earno Pro',
        title: 'Designed for growth-driven local brands.',
        price: 1499.00,
        currency: 'INR',
        frequency: 12, // 12 Months (Yearly)
        price_id: 'plan_Si2Glyn9FJbabW',
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 4,
        plan_name: 'Earno Elite',
        title: 'Be the face of your market. Maximum exposure + recognition.',
        price: 2999.00,
        currency: 'INR',
        frequency: 12, // 12 Months (Yearly)
        price_id: 'plan_Si2K7vj21Gn6Dt',
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      }
    ];

    await queryInterface.bulkInsert('plans', plansData, {});

    // 3. Insert Access Plans Data (Features)
    const accessPlansData = [
      // --- 🟤 1. Earno Basic (ID 1) ---
      { plan_id: 1, access_name: 'Issue & redeem points', status: 1, created_at: new Date(), updated_at: new Date() },
      { plan_id: 1, access_name: 'App listing in Explore tab', status: 1, created_at: new Date(), updated_at: new Date() },
      { plan_id: 1, access_name: 'Basic customer insights', status: 1, created_at: new Date(), updated_at: new Date() },
      { plan_id: 1, access_name: 'Access to Earno community WhatsApp group', status: 1, created_at: new Date(), updated_at: new Date() },
      { plan_id: 1, access_name: 'Refund point to cash 15% commission', status: 1, created_at: new Date(), updated_at: new Date() },

      // --- 🥈 2. Earno Boost (ID 2) ---
      { plan_id: 2, access_name: '✨ All of Basic Plan Features', status: 1, created_at: new Date(), updated_at: new Date() },
      { plan_id: 2, access_name: 'Featured in "Top Nearby Shops"', status: 1, created_at: new Date(), updated_at: new Date() },
      { plan_id: 2, access_name: 'Custom shop profile page (image, story, link)', status: 1, created_at: new Date(), updated_at: new Date() },
      { plan_id: 2, access_name: 'Run 1 loyalty campaign/month (e.g., 2x points days)', status: 1, created_at: new Date(), updated_at: new Date() },
      { plan_id: 2, access_name: 'Get "Verified Earno Merchant" badge', status: 1, created_at: new Date(), updated_at: new Date() },
      { plan_id: 2, access_name: 'Priority support', status: 1, created_at: new Date(), updated_at: new Date() },
      { plan_id: 2, access_name: 'Refund point to cash 10% commission', status: 1, created_at: new Date(), updated_at: new Date() },

      // --- 🥇 3. Earno Pro (ID 3) ---
      { plan_id: 3, access_name: '✨ All of Boost Plan Features', status: 1, created_at: new Date(), updated_at: new Date() },
      { plan_id: 3, access_name: 'Unlimited loyalty campaigns', status: 1, created_at: new Date(), updated_at: new Date() },
      { plan_id: 3, access_name: 'Full access to customer analytics (top buyers, churned, etc.)', status: 1, created_at: new Date(), updated_at: new Date() },
      { plan_id: 3, access_name: 'Store review management panel', status: 1, created_at: new Date(), updated_at: new Date() },
      { plan_id: 3, access_name: 'Monthly merchant performance report', status: 1, created_at: new Date(), updated_at: new Date() },
      { plan_id: 3, access_name: 'Eligible for Local Leaderboard rewards', status: 1, created_at: new Date(), updated_at: new Date() },
      { plan_id: 3, access_name: 'Free 1-time campaign design service (poster/banner)', status: 1, created_at: new Date(), updated_at: new Date() },
      { plan_id: 3, access_name: 'Refund point to cash 6% commission', status: 1, created_at: new Date(), updated_at: new Date() },

      // --- 🏆 4. Earno Elite (ID 4) ---
      { plan_id: 4, access_name: '✨ All of Pro Plan Features', status: 1, created_at: new Date(), updated_at: new Date() },
      { plan_id: 4, access_name: 'Top placement in Explore tab', status: 1, created_at: new Date(), updated_at: new Date() },
      { plan_id: 4, access_name: 'Monthly promotion in customer push notifications', status: 1, created_at: new Date(), updated_at: new Date() },
      { plan_id: 4, access_name: 'Auto-enrollment in city-level contests', status: 1, created_at: new Date(), updated_at: new Date() },
      { plan_id: 4, access_name: '“Earno Champion” merchant badge', status: 1, created_at: new Date(), updated_at: new Date() },
      { plan_id: 4, access_name: 'Personal onboarding support', status: 1, created_at: new Date(), updated_at: new Date() },
      { plan_id: 4, access_name: '1 free video profile shoot (optional)', status: 1, created_at: new Date(), updated_at: new Date() },
      { plan_id: 4, access_name: 'Refund point to cash 4% commission', status: 1, created_at: new Date(), updated_at: new Date() }
    ];

    await queryInterface.bulkInsert('access_plans', accessPlansData, {});
  },

  async down(queryInterface, Sequelize) {
    // Revert changes
    await queryInterface.bulkDelete('access_plans', null, {});
    await queryInterface.bulkDelete('plans', null, {});
  }
};