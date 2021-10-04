import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import loadingReducer from './features/loadingSlice';
import shoppingCartReducer from './features/shoppingCartSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    loading: loadingReducer,
    shoppingCart: shoppingCartReducer
  }
});
