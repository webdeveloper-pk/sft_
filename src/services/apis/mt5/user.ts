import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_Base_URL}`,
});

const config = (token: any) => {
  return {
    headers: {
      Authorization: `Bearer ` + token,
    },
  };
};

// API for ctx , mt5 registration and chart data

export const getAdminCtx = () => api.get("/mt5/admin-login");

export const mt5UserRegistration = (formData: any) =>
  api.post("/mt5/register", formData);

export const getBalanceHistory = (token: any) =>
  api.get("/mt5/balance-history");

// other APIs

export const getInfo = () => api.post("/manager/user/getinfo/");

export const getUserInfo = () => api.post("/manager/user/get_accountinfo/");

export const deals = () => api.post("/manager/user/deals/");
