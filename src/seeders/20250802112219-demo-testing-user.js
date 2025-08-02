'use strict';

const bcrypt = require("bcryptjs");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const users = [];

        // Generate dates from last week to current date
        const currentDate = new Date();
        const lastWeekDate = new Date();
        lastWeekDate.setDate(currentDate.getDate() - 7);

        const firstNames = [
            'Rahul', 'Priya', 'Amit', 'Sneha', 'Rajesh', 'Anita', 'Vikash', 'Ritu', 'Suresh', 'Kavita',
            'Arjun', 'Pooja', 'Deepak', 'Meera', 'Rohit', 'Sushma', 'Manish', 'Nisha', 'Arun', 'Geeta',
            'Vivek', 'Sunita', 'Manoj', 'Rekha', 'Ashok', 'Seema', 'Ravi', 'Kiran', 'Sanjay', 'Asha',
            'Nitin', 'Urmila', 'Prakash', 'Madhuri', 'Gopal', 'Lata', 'Harish', 'Vandana', 'Jatin', 'Manju',
            'Sachin', 'Preeti', 'Ramesh', 'Sita', 'Ajay', 'Radha', 'Mohan', 'Gita', 'Vinod', 'Sarita',
            'Kamal', 'Usha', 'Narayan', 'Shanti'
        ];

        const lastNames = [
            'Kumar', 'Singh', 'Sharma', 'Gupta', 'Das', 'Roy', 'Banerjee', 'Ghosh', 'Mukherjee', 'Chakraborty',
            'Jha', 'Mishra', 'Pandey', 'Yadav', 'Verma', 'Agarwal', 'Jain', 'Shah', 'Patel', 'Mehta',
            'Sinha', 'Chandra', 'Prasad', 'Thakur', 'Dubey', 'Tiwari', 'Saxena', 'Chopra', 'Malhotra', 'Kapoor'
        ];

        // Extended Kolkata coordinates for users (54 different locations)
        const kolkataCoordinates = [
            {lat: 22.5726, long: 88.3639}, // Park Street
            {lat: 22.5675, long: 88.4132}, // Salt Lake
            {lat: 22.5180, long: 88.3634}, // Gariahat
            {lat: 22.5448, long: 88.3635}, // Ballygunge
            {lat: 22.5804, long: 88.3266}, // Howrah
            {lat: 22.5697, long: 88.3697}, // Sealdah
            {lat: 22.5626, long: 88.3505}, // Esplanade
            {lat: 22.5535, long: 88.3570}, // Park Circus
            {lat: 22.4953, long: 88.3712}, // Jadavpur
            {lat: 22.4697, long: 88.3103}, // Behala
            {lat: 22.5916, long: 88.3700}, // Shyambazar
            {lat: 22.6390, long: 88.4198}, // Dum Dum
            {lat: 22.6757, long: 88.4020}, // Belghoria
            {lat: 22.5949, long: 88.4643}, // Newtown
            {lat: 22.6207, long: 88.4357}, // Rajarhat
            {lat: 22.5840, long: 88.3950}, // Beliaghata
            {lat: 22.5916, long: 88.3958}, // Kankurgachi
            {lat: 22.5216, long: 88.3298}, // Alipore
            {lat: 22.5216, long: 88.3432}, // Bhowanipore
            {lat: 22.7196, long: 88.4643}, // Barasat
            {lat: 22.4697, long: 88.3890}, // Garia
            {lat: 22.5180, long: 88.4134}, // Kasba
            {lat: 22.5535, long: 88.3470}, // Shyama Charan
            {lat: 22.5448, long: 88.3635}, // Beckbagan
            {lat: 22.5180, long: 88.3634}, // Hazra Road
            {lat: 22.5535, long: 88.3570}, // Lansdowne
            {lat: 22.5697, long: 88.3535}, // Dharmatala
            {lat: 22.5726, long: 88.3639}, // Central Avenue
            {lat: 22.4953, long: 88.3712}, // Southern Avenue
            {lat: 22.5675, long: 88.4132}, // EM Bypass
            {lat: 22.6390, long: 88.4198}, // VIP Road
            {lat: 22.5949, long: 88.4400}, // Sector V
            {lat: 22.5697, long: 88.3535}, // Chowringhee
            {lat: 22.5535, long: 88.3570}, // Lenin Sarani
            {lat: 22.5448, long: 88.3635}, // Elgin Road
            {lat: 22.5726, long: 88.3639}, // College Street
            {lat: 22.4953, long: 88.3712}, // Jodhpur Park
            {lat: 22.5180, long: 88.3634}, // Rash Behari
            {lat: 22.5675, long: 88.4132}, // Lake Mall Area
            {lat: 22.6757, long: 88.4020}, // Mani Square
            {lat: 22.5626, long: 88.3505}, // Ruby Area
            {lat: 22.5535, long: 88.3570}, // Camac Street
            {lat: 22.4697, long: 88.3890}, // Garia Station
            {lat: 22.7196, long: 88.4643}, // Barasat Station
            {lat: 22.6390, long: 88.4198}, // Dum Dum Metro
            {lat: 22.6757, long: 88.4020}, // Belghoria Express
            {lat: 22.5180, long: 88.3634}, // Rashbehari Metro
            {lat: 22.5697, long: 88.3697}, // Sealdah Metro
            {lat: 22.5675, long: 88.4132}, // Salt Lake Stadium
            {lat: 22.5949, long: 88.4643}, // Newtown Action Area
            {lat: 22.6207, long: 88.4357}, // Rajarhat Chowmatha
            {lat: 22.5840, long: 88.3950}, // Beliaghata Flyover
            {lat: 22.5916, long: 88.3958}, // Kankurgachi Metro
            {lat: 22.5216, long: 88.3298}, // Alipore Zoo
        ];

        // Generate random date between last week and current date
        function getRandomDate(start, end) {
            return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        }

        // Generate random mobile number
        function generateMobile() {
            return '98' + Math.floor(Math.random() * 100000000).toString().padStart(8, '0');
        }

        // Generate random OTP
        function generateOTP() {
            return Math.floor(1000 + Math.random() * 9000).toString();
        }

        // Generate password in the required format
        function generatePassword() {
            // Generate bcrypt hash
            const hash = bcrypt.hashSync('123456789', 6); // Using rounds=6 as per your example
            // Generate timestamp
            const timestamp = Date.now();
            // Combine in the format: hash,_,timestamp
            return `${hash},_,${timestamp}`;
        }

        for (let i = 0; i < 54; i++) {
            const firstName = firstNames[i % firstNames.length];
            const lastName = lastNames[i % lastNames.length];
            const fullName = `${firstName} ${lastName}`;
            const username = `${firstName.toLowerCase()}_${lastName.toLowerCase()}_${i + 1}`;

            // All emails will use yopmail.com domain only
            const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${i + 1}@yopmail.com`;

            const createdDate = getRandomDate(lastWeekDate, currentDate);
            const updatedDate = new Date(createdDate.getTime() + Math.random() * (currentDate.getTime() - createdDate.getTime()));

            // Get coordinates from Kolkata (mandatory for every user)
            const coordinates = kolkataCoordinates[i];

            // OTP validation date (some users have validated OTP, some haven't)
            const validateOtp = Math.random() > 0.3 ? getRandomDate(createdDate, currentDate) : null;

            users.push({
                full_name: fullName,
                username: username,
                email: email,
                mobile: generateMobile(),
                password: generatePassword(), // Using the specified format
                otp: Math.random() > 0.4 ? generateOTP() : null,
                validate_otp: validateOtp,
                lat: coordinates.lat, // Mandatory for every user
                long: coordinates.long, // Mandatory for every user
                avatar: Math.random() > 0.6 ? `avatar_${i + 1}.jpg` : null,
                is_otp_verified: 1,
                is_only_otp_registered: 2,
                status: 1,
                is_deleted: 0,
                created_at: createdDate,
                updated_at: updatedDate
            });
        }

        await queryInterface.bulkInsert('users', users);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('users', null, {});
    }
};
