// models/AdmissionForm.js
const mongoose = require('mongoose');

const AdmissionFormSchema = new mongoose.Schema({
  
    password: { type: String, required: true },
    description: { type: String, required: true, unique: true }
});

const AdmissionForm = mongoose.model('AdmissionForm', AdmissionFormSchema);
module.exports = AdmissionForm;
