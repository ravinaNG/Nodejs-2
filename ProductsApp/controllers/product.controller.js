const Product = require('../models/product.model');

// Simple version, without validating or sanitation
exports.test = function (req, res){
    res.send('Greetings from the Test controller!');
};
