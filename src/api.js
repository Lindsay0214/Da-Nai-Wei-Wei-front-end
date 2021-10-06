/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable */
import axios from 'axios';
import { toast } from 'react-toastify';
import { setLoading } from './features/loadingSlice';
import toastConfig from './constant';

const instance = axios.create({
  baseURL: 'https://da-nai-wei-wei.herokuapp.com',
  // baseURL: 'http://localhost:5000',
  withCredentials: true
});
const config = {
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
};
export const interceptor = (store) => {
  instance.interceptors.request.use((config) => {
    store.dispatch(setLoading(true));
    return config;
  });
  instance.interceptors.response.use(
    (response) => {
      store.dispatch(setLoading(false));
      return response;
    },
    (error) => {
      if (error.response) {
        const { message } = error.response.data;
        store.dispatch(setLoading(false));
        toast.error(message, toastConfig);
      }
      if (!window.navigator.onLine) {
        alert('網路出了點問題，請重新連線後重整網頁');
        return;
      }
      return Promise.reject(error);
    }
  );
};

// product
export const getProducts = () => instance.get('/products');
export const deleteProduct = (id) => instance.delete(`/products/${id}`);
export const addProduct = (payload) => instance.post('/product', payload);
export const getProduct = (id) => instance.get(`/products/${id}`);
export const updateProduct = (id, payload) =>
  instance.patch(`/products/${id}`, payload);

export const getShopProducts = (userId) =>
  instance.get(`/products-store/${userId}`);

// admin
export const getAllShop = () => instance.get('/shops');
export const getShop = (id) => instance.get(`/shops/${id}`);
export const updateShop = (id, payload) =>
  instance.patch(`/shops/${id}`, payload);
export const deleteShop = (id) => instance.delete(`/shops/${id}`);

// user

export const registerApi = (payload) =>
  instance.post('/users/register', payload);
export const loginApi = (payload) => instance.post('/users/login', payload);
export const logoutApi = () => instance.get('/users/logout');
export const getAllInfo = () => instance.get('/users');
export const getMyInfo = () => instance.get('/user');
export const updateMyInfo = (payload) => instance.patch('/user', payload);
export const getMeApi = () => instance.get('/users/me');
export const updateURL = (payload) => instance.patch('/user-URL', payload);
export const getShops = () => instance.get('/users-shops');

// productDetail
export const getDetailId = (payload) =>
  instance.get(
    `/product-details/${payload.size}/${payload.sweetness}/${payload.ice}`
  );
export const addOrderItem = (payload) => instance.post('/order-items', payload);
export const getOrderItem = () => instance.get('/order-items');
export const deleteOrderItem = (payload) =>
  instance.delete('/order-items', { data: payload });
export const getSingleOrderItem = (id) => instance.get(`/order-item/${id}`);
export const updateOrderItem = (payload) =>
  instance.patch('/order-items', payload);
export const getTotalPriceAmount = () => instance.get(`/orders`);
export const updateTotalPriceAmount = () => instance.patch(`/orders`);
export const addShoppingCart = () => instance.post('/orders');
export const getOrdersHistory = () => instance.get(`/orders-history`);
export const getOrderPaid = (id) => instance.get(`/orders/${id}`);

export const getIsPaid = (order_id) =>
  axios.get(
    `https://da-nai-wei-wei.herokuapp.com/orders-get-is-paid/${order_id}`,
    config
  );
// export const getIsPaid = (order_id) =>
//   axios.get(`http://localhost:5000/orders-get-is-paid/${order_id}`, config);
