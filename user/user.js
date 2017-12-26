var mongoose = require('mongoose');

// Using the Global promise object for Mongoose promise 
mongoose.Promise = global.Promise;
// Setting the connection to MongoDB
mongoose.connect(process.env.DB_URL, { useMongoClient: true });

var UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');