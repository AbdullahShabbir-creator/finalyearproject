const AdmissionForm = require("../Models/AdmissionForm");
const Counter = require("../Models/Counter");
const sendNotification = require('../utils/emailService');
exports.admissionController = async (req, res) => {
  try {
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

    // Get the latest MIS ID from the Counter model
    const counter = await Counter.findOneAndUpdate(
      { name: "mis_id" },
      { $inc: { count: 1 } },
      { new: true, upsert: true }
    );

    // Generate the MIS ID (5 digits)
    const misId = counter.count.toString().padStart(5, '0');
    console.log("Generated MIS ID: ", misId);  // Debugging the generated MIS ID

    // Create the admission form with MIS ID
    const admission = new AdmissionForm({
      ...req.body,
      misId: misId,  // Add MIS ID to the form data
    });

    // Save the admission form to the database
    await admission.save();

    console.log("Admission form saved:", admission);  // Check admission object

    // Store the student information in the Counter collection
    const studentDetails = {
      misId: misId,
      name: req.body.firstName + " " + req.body.lastName,
      email: req.body.email,
      classAppliedFor: req.body.classAppliedFor,
      contactNumber: req.body.contactNumber,
    };

    // Update the Counter collection with student details
    await Counter.findOneAndUpdate(
      { name: "mis_id" },
      { $push: { misIdData: studentDetails } },
      { new: true }
    );

    // Send notifications to the user and admin
    console.log("Sending notification to user...");
    sendNotification(req.body.email, admission);  // Pass the 'admission' object

    // Send a success response
    res.status(201).json({
      message: "Admission form submitted successfully",
      admission: {
        ...admission.toObject(),
        misId, // Return the generated MIS ID
      }
    });
  } catch (error) {
    console.error("Admission creation error:", error);
    res.status(400).json({ error: error.message });
  }
};


// admissionController.js

exports.getAdmissionsGroupedByClass = async (req, res) => {
  try {
    const groupedAdmissions = await AdmissionForm.aggregate([
      { $group: { 
          _id: "$classAppliedFor", 
          students: { $push: "$$ROOT" } 
      }},
    ]);

    res.status(200).json({ groupedAdmissions });
  } catch (error) {
    console.error("Error fetching grouped admissions:", error);
    res.status(500).json({ error: "Failed to fetch grouped admissions." });
  }
};

// admissionController.js

exports.trackAdmissionById = async (req, res) => {
  try {
    const { misId } = req.params;  // Get MIS ID from URL parameters

    // Find the admission form by MIS ID
    const admission = await AdmissionForm.findOne({ misId });

    if (!admission) {
      return res.status(404).json({ error: "No admission found for this MIS ID." });
    }

    // Optionally, include a status field for the admission
    res.status(200).json({ 
      admission: {
        ...admission.toObject(),
        status: admission.status || "inProgress" // Default status is "inProgress"
      }
    });
  } catch (error) {
    console.error("Error fetching admission by MIS ID:", error);
    res.status(500).json({ error: "Failed to fetch admission details." });
  }
};
