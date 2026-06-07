import React from 'react';
import { Play, Check } from 'lucide-react';
import diagnosticsMachine from '../assets/diagnostics_machine.png';

export default function Features() {
  const highlights = [
    {
      title: 'Advanced Sterilization',
      description: 'Hospital-grade hygiene standards and rigorous 4-step sterilization cycles.',
    },
    {
      title: '3D Imaging Technology',
      description: 'Complete visual modeling and AI-assisted diagnostics for accurate treatment.',
    },
    {
      title: 'Painless Procedures',
      description: 'State-of-the-art computer-controlled anesthesia delivery for maximum comfort.',
    },
  ];

  return (
    <section id="features-video" className="section-padding">
      <div className="container features-grid">
        <div className="features-visual">
          <div className="features-video-wrapper">
            <img 
              src={diagnosticsMachine} 
              alt="Clove Dental AI Diagnostics Machine" 
              className="features-video-image" 
            />
            <div className="video-play-overlay">
              <button className="btn-video-play" aria-label="Play video about clinic operations">
                <Play size={24} fill="currentColor" />
              </button>
            </div>
          </div>
          
          <div className="features-stats-overlay">
            <div className="feature-stat-item">
              <div className="feature-stat-number">10x</div>
              <div className="feature-stat-label">Safer</div>
            </div>
            <div style={{ width: '1px', backgroundColor: 'var(--border-color)' }}></div>
            <div className="feature-stat-item">
              <div className="feature-stat-number">45m</div>
              <div className="feature-stat-label">Avg Time</div>
            </div>
          </div>
        </div>
        
        <div>
          <span className="section-tag">Clinical Excellence</span>
          <h2 className="section-title" style={{ marginBottom: '20px' }}>
            Safety, Precision, and Innovation
          </h2>
          <p className="section-subtitle" style={{ marginBottom: '32px' }}>
            We employ 4-step sterilization protocols and use AI-assisted diagnostics to ensure 100% precision in every treatment.
          </p>
          
          <div className="feature-list">
            {highlights.map((item, idx) => (
              <div key={idx} className="feature-list-item">
                <div className="feature-list-icon">
                  <Check size={18} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="feature-list-title">{item.title}</h4>
                  <p className="feature-list-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
