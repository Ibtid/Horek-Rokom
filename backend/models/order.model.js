const sql = require('./db.js');

// constructor
const Order = function (order) {
  this.orderID = order.orderID;
  this.userID = order.userID;
  this.address = order.address;
  this.totalItem = order.totalItem;
  this.totalPrice = order.totalPrice;
  this.delievered = order.delievered;
  this.orderDate = order.orderDate;
};

Order.create = (newOrder, result) => {
  sql.query(
    'INSERT INTO orders SET userID = ?, address = ?, totalItem = ?, totalPrice = ?, delievered = ?, orderDate=curDate()',
    [
      /*newOrder.orderID,*/
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
      console.log(res);
      console.log('created order: ', { ...newOrder });
      result(null, { ...newOrder, orderDate: 'Hi' });
    }
  );
};

Order.getAll = (result) => {
  sql.query('SELECT * FROM orders ORDER BY orderID DESC', (err, res) => {
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
      console.log('found order: ', res);
      result(null, res);
      return;
    }

    // not found Customer with the id
    result({ kind: 'not_found' }, null);
  });
};

Order.updateDelivery = (newOrder, result) => {
  sql.query(
    'UPDATE orders SET delievered = ? where orderID = ? ',
    [newOrder.delievered, newOrder.orderID],
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }
      console.log(res);
      console.log('updated order: ', { ...newOrder });
      result(null, { ...newOrder });
    }
  );
};

module.exports = Order;
