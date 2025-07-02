const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


// init App
const app = express();
dotenv.config();


//database connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
