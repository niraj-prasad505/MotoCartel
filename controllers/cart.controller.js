const User = require("../models/user-models");
const Product = require("../models/product-model");

const addToCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId } = req.body;

    if (!productId) {
      return res.status(400).json({ message: "Product ID required" });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const user = await User.findById(userId);

    const existingItem = user.cart.find(item =>
      item.product.equals(productId)
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      user.cart.push({ product: productId, quantity: 1 });
    }

    await user.save();

    res.json({ message: "Added to cart", cart: user.cart });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const removeFromCart = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const { productId } = req.body;

    user.cart = user.cart.filter(item =>
      !item.product.equals(productId)
    );

    await user.save();

    res.json({ message: "Removed", cart: user.cart });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addToCart, removeFromCart };