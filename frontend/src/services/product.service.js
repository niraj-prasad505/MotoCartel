import API from "./api";

export const getHomeData = () => {
  return API.get("/home");
};
