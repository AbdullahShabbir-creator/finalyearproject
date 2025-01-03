const express = require("express");
const { generateChatbotResponse } = require("../controllers/chatbotController");

const router = express.Router();

// POST route to handle chatbot message
router.post("/chat", generateChatbotResponse);

module.exports = router;
