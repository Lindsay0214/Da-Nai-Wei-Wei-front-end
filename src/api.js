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
export const getShopProducts = (userId) =>
  instance.get(`/products-store/${userId}`, config);

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
export const getShops = () => instance.get('/users-shops', config);

export const updateMyInfo = (payload) =>
  instance.patch('/user', payload, config);
export const getMe = () => instance.get('/users/me', config);
export const updateURL = (payload) =>
  instance.patch('/user-URL', payload, config);

// set new info
export const newNickName = (payload) =>
  instance.post('/users/edit', payload, config);
// ? err catch ? how

// productDetail
export const getDetailId = (payload) =>
  instance.post('/product-details', payload, config);

// orderItem
export const addOrderItem = (payload) =>
  instance.post('/order-items', payload, config);
export const getOrderItem = () => instance.get('/order-items', config);
export const getSingleOrderItem = (id) =>
  instance.get(`/order-item/${id}`, config);
export const updateOrderItem = (payload) =>
  instance.patch('/order-items', payload, config);
export const deleteOrderItem = (payload) =>
  instance.delete('/order-items', { data: payload }, config);

// order
export const addShoppingCart = () => instance.post('/orders', config);
export const getTotalPriceAmount = () => instance.get(`/orders`, config);
export const getOrdersHistory = () => instance.get(`/orders-history`, config);
export const updateTotalPriceAmount = () => instance.patch(`/orders`, config);
