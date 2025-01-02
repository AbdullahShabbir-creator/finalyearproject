import React from "react";
import"./App.css";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom"; // Import useNavigate
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
import SignUp from "./Register/SignUp";
import Fees from "./FeeStucture/Fees";
import ExamAssessment from "./Exam Assessment/Exam_Assessment";
import Chatbot from "./Chatbot/Main1"; 
import ScholarshipForm from "./ScholarshipForm/ScholarshipForm"

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
  const navigate = useNavigate();

  const goToChatbot = () => {
    navigate("/chatbot"); // Navigate to /chatbot route when the button is clicked
  };

  return (
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

        
            <button
              className="btn btn-primary position-fixed"
              style={{
                bottom: "20px",
                right: "20px",
                borderRadius: "30%",
                // padding: "15px",
                // fontSize: "px",
              }}
              onClick={goToChatbot} // Navigate to the chatbot route
            >
              <i className="fas fa-comment-dots"></i> {/* Chat icon */}
            </button>
          </>
        }
      />

      {/* Route for Chatbot */}
      <Route
        path="/chatbot"
        element={<Layout><Chatbot /></Layout>} // This is where your Chatbot component will be shown
      />

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
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
