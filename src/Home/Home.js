import React from 'react';

function Home() {
    console.log("Home component rendered");
    return (
        <>
        <div className='Home mt-1'></div>
        <div className='Homedata'>
          <h2 className='slide-fwd-center'>Enjoy Learning Center</h2>
          <p style={{ fontSize: '13px' }}>
            Education in its general sense is a form of learning in the Knowledge, Skills, and Habit
          </p>
          <a href="/" className='btn btn-primary'>Explore More</a>
        </div>
      </>
    ) 
}

export default Home;
