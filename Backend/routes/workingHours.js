// routes/workingHours.js

const express = require('express');
const router = express.Router();
const {
  getAllHours,
  addHour,
  updateHour,
  deleteHour,
} = require('../controllers/workingHoursController');

// Route to get all working hours
router.get('/', getAllHours);

// Route to add a new working hour
router.post('/', addHour);

// Route to update a working hour by ID
router.put('/:id', updateHour);

// Route to delete a working hour by ID
router.delete('/:id', deleteHour);

module.exports = router;
