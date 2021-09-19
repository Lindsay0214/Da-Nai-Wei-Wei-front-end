import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000'
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
