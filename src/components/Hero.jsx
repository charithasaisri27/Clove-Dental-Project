import React from 'react';
import { Play, ShieldCheck } from 'lucide-react';
import doctorHero from '../assets/doctor_hero.png';
import avatarPriya from '../assets/avatar_priya.png';
import avatarAnjali from '../assets/avatar_anjali.png';
import avatarRahul from '../assets/avatar_rahul.png';

export default function Hero({ onBookAppointment }) {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            <span>#1 DENTAL NETWORK IN INDIA</span>
          </div>
          
          <h1 className="hero-title">
            Your Smile,<br />
            <span>Our Passion.</span>
          </h1>
          
          <p className="hero-description">
            Advanced dental care with safety, precision, and compassion. Experience world-class dentistry with state-of-the-art technology.
          </p>
          
          <div className="hero-ctas">
            <button onClick={onBookAppointment} className="btn btn-primary">Book Consultation</button>
            <a href="#features-video" className="btn-play-text">
              <span className="btn-icon-round">
                <Play size={18} fill="currentColor" />
              </span>
              <span>How we work</span>
            </a>
          </div>
          
          <div className="hero-social-proof">
            <div className="avatar-group">
              <img src={avatarPriya} alt="Patient Priya Sharma" className="avatar-group-img" />
              <img src={avatarAnjali} alt="Patient Anjali Gupta" className="avatar-group-img" />
              <img src={avatarRahul} alt="Patient Rahul Verma" className="avatar-group-img" />
            </div>
            <div className="social-proof-text">
              Trusted by <strong>10,000+</strong> happy patients
            </div>
          </div>
        </div>
        
        <div className="hero-image-wrapper">
          <div className="hero-image-frame">
            <img 
              src={doctorHero} 
              alt="Experienced Clove Dental Dentist" 
              className="hero-image" 
            />
          </div>
          
          <div className="hero-safe-card">
            <div className="safe-icon-badge">
              <ShieldCheck size={20} />
            </div>
            <div>
              <div className="safe-card-title">Certified Safe</div>
              <div className="safe-card-subtitle">100% Sterilized Equipment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
