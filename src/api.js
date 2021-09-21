import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true
});

const config = {
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
};

// user
export const register = (payload) =>
  instance.post('/users/register', payload, { withCredentials: true });
export const login = (payload) =>
  instance.post('/users/login', payload, config);
export const getAllInfo = () => instance.get('/users', config);
export const getMyInfo = () => instance.get('/user', config);
export const updateMyInfo = (payload) =>
  instance.patch('/user', payload, config);
export const getMe = () => instance.get('/users/me', config);
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
