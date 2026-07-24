// controllers/userPreference.controller.js

const UserPreference = require("../models/UserPreference-model");
const Product = require("../models/product-model");
const User = require("../models/user-models");

const updateUserPreference = async (req, res) => {
    try {
        const userId = req.user.id;
        const { productId } = req.body;
        // console.log(userId);
        // console.log(productId);
        const userPreference = await UserPreference.findOne({
            user: userId
        });
        console.log(userPreference);



        res.status(200).json({
            success: true,
            message: "Preference updated"
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

module.exports = {
    updateUserPreference
};