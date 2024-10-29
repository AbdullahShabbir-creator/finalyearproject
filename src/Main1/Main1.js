// src/Chatbot.js
import React, { useState } from 'react';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const predefinedQuestions = [
    "What is the admission process?",
    "What are the school hours?",
    "What subjects are offered?",
    "What extracurricular activities are available?",
    "How can I contact the school?"
  ];

  const handleSend = (message) => {
    const newMessages = [...messages, { text: message || input, sender: 'user' }];
    const botResponse = getBotResponse(message || input);

    if (botResponse) {
      newMessages.push({ text: botResponse, sender: 'bot' });
    }

    setMessages(newMessages);
    setInput('');
  };

  const getBotResponse = (message) => {
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes('admission')) {
      return '=>You can apply for admission by visiting our admissions page.';
    } else if (lowerCaseMessage.includes('school hours')) {
      return '=>Our school hours are from 8:00 AM to 3:00 PM.';
    } else if (lowerCaseMessage.includes('subjects')) {
      return '=>We offer a from KG to Matric.';
    } else if (lowerCaseMessage.includes('extracurricular')) {
      return '=>We have various extracurricular activities, including sports and clubs.';
    } else if (lowerCaseMessage.includes('contact')) {
      return '=>You can contact the school administration at Contact us page.';
    } else {
      return '=>I\'m sorry, I don\'t have that information. For Further Information contact us';
    }
  };

  return (
    <div className="container my-4">
      <div className="border p-3 rounded bg-light" style={{ width:"50%", height: '400px', overflowY: 'auto' }}>
        <h3 className='text-center text-primary'>Ask Question?</h3>
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 text-${msg.sender === 'user' ? 'end' : 'start'}`}>
            <div className={`badge ${msg.sender === 'user' ? 'bg-primary' : 'bg-secondary'}`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="input-group mt-3"style={{ width:"50%"}}>
        <input
          type="text"
          className="form-control"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask a question..."
        />
        <button className="btn btn-primary" onClick={() => handleSend()}>Send</button>
      </div>
      <div className="mt-3" style={{ width:"50%"}}>
        {predefinedQuestions.map((question, index) => (
          <button
            key={index}
            className="btn btn-outline-secondary m-1"
            onClick={() => handleSend(question)}
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Chatbot;
