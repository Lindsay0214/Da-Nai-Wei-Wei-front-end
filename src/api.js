import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://da-nai-wei-wei.herokuapp.com'
});
const config = {
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
};

// user
const register = (payload) =>
  instance.post('/users/register', payload, { withCredentials: true });
const login = (payload) => instance.post('/users/login', payload, config);
const getAllInfo = (payload) => instance.get('/users', payload, config);
const getMyInfo = (payload) => instance.get('/user', payload, config);
const updateMyInfo = (payload) => instance.patch('/user', payload, config);

// product
const getProducts = () => instance.get('/products', config);
const deleteProduct = (id) => instance.delete(`/products/${id}`, config);
const addProduct = (payload) => instance.post('/product', payload, config);
const getProduct = (id) => instance.get(`/products/${id}`, config);
const updateProduct = (id, payload) =>
  instance.patch(`/products/${id}`, payload, config);

export {
  register,
  login,
  getAllInfo,
  getMyInfo,
  updateMyInfo,
  getProducts,
  deleteProduct,
  addProduct,
  getProduct,
  updateProduct
};
