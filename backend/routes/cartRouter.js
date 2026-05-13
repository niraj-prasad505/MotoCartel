const express = require("express");
const router = express.Router();

const { addToCart, removeFromCart, getCartDetails, increaseQuantity, decreaseQuantity } = require("../controllers/cart.controller");
const { protect } = require("../middlewares/auth.middleware");

// Add to cart
router.post("/add", protect, addToCart);

// Get cart
router.get("/getCart", protect, getCartDetails);

// Remove from cart
router.delete("/remove", protect, removeFromCart);

// Update quantity (increase)
router.patch("/increase", protect, increaseQuantity);

// Update quantity (decrease)
router.patch("/decrease", protect, decreaseQuantity);

module.exports = router;