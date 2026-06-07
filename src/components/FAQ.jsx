import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Is Root Canal treatment painful?',
      answer: 'No, modern root canal treatments are virtually painless. With advanced local anesthetics and techniques like Laser RCT, the procedure is no more uncomfortable than getting a standard filling. Our clinics specialize in pain-free methodologies.',
    },
    {
      question: 'How many visits are required?',
      answer: 'Typically, a root canal treatment can be completed in 1 to 2 visits, depending on the severity of the infection and the complexity of the tooth\'s root anatomy. We also offer efficient single-sitting options for suitable candidates.',
    },
    {
      question: 'Do you accept insurance?',
      answer: 'Yes, we partner with major insurance providers and corporate TPA networks to assist with your dental treatment coverage. Please get in touch with your local clinic support desk to verify eligibility for your specific plan.',
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="section-padding faq">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <span className="section-tag" style={{ margin: '0 auto 12px' }}>Got Questions?</span>
          <h2 className="section-title" style={{ marginBottom: '48px' }}>Frequently Asked Questions</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div key={index} className={`faq-item ${isActive ? 'active' : ''}`}>
                <button 
                  className="faq-question-btn"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isActive}
                >
                  <span>{faq.question}</span>
                  <ChevronDown size={20} className="faq-icon-chevron" />
                </button>
                
                <div 
                  className="faq-answer-wrapper"
                  style={{ maxHeight: isActive ? '200px' : '0' }}
                >
                  <div className="faq-answer-content">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
