import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import loadingReducer from './features/loadingSlice';
import shoppingCartReducer from './features/shoppingCartSlice';
import chosenShopReducer from './features/chosenShopSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    loading: loadingReducer,
    shoppingCart: shoppingCartReducer,
    chosenShop: chosenShopReducer
  }
});
