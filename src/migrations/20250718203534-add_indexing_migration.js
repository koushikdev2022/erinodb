'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      // Index for users table - OTP verification and registration status
      await queryInterface.addIndex('users', ['is_otp_verified', 'is_only_otp_registered'], {
        name: 'idx_users_otp_verified_registered',
        transaction
      });

      // Index for users table - created_at for ordering
      await queryInterface.addIndex('users', ['created_at'], {
        name: 'idx_users_created_at',
        transaction
      });

      // Individual indexes for better search performance on each field
      await queryInterface.addIndex('users', ['username'], {
        name: 'idx_users_username',
        transaction
      });

      await queryInterface.addIndex('users', ['email'], {
        name: 'idx_users_email',
        transaction
      });

      await queryInterface.addIndex('users', ['mobile'], {
        name: 'idx_users_mobile',
        transaction
      });

      // Use raw SQL for prefix index on full_name to avoid key length issues
      await queryInterface.sequelize.query(
          'ALTER TABLE `users` ADD INDEX `idx_users_full_name` (`full_name`(100))',
          { transaction }
      );

      // Smaller composite indexes for common search combinations
      await queryInterface.addIndex('users', ['username', 'email'], {
        name: 'idx_users_username_email',
        transaction
      });

      await queryInterface.addIndex('users', ['mobile', 'email'], {
        name: 'idx_users_mobile_email',
        transaction
      });

      // Index for transactions table - user_id and created_at for latest transaction lookup
      await queryInterface.addIndex('transactions', ['user_id', 'created_at'], {
        name: 'idx_transactions_user_created',
        transaction
      });

      // Index for transactions table - user_id for foreign key performance
      await queryInterface.addIndex('transactions', ['user_id'], {
        name: 'idx_transactions_user_id',
        transaction
      });

      // Index for promo_coins table - user_id and status for aggregation queries
      await queryInterface.addIndex('promo_coins', ['user_id', 'status'], {
        name: 'idx_promo_coins_user_status',
        transaction
      });

      // Index for promo_coins table - expairy_date for date-based filtering
      await queryInterface.addIndex('promo_coins', ['expairy_date'], {
        name: 'idx_promo_coins_expiry',
        transaction
      });

      // Index for promo_coins table - user_id for foreign key performance
      await queryInterface.addIndex('promo_coins', ['user_id'], {
        name: 'idx_promo_coins_user_id',
        transaction
      });

      // Index for wallets table - user_id for foreign key performance
      await queryInterface.addIndex('wallets', ['user_id'], {
        name: 'idx_wallets_user_id',
        transaction
      });

      // Composite index for promo_coins - optimized for the aggregation query
      await queryInterface.addIndex('promo_coins', ['user_id', 'status', 'expairy_date'], {
        name: 'idx_promo_coins_aggregation',
        transaction
      });

      await transaction.commit();
      console.log('All indexes created successfully');
    } catch (error) {
      await transaction.rollback();
      console.error('Error creating indexes:', error);
      throw error;
    }
  },

  down: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      // Remove all indexes in reverse order
      await queryInterface.removeIndex('promo_coins', 'idx_promo_coins_aggregation', { transaction });
      await queryInterface.removeIndex('wallets', 'idx_wallets_user_id', { transaction });
      await queryInterface.removeIndex('promo_coins', 'idx_promo_coins_user_id', { transaction });
      await queryInterface.removeIndex('promo_coins', 'idx_promo_coins_expiry', { transaction });
      await queryInterface.removeIndex('promo_coins', 'idx_promo_coins_user_status', { transaction });
      await queryInterface.removeIndex('transactions', 'idx_transactions_user_id', { transaction });
      await queryInterface.removeIndex('transactions', 'idx_transactions_user_created', { transaction });
      await queryInterface.removeIndex('users', 'idx_users_mobile_email', { transaction });
      await queryInterface.removeIndex('users', 'idx_users_username_email', { transaction });

      // Remove the prefix index using raw SQL
      await queryInterface.sequelize.query(
          'ALTER TABLE `users` DROP INDEX `idx_users_full_name`',
          { transaction }
      );

      await queryInterface.removeIndex('users', 'idx_users_mobile', { transaction });
      await queryInterface.removeIndex('users', 'idx_users_email', { transaction });
      await queryInterface.removeIndex('users', 'idx_users_username', { transaction });
      await queryInterface.removeIndex('users', 'idx_users_created_at', { transaction });
      await queryInterface.removeIndex('users', 'idx_users_otp_verified_registered', { transaction });

      await transaction.commit();
      console.log('All indexes removed successfully');
    } catch (error) {
      await transaction.rollback();
      console.error('Error removing indexes:', error);
      throw error;
    }
  }
};