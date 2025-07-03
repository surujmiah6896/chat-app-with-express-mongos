/**
|--------------------------------------------------
| Title: not found Module
| Description: handle this not found page.
| Author: Md. Suruj Miah
| License: MIT
| Date: 02/07/2025
|--------------------------------------------------
*/

//dependence
const express = require("express");
const {login, getUsers, getInbox} = require("../controller/userController");
const decorateHtmlResponse = require('../middlewares/decorateHtmlResponse');

//object init
const userRouters = express.Router();

//user login
userRouters.get("/", login);

//get users
userRouters.get("/users", getUsers);

//get Inbox
userRouters.get("/inbox", getInbox);



//export module
module.exports = userRouters;
