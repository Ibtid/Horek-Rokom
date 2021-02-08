const sql = require('./db');

//constructor
const Products = function (products) {
  this.name = products.name;
  this.price = products.price;
  this.image = products.image;
  this.description = products.description;
  this.category = products.category;
};

Products.getAll = (result) => {
  sql.query('SELECT * FROM PRODUCTS', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }
    console.log('PRODUCTS: ', res);
    result(null, res);
  });
};

Products.add = (newProduct, result) => {
  sql.query('INSERT INTO PRODUCTS SET ?', newProduct, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }
    console.log('created product: ', { id: res.insertId, ...newProduct });
    result(null, { id: res.insertId, ...newProduct });
  });
};

Products.remove = (id, result) => {
  sql.query('DELETE FROM PRODUCTS WHERE id = ?', id, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      //not found product with the id
      result({ kind: 'not_found' }, null);
      return;
    }
    console.log('deleted product with id: ', id);
    result(null, res);
  });
};

Products.findByProductsByCategory = (category, result) => {
  sql.query(
    `SELECT * FROM products WHERE category = '${category}'`,
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log('found product: ', res);
        result(null, res);
        return;
      }

      // not found Customer with the id
      result({ kind: 'not_found' }, null);
    }
  );
};

module.exports = Products;
