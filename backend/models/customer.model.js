const sql = require('./db.js');

//constructor
const Customer = function (customer) {
  this.username = customer.username;
  this.email = customer.email;
  this.password = customer.password;
};

Customer.create = (newCustomer, result) => {
  sql.query(
    'INSERT INTO customers SET custID = createCustID (?,?), username = ?, email = ?, password = ?',
    [
      newCustomer.username,
      newCustomer.email,
      newCustomer.username,
      newCustomer.email,
      newCustomer.password,
    ],
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }

      console.log('created customer: ', { ...newCustomer });
      result(null, { ...newCustomer });
    }
  );
};

Customer.getAll = (result) => {
  sql.query('SELECT * FROM customers', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }

    console.log('customers: ', res);
    result(null, res);
  });
};

module.exports = Customer;
