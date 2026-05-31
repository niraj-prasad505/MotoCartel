const express = require("express");
const router = express.Router();

const {getUserAddress, SaveUserAddress, deleteUserAddress } = require("../controllers/user.controller");

router.post("/address", getUserAddress);
router.put("/address", SaveUserAddress);
router.delete("/address", deleteUserAddress);

module.exports = router;