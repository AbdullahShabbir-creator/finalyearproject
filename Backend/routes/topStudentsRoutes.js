const express = require('express');
const { calculateTopStudents } = require('../controllers/topStudentsController');

const router = express.Router();

// Route to calculate and store the top 20 students
router.get('/calculateTopStudents', calculateTopStudents);

module.exports = router;
