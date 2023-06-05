import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createIntent } from "../../../services/apis/checkout";
export const createStripeIntent = createAsyncThunk(
  "createStripeIntent",
  async (stripeIntentData: any, thunkAPI) => {
    try {
      const { amount, token } = stripeIntentData;
      const formData = new FormData();
      formData.append("amount", amount);
      const { data } = await createIntent(formData, token);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

interface IState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  payment: any;
}

const initialState: IState = {
  status: "idle",
  error: null,
  payment: null,
};

const createStripeIntentSlice = createSlice({
  name: "createStripeIntentSlice",
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createStripeIntent.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createStripeIntent.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.payment = action.payload;
      })
      .addCase(createStripeIntent.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export const { resetStatus } = createStripeIntentSlice.actions;
export default createStripeIntentSlice.reducer;
