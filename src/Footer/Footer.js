import React from 'react';

export default function Footer() {
    return (
        <div className="container-fluid bg-light mt-2 text-dark">
            <div className='container'>
                <div className="row">
                    <div className="col-md-5  mt-3 mb-4 mb-md-0">
                        <h2 className=' text-success mx-2'>Mission</h2>
                        <p className='col-md-8'>Our mission is to provide a well-rounded education that encourages curiosity, creativity, and critical thinking. With a team of passionate educators and a supportive community, we strive to help each student reach their full potential and prepare for a bright future.
                        </p>
                        <span className='row m-4'>
                        <div className='text-center m-1' style={{
                            width: '35px',
                            height: '25px',
                            backgroundColor: '#5472d2',
                            borderRadius: '20px'
                        }}><i className="vc_icon_element-icon fa fa-facebook text-white"></i>
                        </div>
                        <div className='text-center m-1' style={{
                            width: '35px',
                            height: '25px',
                            backgroundColor: 'red',
                            borderRadius: '20px'
                        }}><i className="vc_icon_element-icon fa fa-instagram text-white"></i>
                        </div>
                        <div className='text-center m-1' style={{
                            width: '35px',
                            height: '25px',
                            backgroundColor: 'green',
                            borderRadius: '20px'
                        }}><i className="vc_icon_element-icon fa fa-whatsapp text-white"></i>
                        </div>
                        </span>
                    </div>
                    <div className="col-md-4 mt-3 text-dark  mb-4 mb-md-0">
                        <h2 className='text-success'>Quick Links</h2>
                        <ul className="list-unstyled m-2">
                            <li className="mb-2"><a href="#extended-care" className="text-dark text-decoration-none"><i className="fa fa-spinner"></i> Extended Care</a></li>
                            <li className="mb-2"><a href="#handbook" className="text-dark text-decoration-none"><i className="fa fa-spinner"></i> Handbook</a></li>
                            <li className="mb-2"><a href="/About" className="text-dark text-decoration-none"><i className="fa fa-spinner"></i> About Us</a></li>
                            <li className="mb-2"><a href="#classroom" className="text-dark text-decoration-none"><i className="fa fa-spinner"></i> Classroom</a></li>
                            <li className="mb-2"><a href="#events" className="text-dark text-decoration-none"><i className="fa fa-spinner"></i> Events</a></li>
                            <li className="mb-2"><a href="/ContactUs" className="text-dark text-decoration-none"><i className="fa fa-spinner"></i>Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3  ">
                        <div className="mb-4 mt-3">
                            <h2 className='text-success'>Programs</h2>
                            <ul className="list-unstyled">
                                <li className="mb-2"><i className="_icon fa fa-graduation-cap text-success" /> Develop fine and gross skills</li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h3 className='text-success'>Online Ed</h3>
                            <ul className="list-unstyled">
                                <li className="mb-2 "><i className="_icon fa fa-bell text-success" />Processes and maintenance</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-success'>Awards</h3>
                            <ul className="list-unstyled">
                                <li className="mb-2"> <i className="_icon fa fa-trophy text-success" />"Merit Recognition Trophy"</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
