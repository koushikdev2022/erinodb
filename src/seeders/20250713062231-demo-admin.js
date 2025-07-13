'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('admin@123', 10); // Replace with your preferred default password

    await queryInterface.bulkInsert('admins', [
      {
        username: 'admin',
        full_name: 'Super Admin',
        password: hashedPassword,
        email: 'eanroadmin@yopmail.com',
        mobile: '9999999999',
        otp: null,
        validate_otp: null,
        otp_expired_at: null,
        role_id: 1, // Make sure this role_id exists in your `roles` table
        avatar: null,
        status: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('admins', { username: 'admin' }, {});
  }
};
