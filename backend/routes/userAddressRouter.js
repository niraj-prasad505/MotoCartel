const express = require("express");
const router = express.Router();

const {getUserAddress, SaveUserAddress, deleteUserAddress } = require("../controllers/user.controller");
const { protect } = require("../middlewares/auth.middleware");

router.get("/address", protect, getUserAddress);
router.put("/address", protect, SaveUserAddress);
router.delete("/address", protect, deleteUserAddress);

module.exports = router;