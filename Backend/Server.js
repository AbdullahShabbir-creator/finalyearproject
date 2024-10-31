const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const User = require("./Models/Users");
const AdmissionForm = require("./Models/AdmissionForm");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Signup route
app.post("/api/signup", async (req, res) => {
  const { email, password, username } = req.body;

  try {
    // Check if all fields are provided
    if (!email || !password || !username) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check for existing user by email
    const existingUserByEmail = await User.findOne({ email });
    if (existingUserByEmail) {
      return res.status(400).json({ error: "Email already in use" });
    }

    // Check for existing user by username
    const existingUserByUsername = await User.findOne({ username });
    if (existingUserByUsername) {
      return res.status(400).json({ error: "Username already in use" });
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    // Save the user to the database
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Signup error:", error);
    // Handle duplicate key error
    if (error.code === 11000) {
      return res
        .status(400)
        .json({ error: "Email or username already in use" });
    }
    // Generic error message
    res.status(500).json({ error: "An error occurred while signing up" });
  }
});

// Login route
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    res.json({ message: "Login successful", user: { email: user.email } });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});
// Admission routes
app.post("/api/admissions", async (req, res) => {
  try {
    const { firstName, lastName, classAppliedFor, age } = req.body;

    // Validate fields
    if (!firstName || !lastName || !classAppliedFor || age === undefined) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const admission = new AdmissionForm(req.body);
    await admission.save();
    res.status(201).json(admission);
  } catch (error) {
    console.error("Admission creation error:", error);
    res.status(400).json({ error: error.message });
  }
});

// Health check route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
