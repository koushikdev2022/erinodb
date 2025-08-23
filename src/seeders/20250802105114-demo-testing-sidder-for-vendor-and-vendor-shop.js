'use strict';

const bcrypt = require("bcryptjs");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const hashedPassword = await bcrypt.hash('123456789', 10);
        // First, let's create some vendors
        const vendors = await queryInterface.bulkInsert('vendors', [{
            first_name: 'Rajesh',
            last_name: 'Kumar',
            username: 'rajesh_pizza',
            email: 'rajesh@pizzahut.com',
            password: hashedPassword,
            mobile: '9876543210',
            brand_name: 'Pizza Hut',
            status: 1,
            is_only_otp_registered: 2,
            is_otp_verified: 1,
            created_at: new Date(),
            updated_at: new Date()
        }, {
            first_name: 'Amit',
            last_name: 'Singh',
            username: 'amit_diamonds',
            email: 'amit@diamonds.com',
            password: hashedPassword,
            mobile: '9876543211',
            brand_name: 'Diamonds Restaurant',
            status: 1,
            is_only_otp_registered: 2,
            is_otp_verified: 1,
            created_at: new Date(),
            updated_at: new Date()
        }, {
            first_name: 'Priya',
            last_name: 'Das',
            username: 'priya_kfc',
            email: 'priya@kfc.com',
            password: hashedPassword,
            mobile: '9876543212',
            brand_name: 'KFC',
            status: 1,
            is_only_otp_registered: 2,
            is_otp_verified: 1,
            created_at: new Date(),
            updated_at: new Date()
        }, {
            first_name: 'Suresh',
            last_name: 'Gupta',
            username: 'suresh_hfc',
            email: 'suresh@hfc.com',
            password: hashedPassword,
            mobile: '9876543213',
            brand_name: 'HFC',
            status: 1,
            is_only_otp_registered: 2,
            is_otp_verified: 1,
            created_at: new Date(),
            updated_at: new Date()
        }, {
            first_name: 'Ravi',
            last_name: 'Sharma',
            username: 'ravi_mcdonalds',
            email: 'ravi@mcdonalds.com',
            password: hashedPassword,
            mobile: '9876543214',
            brand_name: 'McDonalds',
            status: 1,
            is_only_otp_registered: 2,
            is_otp_verified: 1,
            created_at: new Date(),
            updated_at: new Date()
        }, {
            first_name: 'Anita',
            last_name: 'Roy',
            username: 'anita_dominos',
            email: 'anita@dominos.com',
            password: hashedPassword,
            mobile: '9876543215',
            brand_name: 'Dominos',
            status: 1,
            is_only_otp_registered: 2,
            is_otp_verified: 1,
            created_at: new Date(),
            updated_at: new Date()
        }, {
            first_name: 'Vikash',
            last_name: 'Jha',
            username: 'vikash_subway',
            email: 'vikash@subway.com',
            password: hashedPassword,
            mobile: '9876543216',
            brand_name: 'Subway',
            status: 1,
            is_only_otp_registered: 2,
            is_otp_verified: 1,
            created_at: new Date(),
            updated_at: new Date()
        }, {
            first_name: 'Sneha',
            last_name: 'Banerjee',
            username: 'sneha_burgking',
            email: 'sneha@burgerking.com',
            password: hashedPassword,
            mobile: '9876543217',
            brand_name: 'Burger King',
            status: 1,
            is_only_otp_registered: 2,
            is_otp_verified: 1,
            created_at: new Date(),
            updated_at: new Date()
        }], { returning: true });

        // Now create 50 vendor shops with Kolkata coordinates
        const vendorShops = [];
        const shopNames = ['Pizza Hut Park Street', 'Pizza Hut Salt Lake', 'Pizza Hut Gariahat', 'Pizza Hut Ballygunge', 'Pizza Hut Howrah', 'Pizza Hut Sealdah', 'Diamonds Esplanade', 'Diamonds Park Circus', 'Diamonds Rashbehari', 'Diamonds New Market', 'Diamonds Jadavpur', 'Diamonds Behala', 'KFC City Centre', 'KFC Acropolis', 'KFC Forum', 'KFC South City', 'KFC Lake Mall', 'KFC Mani Square', 'HFC Ruby', 'HFC Camac Street', 'HFC Garia', 'HFC Barasat', 'HFC Dum Dum', 'HFC Belghoria', 'McDonalds Dalhousie', 'McDonalds Shyambazar', 'McDonalds Tollygunge', 'McDonalds Kasba', 'McDonalds Rajarhat', 'McDonalds Newtown', 'Dominos College Street', 'Dominos Lenin Sarani', 'Dominos Elgin Road', 'Dominos Chowringhee', 'Dominos Alipore', 'Dominos Jodhpur Park', 'Subway Beckbagan', 'Subway Hazra Road', 'Subway Lansdowne', 'Subway Dharmatala', 'Subway Bhowanipore', 'Subway Kankurgachi', 'Burger King Rash Behari', 'Burger King Shyama Charan', 'Burger King Central Avenue', 'Burger King Southern Avenue', 'Burger King EM Bypass', 'Burger King VIP Road', 'Food Court Sector V', 'Quick Bite Beliaghata'];

        const addresses = [{
            street: "Park Street",
            area: "Park Street",
            city: "Kolkata",
            state: "West Bengal"
        }, { street: "Salt Lake", area: "Bidhannagar", city: "Kolkata", state: "West Bengal" }, {
            street: "Gariahat Road",
            area: "Gariahat",
            city: "Kolkata",
            state: "West Bengal"
        }, { street: "Ballygunge", area: "Ballygunge", city: "Kolkata", state: "West Bengal" }, {
            street: "Howrah Station",
            area: "Howrah",
            city: "Howrah",
            state: "West Bengal"
        }, { street: "Sealdah", area: "Sealdah", city: "Kolkata", state: "West Bengal" }, {
            street: "Esplanade",
            area: "Esplanade",
            city: "Kolkata",
            state: "West Bengal"
        }, {
            street: "Park Circus",
            area: "Park Circus",
            city: "Kolkata",
            state: "West Bengal"
        }, {
            street: "Rashbehari Avenue",
            area: "Rashbehari",
            city: "Kolkata",
            state: "West Bengal"
        }, { street: "New Market", area: "New Market", city: "Kolkata", state: "West Bengal" },];

        // Kolkata coordinates range: Lat 22.4697-22.6757, Long 88.2556-88.4643
        const kolkataCoordinates = [
            { lat: 22.5726, long: 88.3639 }, // Park Street
            { lat: 22.5675, long: 88.4132 }, // Salt Lake
            { lat: 22.5180, long: 88.3634 }, // Gariahat
            { lat: 22.5448, long: 88.3635 }, // Ballygunge
            { lat: 22.5804, long: 88.3266 }, // Howrah
            { lat: 22.5697, long: 88.3697 }, // Sealdah
            { lat: 22.5626, long: 88.3505 }, // Esplanade
            { lat: 22.5535, long: 88.3570 }, // Park Circus
            { lat: 22.5180, long: 88.3634 }, // Rashbehari
            { lat: 22.5697, long: 88.3535 }, // New Market
            { lat: 22.4953, long: 88.3712 }, // Jadavpur
            { lat: 22.4697, long: 88.3103 }, // Behala
            { lat: 22.5675, long: 88.4132 }, // Salt Lake City Centre
            { lat: 22.5726, long: 88.3639 }, // Park Street
            { lat: 22.5697, long: 88.3697 }, // Forum
            { lat: 22.5180, long: 88.3634 }, // South City
            { lat: 22.5675, long: 88.4132 }, // Lake Mall
            { lat: 22.6757, long: 88.4020 }, // Mani Square
            { lat: 22.5626, long: 88.3505 }, // Ruby
            { lat: 22.5535, long: 88.3570 }, // Camac Street
            { lat: 22.4697, long: 88.3890 }, // Garia
            { lat: 22.7196, long: 88.4643 }, // Barasat
            { lat: 22.6390, long: 88.4198 }, // Dum Dum
            { lat: 22.6757, long: 88.4020 }, // Belghoria
            { lat: 22.5626, long: 88.3505 }, // Dalhousie
            { lat: 22.5916, long: 88.3700 }, // Shyambazar
            { lat: 22.4953, long: 88.3712 }, // Tollygunge
            { lat: 22.5180, long: 88.4134 }, // Kasba
            { lat: 22.6207, long: 88.4357 }, // Rajarhat
            { lat: 22.5949, long: 88.4643 }, // Newtown
            { lat: 22.5726, long: 88.3639 }, // College Street
            { lat: 22.5535, long: 88.3570 }, // Lenin Sarani
            { lat: 22.5448, long: 88.3635 }, // Elgin Road
            { lat: 22.5697, long: 88.3535 }, // Chowringhee
            { lat: 22.5216, long: 88.3298 }, // Alipore
            { lat: 22.4953, long: 88.3712 }, // Jodhpur Park
            { lat: 22.5448, long: 88.3635 }, // Beckbagan
            { lat: 22.5180, long: 88.3634 }, // Hazra Road
            { lat: 22.5535, long: 88.3570 }, // Lansdowne
            { lat: 22.5697, long: 88.3535 }, // Dharmatala
            { lat: 22.5216, long: 88.3432 }, // Bhowanipore
            { lat: 22.5916, long: 88.3958 }, // Kankurgachi
            { lat: 22.5180, long: 88.3634 }, // Rash Behari
            { lat: 22.5535, long: 88.3470 }, // Shyama Charan
            { lat: 22.5726, long: 88.3639 }, // Central Avenue
            { lat: 22.4953, long: 88.3712 }, // Southern Avenue
            { lat: 22.5675, long: 88.4132 }, // EM Bypass
            { lat: 22.6390, long: 88.4198 }, // VIP Road
            { lat: 22.5949, long: 88.4400 }, // Sector V
            { lat: 22.5840, long: 88.3950 }, // Beliaghata
        ];

        for (let i = 0; i < 50; i++) {
            const vendorId = (i % 8) + 1; // Distribute among 8 vendors
            const coordinates = kolkataCoordinates[i];
            const addressIndex = i % addresses.length;

            const categoryIds = [1, 2, 3, 4, 5];
            // Assign category ID in round robin manner
            const catId = categoryIds[i % categoryIds.length];

            vendorShops.push({
                vendor_id: vendorId,
                shop_name: shopNames[i],
                gst_no: `22AAAAA${String(1111 + i).padStart(4, '0')}A1Z5`,
                shop_address: JSON.stringify(addresses[addressIndex]),
                zip: String(700001 + (i % 100)).padStart(6, '0'),
                lat: coordinates.lat,
                long: coordinates.long,
                avatar: `shop_${i + 1}.jpg`,
                cat_id: catId, // Random category 1-5
                status: 1,
                is_deleted: 0,
                is_primary: i % 8 === 0 ? 1 : 0, // First shop of each vendor is primary
                created_at: new Date(),
                updated_at: new Date()
            });
        }

        await queryInterface.bulkInsert('vendor_shops', vendorShops);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('vendor_shops', null, {});
        await queryInterface.bulkDelete('vendors', null, {});
    }
};
