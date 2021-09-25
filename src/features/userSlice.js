/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {}
  },
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload;
    },
    role: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = '';
    },
    isRegister: (state, action) => {
      state.user = action.payload;
    }
  }
});

export const { isRegister, setLogin, logout, role } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
