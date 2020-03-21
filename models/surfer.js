const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create surfer schema and model
const SurferSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please enter a name']
  },
  level: {
    type: String,
    required: [true, 'please enter your surfing level'],
    enum: ['Beginner', 'Intermediate', 'Advanced', 'Professional'],
    default: 'Beginner'
  },
  available: {
    type: Boolean,
    default: false
  }
  //add in geo location
});


const Surfer = mongoose.model('surfer', SurferSchema);

module.exports = Surfer;