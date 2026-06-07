import React, { useState } from 'react';
import { MapPin, Search, Clock, Phone, Navigation } from 'lucide-react';
import mapLocatorBg from '../assets/map_locator_bg.png';

export default function Locations() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClinic, setSelectedClinic] = useState(0); // Index of selected clinic

  const clinics = [
    {
      id: 0,
      name: 'Clove Dental - Connaught Place',
      city: 'Delhi',
      pincode: '110001',
      distance: '0.8 km away',
      address: 'RK Khanna Tennis Stadium, DLTA Complex, New Delhi',
      phone: '+91-999-999-9999',
      hours: '9:00 AM - 8:00 PM',
      pinPosition: { top: '35%', left: '45%' },
    },
    {
      id: 1,
      name: 'Clove Dental - Indiranagar',
      city: 'Bangalore',
      pincode: '560038',
      distance: '4.2 km away',
      address: '100 Feet Road, Near Metro Station, Indiranagar, Bangalore',
      phone: '+91-999-999-9999',
      hours: '9:00 AM - 8:30 PM',
      pinPosition: { top: '72%', left: '55%' },
    },
    {
      id: 2,
      name: 'Clove Dental - Bandra West',
      city: 'Mumbai',
      pincode: '400050',
      distance: '12 km away',
      address: 'Linking Road, Opposite National College, Bandra West, Mumbai',
      phone: '+91-999-999-9999',
      hours: '9:30 AM - 8:00 PM',
      pinPosition: { top: '58%', left: '32%' },
    },
  ];

  // Filter clinics based on query
  const filteredClinics = clinics.filter(
    (clinic) =>
      clinic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      clinic.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      clinic.pincode.includes(searchQuery)
  );

  const activeClinic = clinics[selectedClinic];

  return (
    <section id="locations" className="section-padding locations">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <span className="section-tag" style={{ margin: '0 auto 12px' }}>Our Network</span>
          <h2 className="section-title">Find Us Across India</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 48px' }}>
            Over 350+ Clinics nationwide. Highly accessible healthcare near you.
          </p>
        </div>

        <div className="locations-layout">
          {/* Sidebar Locator */}
          <div className="locations-sidebar">
            <h3 className="locator-title">
              <MapPin size={22} className="service-icon" />
              <span>Clinic Locator</span>
            </h3>
            
            <div className="locator-search-wrapper">
              <Search className="locator-search-icon" size={18} />
              <input
                type="text"
                placeholder="Enter city or pincode..."
                className="locator-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="clinic-list">
              {filteredClinics.length > 0 ? (
                filteredClinics.map((clinic) => (
                  <button
                    key={clinic.id}
                    className={`clinic-item ${selectedClinic === clinic.id ? 'active' : ''}`}
                    onClick={() => setSelectedClinic(clinic.id)}
                  >
                    <div className="clinic-item-name">{clinic.name}</div>
                    <div className="clinic-item-info">
                      {clinic.city} • {clinic.distance}
                    </div>
                  </button>
                ))
              ) : (
                <div style={{ color: 'var(--text-secondary)', padding: '20px', textAlign: 'center' }}>
                  No clinics found matching your search.
                </div>
              )}
            </div>
          </div>

          {/* Interactive Map Visualizer */}
          <div className="locations-map-area">
            <img 
              src={mapLocatorBg} 
              alt="Interactive network map" 
              className="locations-map-bg" 
            />
            
            {/* Render Pins */}
            {filteredClinics.map((clinic) => (
              <div
                key={clinic.id}
                className="map-pin"
                style={clinic.pinPosition}
                onClick={() => setSelectedClinic(clinic.id)}
              >
                <MapPin size={32} fill={selectedClinic === clinic.id ? 'var(--primary)' : 'rgba(61, 223, 134, 0.4)'} />
                {selectedClinic === clinic.id && <div className="map-pin-pulse"></div>}
              </div>
            ))}

            {/* Selected Clinic Info Popup */}
            {activeClinic && (
              <div className="map-popup">
                <div className="map-popup-header">
                  <div>
                    <h4 className="map-popup-title">{activeClinic.name}</h4>
                    <span className="map-popup-badge">{activeClinic.distance}</span>
                  </div>
                  <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent(activeClinic.address)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-icon-round"
                    style={{ width: '36px', height: '36px' }}
                    aria-label="Get directions in Google Maps"
                  >
                    <Navigation size={16} />
                  </a>
                </div>
                
                <div className="map-popup-details">
                  <div className="map-popup-detail-item">
                    <MapPin size={14} className="map-popup-detail-icon" />
                    <span>{activeClinic.address}</span>
                  </div>
                  <div className="map-popup-detail-item">
                    <Clock size={14} className="map-popup-detail-icon" />
                    <span>{activeClinic.hours}</span>
                  </div>
                  <div className="map-popup-detail-item">
                    <Phone size={14} className="map-popup-detail-icon" />
                    <span>{activeClinic.phone}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
