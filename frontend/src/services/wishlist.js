import API from "./api";

// Get wishlist items
export const getWishlistData = async () => {
  return await API.get("/wishlist");
};

// Add product to wishlist
export const addToWishlist = async (productId) => {
  return await API.post("/wishlist/add", {
    productId
  });
};

// Remove product from wishlist
export const removeFromWishlist = async (productId) => {
  return await API.delete("/wishlist/remove", {
    data: {
      productId
    }
  });
};

// Move wishlist item to cart
export const moveToCart = async (productId) => {
  return await API.post("/wishlist/move-to-cart", {
    productId
  });
};
