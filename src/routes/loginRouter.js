const express  = require('express');

//import
const {getLogin} = require("../controller/loginController");
const decorateHtmlResponse = require("../middlewares/decorateHtmlResponse");

const router = express.Router();
//login page
router.get("/", decorateHtmlResponse, getLogin);

//export
module.exports = router;