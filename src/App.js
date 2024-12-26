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
import SignUp from "./Register/SignUp";
import Logout from "./Register/Logout";
import Fees from "./FeeStucture/Fees"
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
      <Routes>
    
        <Route path="/" element={<>
              <Navbar />
              <Home />
              <About />
              <Homee/>
              <Care />
              <Services />
              <Footer />
            </>} />
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

    
        <Route path="/login" element={<Layout><LoginAD /></Layout>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="/u" element={
          <>
            <h1>Welcome to the Admin Portal</h1>
            <Facilities />
            <Faqs />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
