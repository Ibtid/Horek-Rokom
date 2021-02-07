const sql = require('./db.js');

// constructor
const OrderDetails = function (orderDetails) {
  this.orderID = orderDetails.orderID;
  this.productID = orderDetails.productID;
  this.userID = orderDetails.userID;
};

OrderDetails.create = (newOrderDetails, result) => {
  sql.query(
    'CALL insertOrderDetails(?, ?)',
    [
      /*newOrderDetails.orderID,*/
      newOrderDetails.productID,
      newOrderDetails.userID,
    ],
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }

      console.log('created order: ', { ...newOrderDetails });
      result(null, { ...newOrderDetails });
    }
  );
};

OrderDetails.getAll = (result) => {
  sql.query('SELECT * FROM orderDetails', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }

    console.log('orders: ', res);
    result(null, res);
  });
};

OrderDetails.findByOrderID = (userID, result) => {
  sql.query(
    `SELECT * FROM orderDetails WHERE userID = '${userID}'`,
    (err, res) => {
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
    }
  );
};

module.exports = OrderDetails;
