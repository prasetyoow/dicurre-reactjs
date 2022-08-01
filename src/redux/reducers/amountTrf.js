import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  amount: 0,
  notes: '-'
};


export const AmountTransfer = createSlice({
  name: 'transfer',
  initialState,
  reducers: {
    amountFill: (state, action) => {
      state.amount = parseInt(action.payload, 10);
    },
    notesFill: (state, action) => {
      state.notes = action.payload;
    }
  }
})

export const {amountFill, notesFill} = AmountTransfer.actions;

export default AmountTransfer.reducer;