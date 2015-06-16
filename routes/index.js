var express = require('express');
var router = express.Router();
var object = require('./../models/cabins');
/* GET home page. */
router.get('/', function(req, res, next) {
  var cabin = object.cabins;
  res.render('index', { title: 'Express', cabinList: cabin });
});

router.get('/cabins.json', function(req, res, next){
  var blah = req.params.stuff;
  console.log(blah);
  res.json(object);
});

router.post('/cabins.json', function(req, res, next){
  check1 = req.body.check1;
  check2 = req.body.check2;
  check3 = req.body.check3;
  check4 = req.body.check4;
  text = req.body.test;
  console.log(check11, '------',check2, '--------', text);
  res.json(object);
});

module.exports = router;
