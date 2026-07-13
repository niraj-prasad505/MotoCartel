import API from "./api";

export const getHomeData = () => {
  return API.get("/home");
};

export const getHeroData = () => {
  return API.get("/hero");
};

export const getAllProducts = (params) => {
  return API.get("/products/all", {
    params,
  });
};


export const getProductById = (id) => API.get(`/products/${id}`);

