import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userAdd } from "../../../../services/apis/mt5/manager";

export const userAddUser = createAsyncThunk(
  //  replace this below line
  "auth/useradd",
  async (userAddData: any, thunkAPI) => {
    try {
      const formData = new FormData();
      for (const key in userAddData) {
        formData.append(key, userAddData[key]);
      }
      const { data } = await userAdd(formData);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
interface userAddState {
  login: string;
  group: string;
  master_pass: string;
  ctx: string;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: userAddState = {
  login: "",
  group: "",
  master_pass: "",
  ctx: "",
  status: "idle",
  error: null,
};
const userAddSlice = createSlice({
  name: "useradd",
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.login = "";
      state.group = "";
      state.master_pass = "";
      state.ctx = "";
      state.status = "idle";
      state.error = null;
    },
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(userAddUser.pending, (state) => {
  //         state.status = "loading";
  //       })
  //       .addCase(userAddUser.fulfilled, (state, action) => {
  //         state.status = "succeeded";
  //         state.user = action.payload;
  //       })
  //       .addCase(userAddUser.rejected, (state, action: any) => {
  //         state.status = "failed";
  //         state.error = action.payload;
  //       });
  //   },
});

export const { resetStatus } = userAddSlice.actions;
export default userAddSlice.reducer;
