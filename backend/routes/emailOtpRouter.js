const express = require("express");
const router = express.Router();

const { sendEmailOtp, EmailOtpVerification } = require("../controllers/email-otp.controller");

router.post("/send", sendEmailOtp);

router.post("/verify", EmailOtpVerification);

module.exports = router;