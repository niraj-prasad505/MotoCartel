const express = require("express");
const router = express.Router();

const { protect } = require("../middlewares/auth.middleware");
const { placeOrder } = require("../controllers/order.Controller");

// Place order
router.post("/order", protect, placeOrder);

module.exports = router;