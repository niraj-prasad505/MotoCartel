const express = require("express");
const router = express.Router();

const { protect, isOwner } = require("../middleware/auth.middleware");

// Owner only
router.post("/add-product", protect, isOwner, (req, res) => {
  res.json({ message: "Product added" });
});

// Public
router.get("/all", (req, res) => {
  res.json({ message: "All products" });
});

module.exports = router;