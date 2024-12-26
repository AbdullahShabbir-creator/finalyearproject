const Event = require('../Models/Event');

// Get all events
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new event
const addEvent = async (req, res) => {
  const { name, date, location, description } = req.body;

  const newEvent = new Event({
    name,
    date,
    location,
    description,
  });

  try {
    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an event
const updateEvent = async (req, res) => {
  const { name, date, location, description } = req.body;
  const { id } = req.params;

  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      id,
      { name, date, location, description },
      { new: true }
    );
    res.status(200).json(updatedEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete an event
const deleteEvent = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedEvent = await Event.findByIdAndDelete(id);
    res.status(200).json(deletedEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getAllEvents,
  addEvent,
  updateEvent,
  deleteEvent,
};
