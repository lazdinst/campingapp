var express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
var mongoHelper = require('../database-mongo');

var app = express();
var port = 1337;

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/forests', function (req, res) {
  console.log('SERVER: Getting Forests')
  mongoHelper.findAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(port, function() {
  console.log('listening on port ' + port + '!');
});