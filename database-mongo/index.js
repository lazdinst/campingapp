var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var exampleData = require('../lib/data/forestExampleData.js');

mongoose.connect('mongodb://localhost/dispersed');
var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

//|Defining User Schema
//|
//| TODO: Is require: false actually needed?
var userSchema = mongoose.Schema({
  username: {type: String, unqiue: true},
  password: String,
  config: { profilePhoto: String, required: false }
});

var User = mongoose.model('User', userSchema);
userSchema.plugin(passportLocalMongoose);

//|Defining Forest Mongo Functions
//|
var registerNewUser = (user) => {
  console.log('(Mongo) Adding' + user.username + ' to Database');
  return User.create(user)
    .then((user) => {
      console.log('(Mongo) Success! Adding ' + user.username + ' to Database');
      return user;
    })
}

//|Defining Forest Schema
//|
var forestSchema = mongoose.Schema({
  name: { type: String, unique: true },
  image: String,
  description: String,
  usfs: String,
  reviews: Array
});

var Forest = mongoose.model('Forest', forestSchema);

//|Defining Forest Mongo Functions
//|
var saveNewForest = (forest) => {
  return Forest.create(forest)
    .then((forest) => {
      console.log('SUCCESS: ' + forest.name + ' added to Database');
      return forest;
    })
};

var findAll = () => {
  return Forest.find()
    .exec();
};

var newForestReview = (review, callback) => {
  Forest.findOneAndUpdate(
    { _id: review.forestid }, 
    { $push: { reviews: review } }, function(err, doc){
      if(err){
        console.log('Mongo ERROR: ', err)
      }
      console.log('THIS IS WHAT COMES BACK', doc)
      callback(err, doc)
    }
  )

//|Load Example Data
//|

// var forests = exampleData.forests;
// forests.forEach((forest)=>{
//   Forest.create(forest, function (err, forest) {
//     if (err) {
//       console.log('ERROR: Not added to database', err);
//     } else {
//       console.log('SUCCESS: ' + forest + ' added to Database');
//     }
//   });
// })

}

module.exports.User = User;
module.exports.registerNewUser = registerNewUser;
module.exports.newForestReview = newForestReview;
module.exports.findAll = findAll;
module.exports.saveNewForest = saveNewForest;









