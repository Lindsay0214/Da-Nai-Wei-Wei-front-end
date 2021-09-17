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

export { register, login, getAllInfo, getMyInfo, updateMyInfo };
