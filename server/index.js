var express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
var Forest = require('../database-mongo');

var app = express();
var port = 1337;

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

// app.post('/', function(req,res,next){
//   //Get all the Forests from the Database

// });

app.listen(port, function() {
  console.log('listening on port ' + port + '!');
});