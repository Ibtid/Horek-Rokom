const OrderDetails = require('../models/orderDetails.model.js');

// Create and Save a new Order
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }

  const orderDetails = new OrderDetails({
    orderID: req.body.orderID,
    productID: req.body.productID,
    userID: req.body.userID,
  });

  OrderDetails.create(orderDetails, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Order.',
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  OrderDetails.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving orderDetails.',
      });
    else res.send(data);
  });
};

// Find a single Customer with a customerId
exports.findOne = (req, res) => {
  OrderDetails.findByOrderID(req.params.userID, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found OrderDetails with id ${req.params.username}.`,
        });
      } else {
        res.status(500).send({
          message:
            'Error retrieving OrderDetails with id ' + req.params.username,
        });
      }
    } else res.send(data);
  });
};
