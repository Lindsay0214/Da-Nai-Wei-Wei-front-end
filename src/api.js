import axios from 'axios';
import { toast } from 'react-toastify';
import { setLoading } from './features/loadingSlice';

const instance = axios.create({
  // baseURL: 'https://da-nai-wei-wei.herokuapp.com'
  baseURL: 'http://localhost:5000',
  withCredentials: true
});

export const interceptor = (store) => {
  const config = {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
  };
  // eslint-disable-next-line no-shadow
  instance.interceptors.request.use((config) => {
    // eslint-disable-next-line no-param-reassign
    store.dispatch(setLoading(true));
    return config;
  });
  instance.interceptors.response.use(
    (response) => {
      // Do something with response data
      store.dispatch(setLoading(false));
      return response;
    },
    (error) => {
      if (error.response) {
        const { message } = error.response.data;
        store.dispatch(setLoading(false));
        toast.error(message, {
          position: toast.POSITION.TOP_CENTER
        });
      }
      if (!window.navigator.onLine) {
        alert('網路出了點問題，請重新連線後重整網頁');
        return;
      }
      // eslint-disable-next-line consistent-return
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

// admin
export const getAllShop = () => instance.get('/shops');
export const getShop = (id) => instance.get(`/shops/${id}`);
export const updateShop = (id, payload) =>
  instance.patch(`/shops/${id}`, payload);
export const deleteShop = (id) => instance.delete(`/shops/${id}`);

// user
export const register = (payload) => instance.post('/users/register', payload);
export const login = (payload) => instance.post('/users/login', payload);
export const getAllInfo = () => instance.get('/users');
export const getMyInfo = () => instance.get('/user');
export const updateMyInfo = (payload) => instance.patch('/user', payload);
export const getMe = () => instance.get('/users/me');

// set new info
export const newNickName = (payload) => instance.post('/users/edit', payload);
// ? err catch ? how

// orderItem
export const getDetailId = (payload) =>
  instance.post('/product-details', payload);
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
