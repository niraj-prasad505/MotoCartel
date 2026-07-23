import { useId } from "react";
import API from "./api";

export const getUserAddress = () => {
  return API.get("user/address");
};

export const updateUserAddress = (address) => {
  return API.put("user/address", address, {
    withCredentials: true,
  });
};

export const updateUserPreference = (productId) => {
  return API.put("/user/preference", {
    productId,
  });
};