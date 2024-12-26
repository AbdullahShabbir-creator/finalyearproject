// models/WorkingHour.js

const mongoose = require('mongoose');

const workingHourSchema = new mongoose.Schema({
  day: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

const WorkingHour = mongoose.model('WorkingHour', workingHourSchema);

module.exports = WorkingHour;
