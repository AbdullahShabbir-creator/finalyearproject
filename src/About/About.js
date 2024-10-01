import React from 'react';
import sc1 from './sc1.jpg';
import sc2 from './sc2.jpg';
import sc3 from './sc3.jpg';
export default function About() {
    return (
        <>
            
        <div className='text-center '>
            <h4 className='text-center m-3'>About Us</h4>
            <div className='row ' style={{marginLeft:'0px', marginRight: '0px',backgroundColor:'#f5f0e1'}}>
                <div className='col-md-4 mb-2 mt-2'>
                    <div className='card text-center hover-effect ' style={{ width: '100%', height: '400px',borderRadius:'15px' }}>
                        <img className='card-img-top rounded-circle mx-auto d-block mt-2' src={sc1} alt="sc1" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                        <div className='card-body'>
                            <h5 className='card-title'>STRATEGIES</h5>
                            <p className='card-text text-muted'>"Each new day is a chance to learn and grow, so always be curious!"</p>
                            <a href="/" className='btn btn-primary'>Explore More</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 mb-2 mt-2' >
                    <div className='card text-center hover-effect' style={{ width: '100%', height: '400px',borderRadius:'15px' }}>
                        <img className='card-img-top rounded-circle mx-auto d-block mt-2' src={sc2} alt="sc2" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                        <div className='card-body'>
                            <h5 className='card-title'>MOTIVATION</h5>
                            <p className='card-text text-muted'>"The future belongs to those who believe in the beauty of their dreams."</p>
                            <a href="/" className='btn btn-primary'>Explore More</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 mb-4 mt-2'>
                    <div className='card text-center hover-effect' style={{ width: '100%', height: '400px' ,borderRadius:'15px'}}>
                        <img className='card-img-top rounded-circle mx-auto d-block mt-2' src={sc3} alt="sc3" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                        <div className='card-body'>
                            <h5 className='card-title'>REGISTRATION</h5>
                            <p className='card-text text-muted'>"Don’t watch the clock; do what it does. Keep going."  Join Us!</p>
                            <a href="/" className='btn btn-primary'>Explore More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
