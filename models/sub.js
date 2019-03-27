// load the things we need
var mongoose = require('mongoose');


// define the schema for our user model
var subSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  src: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
  }
}, {
  versionKey: false
});



// create the model for users and expose it to our app
module.exports = mongoose.model('Sub', subSchema);
