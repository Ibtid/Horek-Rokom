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

export default {
  getAllProducts,
  addNewProduct,
  removeProduct,
};
