// external imports
const express = require("express");
const { check } = require("express-validator");

// internal imports
const {
  getUsers,
  addUser,
  removeUser,
} = require("../controller/usersController");
const decorateHtmlResponse = require("../middlewares/decorateHtmlResponse");
// const avatarUpload = require("../middlewares/users/avatarUpload");

const router = express.Router();

// users page
router.get("/",  getUsers);

// add user
router.post(
  "/",
  addUser
);

// remove user
router.delete("/:id", removeUser);

module.exports = router;