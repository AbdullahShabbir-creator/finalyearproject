 // models/Item.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: Number,
});

const User = mongoose.model('Item', userSchema);

module.exports = User;

