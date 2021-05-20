const express = require("express");
const sendMail = require("../controllers/sendMail");
const router = express.Router();

router.post("/send", sendMail);

module.exports = router;
