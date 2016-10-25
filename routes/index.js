var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/datos', function(req, res) {
  res.json({});
});

module.exports = router;
