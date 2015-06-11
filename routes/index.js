var express = require('express');
var router = express.Router();
var object = require('./../models/cabins');
/* GET home page. */
router.get('/', function(req, res, next) {
  var cabin = object.cabins;
  res.render('index', { title: 'Express', cabinList: cabin });
});

module.exports = router;
