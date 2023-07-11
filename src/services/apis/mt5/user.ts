import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_Base_URL}`,
});

export const getInfo = () => api.post("/manager/user/getinfo/");

export const getUserInfo = () => api.post("/manager/user/get_accountinfo/");

export const deals = () => api.post("/manager/user/deals/");
