var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var mongoHelper = require('../database-mongo');

var passport = require('passport');
//var User = require('../database/models/user');
var LocalStrategy = require('passport-local');
var passportLocalMongoose = require('passport-local-mongoose');

var app = express();
var port = 1337;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../react-client/dist'));

// app.use(require('express-session')({
//     secret: 'Rusty is the best and cutest dog in the world',
//     resave: false,
//     saveUninitialized: false
// }));

// app.use(passport.initialize());
// app.use(passport.session());

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

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

// app.get('/location', function (req, res) {
// });

// app.post('/location', function (req, res) {
//   let location = req.body;
//   database.save(location);
// });

// app.get('/secret', isLoggedIn, function(req, res){
//   res.end('secret');
// });

// function isLoggedIn(req, res, next){
//   if(req.isAuthenticated()){
//     return next();
//   }
//   res.end('Not logged in.');
// }

// app.post("/login", passport.authenticate("local", {
//     successRedirect: "/secret",
//     failureRedirect: "/login"
// }), function(req, res){
// });


// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'react-client', 'dist', 'index.html'));
});

app.listen(port, function() {
  console.log('listening on port ' + port + '!');
});