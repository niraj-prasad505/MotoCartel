const express = require("express");
const router = express.Router();

const { addToCart, removeFromCart, getCartDetails } = require("../controllers/cart.controller");
const { protect } = require("../middlewares/auth.middleware");

// Add to cart
router.post("/add", protect, addToCart);

// Get cart
router.get("/getCart", protect, getCartDetails);

// Remove from cart
router.delete("/remove", protect, removeFromCart);

module.exports = router;