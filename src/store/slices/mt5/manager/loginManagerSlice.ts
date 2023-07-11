import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginManager } from "../../../../services/apis/mt5/manager";

export const loginManagerUser = createAsyncThunk(
  //  replace this below line
  "auth/login",
  async (loginManagerData: any, thunkAPI) => {
    try {
      const formData = new FormData();
      for (const key in loginManagerData) {
        formData.append(key, loginManagerData[key]);
      }
      const { data } = await loginManager(formData);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

interface loginManagerState {
  server: string;
  login: string;
  password: string;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: loginManagerState = {
  server: "",
  login: "",
  password: "",
  status: "idle",
  error: null,
};

const loginManagerSlice = createSlice(
  {
    name: "loginManager",
    initialState,
    reducers: {
      resetStatus: (state) => {
        state.server = "";
        state.login = "";
        state.password = "";
        state.status = "idle";
        state.error = null;
      },
    },
  }
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(loginManagerUser.pending, (state) => {
  //         state.status = "loading";
  //       })
  //       .addCase(loginManagerUser.fulfilled, (state, action) => {
  //         state.isLoggedIn = true;
  //         state.status = "succeeded";
  //         state.user = action.payload;
  //       })
  //       .addCase(loginManagerUser.rejected, (state, action: any) => {
  //         state.status = "failed";
  //         state.error = action.payload;
  //       });
  //   },
);

export const { resetStatus } = loginManagerSlice.actions;
export default loginManagerSlice.reducer;
