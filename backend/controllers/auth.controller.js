const User = require("../models/user-models");
const bcrypt = require("bcrypt");
const { json } = require("express");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { fullname, email, password, confirmPassword, role } = req.body;
    

    if (!fullname || !email || !password || !confirmPassword ) {
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
  try{
    const token = req.cookies.token;
    if(!token){
      return res.status(401).json({
        success : false,
        message : "No token found",
      });
    }
    const decode = jwt.verify(token,process.env.JWT_SECRET);
    const user = await User.findById(decode.id).select("-password");
    if(!user){
      return res.status(401).json({
        success : false,
        message : "No user found",
      });
    }
    res.status(200).json({
      success: true,
      user,

    })

  }catch(err){
    res.status(500).json({ message: err.message });
  }

  
};



module.exports = { register, login, logout, getCurrentUser };