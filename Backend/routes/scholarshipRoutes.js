const express = require('express');
const router = express.Router();
const { submitScholarshipForm } = require('../controllers/scholarshipController');

// Route to handle scholarship form submission
router.post('/submit', submitScholarshipForm);

module.exports = router;
