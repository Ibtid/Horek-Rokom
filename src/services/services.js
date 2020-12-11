import http from '../http-common';

const getAllProducts = () => {
  return http.get('/products');
};

const addNewProduct = (data) => {
  return http.post('/products', data);
};

export default {
  getAllProducts,
  addNewProduct,
};
