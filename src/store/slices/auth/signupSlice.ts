import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signup } from "../../../services/apis/auth";

export const signupUser = createAsyncThunk(
  "auth/signup",
  async (signupData: any, thunkAPI) => {
    try {
      const formData = new FormData();
      for (const key in signupData) {
        formData.append(key, signupData[key]);
      }
      const { data } = await signup(formData);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
interface signupState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  user: any;
}

const initialState: signupState = {
  status: "idle",
  error: null,
  user: null,
};
const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = "idle";
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { resetStatus } = signupSlice.actions;
export const { logout } = signupSlice.actions;
export default signupSlice.reducer;
