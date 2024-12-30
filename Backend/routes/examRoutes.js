const express = require('express');
const router = express.Router();
const { uploadPdf, getPdfByClass } = require('../controllers/examController');

// Route to upload a PDF for a specific class
router.post('/upload-pdf', uploadPdf);

// Route to fetch a PDF by className
router.get('/get-pdf/:className', getPdfByClass);

module.exports = router;
