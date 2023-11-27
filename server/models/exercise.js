const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  day: {
    type: String,
    required: true,
  },
  exerciseName: {
    type: String,
    required: true,
  },
});

const exerciseModel = mongoose.model('Exercise', exerciseSchema);

module.exports = exerciseModel;