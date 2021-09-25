import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import loadingReducer from './features/loadingSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    loading: loadingReducer
  }
});
