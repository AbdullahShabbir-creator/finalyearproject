import React from 'react';
import { Link } from 'react-router-dom';
import './Admissionprocedure.css'; // Import styled CSS

function AdmissionProcedure() {
  return (
    <div className="admission-procedure-container">
      <div className="procedure-wrapper">
       
        <h3 className="procedure-title">Admission Procedure</h3>


        <ul className="procedure-list">
          <li className="procedure-step">

            <div className="procedure-step-header">

              <span className="procedure-step-number">1.</span> Fill Admission Form
            </div>
            <p>
              Admission Application Form must be filled online by following the instructions.{' '}
              <Link to="/AdmissionForm" className="procedure-link-button">
                Click Here
              </Link>{' '}
              to fill the online form.
            </p>

          </li>
          <li className="procedure-step">
            <div className="procedure-step-header">
              <span className="procedure-step-number">2.</span> Get Application Reference Number
            </div>
            <p>
              The system assigns a unique Application Reference Number (ARN) to each applicant. Note
              this number for future reference.
            </p>
          </li>
          <li className="procedure-step">
            <div className="procedure-step-header">
              <span className="procedure-step-number">3.</span> Register and Collect Prospectus
            </div>
            <p>
              Register the child with the school by paying a non-refundable registration fee and
              collecting the school prospectus.
            </p>
            <img
              src="/images/prospectus.jpg"
              alt="School Prospectus"
              className="procedure-step-image"
            />
          </li>
          <li className="procedure-step">
            <div className="procedure-step-header">
              <span className="procedure-step-number">4.</span> Attend Test and Interview
            </div>
            <p>
              Attend the test and interview on the scheduled date. The test covers English,
              Mathematics, and Science.
            </p>
          </li>
          <li className="procedure-step">
            <div className="procedure-step-header">
              <span className="procedure-step-number">5.</span> Receive Results
            </div>
            <p>
              Parents will be informed when to collect their child’s results and complete the
              admission process.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AdmissionProcedure;
