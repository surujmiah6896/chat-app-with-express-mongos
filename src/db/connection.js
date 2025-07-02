/**
|--------------------------------------------------
| Title: Database Connection Module
| Description: This module establishes a connection to the MongoDB database using Mongoose.
| Author: Md. Suruj Miah
| License: MIT
| Date: 2023-10-01
|--------------------------------------------------
*/

// Import necessary modules
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// object initialization
dotenv.config();
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/chat-app';

const db = {};
// Function to connect to the database
db.dbConnect = async () => {
    try {
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1); // Exit the process with failure
    }
};

// export the db object
module.exports = db;