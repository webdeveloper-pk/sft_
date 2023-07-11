import { createSlice } from "@reduxjs/toolkit";

interface getInfoState {
  ctx: string;
  user: string;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: getInfoState = {
  ctx: "",
  user: "",
  status: "idle",
  error: null,
};

const getInfoSlice = createSlice({
  name: "getInfo",
  initialState,
  reducers: {
    getInfo: (state, action) => {
      state.ctx = "";
      state.user = "";
      state.status = "idle";
      state.error = null;
    },
  },
});

export const { getInfo } = getInfoSlice.actions;
export default getInfoSlice.reducer;
