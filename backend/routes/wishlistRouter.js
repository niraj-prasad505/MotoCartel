const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/auth.middleware");
const {
  addToWishlist,
  removeFromWishlist,
  moveToCart,
  getWishlist
} = require("../controllers/wishlist.controller");

router.post("/wishlist/add", protect, addToWishlist);
router.delete("/wishlist/remove", protect, removeFromWishlist);
router.post("/wishlist/move-to-cart", protect, moveToCart);
router.get("/wishlist", protect, getWishlist);