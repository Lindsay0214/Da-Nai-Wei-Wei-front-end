/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { logoutApi, getMeApi, loginApi, registerApi } from '../api';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: ''
  },
  reducers: {
    setLogout: (state) => {
      state.user = '';
    },
    setMe: (state, action) => {
      state.user = action.payload;
    },
    isRegister: (state, action) => {
      state.user = action.payload;
    }
  }
});

export const { isRegister, setLogout, setMe } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;

export const login = (history, payload) => async (dispatch) => {
  loginApi(payload).then((result) => {
    const data = {
      email: payload.email,
      role: result.data.role
    };
    toast.success('登入成功', {
      position: toast.POSITION.TOP_CENTER,
      theme: 'colored'
    });
    document.cookie = 'isLogin=true;';
    if (result.data.role === 'consumer') {
      dispatch(setMe(data));
      history.push('/');
    } else if (result.data.role === 'admin') {
      dispatch(setMe(data));
      history.push('/admin-update');
    } else if (result.data.role === 'shop') {
      dispatch(setMe(data));
      history.push('/products');
    }
  });
};

export const register = (history, payload) => (dispatch) => {
  registerApi(payload).then((result) => {
    toast.success('註冊成功', {
      position: toast.POSITION.TOP_CENTER,
      theme: 'colored'
    });
    const data = {
      email: payload.email,
      password: payload.password
    };
    dispatch(login(history, data));
  });
};

export const logout = () => (dispatch) => {
  document.cookie = 'isLogin=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
  logoutApi();
  dispatch(setLogout());
};

export const getMe = () => async (dispatch) => {
  getMeApi().then((result) => {
    if (result.data.ok === 1) {
      const data = {
        email: result.data.email,
        role: result.data.role,
        nickname: result.data.nickname
      };
      dispatch(setMe(data));
    }
  });
};
