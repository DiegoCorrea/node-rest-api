var express = require('express');
GreekGod = require('./../../../models/greek_gods');
var router = express.Router();

/* GET gods listing. */
router.get('/', function(req, res, next) {
  GreekGod.getGods(function(err, gods){
    if(err){
      throw err;
    }
      res.json(gods);
  });
});

router.get('/:_id', function(req, res, next) {
  GreekGod.getGodById(req.params._id,function(err, god){
    if(err){
      throw err;
    }
      res.json(god);
  });
});
router.post('/', function(req, res, next) {
  var god = req.body;
  GreekGod.addGod(god,function(err, god){
    if(err){
      throw err;
    }
      res.json(god);
  });
});

router.put('/:_id', function(req, res, next) {
  var id = req.params._id;
  var god = req.body;
  GreekGod.updateGod(id, god, {},function(err, god){
    if(err){
      throw err;
    }
      res.json(god);
  });
});
router.delete('/:_id', function(req, res, next) {
  var id = req.params._id;
  GreekGod.deleteGod(id,function(err, god){
    if(err){
      throw err;
    }
      res.json(god);
  });
});
module.exports = router;
