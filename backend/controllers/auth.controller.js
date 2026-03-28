const User = require("../models/user-models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { fullname, email, password, role } = req.body;

    if (!fullname || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }
    console.log(req.body);

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      fullname,
      email,
      password: hashedPassword
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
    secure: false
  });

  res.status(200).json({ message: "Logged out successfully" });
};

module.exports = { register, login, logout };