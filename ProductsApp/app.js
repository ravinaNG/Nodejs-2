const express = require('express');
const bodyParser = require('body-parser');

// initialize our express app
const product = require('./routes/product.route'); // Imports routes for the product
const app = express();

app.use('/products', product);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
