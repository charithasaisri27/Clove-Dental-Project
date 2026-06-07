import React from 'react';
import { Shield, Globe, Mail, Rss, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { text: 'About Us', href: '#' },
    { text: 'Our Doctors', href: '#' },
    { text: 'Treatments', href: '#treatments' },
    { text: 'Blog', href: '#' },
    { text: 'Careers', href: '#' },
  ];

  const services = [
    { text: 'Root Canal Treatment', href: '#treatments' },
    { text: 'Dental Implants', href: '#' },
    { text: 'Teeth Whitening', href: '#' },
    { text: 'Braces & Aligners', href: '#' },
    { text: 'Kids Dentistry', href: '#' },
  ];

  return (
    <footer id="contact-footer" className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <a href="#" className="logo">
              <Shield className="logo-icon" size={24} fill="currentColor" fillOpacity={0.2} />
              <span>Clove Dental</span>
            </a>
            <p className="footer-desc">
              India's largest dental network committed to providing world-class dental care with a human touch.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-social-btn" aria-label="Website Link">
                <Globe size={18} />
              </a>
              <a href="mailto:info@clovedental.in" className="footer-social-btn" aria-label="Mail Address">
                <Mail size={18} />
              </a>
              <a href="#" className="footer-social-btn" aria-label="RSS Feed Link">
                <Rss size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="footer-link">{link.text}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="footer-col-title">Our Services</h4>
            <ul className="footer-links">
              {services.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="footer-link">{link.text}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="footer-col-title">Contact Us</h4>
            <div className="footer-contacts">
              <div className="footer-contact-item">
                <MapPin size={16} className="footer-contact-icon" />
                <span>RK Khanna Tennis Stadium, DLTA Complex, New Delhi - 110029</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={16} className="footer-contact-icon" />
                <a href="tel:+919999999999" className="footer-link">+91-999-999-9999</a>
              </div>
              <div className="footer-contact-item">
                <Mail size={16} className="footer-contact-icon" />
                <a href="mailto:info@clovedental.in" className="footer-link">info@clovedental.in</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright details */}
        <div className="footer-bottom">
          <p>© 2026 Clove Dental. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Service</a>
            <a href="#" className="footer-bottom-link">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
