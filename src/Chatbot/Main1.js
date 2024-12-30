import React, { useState } from 'react';
// Make sure to import Bootstrap styles

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const predefinedQuestions = [
    "What is the admission process?",
    "What are the school hours?",
    "What subjects are offered?",
    "What extracurricular activities are available?",
    "How can I contact the school?",
    "What is the school fee structure?",
    "What is the school's policy on student attendance?",
    "Does the school provide transportation?",
    "Is there a parent-teacher meeting schedule?",
    "What is the school uniform policy?",
    "What health services are available at school?",
    "Are there any programs for younger students (Pre-K/KG)?",
    "How is the curriculum structured for grades 1-5?",
    "What subjects are taught in middle school (grades 6-8)?",
    "How can I apply for a scholarship for high school students?",
    "Does the school offer any summer camps or holiday programs?",
    "What is the school's policy on homework for younger students?",
    "Are there any career counseling services for grade 10 students?",
    "What are the graduation requirements for grade 10?",
    "How does the school support students with learning disabilities?"
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
      return '=> You can apply for admission by visiting our admissions page.';
    } else if (lowerCaseMessage.includes('school hours')) {
      return '=> Our school hours are from 8:00 AM to 1:40 PM.';
    } else if (lowerCaseMessage.includes('subjects')) {
      return '=> We offer a range of subjects from Kindergarten to Grade 10, including Mathematics, Science, English, Social Studies, and more.';
    } else if (lowerCaseMessage.includes('extracurricular')) {
      return '=> We have various extracurricular activities, including sports, arts, music, drama, and various student clubs.';
    } else if (lowerCaseMessage.includes('contact')) {
      return '=> You can contact the school administration on the Contact Us page or call the school office.';
    } else if (lowerCaseMessage.includes('school fee structure')) {
      return '=> Our school fee structure varies depending on the grade level. Please visit the fees page for detailed information.';
    } else if (lowerCaseMessage.includes('attendance policy')) {
      return '=> Regular attendance is important for student success. Parents should inform the school about absences, and excessive absences may require medical certificates.';
    } else if (lowerCaseMessage.includes('transportation')) {
      return '=> Yes, the school provides bus transportation for students within a specific radius. Please check with the school office for more details.';
    } else if (lowerCaseMessage.includes('parent-teacher meetings')) {
      return '=> Parent-teacher meetings are held twice a year. Dates will be communicated via the school calendar and notices.';
    } else if (lowerCaseMessage.includes('uniform policy')) {
      return '=> The school has a standard uniform policy. Students must wear the prescribed uniform to school, which includes specific guidelines for clothing and shoes.';
    } else if (lowerCaseMessage.includes('health services')) {
      return '=> We have a health center with a nurse on duty during school hours. In case of emergencies, immediate care will be provided.';
    } else if (lowerCaseMessage.includes('programs for younger students')) {
      return '=> We offer a nurturing Pre-K and Kindergarten program that focuses on early childhood development, learning through play, and social skills.';
    } else if (lowerCaseMessage.includes('curriculum grades 1-5')) {
      return '=> The curriculum for grades 1-5 focuses on building core subjects like Mathematics, English, Science, and Social Studies with age-appropriate lessons.';
    } else if (lowerCaseMessage.includes('middle school subjects')) {
      return '=> For grades 6-8, we offer a more specialized curriculum including subjects like Science, Mathematics, Social Studies, English, and optional foreign languages.';
    } else if (lowerCaseMessage.includes('scholarships high school')) {
      return '=> Scholarship opportunities are available for high school students based on academic performance and extracurricular achievements. Please inquire at the school office for more details.';
    } else if (lowerCaseMessage.includes('summer camps')) {
      return '=> Yes, the school offers summer camps focused on academics, sports, and arts. Registration details are available on our website.';
    } else if (lowerCaseMessage.includes('homework policy for younger students')) {
      return '=> Homework for younger students (Pre-K to Grade 5) is kept minimal, focusing on reinforcing lessons learned during the day. It generally takes no more than 20-30 minutes per night.';
    } else if (lowerCaseMessage.includes('career counseling grade 10')) {
      return '=> Career counseling for grade 10 students begins in the second semester. Our counselors assist with career exploration and high school course selection based on future goals.';
    } else if (lowerCaseMessage.includes('graduation requirements grade 10')) {
      return '=> To graduate from grade 10, students must meet the required passing grades in core subjects and participate in school exams at the end of the year.';
    } else if (lowerCaseMessage.includes('learning disabilities support')) {
      return '=> The school provides support for students with learning disabilities through individualized education plans (IEPs) and specialized learning strategies.';
    } else {
      return '=> I don\'t have that information. You can ask question below.. For further details, Contact us.';
    }
  };
  return (
    <div className="container my-4">
      <div className="chat-container border p-3 rounded bg-light shadow-sm" style={{ height: '450px', overflowY: 'auto', maxWidth: '600px', margin: '0 auto' }}>
        <h3 className="text-center text-primary">Ask a Question</h3>
        <div className="messages-container">
          {messages.map((msg, index) => (
            <div key={index} className={`mb-3 text-${msg.sender === 'user' ? 'end' : 'start'}`}>
              <div className={`badge p-3 ${msg.sender === 'user' ? 'bg-primary text-white' : 'bg-secondary text-white'}`} style={{ wordWrap: 'break-word' }}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="input-group mt-3">
        <input
          type="text"
          className="form-control"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask a question..."
          aria-label="Ask a question"
        />
        <button className="btn btn-primary" onClick={() => handleSend()} aria-label="Send message">Send</button>
      </div>
      <div className="mt-3 d-flex flex-wrap justify-content-center">
        {predefinedQuestions.map((question, index) => (
          <button
            key={index}
            className="btn btn-outline-primary m-1"
            onClick={() => handleSend(question)}
            style={{ flex: '1 1 150px', minWidth: '250px' }}
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Chatbot;
