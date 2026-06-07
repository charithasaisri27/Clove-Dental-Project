import React from 'react';
import { ArrowRight, Stethoscope, Zap, RefreshCw } from 'lucide-react';
import standardRct from '../assets/standard_rct.png';
import laserRct from '../assets/laser_rct.png';
import reTreatmentRct from '../assets/re_treatment_rct.png';

export default function Services() {
  const treatments = [
    {
      id: 'standard',
      title: 'Standard RCT',
      icon: <Stethoscope size={20} className="service-icon" />,
      image: standardRct,
      description: 'Effective treatment for infected pulp using traditional, proven methods ensuring long-term tooth survival.',
    },
    {
      id: 'laser',
      title: 'Laser RCT',
      icon: <Zap size={20} className="service-icon" />,
      image: laserRct,
      description: 'Advanced precision with laser technology designed to reduce bacteria and accelerate healing time.',
    },
    {
      id: 'retreatment',
      title: 'Re-Treatment RCT',
      icon: <RefreshCw size={20} className="service-icon" />,
      image: reTreatmentRct,
      description: 'Expert care for previously treated teeth that have not healed properly or have developed new issues.',
    },
  ];

  return (
    <section id="treatments" className="section-padding">
      <div className="container">
        <div className="services-header">
          <div>
            <span className="section-tag">Our Services</span>
            <h2 className="section-title">Types of Root Canal Treatments</h2>
          </div>
          <a href="#pricing" className="view-all-link">
            <span>View all services</span>
            <ArrowRight size={16} />
          </a>
        </div>
        
        <p className="section-subtitle" style={{ marginTop: '-24px' }}>
          We offer specialized root canal treatments tailored to your specific needs, using the latest technology for painless procedures.
        </p>

        <div className="services-grid">
          {treatments.map((treatment) => (
            <div key={treatment.id} className="service-card">
              <div className="service-img-wrapper">
                <img 
                  src={treatment.image} 
                  alt={treatment.title} 
                  className="service-img" 
                />
              </div>
              <div className="service-content">
                <h3 className="service-card-title">
                  {treatment.icon}
                  <span>{treatment.title}</span>
                </h3>
                <p className="service-description">{treatment.description}</p>
                <a href="#contact-footer" className="btn-learn-more">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
