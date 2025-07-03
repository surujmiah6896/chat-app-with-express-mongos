const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const mongoose = require("mongoose");

const { dbConnect } = require('./src/db/connection');
const cookieParser = require('cookie-parser');
const { notFound, errorHandler } = require('./src/middlewares/notFoundMiddelware');
// const userRouters = require("./src/routes/userRoutes");
const { login, getUsers, getInbox } = require("./src/controller/userController");



// init App
const app = express();
dotenv.config();


//database connection

dotenv.config();
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/chat-app';

// dbConnect();
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Database connection failed:", err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

//parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

//route setup
//user login
app.use("/", (req, res) => {
  res.render("user/index");
});

//get users
app.use("/users", getUsers);

//get Inbox
app.use("/inbox", getInbox);

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

