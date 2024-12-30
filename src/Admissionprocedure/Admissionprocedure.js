import React from 'react';
import { Link } from 'react-router-dom';
function Admissionprocedure() {
  return (
    <div className='Admissionprocedure'>
      <div className='container mt-4'>
        <h3 className='text-primary text-center mt-3'>Admission Procedure</h3>
        <ul className='list-unstyled mt-4'>
            <li><h3>The procedure for admission is as follows:</h3></li>
            <li><b>1- </b> Admission Application Form must be filled online by following the instructions. <Link to="/AdmissionForm">Click Here</Link> for Online Admission Application</li>
            <li><b>2- </b> The online system assigns a unique Application Reference Number (ARN) to each applicant, which must be noted for later use.</li>
            <li><b>3- </b> Register the child with The Asif School by paying a small nonrefundable registration fee and collecting The Asif School Prospectus for rules and regulations and other details. It is highly recommended that parents read the Prospectus in detail to understand the School’s mission, values and what it stands for in the community and what it expects of its students and their parents.</li>
            <li><b>4- </b> Upon registration, the School will inform the parents about the dates for test and interview.</li>
            <li><b>5- </b> Students will be tested in English, Mathematics and Science subjects. Students will also be interviewed. The test and interview will take place the same day.</li>
            <li><b>6- </b> Parents will be informed when to collect their child’s result. Along with the result, remaining procedure for confirming admission to The Asif School will also be explained..</li>
        </ul>
      </div>
    </div>
  )
}

export default Admissionprocedure
