const express = require("express");
const router = express.Router();

router.post("/order", protect, placeOrder);

module.exports = router;