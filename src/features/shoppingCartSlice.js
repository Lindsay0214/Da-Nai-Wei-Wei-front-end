import { createSlice } from '@reduxjs/toolkit';

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    init: (state, action) => {
      return action.payload;
    }
  }
});

export const { increment, decrement, init } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
