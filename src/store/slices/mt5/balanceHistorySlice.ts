import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBalanceHistory } from "../../../services/apis/mt5/user";

export const balanceHistoryUser = createAsyncThunk(
  "mt5/balance-history",
  async (token: any, thunkAPI) => {
    try {
      const { data } = await getBalanceHistory(token);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

interface balanceHistoryState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  balance: any;
}

const initialState: balanceHistoryState = {
  status: "idle",
  error: null,
  balance: null,
};

const balanceHistorySlice = createSlice({
  name: "balanceHistory",
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(balanceHistoryUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(balanceHistoryUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.balance = action.payload;
      })
      .addCase(balanceHistoryUser.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { resetStatus } = balanceHistorySlice.actions;
export default balanceHistorySlice.reducer;
