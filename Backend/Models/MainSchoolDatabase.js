const mongoose = require('mongoose');

const mainSchoolDatabaseSchema = new mongoose.Schema({
  misId: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  classAppliedFor: { type: String, required: true },
  obtainedMarks: { type: Number, required: true },
  totalMarks: { type: Number, required: true },
  rank: { type: Number, required: true }, // Rank of the student in the list
  createdAt: { type: Date, default: Date.now },
});

const MainSchoolDatabase = mongoose.model('MainSchoolDatabase', mainSchoolDatabaseSchema);

module.exports = MainSchoolDatabase;
