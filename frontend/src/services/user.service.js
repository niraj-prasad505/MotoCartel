import API from "./api";

export const getUserAddress = () => {
  return API.get("/user/address", {
    withCredentials: true,
  });
};
