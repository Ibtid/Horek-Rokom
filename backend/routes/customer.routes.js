module.exports = (app) => {
  const customers = require('../controller/customer.controller.js');

  // Create a new Customer
  app.post('/customers', customers.create);

  // Retrieve all Customers
  app.get('/customers', customers.findAll);
};
