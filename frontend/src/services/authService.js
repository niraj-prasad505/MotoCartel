import API from "./api";

export const loginUser = (data) => {
  return API.post("/user/login", data, {
    withCredentials: true,
  });
};