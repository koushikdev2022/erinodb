'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
      {
        cat_name: 'Grocery',
        cat_short_name: 'Gr',
        status: 1,
        banner: "banner1.png",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cat_name: 'Pharmacy',
        cat_short_name: 'Ph',
        banner: "banner1.png",
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cat_name: 'Clothing',
        cat_short_name: 'Cloth',
        banner: "banner1.png",
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cat_name: 'Cafe',
        cat_short_name: 'Ca',
        banner: "banner1.png",
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cat_name: 'Restaurant',
        cat_short_name: 'Res',
        banner: "banner1.png",
        status: 1,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {});
  }
};
