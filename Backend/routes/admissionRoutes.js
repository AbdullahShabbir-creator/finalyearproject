const express = require("express");
const { admissionController, getTopStudents, trackAdmissionById  } = require("../controllers/admissionController");

const router = express.Router();

// Route for handling the admission form submission
router.post("/admission", admissionController);

// Route for fetching top 100 students
router.get("/admissions/top", getTopStudents);

// admissionRoutes.js

router.get("/admission/:misId", trackAdmissionById );


module.exports = router;
