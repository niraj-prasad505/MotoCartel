import API from "./api";

export const getUserAddress = () => {
  return API.get("user/address");
};

export const updateUserAddress = (address) => {
  return API.put("user/address", address, {
    withCredentials: true,
  });
};