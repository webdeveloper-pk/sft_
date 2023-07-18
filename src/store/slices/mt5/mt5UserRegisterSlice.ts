import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mt5UserRegistration } from "../../../services/apis/mt5/user";

export const mt5User = createAsyncThunk(
  "mt5/register",
  async (mt5UserData: any, thunkAPI) => {
    try {
      const formData = new FormData();
      for (const key in mt5UserData) {
        formData.append(key, mt5UserData[key]);
      }
      const { data } = await mt5UserRegistration(formData);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

interface mt5UserState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  mt5user: any;
}

const initialState: mt5UserState = {
  status: "idle",
  error: null,
  mt5user: null,
};
const mt5UserSlice = createSlice({
  name: "mt5User",
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(mt5User.pending, (state) => {
        state.status = "loading";
      })
      .addCase(mt5User.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.mt5user = action.payload;
      })
      .addCase(mt5User.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { resetStatus } = mt5UserSlice.actions;
export default mt5UserSlice.reducer;
