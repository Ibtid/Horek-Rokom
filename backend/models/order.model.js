const sql = require('./db.js');

// constructor
const Order = function (order) {
  this.orderID = order.orderID;
  this.userID = order.userID;
  this.address = order.address;
  this.totalItem = order.totalItem;
  this.totalPrice = order.totalPrice;
  this.delievered = order.delievered;
};

Order.create = (newOrder, result) => {
  sql.query(
    'INSERT INTO orders SET orderID = ?, userID = ?, address = ?, totalItem = ?, totalPrice = ?, delievered = ?',
    [
      newOrder.orderID,
      newOrder.userID,
      newOrder.address,
      newOrder.totalItem,
      newOrder.totalPrice,
      newOrder.delievered,
    ],
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }

      console.log('created order: ', { ...newOrder });
      result(null, { ...newOrder });
    }
  );
};

Order.getAll = (result) => {
  sql.query('SELECT * FROM orders', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }

    console.log('orders: ', res);
    result(null, res);
  });
};

Order.findByOrderID = (userID, result) => {
  sql.query(`SELECT * FROM orders WHERE userID = '${userID}'`, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log('found order: ', res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: 'not_found' }, null);
  });
};

module.exports = Order;
