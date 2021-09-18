import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000'
});
const config = {
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
};
const register = (payload) => instance.post('/users/register', payload, config);
const login = (payload) => instance.post('/users/login', payload, config);
const getAllInfo = (payload) => instance.get('/users', payload, config);
const getMyInfo = (payload) => instance.get('/user', payload, config);
const updateMyInfo = (payload) => instance.patch('/user', payload, config);

// admin
const getAllShop = () => instance.get('/shops', config);
const getShop = (id) => instance.get(`/shops/${id}`, config);
const updateShop = (id, payload) =>
  instance.patch(`/shops/${id}`, payload, config);
const deleteShop = (id) => instance.delete(`/shops/${id}`, config);

export {
  register,
  login,
  getAllInfo,
  getMyInfo,
  updateMyInfo,
  getAllShop,
  deleteShop,
  getShop,
  updateShop
};
