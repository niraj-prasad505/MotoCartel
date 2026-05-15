const User = require("../models/user-models");
const Product = require("../models/product-model");

const addToCart = async (req, res) => {
  try {

    const userId = req.user.id;
    const { productId } = req.body;
    
    const product = await Product.findById(productId);
    
    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    const user = await User.findById(userId);
    
    const existingItem = user.cart.find(
      item => item.product.toString() === productId
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {

      user.cart.push({
        product: productId,
        quantity: 1
      });

    }

    await user.save();

    res.json({
      success: true,
      cart: user.cart
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: err.message
    });

  }
};

// Remove from cart
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

// Get cart details
const getCartDetails = async (req, res) => {
  try {

    const user = await User.findById(req.user.id)
      .populate("cart.product");

    res.status(200).json({
      success: true,
      cart: user.cart
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message
    });

  }
};

// Increase quantity
const increaseQuantity = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const { productId } = req.body;

    const item = user.cart.find(item => item.product.toString() === productId);

    if (item) {
      item.quantity += 1;
      await user.save();
      res.json({ success: true, cart: user.cart });
    } else {
      res.status(404).json({ success: false, message: "Item not found in cart" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

//  Decrease quantity
const decreaseQuantity = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const { productId } = req.body;

    const item = user.cart.find(item => item.product.toString() === productId);

    if (item) {
      item.quantity -= 1;
      if (item.quantity <= 0) {
        user.cart = user.cart.filter(cartItem => cartItem._id.toString() !== item._id.toString());
      }
      await user.save();
      res.json({ success: true, cart: user.cart });
    } else {
      res.status(404).json({ success: false, message: "Item not found in cart" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { addToCart, removeFromCart, getCartDetails, increaseQuantity, decreaseQuantity };