import { createSlice } from '@reduxjs/toolkit';

export const chosenShopSlice = createSlice({
  name: 'chosenShop',
  initialState: '',
  reducers: {
    setChosenShop: (state, action) => {
      return action.payload;
    }
  }
});

export const { setChosenShop } = chosenShopSlice.actions;
export default chosenShopSlice.reducer;
