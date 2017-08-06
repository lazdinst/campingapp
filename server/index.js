var express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
var mongoHelper = require('../database-mongo');

var app = express();
var port = 1337;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/api/forests', function (req, res) {
  console.log('SERVER: Getting Forests')
  mongoHelper.findAll()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

app.post('/api/forests', function (req, res, next) {
  console.log('SERVER: Posting new Forest')
  console.log(req.body);
  mongoHelper.saveNewForest(req.body)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.log(err);
    });
});


// app.post('/forests', function (req, res, next) {
//   console.log('SERVER: Posting new Forest')
//   console.log(req.body);
//   mongoHelper.saveNewForest(req.body, function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       console.log(data);
//       res.json(data);
//     }
//   })
// });

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'react-client', 'dist', 'index.html'));
});

app.listen(port, function() {
  console.log('listening on port ' + port + '!');
});