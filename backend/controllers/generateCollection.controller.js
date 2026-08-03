const UserPreference = require("../models/UserPreference-model");
const Product = require("../models/Product-model");
const Banner = require("../models/Banner-model");

const generateCollection = async (userId) => {
    // Get user preference
    const preference = await UserPreference.findOne({ user: userId });

    // Get all banners
    const banners = await Banner.find();

    // If no preference document exists
    if (!preference) {
        const products = await Product.find({ isFeatured: true })
            .populate("brand")
            .limit(20);

        return {
            banners,
            products,
        };
    }

    // Top preferred brands
    const topBrands = preference.preferences.brands
        .sort((a, b) => b.score - a.score)
        .slice(0, 3)
        .map((item) => item.brand);

    // Top preferred categories
    const topCategories = preference.preferences.categories
        .sort((a, b) => b.score - a.score)
        .slice(0, 3)
        .map((item) => item.name);

    let products;

    // No preferences yet
    if (topBrands.length === 0 && topCategories.length === 0) {
        products = await Product.find({ isFeatured: true })
            .populate("brand")
            .limit(20);
    } else {
        products = await Product.find({
            $or: [
                { brand: { $in: topBrands } },
                { category: { $in: topCategories } },
            ],
        })
            .populate("brand")
            .sort({ rating: -1, isTrending: -1 })
            .limit(20);
    }

    return {
        banners,
        products,
    };
};

module.exports = {
    generateCollection,
};