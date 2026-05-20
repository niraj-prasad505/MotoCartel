import API from "./api";

export const getWishlistData = () => {
  return API.get("/wishlist");
};

export const addToWishlist = (productId) => {
  return API.post("/wishlist", {
    productId
  });
};

export const removeFromWishlist = (productId) => {
  return API.delete(`/wishlist/${productId}`);
};

export const moveToCart = (productId) => {
  return API.post("/wishlist/move-to-cart", {
    productId
  });
};