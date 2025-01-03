import axios from "axios";

export const sendMessage = async (question) => {
  try {
    const response = await axios.post("http://localhost:5000/api/chat", { question });
    return response.data.answer;  // Return AI response
  } catch (error) {
    console.error("Error sending message:", error);
    throw new Error("Failed to get response");
  }
};
