import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, MapPin, CheckCircle, Sparkles } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    clinic: 'Clove Dental - Connaught Place',
    date: '',
    slot: 'Morning Slot (9:00 AM - 12:00 PM)',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) {
      alert('Please fill in all required fields.');
      return;
    }
    
    setIsLoading(true);
    // Simulate API request
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      clinic: 'Clove Dental - Connaught Place',
      date: '',
      slot: 'Morning Slot (9:00 AM - 12:00 PM)',
    });
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Booking Modal">
          <X size={22} />
        </button>

        {!isSubmitted ? (
          <>
            <h3 className="modal-title">Book an Appointment</h3>
            <p className="modal-subtitle">
              Provide your details below to schedule your dental consultation.
            </p>

            <form onSubmit={handleSubmit} className="booking-form">
              {/* Patient Name */}
              <div className="form-group">
                <label className="form-label">Patient Name *</label>
                <div className="form-input-wrapper">
                  <User className="form-input-icon" size={18} />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="form-group">
                <label className="form-label">Phone Number *</label>
                <div className="form-input-wrapper">
                  <Phone className="form-input-icon" size={18} />
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Enter 10-digit mobile number"
                    className="form-input"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Clinic Location */}
              <div className="form-group">
                <label className="form-label">Select Clinic Branch</label>
                <div className="form-input-wrapper">
                  <MapPin className="form-input-icon" size={18} />
                  <select
                    name="clinic"
                    className="form-input"
                    value={formData.clinic}
                    onChange={handleInputChange}
                  >
                    <option value="Clove Dental - Connaught Place">Clove Dental - Connaught Place (New Delhi)</option>
                    <option value="Clove Dental - Indiranagar">Clove Dental - Indiranagar (Bangalore)</option>
                    <option value="Clove Dental - Bandra West">Clove Dental - Bandra West (Mumbai)</option>
                  </select>
                </div>
              </div>

              {/* Appointment Date */}
              <div className="form-group">
                <label className="form-label">Preferred Date *</label>
                <div className="form-input-wrapper">
                  <Calendar className="form-input-icon" size={18} />
                  <input
                    type="date"
                    name="date"
                    required
                    className="form-input"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Time Slot */}
              <div className="form-group">
                <label className="form-label">Preferred Time Slot</label>
                <div className="form-input-wrapper">
                  <Clock className="form-input-icon" size={18} />
                  <select
                    name="slot"
                    className="form-input"
                    value={formData.slot}
                    onChange={handleInputChange}
                  >
                    <option value="Morning Slot (9:00 AM - 12:00 PM)">Morning Slot (9:00 AM - 12:00 PM)</option>
                    <option value="Afternoon Slot (12:00 PM - 4:00 PM)">Afternoon Slot (12:00 PM - 4:00 PM)</option>
                    <option value="Evening Slot (4:00 PM - 8:00 PM)">Evening Slot (4:00 PM - 8:00 PM)</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-submit" disabled={isLoading}>
                {isLoading ? 'Processing Booking...' : 'Confirm Appointment'}
              </button>
            </form>
          </>
        ) : (
          <div className="booking-success">
            <div className="success-icon-wrapper">
              <CheckCircle size={48} strokeWidth={1.5} />
            </div>
            
            <h3 className="success-title">Booking Successful!</h3>
            <p className="success-message">
              Thank you for choosing Clove Dental. Your appointment request has been logged. We will send a confirmation SMS and Call shortly.
            </p>

            <div className="success-summary">
              <div className="summary-row">
                <span className="summary-label">Patient:</span>
                <span className="summary-value">{formData.name}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Clinic Branch:</span>
                <span className="summary-value">{formData.clinic}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Scheduled Date:</span>
                <span className="summary-value">{formData.date}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Time Slot:</span>
                <span className="summary-value">{formData.slot.split(' (')[0]}</span>
              </div>
            </div>

            <button className="btn btn-primary" onClick={handleReset} style={{ width: '100%' }}>
              <Sparkles size={16} />
              <span>Back to Home</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
