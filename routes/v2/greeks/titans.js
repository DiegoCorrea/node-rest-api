var express = require('express');
GreekTitan = require('./../../../models/greek_titans');
var router = express.Router();

/* GET titans listing. */
router.get('/', function(req, res, next) {
  GreekTitan.getTitans(function(err, titans){
    if(err){
      throw err;
    }
      res.json(titans);
  });
});

router.get('/:_id', function(req, res, next) {
  GreekTitan.getTitanById(req.params._id,function(err, titan){
    if(err){
      throw err;
    }
      res.json(titan);
  });
});
router.post('/', function(req, res, next) {
  var titan = req.body;
  GreekTitan.addTitan(titan,function(err, titan){
    if(err){
      throw err;
    }
      res.json(titan);
  });
});

router.put('/:_id', function(req, res, next) {
  var id = req.params._id;
  var titan = req.body;
  GreekTitan.updateTitan(id, titan, {},function(err, titan){
    if(err){
      throw err;
    }
      res.json(titan);
  });
});
router.delete('/:_id', function(req, res, next) {
  var id = req.params._id;
  GreekTitan.deleteTitan(id,function(err, titan){
    if(err){
      throw err;
    }
      res.json(titan);
  });
});
module.exports = router;
