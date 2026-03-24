const User = require("../models/user-models");
const Product = require("../models/product-model");

const addToCart = async (req, res) => {
  try{
    const userId = req.user.id;
    const { productId } = req.body;

    const product = await Product.findById(productId);

    if (product) {
      return res.status(400).json({ message: "Product ID required" });
    }
    
    const user = await User.findById(userId);

    if(!user){
      return res.status(404).json({ message: "User not found" });
    }

    const item = user.cart.find(item => 
      item.product.equals(productId)
    );

    if (item) {
      item.quantity += 1;
    } else {
      user.cart.push({ product: productId, quantity: 1 });
    }

    await user.save();

    res.status(200).json({
      message: "Product added to cart",
      cart: user.cart
    });

  }catch (err){
    res.status(500).json({ message: err.message });
  }
};