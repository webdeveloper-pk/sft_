import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_Base_URL}`,
});

export const loginManager = (formData: any) =>
  api.post("/manager/login/", formData);

export const userAdd = (formData: any) =>
  api.post("/manager/useradd/", formData);
