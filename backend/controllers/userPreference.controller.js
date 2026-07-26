const UserPreference = require("../models/UserPreference-model");
const Product = require("../models/product-model");
const PREFERENCE_SCORE = require("../constants/preferenceScore");

const updatePreference = (array, key, value, score = 1) => {
    const existingPreference = array.find(
        (item) => String(item[key]) === String(value)
    );

    if (existingPreference) {
        existingPreference.score += score;
    } else {
        array.push({
            [key]: value,
            score,
        });
    }
};

const updateUserPreference = async (req, res) => {
    try {
        const userId = req.user.id;
        const { productId } = req.body;

        let userPreference = await UserPreference.findOne({
            user: userId,
        });

        if (!userPreference) {
            userPreference = await UserPreference.create({
                user: userId,
            });
        }

        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        // Brand
        updatePreference(
            userPreference.preferences.brands,
            "brand",
            product.brand,
            PREFERENCE_SCORE.VIEW
        );

        // Category
        updatePreference(
            userPreference.preferences.categories,
            "name",
            product.category,
            PREFERENCE_SCORE.VIEW
        );

        // Collection
        if (product.productCollection) {
            updatePreference(
                userPreference.preferences.productCollection,
                "name",
                product.productCollection,
                PREFERENCE_SCORE.VIEW
            );
        }

        // Vehicle Type
        if (product.vehicleType) {
            updatePreference(
                userPreference.preferences.vehicleTypes,
                "name",
                product.vehicleType,
                PREFERENCE_SCORE.VIEW
            );
        }
        console.log(userPreference);
        userPreference.lastActivity = new Date();

        await userPreference.save();

        return res.status(200).json({
            success: true,
            message: "Preference updated successfully.",
            preferences: userPreference.preferences,
        });

    }catch (err) {
    console.error(err);

    return res.status(500).json({
        success: false,
        message: err.message,
    });
}
};

module.exports = {
    updateUserPreference
};