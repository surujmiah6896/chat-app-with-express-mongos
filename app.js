const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

const { dbConnect } = require('./db/connection');
const { cookie } = require('express-validator');
const cookieParser = require('cookie-parser');


// init App
const app = express();
dotenv.config();


//database connection
dbConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

//parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

