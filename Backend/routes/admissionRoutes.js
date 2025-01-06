const express = require("express");
const { admissionController, getAdmissionsGroupedByClass,updateAdmission, deleteAdmission, trackAdmissionById  } = require("../controllers/admissionController");

const router = express.Router();

// Route for handling the admission form submission
router.post("/admission", admissionController);
router.get("/admissions/grouped", getAdmissionsGroupedByClass);
router.get("/admission/:misId", trackAdmissionById );
router.put('/admissions/:id', updateAdmission);
router.delete('/admissions/:id', deleteAdmission);
module.exports = router;
