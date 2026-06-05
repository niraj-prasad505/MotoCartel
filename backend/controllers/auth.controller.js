const User = require("../models/user-models");
const bcrypt = require("bcrypt");
const { json } = require("express");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/sendEmail");

const register = async (req, res) => {
  try {
    const { fullname, email, password, confirmPassword, role } = req.body;


    if (!fullname || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields required" });
    }


    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);



    const newUser = await User.create({
      fullname,
      email,
      password: hashedPassword,
      role: role || "user",
    });

    res.status(201).json({
      message: "User created",
      user: {
        _id: newUser._id,
        email: newUser.email
      }
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        email: user.email
      }
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: false,
    sameSite: "lax"
  });

  res.status(200).json({ message: "Logged out successfully" });
};

const getCurrentUser = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token found",
      });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decode.id).select("-password");
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "No user found",
      });
    }
    res.status(200).json({
      success: true,
      user,

    })

  } catch (err) {
    res.status(500).json({ message: err.message });
  }


};

const forgotPassword = async (req, res) => {
  // Implementation for forgot password functionality

  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // Generate reset token and send email
    const resetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000;
    await user.save();

    const resetUrl = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;
    // console.log("CLIENT_URL =", process.env.CLIENT_URL);
    // console.log("RESET_URL =", resetUrl);
    await sendEmail({
      email: user.email,
      subject: "Password Reset",
      message: `
    <h2>Password Reset Request</h2>
    <p>Hello ${user.fullname},</p>

    <p>Click the link below to reset your password:</p>

    <a href="${resetUrl}">
      Reset Password
    </a>

    <p>This link will expire in 1 hour.</p>

    <p>If you didn't request this, please ignore this email.</p>
  `
    });
    res.status(200).json({ message: "Password reset email sent" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const resetPassword = async (req, res) => {
  // Implementation for reset password functionality
  try {
    const { token } = req.params;
    const { password, confirmPassword } = req.body;

    if (password.length < 8) {
      return res.status(400).json({
        message: "Password must be at least 8 characters",
      });
    }

    if (!password || !confirmPassword) {
      return res.status(400).json({ message: "All fields required" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    user.resetPasswordToken = null;
    user.resetPasswordExpires = null;
    await user.save();
    res.status(200).json({ message: "Password reset successful" });

  }
  catch (err) {
    res.status(500).json({ message: err.message });
  }
};


module.exports = {
  register,
  login,
  logout,
  getCurrentUser,
  forgotPassword,
  resetPassword,
};