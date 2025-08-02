'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    // Generate dates from last week to current date
    const currentDate = new Date();
    const lastWeekDate = new Date();
    lastWeekDate.setDate(currentDate.getDate() - 7);

    // Helper function to generate random date between last week and current date
    function getRandomDate(start, end) {
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    // Helper function to generate random amount
    function getRandomAmount(min, max) {
      return (Math.random() * (max - min) + min).toFixed(2);
    }

    // 1. CREATE WALLETS FOR USERS (First 30 users)
    const wallets = [];
    for (let i = 1; i <= 30; i++) {
      const createdDate = getRandomDate(lastWeekDate, currentDate);
      const balance = getRandomAmount(100, 2000); // Random balance between 100-2000

      wallets.push({
        user_id: i,
        balance: balance,
        currency: 'INR',
        is_active: Math.random() > 0.1 ? 1 : 0, // 90% active
        is_freezed: Math.random() > 0.95 ? 1 : 0, // 5% freezed
        created_at: createdDate,
        updated_at: createdDate
      });
    }
    await queryInterface.bulkInsert('wallets', wallets);

    // 2. CREATE TRANSACTIONS (80 transactions)
    const transactions = [];
    const transactionPurposes = ['topup', 'withdraw', 'refund', 'purchase', 'adjustment'];
    const transactionRemarks = [
      'Initial topup', 'Mobile recharge', 'Food order', 'Grocery purchase', 'Refund processed',
      'Wallet topup', 'Bill payment', 'Online shopping', 'Service payment', 'Cashback credit',
      'Purchase at store', 'Gift card purchase', 'Subscription payment', 'Utility bill',
      'Restaurant payment', 'Transportation', 'Entertainment', 'Medical expense'
    ];

    for (let i = 0; i < 80; i++) {
      const userId = Math.floor(Math.random() * 30) + 1; // Random user from 1-30
      const transactionType = Math.random() > 0.6 ? 'credit' : 'debit'; // 40% credit, 60% debit
      const purpose = transactionPurposes[Math.floor(Math.random() * transactionPurposes.length)];
      const amount = transactionType === 'credit' ?
          getRandomAmount(50, 1000) : // Credit: 50-1000
          getRandomAmount(10, 500);   // Debit: 10-500
      const createdDate = getRandomDate(lastWeekDate, currentDate);
      const updatedDate = new Date(createdDate.getTime() + Math.random() * 1000 * 60 * 60); // Within 1 hour

      transactions.push({
        user_id: userId,
        amount: amount,
        payment_intend: Math.random() > 0.7 ? Math.floor(Math.random() * 1000000) : null,
        transaction_type: transactionType,
        transaction_purpose: purpose,
        transaction_success: Math.random() > 0.05 ? 'success' : 'failed', // 95% success
        remarks: transactionRemarks[Math.floor(Math.random() * transactionRemarks.length)],
        created_at: createdDate,
        updated_at: updatedDate
      });
    }
    await queryInterface.bulkInsert('transactions', transactions);

    // 3. CREATE PROMO COINS (60 promo coins)
    const promoCoins = [];

    // Assuming we have vendor shops with IDs 1-6 from the previous seeder
    const vendorShopData = [
      { vendor_id: 1, shop_id: 1 }, { vendor_id: 1, shop_id: 2 }, { vendor_id: 1, shop_id: 3 },
      { vendor_id: 2, shop_id: 4 }, { vendor_id: 2, shop_id: 5 }, { vendor_id: 2, shop_id: 6 },
      { vendor_id: 3, shop_id: 7 }, { vendor_id: 3, shop_id: 8 }, { vendor_id: 4, shop_id: 9 },
      { vendor_id: 4, shop_id: 10 }, { vendor_id: 5, shop_id: 11 }, { vendor_id: 5, shop_id: 12 }
    ];

    for (let i = 0; i < 60; i++) {
      const userId = Math.floor(Math.random() * 30) + 1; // Random user from 1-30
      const vendorShop = vendorShopData[Math.floor(Math.random() * vendorShopData.length)];
      const totalCoins = Math.floor(Math.random() * 200) + 10; // 10-210 coins
      const createdDate = getRandomDate(lastWeekDate, currentDate);
      const updatedDate = new Date(createdDate.getTime() + Math.random() * 1000 * 60 * 30); // Within 30 minutes

      // Expiry date: 30-90 days from creation
      const expiryDate = new Date(createdDate);
      expiryDate.setDate(expiryDate.getDate() + Math.floor(Math.random() * 60) + 30);

      promoCoins.push({
        vendor_id: vendorShop.vendor_id,
        vendor_shop_id: vendorShop.shop_id,
        total_coin: totalCoins,
        user_id: userId,
        expairy_date: expiryDate,
        status: Math.random() > 0.1 ? 1 : 0, // 90% active
        created_at: createdDate,
        updated_at: updatedDate
      });
    }

    // Sort promo coins by created_at for realistic distribution
    promoCoins.sort((a, b) => a.created_at - b.created_at);
    await queryInterface.bulkInsert('promo_coins', promoCoins);

    // 4. CREATE ADDITIONAL REALISTIC DATA PATTERNS

    // Add some bulk transactions for realistic wallet funding
    const bulkTransactions = [];
    for (let i = 0; i < 20; i++) {
      const userId = Math.floor(Math.random() * 15) + 1; // Focus on first 15 users
      const createdDate = getRandomDate(lastWeekDate, currentDate);

      bulkTransactions.push({
        user_id: userId,
        amount: getRandomAmount(500, 2000), // Larger amounts
        payment_intend: Math.floor(Math.random() * 1000000),
        transaction_type: 'credit',
        transaction_purpose: 'topup',
        transaction_success: 'success',
        remarks: 'testing',
        created_at: createdDate,
        updated_at: createdDate
      });
    }
    await queryInterface.bulkInsert('transactions', bulkTransactions);

    // Add promo coins for new users (welcome bonus pattern)
    const welcomePromoCoins = [];
    for (let i = 1; i <= 20; i++) {
      const createdDate = getRandomDate(lastWeekDate, currentDate);
      const expiryDate = new Date(createdDate);
      expiryDate.setDate(expiryDate.getDate() + 90); // 90 days expiry

      welcomePromoCoins.push({
        vendor_id: 0, // System generated
        vendor_shop_id: 0, // System generated
        total_coin: 50, // Welcome bonus
        user_id: i,
        expairy_date: expiryDate,
        status: 1,
        created_at: createdDate,
        updated_at: createdDate
      });
    }
    await queryInterface.bulkInsert('promo_coins', welcomePromoCoins);

    console.log('✅ Seeder completed successfully!');
    console.log('📊 Data created:');
    console.log('   - Wallets: 30');
    console.log('   - Transactions: 100 (80 regular + 20 bulk)');
    console.log('   - Promo Coins: 80 (60 vendor + 20 welcome)');
    console.log('📅 Date range: Last 7 days to current date');
  },

  async down(queryInterface, Sequelize) {
    // Remove in reverse order to maintain referential integrity
    await queryInterface.bulkDelete('promo_coins', null, {});
    await queryInterface.bulkDelete('transactions', null, {});
    await queryInterface.bulkDelete('wallets', null, {});
  }
};
