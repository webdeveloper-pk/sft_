import { combineReducers } from "redux";
import loginSlice from "../slices/auth/loginSlice";
const rootReducer = combineReducers({
  // accounts
  login: loginSlice,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
