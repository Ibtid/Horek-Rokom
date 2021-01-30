const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json({ limit: '50mb' }));

//parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(cors());

//simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to horek-rokom.' });
});

require('./routes/products.routes')(app);
require('./routes/customer.routes')(app);
require('./routes/payment.routes')(app);
require('./routes/order.routes')(app);

//set port, listen for requests
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
