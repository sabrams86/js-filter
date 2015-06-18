var express = require('express');
var router = express.Router();
var db = require('../connection');
var collection = db.get('cabincollection');

/* GET home page. */
router.get('/', function(req, res, next) {
  collection.find({}, function(e, docs){
    res.render('index', {cabinList: docs})
  });
});

router.get('/cabins.json', function(req, res, next){
  var sortOrder = 1;
  if (req.query.order === 'asc'){
    sortOrder = 1;
  } else if (req.query.order === 'desc'){
    sortOrder = -1;
  }

  if (req.query.check1 != 'true' && req.query.check2 != 'true' && req.query.check3 != 'true' && req.query.check4 != 'true' && req.query.check5 != 'true' && req.query.check6 != 'true'){
    collection.find({}, {sort:{price: sortOrder}}, function(e, docs){
      res.json(docs);
    });
  } else {
    if (req.query.check1 === 'true'){
      var high1 = 50001;
      var low1 = 0;
    } else {
      var high1 = 0;
      var low1 = 0;
    }
    if(req.query.check2 === 'true'){
      var high2 = 100001;
      var low2 = 49999;
    } else {
      var high2 = 0;
      var low2 = 0;
    }
    if (req.query.check3 === 'true'){
      var high3 = 200001;
      var low3 = 99999;
    } else {
      var high3 = 0;
      var low3 = 0;
    }
    if (req.query.check4 === 'true'){
      var high4 = 300001;
      var low4 = 199999;
    } else {
      var high4 = 0;
      var low4 = 0;
    }
    if (req.query.check5 === 'true'){
      var high5 = 500001;
      var low5 = 299999;
    } else {
      var high5 = 0;
      var low5 = 0;
    }
    if (req.query.check6 === 'true'){
      var high6 = 1000001;
      var low6 = 499999;
    } else {
      var high6 = 0;
      var low6 = 0;
    }
    collection.find( { $or: [
      { price: { $gt : low1, $lt : high1 } },
      { price: { $gt : low2, $lt : high2 } },
      { price: { $gt : low3, $lt : high3 } },
      { price: { $gt : low4, $lt : high4 } },
      { price: { $gt : low5, $lt : high5 } },
      { price: { $gt : low6, $lt : high6 } }
      ] }, {sort:{price: sortOrder}}, function(e, docs){
        res.json(docs);
    });
  }
});

module.exports = router;
