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
export const createIntent = (formData: any, token: any) =>
  api.post("/challenge/purchase/", formData);
export const placeChallenge = (formData: any, token: any) =>
  api.post("/challenge/checkout/", formData);

// api.post("/challenge/checkout/", formData, config(token));
