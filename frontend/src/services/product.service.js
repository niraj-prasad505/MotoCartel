import API from "./api";

export const getHomeData = () => {
  return API.get("/home");
};

export const getProductById = (id) => API.get(`/products/${id}`);
