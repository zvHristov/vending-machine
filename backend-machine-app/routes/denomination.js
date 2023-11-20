var express = require('express');
var router = express.Router();
var fakeData = require('../public/denominations.json');

/* GET denominations listing. */
router.get('/', function(req, res, next) {
  console.log('event get denominations', res);
  
  res.status(200).json(fakeData);
});

module.exports = router;