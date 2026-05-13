import API from "./api";

export const getcartData = () => {
  return API.get("/cart/getCart");
};

export const addToCart = (productId) => {
  return API.post("/cart/add", {
    productId
  });
};

export const increaseQuantity = (productId) => {
  return API.patch("/cart/increase", {
    productId,
  });
};

export const decreaseQuantity = (productId) => {
  return API.patch("/cart/decrease", {
    productId,
  });
};