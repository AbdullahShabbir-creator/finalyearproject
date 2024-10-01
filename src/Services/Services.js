import React from 'react';
import ser1 from './ser1.png';
import ser2 from './ser2.png';
import ser3 from './ser3.png';
import ser4 from './ser4.png';
import ser5 from './ser5.png';
export default function Services() {
  const services = [
    {
      imgSrc: ser1,
      altText: "Friendly environment",
      title: "Friendly Environment",
      description: "A friendly school environment fosters positive relationships, where students feel encouraged to thrive both academically and socially.",
      style: { backgroundColor: 'red', border: '2px solid red' }
    },
    {
      imgSrc: ser2,
      altText: "Activity rooms",
      title: "Activity Rooms",
      description: "Activity rooms in schools provide dedicated spaces for students to explore interests, engage in creative projects, and develop new skills.",
      style: { backgroundColor: '#00ff40', border: '2px solid #00ff40' }
    },
    {
      imgSrc: ser3,
      altText: "Art classes",
      title: "Art Classes",
      description: "Art classes in school allow students to express their creativity, explore various mediums, and develop their artistic skills.",
      style: { backgroundColor: '#00b0ff', border: '2px solid #00b0ff' }
    },
    {
      imgSrc: ser4,
      altText: "Full day sessions",
      title: "Full Day Sessions",
      description: "Full-day sessions provide a comprehensive learning, allowing students for exploration of subjects and development of skills.",
      style: { backgroundColor: 'red', border: '2px solid red' }
    },
    {
      imgSrc: ser5,
      altText: "Quality staff",
      title: "Quality Staff",
      description: "'A quality staff in a school fosters a nurturing and engaging learning environment, driving student success through dedication and expertise.",
      style: { backgroundColor: '#00ff40', border: '2px solid #00ff40', }
    }
  ];  

  return (
    <div className='container mt-5'>
      <h1 className='text-center'>Services</h1>
      <div className='row '>
        {services.map((service, index) => (
          <div className='col-md-4 col-sm-6 col-xs-12 p-3' key={index}>
            <div className='service-card card1 p-4'style={{height:'350px'}}>
              <img
                className='service-img'
                style={service.style}
                src={service.imgSrc}
                alt={service.altText}
              />
              <h5>{service.title}</h5>
              <p style={{textAlign:'left'}}>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
