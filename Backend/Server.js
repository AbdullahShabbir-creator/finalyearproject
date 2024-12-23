const express = require("express");
const cors = require("cors"); // Enable Cross-Origin Resource Sharing (CORS)
const authRoutes = require("./routes/authRoutes"); // Import your auth routes
const admissionController = require("./controllers/admissionController"); // Import admission controller

const app = express();
require('dotenv').config();

// Enable CORS
app.use(cors());

// Middleware to parse JSON body
app.use(express.json());  // This ensures that the body of POST requests is parsed as JSON

// Routes
app.use("/api/auth", authRoutes); // Use the auth routes for login
app.post("/api/admissions", admissionController.admissionController); // Use admission controller for admission routes

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
