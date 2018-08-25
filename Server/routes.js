var express = require('express');
var router = express.Router();

var product = require('./models/product');

router.get('/ds-sp/', function (req, res, next) {
    product.getAllProduct(function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});


module.exports = router;