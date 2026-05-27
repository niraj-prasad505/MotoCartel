const User = require("../models/user-models");
const { addToCart } = require("./cart.controller");
const Product = require("../models/product-model");

const addToWishlist = async (req, res) => {
  try {
    // console.log(req.user);
    const userid = req.user.id;

    const { productId } = req.body;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const user = await User.findById(userid);
    // console.log(user);

    const existingItem = user.wishlist.find(
      item => item.toString() === productId
    );
    if (existingItem) {
      return await removeFromWishlist(req, res);
    }
    user.wishlist.push(productId);

    await user.save();
    res.json({ success: true, wishlist: user.wishlist });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const removeFromWishlist = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const { productId } = req.body;
    user.wishlist = user.wishlist.filter(
      item => item.toString() !== productId
    );
    await user.save();
    res.json({ success: true, wishlist: user.wishlist });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const moveToCart = async (req, res) => {
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

    // Remove from wishlist
    user.wishlist = user.wishlist.filter(
      item => item.toString() !== productId
    );

    await user.save();

    // Add to cart
    return await addToCart(req, res);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const getWishlist = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate("wishlist");
    res.json({ wishlist: user.wishlist });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addToWishlist,
  removeFromWishlist,
  moveToCart,
  getWishlist
};
