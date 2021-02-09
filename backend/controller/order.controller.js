const Order = require('../models/order.model.js');

// Create and Save a new Order
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }

  const order = new Order({
    orderID: req.body.orderID,
    userID: req.body.userID,
    address: req.body.address,
    totalItem: req.body.totalItem,
    totalPrice: req.body.totalPrice,
    delievered: req.body.delievered,
  });

  Order.create(order, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Order.',
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  Order.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving orders.',
      });
    else res.send(data);
  });
};

// Find a single Customer with a customerId
exports.findOne = (req, res) => {
  Order.findByOrderID(req.params.userID, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Order with id ${req.params.userID}.`,
        });
      } else {
        res.status(500).send({
          message: 'Error retrieving Order with id ' + req.params.userID,
        });
      }
    } else res.send(data);
  });
};

//Update delievery
exports.updateDelievery = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }
  const order = new Order({
    orderID: req.body.orderID,
    userID: req.body.userID,
    address: req.body.address,
    totalItem: req.body.totalItem,
    totalPrice: req.body.totalPrice,
    delievered: req.body.delievered,
    orderDate: req.body.orderDate,
  });
  Order.updateDelivery(order, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while updating the Order.',
      });
    else res.send(data);
  });
};
