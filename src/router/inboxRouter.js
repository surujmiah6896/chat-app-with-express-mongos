// external imports
const express = require("express");

// internal imports
const { getInbox } = require("../controller/inboxController");
const decorateHtmlResponse = require("../middlewares/decorateHtmlResponse");

const router = express.Router();

// inbox page
router.get("/",  getInbox);
// router.get("/", decorateHtmlResponse("Inbox"), getInbox);

module.exports = router;
