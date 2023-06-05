import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { placeChallenge } from "../../../services/apis/checkout";
export const placeChallengeAction = createAsyncThunk(
  "placeChallengeAction",
  async (challengeData: any, thunkAPI) => {
    try {
      const { checkout, token } = challengeData;
      const formData = new FormData();
      for (const key in checkout) {
        formData.append(key, checkout[key]);
      }
      const { data } = await placeChallenge(formData, token);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

interface IState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  checkout: any;
}

const initialState: IState = {
  status: "idle",
  error: null,
  checkout: null,
};

const placeChallengeSlice = createSlice({
  name: "placeChallenge",
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(placeChallengeAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(placeChallengeAction.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.checkout = action.payload;
      })
      .addCase(placeChallengeAction.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export const { resetStatus } = placeChallengeSlice.actions;
export default placeChallengeSlice.reducer;
