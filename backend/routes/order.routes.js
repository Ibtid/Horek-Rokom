module.exports = (app) => {
  const orders = require('../controller/order.controller');
  const orderDetails = require('../controller/orderDetails.controller');

  //Create a new order
  app.post('/orders', orders.create);

  // Retrieve all Orders
  app.get('/orders', orders.findAll);

  // Retrieve a single Order with useId
  app.get('/orders/:userID', orders.findOne);

  //Create a new orderDetail
  app.post('/orderDetails', orderDetails.create);

  // Retrieve all OrderDetails
  app.get('/orderDetails', orderDetails.findAll);

  // Retrieve OrderDetails with orderId
  app.get('/orderDetails/:userID', orderDetails.findOne);

  //updateDelivery
  app.put('/updateDelievery', orders.updateDelievery);
};
