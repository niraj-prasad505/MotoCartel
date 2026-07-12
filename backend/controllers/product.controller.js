const Product = require("../models/product-model");

const getAllProducts = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;

    const products = await Product.find()
      .skip((page - 1) * limit)
      .limit(limit);

    const totalProducts = await Product.countDocuments();

    res.status(200).json({
      products,
      currentPage: page,
      totalPages: Math.ceil(totalProducts / limit),
      totalProducts,
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getProductById = async (req, res) => {
  try {

    const product = await Product.findById(req.params.id);

    if (!product)
      return res.status(404).json({
        message: "Product not found",
      });

    res.json(product);

  } catch (err) {
    res.status(500).json({
      message: err.message,
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