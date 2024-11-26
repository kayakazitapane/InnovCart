const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const Product = require('./models/Product');

dotenv.config();
const connectDB = require('./config/database');
connectDB();

const seedData = async () => {
    try {
        // Clear existing data
        await User.deleteMany();
        await Product.deleteMany();

        // Create dummy users
        const users = await User.insertMany([
            {
                name: 'Admin',
                lastName: 'User',
                email: 'admin@example.com',
                password: '123456', // Password will be hashed
                mobileNumber: '1234567890',
                isAdmin: true,
            },
            {
                name: 'John',
                lastName: 'Doe',
                email: 'john.doe@example.com',
                password: '123456',
                mobileNumber: '9876543210',
            },
            {
                name: 'Jane',
                lastName: 'Smith',
                email: 'jane.smith@example.com',
                password: '123456',
                mobileNumber: '1122334455',
            },
        ]);

        console.log('Users added:', users);

        // Create dummy products
        const products = await Product.insertMany([
            {
                name: 'Sample Product 1',
                description: 'This is a sample product.',
                price: 10.99,
                stock: 100,
                category: 'Sample Category',
                image: '/images/sample1.jpg',
            },
            {
                name: 'Sample Product 2',
                description: 'This is another sample product.',
                price: 20.99,
                stock: 50,
                category: 'Sample Category',
                image: '/images/sample2.jpg',
            },
        ]);

        console.log('Products added:', products);

        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedData();
