const express = require("express");
const router = express.Router();

const Product = require("../models/product-model");
const { protect, isOwner } = require("../middlewares/auth.middleware"); // or middleware

// Owner only
router.post("/add-product", protect, isOwner, (req, res) => {
  res.json({ message: "Product added" });
});

// Public
router.get("/all", (req, res) => {
  res.json({ message: "All products" });
});

// GET product by ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;