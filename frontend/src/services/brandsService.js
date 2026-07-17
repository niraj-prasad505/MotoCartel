import API from "./api";

export const getAllBrands = async () => {
  const response = await API.get("/brands/all");
  return response.data;
};
