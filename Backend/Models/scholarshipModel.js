// backend/models/scholarshipModel.js
const mongoose = require('mongoose');

const scholarshipSchema = new mongoose.Schema({
  name: { type: String, required: true },
  Misid: { type: Number, required: true },
  className: { type: String, required: true },
  Grade: { type: Number, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  scholarshipType: { type: String, required: true },
});

const Scholarship = mongoose.model('Scholarship', scholarshipSchema);

module.exports = Scholarship;
