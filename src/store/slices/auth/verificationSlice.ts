import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { verifyCode } from "../../../services/apis/auth";
export const verificationUser = createAsyncThunk(
  "auth/verification",
  async (verificationData: any, thunkAPI) => {
    try {
      const formData = new FormData();
      for (const key in verificationData) {
        formData.append(key, verificationData[key]);
      }
      const { data } = await verifyCode(formData);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
interface verificationState {
  //   isLoggedIn: boolean;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  user: any;
}

const initialState: verificationState = {
  //   isLoggedIn: false,
  status: "idle",
  error: null,
  user: null,
};
const verificationSlice = createSlice({
  name: "verification",
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = "idle";
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      //   state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(verificationUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(verificationUser.fulfilled, (state, action) => {
        // state.isLoggedIn = true;
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(verificationUser.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export const { resetStatus } = verificationSlice.actions;
export const { logout } = verificationSlice.actions;
export default verificationSlice.reducer;
