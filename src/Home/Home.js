import React from 'react';
import { SwiperSlide } from 'swiper/react';
import './Home.css'; 

const Home = () => {
  return (
    <div className='o'>
 
      <section>
        <div className="content mt-4">
          <h1>Let's Explore The World Together!</h1>
          <p>
               "At Asif Public School, we’re committed to shaping the future through modern education. Our innovative courses, including cutting-edge AI programs, empower students to explore new technologies and ideas, preparing them to thrive in a rapidly changing world. Join us in fostering creativity, critical thinking, and a passion for learning!"
          </p>
          <div  className='text-center mt-3'>
          <a href="/" className="btn btn-primary">
          Explore More
        </a>
          </div>
        </div>

      
          <SwiperSlide>
            <img src="https://media.istockphoto.com/id/1338737959/photo/little-kids-schoolchildren-pupils-students-running-hurrying-to-the-school-building-for.jpg?s=612x612&w=0&k=20&c=u2eZV7PY4TTGKvxRBRkhiaDoFFEFPKeOlCsYARCqFSI=" alt="Walking Tour in Florence" />
           
            <div className="overlay">
              <h2>Empowering Futures at Asif Public School</h2>
              <p className='text-muted'>
                 At Asif Public School, we nurture young minds with cutting-edge AI courses and a commitment to excellence, paving the way for a brighter tomorrow. 
              </p>
             
            </div>
          </SwiperSlide>
  
      </section>
    </div>
  );
};

export default Home;
