const mongoose = require("mongoose");

const AdmissionFormSchema = new mongoose.Schema(
  {
    misId: { type: String, required: true, unique: true }, // MIS ID field
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    classAppliedFor: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zip: {
      type: String,
      required: true,
    },
    guardianName: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, 
    },
    previousSchool: {
      type: String,
      required: true,
    },
    emergencyContact: {
      type: Number,
      required: true,
    },
    emergencyContactNumber: {
      type: String,
      required: true,
    },
    ObtainedMarks: {
      type: Number,
      default: "", // Optional field for medical info
    },
    TotalMarks: {
      type: Number,
      default: "", // Optional field for additional notes
    },
  },
  { timestamps: true }
);

const AdmissionForm = mongoose.model("AdmissionForm", AdmissionFormSchema);

module.exports = AdmissionForm;
