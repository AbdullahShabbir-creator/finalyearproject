const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../Models/Users");
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Test if the user is found in the database (skip password validation)
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    res.json({ message: "User found" });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "An error occurred while logging in" });
  }
};
