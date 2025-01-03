import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Services from "./Services/Services";
import About from "./About/About";
import Home from "./Home/Home";
import VisionMissionGoals from "./VissionMisson/VisionMissionGoals";
import LeadingwithInnovation from "./Leading with Innovation/LeadingwithInnovation";
import Admissionforms from "./Admissionform/Admissionforms";
import Facilities from "./StudentLife/Facilities";
import Care from "./Care/Care";
import Contactus from "./Contact/Contactus";
import Admissionprocedure from "./Admissionprocedure/Admissionprocedure";
import Homee from "./Home-1/Homee";
import Faqs from "./FaqsAF/Faqs";
import Studentevents from "./Studentevent/Studentevents";
import EducationCards from "./CurrculimOverview/CurrculimOverview";
import Schoolnews from "./SchoolNew/Schoolnews";
import StudentCalender from "./Event Calender/EventCalender";
import LoginAD from "./Register/LoginAD";
// import SignUp from "./Register/SignUp";
import Fees from "./FeeStucture/Fees";
import ExamAssessment from "./Exam Assessment/Exam_Assessment";
import Chatbot from "./Chatbot";
import ScholarshipForm from "./ScholarshipForm/ScholarshipForm";

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <AppWithNavigation />
    </Router>
  );
}

function AppWithNavigation() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false); // State for toggling chatbot popup visibility

  const toggleChatbot = () => {
    setIsChatbotOpen(prevState => !prevState);
  };

  return (
    <>
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <About />
              <Homee />
              <Care />
              <Services />
              <Footer />
            </>
          }
        />

        {/* Chatbot Popup */}
       

        {/* Other Routes */}
        <Route path="/VisionMissionGoals" element={<Layout><VisionMissionGoals /></Layout>} />
        <Route path="/EducationCards" element={<Layout><EducationCards /></Layout>} />
        <Route path="/Schoolnews" element={<Layout><Schoolnews /></Layout>} />
        <Route path="/StudentCalender" element={<Layout><StudentCalender /></Layout>} />
        <Route path="/Studentevents" element={<Layout><Studentevents /></Layout>} />
        <Route path="/LeadingwithInnovation" element={<Layout><LeadingwithInnovation /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/AdmissionForm" element={<Layout><Admissionforms /></Layout>} />
        <Route path="/Facilities" element={<Layout><Facilities /></Layout>} />
        <Route path="/ContactUs" element={<Layout><Contactus /></Layout>} />
        <Route path="/Admissionprocedure" element={<Layout><Admissionprocedure /></Layout>} />
        <Route path="/Faqs" element={<Layout><Faqs /></Layout>} />
        <Route path="/Fees" element={<Layout><Fees /></Layout>} />
        <Route path="/Scholarshipform" element={<Layout><ScholarshipForm /></Layout>} />
        <Route path="/ExamAssessment" element={<Layout><ExamAssessment /></Layout>} />
        <Route path="/login" element={<Layout><LoginAD /></Layout>} />
        {/* <Route path="/signup" element={<Sigup/>} /> */}
      </Routes>

      {/* Chatbot button */}
      <button
        className="btn btn-primary position-fixed"
        style={{
          width:"3%",
          bottom: "20px",
          right: "20px",
          borderRadius: "30%",
          padding: "4px",
          fontSize: "20px",
        }}
        onClick={toggleChatbot} // Open chatbot popup
      >
        <i className="fas fa-comment-dots "></i>
      </button>
      {isChatbotOpen && (
          <div className="chatbot-popup">
            <div className="chatbot-popup-overlay" onClick={toggleChatbot}></div>
            <div className="chatbot-popup-content">
              <button
                className="close-chatbot-btn"
                onClick={toggleChatbot}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  background: "transparent",
                  border: "none",
                  fontSize: "20px",
                  color: "#333",
                }}
              >
                ✖
              </button>
              <Chatbot />
            </div>
          </div>
        )}
    </>
  );
}

export default App;
