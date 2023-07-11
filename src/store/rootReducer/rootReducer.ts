import { combineReducers } from "redux";
import loginSlice from "../slices/auth/loginSlice";
import signupSlice from "../slices/auth/signupSlice";
import verificationSlice from "../slices/auth/verificationSlice";
import createStripeIntentSlice from "../slices/checkout/createStripeIntent";
import placeChallengeSlice from "../slices/checkout/placeChallenge";
import challengeSlice from "../slices/challenge/challengeSlice";
import loginManagerSlice from "../slices/mt5/manager/loginManagerSlice";
import userAddSlice from "../slices/mt5/manager/userAddSlice";
import getInfoSlice from "../slices/mt5/user/getInfoSlice";
import getAccountInfoSlice from "../slices/mt5/user/getAccountInfoSlice";
import dealsSlice from "../slices/mt5/user/dealsSlice";

const rootReducer = combineReducers({
  // Accounts
  login: loginSlice,
  signup: signupSlice,
  verification: verificationSlice,
  // Checkout
  createStripeIntent: createStripeIntentSlice,
  placeChallenge: placeChallengeSlice,
  challenge: challengeSlice,
  // dashboard
  loginManager: loginManagerSlice,
  userAdd: userAddSlice,
  getInfo: getInfoSlice,
  getAccountInfo: getAccountInfoSlice,
  deals: dealsSlice,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
