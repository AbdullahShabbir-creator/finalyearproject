import React, { useState } from 'react';
import "./Faqs.css"

const FaqItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className={`accordion ${isOpen ? 'active' : ''}`}>
      <input
        type="checkbox"
        id={question}
        checked={isOpen}
        onChange={toggle}
      />
      <label htmlFor={question} className="accordion__header">
         <h6> {question}</h6>
      </label>
      <div className="accordion__content" style={{ maxHeight: isOpen ? '1000px' : '0' }}>
        <h5 className='text-muted'><h6 className='text-danger'>Ans:</h6>{answer}</h5>
      </div>
    </div>
  );
};

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      question: "What is Asif Public School's mission?",
      answer: "Our mission is to provide quality education and foster the holistic development of our students."
    },
    {
      question: "What grade levels does Asif Public School offer?",
      answer: "We offer education from kindergarten through grade 12."
    },
    {
      question: "How can I apply for admission?",
      answer: "Applications can be submitted online through our website or in person at the school office."
    },
    {
      question: "What are the school hours?",
      answer: "Our school hours are from '8:00am - 2:00pm' Monday to Friday."
    },
    {
      question: "How can I apply for admission?",
      answer: "Applications can be submitted online through our website or in person at the school office."
    }
  ];

  return (
    <>
    <div className='bg-primary'>
    <h4 className='container pt-5 text-white'>FAQs: All You Need to Know</h4>
    <div className="containers ">
      <div className="accordions">
        {questions.map((item, index) => (
          <FaqItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            toggle={() => toggleAccordion(index)}
          />
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default Faqs;
