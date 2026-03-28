const express = require("express");
const router = express.Router();

const { addToCart, removeFromCart } = require("../controllers/cart.controller");
const { protect } = require("../middlewares/auth.middleware");

// Add to cart
router.post("/", protect, addToCart);

// Get cart (you can improve later)
router.get("/", protect, (req, res) => {
    res.send("Get cart working");
});

// Remove from cart
router.delete("/remove", protect, removeFromCart);

module.exports = router;