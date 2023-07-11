import { createSlice } from "@reduxjs/toolkit";

interface getAccountInfoState {
  ctx: string;
  user: string;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: getAccountInfoState = {
  ctx: "",
  user: "",
  status: "idle",
  error: null,
};

const getAccountInfoSlice = createSlice({
  name: "getInfo",
  initialState,
  reducers: {
    getAccountInfo: (state, action) => {
      state.ctx = "";
      state.user = "";
      state.status = "idle";
      state.error = null;
    },
  },
});

export const { getAccountInfo } = getAccountInfoSlice.actions;
export default getAccountInfoSlice.reducer;
