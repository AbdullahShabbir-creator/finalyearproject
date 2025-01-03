const axios = require("axios");

const generateChatbotResponse = async (req, res) => {
  const { question } = req.body;

  if (!question || !question.trim()) {
    return res.status(400).json({ error: "Question is required" });
  }

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.API_GENERATIVE_LANGUAGE_CLIENT}`,
      {
        contents: [{ parts: [{ text: question }] }],
      }
    );

    const aiResponse =
      response?.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response received";
    res.json({ answer: aiResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong, please try again." });
  }
};

module.exports = { generateChatbotResponse };
