var express = require('express');
NordicGod = require('./../../../models/nordic_gods');
var router = express.Router();

/* GET gods listing. */
router.get('/', function(req, res, next) {
  NordicGod.getGods(function(err, gods){
    if(err){
      throw err;
    }
      res.json(gods);
  });
});

router.get('/:_id', function(req, res, next) {
  NordicGod.getGodById(req.params._id,function(err, god){
    if(err){
      throw err;
    }
      res.json(god);
  });
});
router.post('/', function(req, res, next) {
  var god = req.body;
  NordicGod.addGod(god,function(err, god){
    if(err){
      throw err;
    }
      res.json(god);
  });
});

router.put('/:_id', function(req, res, next) {
  var id = req.params._id;
  var god = req.body;
  NordicGod.updateGod(id, god, {},function(err, god){
    if(err){
      throw err;
    }
      res.json(god);
  });
});
router.delete('/:_id', function(req, res, next) {
  var id = req.params._id;
  NordicGod.deleteGod(id,function(err, god){
    if(err){
      throw err;
    }
      res.json(god);
  });
});
module.exports = router;
