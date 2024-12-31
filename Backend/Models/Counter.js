const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  count: {
    type: Number,
    required: true,
    default: 0,
  },
  misIdData: [{
    misId: String,
    name: String,
    email: String,
    classAppliedFor: String,
    contactNumber: String,
  }]
});

const Counter = mongoose.model("Counter", counterSchema);

module.exports = Counter;
