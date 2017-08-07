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
  console.log('(Server) Posting new Forest')
  console.log(req.body);
  mongoHelper.saveNewForest(req.body)
    .then((data) => {
      console.log('(Server) Sucess! Posting new Forest')
      res.json(data)
    })
    .catch((err) => {
      console.log('(Server) Error! Posting new Forest')
      console.log(err);
    });
});

app.post('/api/forests/review/new', function (req, res, next) {
  console.log('(Server): Posting new Forest Review')
  console.log(req.body);

  //TODO: Promisify the following code
  mongoHelper.newForestReview(req.body, function(err, review) {
    if(err) {
      res.sendStatus(500);
    }
    res.json(review);
  })
});


app.post('/api/register', function (req, res, next) {
  console.log('(Server) Registering New User')
  console.log(req.body);
  mongoHelper.registerNewUser(req.body)
    .then((data) => {
      console.log('(Server) Sucess! Registering New User')
      res.json(data)
    })
    .catch((err) => {
      console.log('(Server) Error! Registering New User')
      console.log(err);
    });
});


// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'react-client', 'dist', 'index.html'));
});

app.listen(port, function() {
  console.log('listening on port ' + port + '!');
});