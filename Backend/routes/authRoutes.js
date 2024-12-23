const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController"); // Ensure the correct import path

// Define the login route
router.post("/login", authController.login); // This should correctly refer to the login function in authController

module.exports = router;
