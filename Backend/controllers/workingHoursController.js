// controllers/workingHoursController.js

const WorkingHour = require('../Models/WorkingHour');

// Get all working hours
const getAllHours = async (req, res) => {
  try {
    const hours = await WorkingHour.find();
    res.status(200).json(hours);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new working hour
const addHour = async (req, res) => {
  const { day, time } = req.body;
  const newHour = new WorkingHour({ day, time });

  try {
    const savedHour = await newHour.save();
    res.status(201).json(savedHour);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an existing working hour
const updateHour = async (req, res) => {
  const { time } = req.body;
  const { id } = req.params;

  try {
    const updatedHour = await WorkingHour.findByIdAndUpdate(
      id,
      { time },
      { new: true }
    );
    res.status(200).json(updatedHour);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a working hour
const deleteHour = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedHour = await WorkingHour.findByIdAndDelete(id);
    res.status(200).json(deletedHour);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getAllHours,
  addHour,
  updateHour,
  deleteHour,
};
