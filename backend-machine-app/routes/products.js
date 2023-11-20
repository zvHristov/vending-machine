var express = require('express');
var router = express.Router();
var fakeData = require('../public/products.json');

/* GET products listing. */
router.get('/', function(req, res, next) {
  console.log('event get products', res);
  
  res.status(200).json(fakeData);
});

module.exports = router;
