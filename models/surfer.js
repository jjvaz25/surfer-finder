const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create geolocation Schema
const GeoSchema = new Schema({
  type: {
    type: String,
    default: 'Point'
  },
  coordinates: {
    type: [Number],
    index: '2dsphere'
  }
}); 

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
  },
  geometry: GeoSchema
});


const Surfer = mongoose.model('surfer', SurferSchema);

module.exports = Surfer;