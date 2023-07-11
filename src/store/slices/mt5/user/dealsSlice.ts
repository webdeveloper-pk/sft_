import { createSlice } from "@reduxjs/toolkit";

interface dealsState {
  user: string;
  from: string;
  to: string;
  latest: string;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: dealsState = {
  user: "",
  from: "",
  to: "",
  status: "idle",
  latest: "",
  error: null,
};

const dealsSlice = createSlice({
  name: "deals",
  initialState,
  reducers: {
    deals: (state, action) => {
      state.user = "";
      state.from = "";
      state.to = "";
      state.latest = "";
      state.status = "idle";
      state.error = null;
    },
  },
});

export const { deals } = dealsSlice.actions;
export default dealsSlice.reducer;
