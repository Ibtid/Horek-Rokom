import http from '../http-common';

const getAllProducts = () => {
  return http.get('/products');
};

const addNewProduct = (data) => {
  return http.post('/products', data);
};

const removeProduct = (id) => {
  return http.delete(`/products/${id}`);
};

const addNewUser = (data) => {
  return http.post('/customers', data);
};

const getAllUser = () => {
  return http.get('/customers');
};

export default {
  getAllProducts,
  addNewProduct,
  removeProduct,
  addNewUser,
  getAllUser,
};
