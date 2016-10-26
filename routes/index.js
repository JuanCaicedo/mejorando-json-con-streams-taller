var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/datos', function(req, res) {

  var pathGato = path.resolve(__dirname, '../datos/gato.json');
  var datosGato = fs.createReadStream(pathGato);
  datosGato.pipe(res);

});

module.exports = router;
