import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000'
});
const config = {
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
};
const register = (payload) =>
  instance.post('/users/register', payload, { withCredentials: true });
const login = (payload) => instance.post('/users/login', payload, config);
const getAllInfo = (payload) => instance.get('/users', payload, config);
const getMyInfo = (payload) => instance.get('/user', payload, config);
const updateMyInfo = (payload) => instance.patch('/user', payload, config);
const getDetailId = (payload) =>
  instance.post('/product-details', payload, config);
const addOrderItem = (payload) =>
  instance.post('/order-items', payload, config);
const getOrderItem = (payload) => instance.get('/order-items', payload, config);

export {
  register,
  login,
  getAllInfo,
  getMyInfo,
  updateMyInfo,
  getDetailId,
  addOrderItem,
  getOrderItem
};
