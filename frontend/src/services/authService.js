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

export const sendEmailOtp = (email) => {
  return API.post(
    "/verify-otp/send",
    { email },
    {
      withCredentials: true,
    }
  );
};

export const verifyEmailOtp = (email, otp) => {
  return API.post(
    "/verify-otp/verify",
    {
      email,
      otp,
    },
    {
      withCredentials: true,
    }
  );
};