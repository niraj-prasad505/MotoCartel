import API from "./api";

export const loginUser = (data) => {
  return API.post("/user/login", data, {
    withCredentials: true,
  });
};

export const registerUser = (data) => {
  return API.post("/user/register", data, {
    withCredentials: true,
  });
};