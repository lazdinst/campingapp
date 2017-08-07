var mongoose = require('mongoose');
var exampleData = require('../lib/data/forestExampleData.js');
mongoose.connect('mongodb://localhost/dispersed');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

//Define forestSchema
var forestSchema = mongoose.Schema({
  name: { type: String, unique: true },
  image: String,
  description: String,
  usfs: String,
  reviews: Array
});

var Forest = mongoose.model('Forest', forestSchema);

//ADD EXAMPLE DATA TO MONGO
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

}

module.exports.newForestReview = newForestReview;
module.exports.findAll = findAll;
module.exports.saveNewForest = saveNewForest;









