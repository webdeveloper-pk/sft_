import { createSlice } from "@reduxjs/toolkit";

interface challengeState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  challenge1: string;
  challenge2: string;
  challenge3: string;
}

const initialState: challengeState = {
  status: "idle",
  error: null,
  challenge1: "usd",
  challenge2: "normal",
  challenge3: "10k",
};
const challengeSlice = createSlice({
  name: "challenge",
  initialState,
  reducers: {
    setChallenge1: (state, action) => {
      state.challenge1 = action.payload;
      state.status = "idle";
      state.error = null;
    },
    setChallenge2: (state, action) => {
      state.challenge2 = action.payload;
      state.status = "idle";
      state.error = null;
    },
    setChallenge3: (state, action) => {
      state.challenge3 = action.payload;
      state.status = "idle";
      state.error = null;
    },
  },
});
export const { setChallenge1 } = challengeSlice.actions;
export const { setChallenge2 } = challengeSlice.actions;
export const { setChallenge3 } = challengeSlice.actions;
export default challengeSlice.reducer;
