import { useState, useRef, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import "./Chabot.css"
function Chatbot() {
  const [chatHistory, setChatHistory] = useState([]);
  const [question, setQuestion] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory, generatingAnswer]);

  async function generateAnswer(e) {
    e.preventDefault();
    if (!question.trim()) return;

    setGeneratingAnswer(true);
    const currentQuestion = question;
    setQuestion(""); // Clear input immediately after sending

    setChatHistory(prev => [...prev, { type: "question", content: currentQuestion }]);

    try {
      const response = await axios({
        url: "http://localhost:5000/api/chat", // Assuming backend is running locally
        method: "post",
        data: { question: currentQuestion },
      });

      const aiResponse = response?.data?.answer || "No response received.";
      setChatHistory(prev => [...prev, { type: "answer", content: aiResponse }]);
    } catch (error) {
      console.log(error);
      setChatHistory(prev => [
        ...prev,
        { type: "answer", content: "Sorry - Something went wrong. Please try again!" },
      ]);
    }
    setGeneratingAnswer(false);
  }

  return (
    <div className="chatbot-container">
        <h4 className="text-center mb-3 text-success">Chabot AI</h4>
      <div ref={chatContainerRef} className="chatbot-history">
      <h4>Ask Anything?</h4>
        {chatHistory.map((chat, index) => (
          <div
            key={index}
            className={`chat-message ${chat.type === "question" ? "user-message" : "ai-message"}`}
          >            
            <ReactMarkdown className="chat-content">{chat.content}</ReactMarkdown>
          </div>
        ))}
        {generatingAnswer && <div className="thinking-indicator">Thinking...</div>}
      </div>
      <form onSubmit={generateAnswer} className="chatbot-form">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask anything..."
          rows="2"
          className="chat-input"
        />
        <button type="submit" disabled={generatingAnswer} className="send-button">
          Send
        </button>
      </form>
    </div>
  );
}

export default Chatbot;
