import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://da-nai-wei-wei.herokuapp.com'
  baseURL: 'http://localhost:5000',
  withCredentials: true
});

const config = {
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
};

// product
export const getProducts = () => instance.get('/products', config);
export const deleteProduct = (id) => instance.delete(`/products/${id}`, config);
export const addProduct = (payload) =>
  instance.post('/product', payload, config);
export const getProduct = (id) => instance.get(`/products/${id}`, config);
export const updateProduct = (id, payload) =>
  instance.patch(`/products/${id}`, payload, config);

// admin
export const getAllShop = () => instance.get('/shops', config);
export const getShop = (id) => instance.get(`/shops/${id}`, config);
export const updateShop = (id, payload) =>
  instance.patch(`/shops/${id}`, payload, config);
export const deleteShop = (id) => instance.delete(`/shops/${id}`, config);

// user
export const register = (payload) =>
  instance.post('/users/register', payload, config);
export const login = (payload) =>
  instance.post('/users/login', payload, config);
export const getAllInfo = () => instance.get('/users', config);
export const getMyInfo = () => instance.get('/user', config);
export const updateMyInfo = (payload) =>
  instance.patch('/user', payload, config);
export const getMe = () => instance.get('/users/me', config);

// set new info
export const newNickName = (payload) =>
  instance.post('/users/edit', payload, config);
// ? err catch ? how

// orderItem
export const getDetailId = (payload) =>
  instance.post('/product-details', payload, config);
export const addOrderItem = (payload) =>
  instance.post('/order-items', payload, config);
export const getOrderItem = () => instance.get('/order-items', config);
export const deleteOrderItem = (payload) =>
  instance.delete('/order-items', { data: payload }, config);
export const getSingleOrderItem = (id) =>
  instance.get(`/order-item/${id}`, config);
export const updateOrderItem = (payload) =>
  instance.patch('/order-items', payload, config);
export const getTotalPriceAmount = () => instance.get(`/orders`, config);
export const updateTotalPriceAmount = () => instance.patch(`/orders`, config);
export const addShoppingCart = () => instance.post('/orders', config);
export const getOrdersHistory = () => instance.get(`/orders-history`, config);
