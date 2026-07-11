const EmailOtpModel = require("../models/EmailOtp-model");
const User = require("../models/user-models");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const MAX_OTP_REQUESTS = 4;
const OTP_EXPIRY_TIME = 5 * 60 * 1000;
const sendOtpEmail = require("../utils/sendOtpEmail");
const validator = require("validator");
const MAX_OTP_ATTEMPTS = 4;


const sendEmailOtp = async (req, res) => {
  // const email = req.body.email?.trim().toLowerCase();
  // console.log("Received email for OTP verification:", email);
  try {
    const email = req.body.email?.trim().toLowerCase();
    if (!email) {
      return res.status(400).json({
        message: "Email is required",
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        message: "Invalid email format",
      });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists using this email" });
    }

    // Check if OTP record already exists
    const existingOtp = await EmailOtpModel.findOne({ email });

    // Generate OTP
    const otp = crypto.randomInt(100000, 1000000).toString();

    // Hash OTP
    const hashedOtp = await bcrypt.hash(otp, 10);

    if (existingOtp) {

      // Reset otpSentCount if the previous OTP has expired
      if (existingOtp.expiresAt <= new Date()) {
        existingOtp.otpSentCount = 0;
      }

      // Limit OTP resend requests
      if (existingOtp.otpSentCount >= MAX_OTP_REQUESTS) {
        return res.status(429).json({
          message: "Maximum OTP requests reached. Please try again later.",
        });
      }

      // Update existing OTP
      existingOtp.otp = hashedOtp;
      existingOtp.verified = false;
      existingOtp.attempts = 0;
      existingOtp.otpSentCount += 1;
      existingOtp.lastSentAt = new Date();
      existingOtp.expiresAt = new Date(Date.now() + OTP_EXPIRY_TIME);
      existingOtp.ipAddress = req.ip || null;

      await existingOtp.save();
    } else {
      // Create new OTP record
      const newOtp = new EmailOtpModel({
        email,
        otp: hashedOtp,
        verified: false,
        attempts: 0,
        otpSentCount: 1,
        lastSentAt: new Date(),
        expiresAt: new Date(Date.now() + OTP_EXPIRY_TIME),
        ipAddress: req.ip || null,
      });

      await newOtp.save();
    }

    // Send Email
    await sendOtpEmail({
      email,
      subject: "Your MotoCartel OTP Code",
      message: `
      <h2>Email Verification</h2>
      <p>Your OTP is:</p>
      <h1>${otp}</h1>
      <p>This OTP is valid for 5 minutes.</p>
      <p>Please do not share this OTP with anyone.</p>
      <p>If you did not request this, please ignore this email.</p>`,
    });

    // Respond with success
    return res.status(200).json({
      message: "OTP sent successfully",
    });

  } catch (error) {
    console.error("Error handling OTP generation:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const EmailOtpVerification = async (req, res) => {
  const { email, otp } = req.body;
  const normalizedEmail = email?.trim().toLowerCase();
  const normalizedOtp = otp?.trim();

  try {
    if (!normalizedEmail || !normalizedOtp) {
      return res.status(400).json({
        message: "Email and OTP are required",
      });
    }

    if (!validator.isEmail(normalizedEmail)) {
      return res.status(400).json({
        message: "Invalid email format",
      });
    }

    const existingOtp = await EmailOtpModel.findOne({ email: normalizedEmail });
    if (!existingOtp) {
      return res.status(400).json({
        message: "No OTP request found for this email",
      });
    }
    if (existingOtp.expiresAt <= new Date()) {
      return res.status(400).json({
        message: "OTP has expired. Please request a new one.",
      });
    }
    if (existingOtp.attempts >= MAX_OTP_ATTEMPTS) {
      return res.status(429).json({
        message: "Maximum OTP verification attempts reached. Please request a new OTP.",
      });
    }

    const isOtpValid = await bcrypt.compare(normalizedOtp, existingOtp.otp);
    if (!isOtpValid) {
      existingOtp.attempts += 1;
      await existingOtp.save();

      return res.status(400).json({
        verified: false,
        message: "Invalid OTP",
        remainingAttempts: MAX_OTP_ATTEMPTS - existingOtp.attempts,
      });
    }
    existingOtp.verified = true;
    await existingOtp.save();
    return res.status(200).json({
      verified: true,
      message: "OTP verified successfully",
    });


  } catch (error) {
    console.error("Error handling OTP verification:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};


module.exports = {
  sendEmailOtp,
  EmailOtpVerification
};