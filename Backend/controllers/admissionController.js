const AdmissionForm = require("../Models/AdmissionForm"); // Correct model for admission form

// Admission form submission handler
exports.admissionController = async (req, res) => {
  try {
    const requiredFields = [
      "firstName", "lastName", "classAppliedFor", "age", "gender", "dob", 
      "address", "city", "state", "zip", "guardianName", "contactNumber", 
      "email", "previousSchool", "emergencyContact", "emergencyContactNumber"
    ];

    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ error: `${field} is required.` });
      }
    }

    const admission = new AdmissionForm(req.body);
    await admission.save();
    res.status(201).json(admission);
  } catch (error) {
    console.error("Admission creation error:", error);
    res.status(400).json({ error: error.message });
  }
};
