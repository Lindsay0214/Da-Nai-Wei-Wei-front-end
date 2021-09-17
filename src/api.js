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
const getUser = () => instance.get('/users', config);

export { register, login };
