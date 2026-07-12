const express = require("express");
const router = express.Router();

const Product = require("../models/product-model");
const { protect, isOwner } = require("../middlewares/auth.middleware");
const {
  getAllProducts,
  getProductById,
  addProduct,
} = require("../controllers/product.controller");

// Owner
router.post("/add-product", protect, isOwner, addProduct);

// Public
router.get("/all", getAllProducts);

// Public
router.get("/:id", getProductById);

module.exports = router;