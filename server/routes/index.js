var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */

router.get('/', function(req, res) {
  //res.render('index', { title: 'Express' });
  res.sendFile(path.join());
});

module.exports = router;
