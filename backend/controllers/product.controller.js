const mongoose = require("mongoose");
const Product = require("../models/product-model");

const getAllProducts = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const category = req.query.category || "all";
    const brand = req.query.brand || "";
    const search = req.query.search || "";
    
    // Validate first
    if (page < 1) {
      return res.status(400).json({
        success: false,
        message: "Page must be greater than 0",
      });
    }

    if (limit < 1 || limit > 30) {
      return res.status(400).json({
        success: false,
        message: "Limit must be between 1 and 30",
      });
    }

    const skip = (page - 1) * limit;

    // Query database
    const filter = {
      ...(category !== "all" && { category })
    };

    const products = await Product.find(filter)
      .skip(skip)
      .limit(limit);

    const totalProducts = await Product.countDocuments(filter);
    // Check after fetching
    // if (products.length === 0) {
    //   return res.status(404).json({
    //     success: false,
    //     message: "No products found",
    //   });
    // }

    

    res.status(200).json({
      success: true,
      products,
      currentPage: page,
      totalPages: Math.ceil(totalProducts / limit),
      totalProducts,
      limit,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Product ID",
      });
    }

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      product,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const addProduct = async (req, res) => {
  try {

    const product = await Product.create(req.body);

    res.status(201).json(product);

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
};