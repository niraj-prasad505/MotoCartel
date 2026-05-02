import product from "../modules/product-model.js";

export const getFeaturedProducts = async (req, res) => {
  try {
    const products = await product.find({ isFeatured: true });

    res.status(200).json(products); // add status (best practice)
  } catch (err) {
    res.status(500).json({ message: "server error" });
  }
};