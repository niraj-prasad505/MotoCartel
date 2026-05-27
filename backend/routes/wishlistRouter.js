const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/auth.middleware");
const {
  addToWishlist,
  removeFromWishlist,
  moveToCart,
  getWishlist
} = require("../controllers/wishlist.controller");

router.post("/add", protect, addToWishlist);

router.delete("/remove", protect, removeFromWishlist);

router.post("/move-to-cart", protect, moveToCart);

router.get("/", protect, getWishlist);

module.exports = router;