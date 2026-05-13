import API from "./api";

export const getcartData = () => {
  return API.get("/cart/getCart");
};

export const addToCart = (productId) => {
  return API.post("/cart/add", {
    productId
  });
};