import { createSlice } from "@reduxjs/toolkit";
import { getProfile } from "../asyncActions/profile";

const initialState = {
  results: {}
};

const profile = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getProfile.fulfilled, (state, action) => {
      state.results = action.payload.results;
    });
  }
});

export { getProfile };
export default profile.reducer;
