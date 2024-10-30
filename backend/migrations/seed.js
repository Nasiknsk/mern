// backend/migrations/seed.js
const mongoose = require('mongoose');
const Category = require('../models/category');
const Product = require('../models/product');
require('dotenv').config();
const connectDB = require('../config/db');

const seedData = async () => {
    await connectDB();

    await Category.deleteMany();
    await Product.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Electronics' },
        { name: 'Furniture' },
    ]);

    const products = await Product.insertMany([
        { name: 'Laptop', category: categories[0]._id },
        { name: 'Chair', category: categories[1]._id },
    ]);

    console.log('Seeding complete!');
    mongoose.connection.close();
};

seedData();
