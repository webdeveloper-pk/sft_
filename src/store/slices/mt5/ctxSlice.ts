import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAdminCtx } from "../../../services/apis/mt5/user";

export const ctxUser = createAsyncThunk(
  "mt5/admin-login",
  async (_, thunkAPI) => {
    try {
      const { data } = await getAdminCtx();
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

interface ctxState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: any;
  ctx: any;
}

const initialState: ctxState = {
  status: "idle",
  error: null,
  ctx: null,
};
const ctxSlice = createSlice({
  name: "ctx",
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(ctxUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(ctxUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.ctx = action.payload;
      })
      .addCase(ctxUser.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { resetStatus } = ctxSlice.actions;
export default ctxSlice.reducer;
