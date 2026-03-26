const Order = require("../models/order.model");
const User = require("../models/user-models");
const Product = require("../models/product.model");

const placeOrder = async (req, res) =>{
    try{
        const user = await User.findById(req.user.id).populate("cart.product");

        if (!user || user.cart.length === 0) {
            return res.status(400).json({ message: "Cart is empty" });
        }
        const totalPrice = user.cart.reduce((total, item) => {
            return total + item.product.price * item.quantity;
        }, 0);

        const order = await Order.create({
            user: user._id,
            items: user.cart,
            totalPrice
        });

        user.cart = [];
        await user.save();

        return res.status(201).json({
            message: "Order placed successfully",
            order
        });

    }catch{
        return res.status(500).json({ message: error.message });
    }
};
module.exports = { placeOrder };