import { combineReducers } from "redux";
import loginSlice from "../slices/auth/loginSlice";
import signupSlice from "../slices/auth/signupSlice";
import verificationSlice from "../slices/auth/verificationSlice";
import createStripeIntentSlice from "../slices/checkout/createStripeIntent";
import placeChallengeSlice from "../slices/checkout/placeChallenge";
import challengeSlice from "../slices/challenge/challengeSlice";
import getInfoSlice from "../slices/mt5/user/getInfoSlice";
import getAccountInfoSlice from "../slices/mt5/user/getAccountInfoSlice";
import dealsSlice from "../slices/mt5/user/dealsSlice";
import ctxSlice from "../slices/mt5/ctxSlice";
import mt5UserSlice from "../slices/mt5/mt5UserRegisterSlice";
import balanceHistorySlice from "../slices/mt5/balanceHistorySlice";

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
  ctxSlice: ctxSlice,
  mt5User: mt5UserSlice,
  balanceHistorySlice: balanceHistorySlice,
  getInfo: getInfoSlice,
  getAccountInfo: getAccountInfoSlice,
  deals: dealsSlice,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
