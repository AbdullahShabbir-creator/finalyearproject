import React from 'react';
import ScholarshipAccordion from './Schloarships';
import './FeeStructure.css';



const FeeTable = () => {
  const feeDetails = [
    { label: 'Registration Fee', pre1to3: 'Rs. 2,000', grade1to5: 'Rs. 2,000', grade6to7: 'Rs. 2,000', grade8: 'Rs. 2,000', grade9to10: 'Rs. 2,000', hifz: 'Rs. 2,000', note: 'Payable at the time of Admission' },
    { label: 'Admission Fee', pre1to3: 'Rs. 5,000', grade1to5: 'Rs. 5,000', grade6to7: 'Rs. 5,000', grade8: 'Rs. 5,000', grade9to10: 'Rs. 5,000', hifz: 'Rs. 2,000', note: 'Payable at the time of Admission' },
    { label: 'Monthly Fee', pre1to3: 'Rs. 4,000', grade1to5: 'Rs. 4,000', grade6to7: 'Rs. 4,000', grade8: 'Rs. 4,000', grade9to10: 'Rs. 4,000', hifz: 'Rs. 2,000', note: 'Payable on Monthly Basis' },
    { label: 'Entry Test', pre1to3: 'Rs. 300', grade1to5: 'Rs. 300', grade6to7: 'Rs. 300', grade8: 'Rs. 300', grade9to10: 'Rs. 300', hifz: '', note: 'At The Time Of Admission' },
    { label: 'Stationery & Books (Complete Session)', pre1to3: 'Rs. 8,000', grade1to5: '', grade6to7: '', grade8: '', grade9to10: '', hifz: '', note: 'Payable at the start of Session' },
    { label: 'House Examination Charges', pre1to3: 'Rs. 700', grade1to5: 'Rs. 700', grade6to7: 'Rs. 700', grade8: 'Rs. 700', grade9to10: 'Rs. 700', hifz: 'Rs. 700', note: 'Payable at the start of every semester' },
    { label: 'Promotion Deposit', pre1to3: 'Rs. 1,000', grade1to5: 'Rs. 1,000', grade6to7: 'Rs. 1,000', grade8: 'Rs. 1,000', grade9to10: 'Rs. 1,000', hifz: '', note: 'Payable annually in May at the time of promotion' },
    { label: 'Science Practical Lab', pre1to3: '', grade1to5: '', grade6to7: '', grade8: '', grade9to10: 'Rs. 3,500', hifz: '', note: 'Payable annually in October' },
    { label: 'Scheduled Tests', pre1to3: '', grade1to5: '', grade6to7: '', grade8: '', grade9to10: 'Rs. 3,500', hifz: '', note: 'Payable annually in October' },
    { label: 'Internal Examination', pre1to3: '', grade1to5: '', grade6to7: '', grade8: '', grade9to10: 'Rs. 3,500', hifz: '', note: 'Payable annually in October' },
    { label: 'TOTAL FOR ADMISSION', pre1to3: 'Rs. 17,800', grade1to5: 'Rs. 11,300', grade6to7: 'Rs. 11,300', grade8: 'Rs. 11,300', grade9to10: 'Rs. 11,300', hifz: 'Rs. 6,000', note: '' },
  ];

  return (
    <div className="fee-table__container">
     
<ScholarshipAccordion/>
      <h1 className="text-center fee-table__fade-in">Fee Structure</h1>
      <p className="text-center m-0 p-0" style={{color: "#A9101A"}}>ASIF PUBLIC HIGH SCHOOL ISLAMABAD</p>
      <p style={{marginLeft:"18pc"}}>To ensure that no child misses the opportunity to study and excel in an extraordinary environment, APHSI offers <br />financial assistance to all the deserving cases.</p>
      <div className="table-responsive fee-table__fade-in">
        <table className="table table-bordered table-hover text-center fee-table__table">
          <thead>
            <tr>
              <th>Fee Type</th>
              <th>PRE 1 TO PRE 3</th>
              <th>1ST TO 5TH</th>
              <th>6TH TO 7TH</th>
              <th>8TH</th>
              <th>9TH & 10TH</th>
              <th>HIFZ</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {feeDetails.map((fee, index) => (
              <tr key={index}>
                <td>{fee.label}</td>
                <td>{fee.pre1to3}</td>
                <td>{fee.grade1to5}</td>
                <td>{fee.grade6to7}</td>
                <td>{fee.grade8}</td>
                <td>{fee.grade9to10}</td>
                <td>{fee.hifz}</td>
                <td>{fee.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeeTable;