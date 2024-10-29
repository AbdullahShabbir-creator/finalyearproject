import "./App.css";
import "./Home/Home.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Services from "./Services/Services";
import About from "./About/About";
import Home from "./Home/Home";
import VisionMissionGoals from "./VissionMisson/VisionMissionGoals";
import LeadingwithInnovation from "./Leading with Innovation/LeadingwithInnovation";
import Main1 from "./Main1/Main1";
import Admissionforms from "./Admissionform/Admissionforms";
import Facilities from "./StudentLife/Facilities";
import Care from "./Care/Care";
import Contactus from "./Contact/Contactus";

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
        <Route
          path="/VisionMissionGoals"
          element={
            <>
              <Layout>
                <VisionMissionGoals />
              </Layout>
            </>
          }
        />
        <Route
          path="/LeadingwithInnovation"
          element={
            <>
              <Layout>
                <LeadingwithInnovation />
              </Layout>
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <About />
              <Care />
              <Services />
              <Footer />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <Navbar />
              <Services />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <Main1 />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/AdmissionForm"
          element={
            <>
              <Layout>
                <Admissionforms />
              </Layout>
            </>
          }
        />
        <Route
          path="/Facilities"
          element={
            <>
              <Layout>
                <Facilities />
              </Layout>
            </>
          }
        />
        <Route
          path="/ContactUs"
          element={
            <>
              <Layout>
                <Contactus />
              </Layout>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
