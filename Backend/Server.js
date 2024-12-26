const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes'); // Import routes
const admissionRoutes = require("./routes/admissionRoutes");
const cors = require('cors');
const workingHoursRoutes = require('./routes/workingHours');
dotenv.config();
const eventRoutes = require("./routes/eventRoutes");

const app = express();
app.use(express.json()); // Middleware for JSON body parsing
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Use the authentication routes
app.use('/api/auth', authRoutes);
app.use('/api/workinghours', workingHoursRoutes);
app.use("/api", admissionRoutes);
app.use('/api/events', eventRoutes);
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
