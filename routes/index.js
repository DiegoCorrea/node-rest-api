var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ 
    title: 'Coleção dos Deuses', 
    description: 'REST API dedicada a pesquisa de deuses', 
    resources_v1: {
      nordics: '/v1/nordics',
      yorubas: '/v1/iorubas',
      greeks: '/v1/greeks'
    } 
  });
});

module.exports = router;
