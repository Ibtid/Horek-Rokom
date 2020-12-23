module.exports = (app) => {
  const stripe = require('stripe')(
    'sk_test_51HZDOcHKFvH5Oe64TeTlfi1jVBOuZWkXNLmThln5aHz8AQ1ultBRscmDnx5XTPGfZ2QGecu4RBoLsxZBLCupsyik008PPJjTsM'
  );
  const { v4: uuidv4 } = require('uuid');

  app.post('/payment', (req, res) => {
    const { product, token } = req.body;
    console.log('PRODUCT ', product);
    console.log('PRICE ', product.price);
    const idempotencyKey = uuidv4();

    return stripe.customers
      .create({
        email: token.email,
        source: token.id,
      })
      .then((customer) => {
        stripe.charges.create(
          {
            amount: product.price * 100,
            currency: 'usd',
            customer: customer.id,
            receipt_email: token.email,
          },
          { idempotencyKey }
        );
      })
      .then((result) => res.status(200).json(result))
      .catch((err) => console.log(err));
  });
};
