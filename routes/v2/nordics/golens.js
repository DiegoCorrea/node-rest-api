var express = require('express');
NordicGolem = require('./../../../models/nordic_golens');
var router = express.Router();

/* GET golens listing. */
router.get('/', function(req, res, next) {
  NordicGolem.getGolens(function(err, golens){
    if(err){
      throw err;
    }
      res.json(golens);
  });
});

router.get('/:_id', function(req, res, next) {
  NordicGolem.getGodById(req.params._id,function(err, golem){
    if(err){
      throw err;
    }
      res.json(golem);
  });
});
router.post('/', function(req, res, next) {
  var golem = req.body;
  NordicGolem.addGolem(golem,function(err, golem){
    if(err){
      throw err;
    }
      res.json(golem);
  });
});

router.put('/:_id', function(req, res, next) {
  var id = req.params._id;
  var golem = req.body;
  NordicGolem.updateGolem(id, golem, {},function(err, golem){
    if(err){
      throw err;
    }
      res.json(golem);
  });
});
router.delete('/:_id', function(req, res, next) {
  var id = req.params._id;
  NordicGolem.deleteGolem(id,function(err, golem){
    if(err){
      throw err;
    }
      res.json(golem);
  });
});
module.exports = router;
