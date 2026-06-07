import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Shield } from 'lucide-react';

export default function Navbar({ onBookAppointment }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#" className="logo">
            <Shield className="logo-icon" size={24} fill="currentColor" fillOpacity={0.2} />
            <span>Clove Dental</span>
          </a>

          <nav>
            <ul className="nav-links">
              <li><a href="#treatments" className="nav-link">Treatments</a></li>
              <li><a href="#locations" className="nav-link">Locations</a></li>
              <li><a href="#pricing" className="nav-link">Pricing</a></li>
              <li><a href="#faqs" className="nav-link">Contact & FAQs</a></li>
            </ul>
          </nav>

          <div className="nav-actions">
            <a href="tel:+919999999999" className="nav-phone">
              <Phone size={16} />
              <span>+91-999-999-9999</span>
            </a>
            <button onClick={onBookAppointment} className="btn btn-primary">Book Appointment</button>
          </div>

          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Navigation">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-overlay ${isOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
      <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
        <button className="mobile-nav-close" onClick={toggleMenu} aria-label="Close Navigation">
          <X size={24} />
        </button>
        <ul className="mobile-nav-links">
          <li><a href="#treatments" className="mobile-nav-link" onClick={toggleMenu}>Treatments</a></li>
          <li><a href="#locations" className="mobile-nav-link" onClick={toggleMenu}>Locations</a></li>
          <li><a href="#pricing" className="mobile-nav-link" onClick={toggleMenu}>Pricing</a></li>
          <li><a href="#faqs" className="mobile-nav-link" onClick={toggleMenu}>Contact & FAQs</a></li>
        </ul>
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <a href="tel:+919999999999" className="nav-phone" style={{ fontSize: '18px' }}>
            <Phone size={18} />
            <span>+91-999-999-9999</span>
          </a>
          <button 
            onClick={() => { toggleMenu(); onBookAppointment(); }} 
            className="btn btn-primary" 
            style={{ width: '100%', border: 'none', cursor: 'pointer' }}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </>
  );
}
