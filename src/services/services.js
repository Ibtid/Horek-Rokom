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

const addOrder = (data) => {
  return http.post('/orders', data);
};

const addOrderDetails = (data) => {
  return http.post('/orderDetails', data);
};

const getOrderById = (id) => {
  return http.get(`/orders/${id}`);
};
const getOrderDetailsById = (id) => {
  return http.get(`/orderDetails/${id}`);
};
const getAllOrders = () => {
  return http.get('/orders');
};
const getAllOrdersDetails = () => {
  return http.get('/orderDetails');
};
export default {
  getAllProducts,
  addNewProduct,
  removeProduct,
  addNewUser,
  getAllUser,
  addOrder,
  addOrderDetails,
  getOrderById,
  getOrderDetailsById,
  getAllOrders,
  getAllOrdersDetails,
};
