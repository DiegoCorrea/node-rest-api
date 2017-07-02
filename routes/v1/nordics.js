var express = require('express');
Nordic = require('./../../models/nordic');
var router = express.Router();

/* GET gods listing. */
router.get('/', function(req, res, next) {
  Nordic.getAll(function(err, nordics){
    if(err){
      throw err;
    }
      res.json(nordics);
  });
});
router.get('/:_id', function(req, res, next) {
  Nordic.getGodById(req.params._id,function(err, god){
    if(err){
      throw err;
    }
      res.json(god);
  });
});
module.exports = router;
