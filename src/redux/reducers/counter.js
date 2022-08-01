import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  num: 0
}

const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.num += 1
    },

    decrement: (state, action) => {
      state.num -= 1
    }
  }
})

export const {increment, decrement} = counter.actions;
export default counter.reducer;


