//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/retail';
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: String,
  username: { type: String, required: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  meta: {
    age: Number,
    website: String
  },
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var Team = mongoose.model('team', userSchema);

// make this available to our users in our Node applications
//module.exports = User;
// create a new user
var newUser = Team({
    name: 'raj',
    username: 'abhi123',
    password: 'password',
    admin: true
  });

  // save the user
newUser.save(function(err) {
    if (err) throw err;
  
    console.log('User created!');
  });

  // get all the users
  Team.find({}, function(err, users) {
  if (err) throw err;

  // object of all the users
  console.log(users);
});

// // get the user starlord55
// User.find({ username: 'starlord55' }, function(err, user) {
//   if (err) throw err;

//   // object of the user
//   console.log(user);
// });
// get a user with ID of 1
// User.findById(2, function(err, user) {
//   if (err) throw err;

//   // show the one user
//   console.log(user);
// });