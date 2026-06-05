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

export const getCurrentUser = () => {
  return API.get("/user/me", {
    withCredentials: true,
  });
};

export const forgotPassword = (email) => {
  return API.post("/user/forgot-password", { email }, {
    withCredentials: true,
  });
}

export const resetPassword = (
  token,
  password,
  confirmPassword
) => {
  return API.post(
    `/user/reset-password/${token}`,
    {
      password,
      confirmPassword,
    },
    {
      withCredentials: true,
    }
  );
};