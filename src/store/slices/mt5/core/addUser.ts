// /manager/user/useradd
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addUser } from "../../../../services/apis/mt5/core/core";

export const addUserAction = createAsyncThunk(
  "mt5/core/addUser",
  async (userData: any, thunkAPI) => {
    try {
      const formData = new FormData();
      for (const key in userData) {
        formData.append(key, userData[key]);
      }
      const { data } = await addUser(formData);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

interface addUserState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: any;
  user: any;
}

const initialState: addUserState = {
  status: "idle",
  error: null,
  user: null,
};
const addUserSlice = createSlice({
  name: "userAdd",
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addUserAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addUserAction.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(addUserAction.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { resetStatus } = addUserSlice.actions;
export default addUserSlice.reducer;
