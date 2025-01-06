const express = require("express");
const { admissionController, getAdmissionsGroupedByClass, trackAdmissionById  } = require("../controllers/admissionController");

const router = express.Router();

// Route for handling the admission form submission
router.post("/admission", admissionController);

// Route for fetching top 100 students
router.get("/admissions/grouped", getAdmissionsGroupedByClass);


// admissionRoutes.js

router.get("/admission/:misId", trackAdmissionById );


module.exports = router;
