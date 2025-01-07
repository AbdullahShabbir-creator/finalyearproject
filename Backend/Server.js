const express = require('express');
const mongoose = require('mongoose');
const WebSocket = require('ws');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const admissionRoutes = require("./routes/admissionRoutes");
const workingHoursRoutes = require('./routes/workingHours');
const eventRoutes = require("./routes/eventRoutes");
const examRoutes = require('./routes/examRoutes');
const cron = require('node-cron');  
const path = require('path');  
const cors = require('cors');
const chatbotRoutes = require("./routes/chatbotRoutes");
const scholarshipRoutes = require('./routes/scholarshipRoutes');

const app = express();

dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

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
app.use('/api/scholarship', scholarshipRoutes);
app.use("/api", chatbotRoutes);


const server = app.listen(5000, () => {
  console.log('Server running on port 5000');
});

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

