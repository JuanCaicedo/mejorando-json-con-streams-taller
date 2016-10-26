var express = require('express');
var fs = require('fs');
var path = require('path');
var highland = require('highland');
var oboe = require('oboe');
var request = require('request');

var router = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/datos', function(req, res) {
  res.json({});
});

module.exports = router;
