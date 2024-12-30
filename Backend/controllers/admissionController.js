const AdmissionForm = require("../Models/AdmissionForm");
const sendNotification = require('../utils/emailService');

exports.admissionController = async (req, res) => {
  try {
    // Required fields for the admission form
    const requiredFields = [
      "firstName", "lastName", "classAppliedFor", "age", "gender", "dob", 
      "address", "city", "state", "zip", "guardianName", "contactNumber", 
      "email", "previousSchool", "emergencyContact", "emergencyContactNumber"
    ];

    // Check if all required fields are present
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ error: `${field} is required.` });
      }
    }

    // Create a new admission entry in the database
    const admission = new AdmissionForm(req.body);
    await admission.save();

    // Send notifications to the user and admin
    sendNotification(req.body.email, req.body);

    // Send a success response
    res.status(201).json({
      message: "Admission form submitted successfully",
      admission
    });
  } catch (error) {
    console.error("Admission creation error:", error);
    res.status(400).json({ error: error.message });
  }
};
