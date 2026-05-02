const Product = require("../models/product-model");

const getHomeData = async (req, res) => {
  try {
    const [featured, trending, categories] = await Promise.all([
      Product.find({ isFeatured: true }).limit(8),
      Product.find({ isTrending: true }).limit(8),
      Product.distinct("category"),
    ]);

    res.status(200).json({
      featured,
      trending,
      categories,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getHomeData };