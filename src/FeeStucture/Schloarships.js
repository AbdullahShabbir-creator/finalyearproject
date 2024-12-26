import React from 'react';


const ScholarshipAccordion = () => {
  
  return (
    <div className="scholarship-accordion-container">
           <h1 className="text-center fee-table__fade-in">Scholarship</h1>
      <h6 className="scholarship-title text-center mb-4 text-danger">The following charges are payable at their designated times as applicable:</h6>

      <div className={`scholarship-accordion `}>
        <div className="scholarship-header" >
          <h5 className="m-0 p=0"><strong >Orphan Students 50%</strong></h5>
        
        </div>
        <div className="scholarship-content">
          <p>FREE ADMISSION!A 50% fee waiver on the monthly fee will be provided to orphan students to assist them in their financial burdens.</p>
        </div>
      </div>

      <div className={`scholarship-accordion `}>
        <div className="scholarship-header" >
        <h5 className="m-0 p=0"> <strong>Sibling Rebate 30%</strong></h5>
         
        </div>
        <div className="scholarship-content">
          <p>To lessen the financial burden of families with multiple siblings enrolled, a 30% waiver on the monthly fee will be given.</p>
        </div>
      </div>

      <div className={`scholarship-accordion `}>
        <div className="scholarship-header" >
        <h5 className="m-0 p-0"><strong>Merit Cum Need Scholarship 30%</strong></h5>
          
        </div>
        <div className="scholarship-content">
          <p>To care for students who are academically qualified and have serious financial problems, a 30% waiver on the monthly fee will be provided.</p>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipAccordion;
