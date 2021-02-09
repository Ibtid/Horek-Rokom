module.exports = (app) => {
  const stripe = require('stripe')(
    'sk_test_51HZDOcHKFvH5Oe64TeTlfi1jVBOuZWkXNLmThln5aHz8AQ1ultBRscmDnx5XTPGfZ2QGecu4RBoLsxZBLCupsyik008PPJjTsM'
  );
  const { v4: uuidv4 } = require('uuid');

  app.post('/payment', (req, res) => {
    const { cartSummary, token } = req.body;
    console.log('PRODUCT ', cartSummary);
    console.log('PRICE ', cartSummary.total);
    const idempotencyKey = uuidv4();

    return stripe.customers
      .create({
        email: token.email,
        source: token.id,
      })
      .then((customer) => {
        stripe.charges.create(
          {
            amount: cartSummary.total * 100,
            currency: 'bdt',
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
