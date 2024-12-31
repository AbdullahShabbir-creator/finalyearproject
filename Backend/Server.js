const express = require('express');
const mongoose = require('mongoose');
const WebSocket = require('ws');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const admissionRoutes = require("./routes/admissionRoutes");
const workingHoursRoutes = require('./routes/workingHours');
const eventRoutes = require("./routes/eventRoutes");
const examRoutes = require('./routes/examRoutes');
const topStudentsRoutes = require('./routes/topStudentsRoutes');
const cron = require('node-cron');  // Import node-cron for scheduling
const path = require('path');  // Add this to handle file paths correctly
const cors = require('cors');

// Initialize app before using it
const app = express();

dotenv.config();

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Serve uploaded files (PDFs)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to MongoDB
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/workinghours', workingHoursRoutes);
app.use("/api", admissionRoutes);  // Admission routes
app.use('/api/events', eventRoutes);
app.use('/api/exams', examRoutes);
app.use('/api', topStudentsRoutes);

// Start the server and pass the HTTP server to WebSocket
const server = app.listen(5000, () => {
  console.log('Server running on port 5000');
});

// Create a WebSocket server using the `server` variable
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
    wss.clients.forEach(client => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
  ws.send('Connected to WebSocket');
});

// Add cron job to calculate and update top 20 students at midnight every day
const { calculateTopStudents } = require('./controllers/topStudentsController');  // Import your function

cron.schedule('0 0 * * *', async () => {  // This runs every day at midnight
  try {
    await calculateTopStudents();
    console.log('Top 20 students updated successfully!');
  } catch (error) {
    console.error('Error updating top 20 students:', error);
  }
});
