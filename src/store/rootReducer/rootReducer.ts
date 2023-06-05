import { combineReducers } from "redux";
import loginSlice from "../slices/auth/loginSlice";
import signupSlice from "../slices/auth/signupSlice";
import verificationSlice from "../slices/auth/verificationSlice";
import createStripeIntentSlice from "../slices/checkout/createStripeIntent";
import placeChallengeSlice from "../slices/checkout/placeChallenge";
import challengeSlice from "../slices/challenge/challengeSlice";

const rootReducer = combineReducers({
  // Accounts
  login: loginSlice,
  signup: signupSlice,
  verification: verificationSlice,
  // Checkout
  createStripeIntent: createStripeIntentSlice,
  placeChallenge: placeChallengeSlice,
  challenge: challengeSlice,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
