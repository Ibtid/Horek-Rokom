module.exports = (app) => {
  const products = require('../controller/products.controller');

  // Retrieve all products
  app.get('/products', products.findAll);

  //add a new product
  app.post('/products', products.add);

  //Delete a Product with productID
  app.delete('/products/:productId', products.delete);
};
