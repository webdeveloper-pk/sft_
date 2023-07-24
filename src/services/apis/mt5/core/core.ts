import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_Base_URL_FOR_MT5}`,
});

export const addUser = (formData: any) => api.get("/manager/useradd", formData);
