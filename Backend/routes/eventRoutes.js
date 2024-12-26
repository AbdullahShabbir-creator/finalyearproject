const express = require('express');
const router = express.Router();
const {
  getAllEvents,
  addEvent,
  updateEvent,
  deleteEvent,
} = require('../controllers/eventController');

// Route to get all events
router.get('/', getAllEvents);

// Route to add a new event
router.post('/', addEvent);

// Route to update an event by ID
router.put('/:id', updateEvent);

// Route to delete an event by ID
router.delete('/:id', deleteEvent);

module.exports = router;
