import { combineReducers } from "redux";
import loginSlice from "../slices/auth/loginSlice";
import signupSlice from "../slices/auth/signupSlice";
import verificationSlice from "../slices/auth/verificationSlice";

const rootReducer = combineReducers({
  // accounts
  login: loginSlice,
  signup: signupSlice,
  verification: verificationSlice,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
