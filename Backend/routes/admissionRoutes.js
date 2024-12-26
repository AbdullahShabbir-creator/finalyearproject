const express = require("express");
const { admissionController } = require("../controllers/admissionController");

const router = express.Router();

// Route for handling the admission form submission
router.post("/admission", admissionController);

module.exports = router;
