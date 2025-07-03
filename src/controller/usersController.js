// external imports
const bcrypt = require("bcrypt");
const { unlink } = require("fs");
const path = require("path");

// internal imports
// const User = require("../models/People");

// get users page
async function getUsers(req, res, next) {
  res.render("user/users");
 
}

// add user
async function addUser(req, res, next) {
  
}

// remove user
async function removeUser(req, res, next) {
  
}

module.exports = {
  getUsers,
  addUser,
  removeUser,
};
