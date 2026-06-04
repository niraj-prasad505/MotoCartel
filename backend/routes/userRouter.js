const express = require("express");
const router = express.Router();

const { register, login, logout, getCurrentUser, forgotPassword, resetPassword } = require("../controllers/auth.controller");

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/me", getCurrentUser);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

module.exports = router;