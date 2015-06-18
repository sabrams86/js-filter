var express = require('express');
var router = express.Router();
var db = require('../connection');
var collection = db.get('cabincollection');

/* GET home page. */
router.get('/', function(req, res, next) {
  collection.find({},{}, function(e, docs){
    res.render('index', {cabinList: docs})
  });
});

router.get('/cabins.json', function(req, res, next){
  collection.find({},{}, function(e, docs){
    res.json(docs);
  });
});

// router.post('/cabins.json', function(req, res, next){
//   check1 = req.body.check1;
//   check2 = req.body.check2;
//   check3 = req.body.check3;
//   check4 = req.body.check4;
//   text = req.body.test;
//   console.log(check11, '------',check2, '--------', text);
//   res.json(object);
// });

module.exports = router;
