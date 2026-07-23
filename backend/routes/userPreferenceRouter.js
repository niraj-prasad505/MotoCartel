const express = require("express");
const router = express.Router();


const { protect } = require("../middlewares/auth.middleware");
const { updateUserPreference } = require("../controllers/userPreference.controller");

router.post("/", protect, updateUserPreference);

module.exports = router;