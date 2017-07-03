var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ 
    title: 'Coleção dos Deuses', 
    description: 'REST API dedicada a pesquisa de deuses', 
    resources_v1: {
      nordic_gods: '/v1/nordics',
      greeks_gods: '/v1/greeks'
    },
    resources_v2: {
      nordic_gods: '/v2/nordics/gods',
      nordic_golens: '/v2/nordics/golens',
      greeks_gods: '/v2/greeks/gods',
      greeks_titans: '/v2/greeks/titans',
    } 
  });
});

module.exports = router;
