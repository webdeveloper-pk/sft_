import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_Base_URL}`,
});
export const signup = (formData: any) =>
  api.post("/accounts/register/", formData);

export const login = (formData: any) => api.post("/accounts/login/", formData);

export const verifyCode = (formData: any) =>
  api.post("/accounts/verify-code/", formData);

export const resendCodeForEmailVerification = (formData: any) =>
  api.post("/accounts/send-verification-email/", formData);

export const resendCodeForForgetPassword = (formData: any) =>
  api.post("/accounts/send-verification-email-password/", formData);
