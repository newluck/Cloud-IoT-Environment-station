const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema
const HumiditySchema = new Schema({
  value:{
    type: String,
    required: true
  },
  date:{
    type: Date,
    required: true
  }
});

//create model
mongoose.model('humidityValues', HumiditySchema);
