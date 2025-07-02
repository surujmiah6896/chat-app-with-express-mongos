const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

const { dbConnect } = require('./src/DB/connection');
const cookieParser = require('cookie-parser');
const { notFound, errorHandler } = require('./src/Middleware/notFoundMiddleware');



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


//error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// not found handler
app.use(notFound);

// error handler
app.use(errorHandler);


//listen app
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

