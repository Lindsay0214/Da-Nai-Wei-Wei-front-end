import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000'
});

const config = {
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
};

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
