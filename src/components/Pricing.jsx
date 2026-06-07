import React from 'react';

export default function Pricing() {
  const prices = [
    {
      treatment: 'Consultation',
      description: 'Initial checkup & digital X-ray diagnostics analysis.',
      price: '₹500',
    },
    {
      treatment: 'Standard Root Canal',
      description: 'Traditional endodontic cleaning with single-sitting options available.',
      price: '₹4,500',
    },
    {
      treatment: 'Laser Root Canal',
      description: 'Advanced laser disinfection sterilization technology.',
      price: '₹7,000',
    },
    {
      treatment: 'Crown (Cap)',
      description: 'Premium protective crown with Ceramic or Zirconia options.',
      price: '₹3,500',
    },
  ];

  return (
    <section id="pricing" className="section-padding">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <span className="section-tag" style={{ margin: '0 auto 12px' }}>Transparent Pricing</span>
          <h2 className="section-title">Expert Guidance for Healthy Smiles</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 48px' }}>
            Transparent pricing details for our most popular root canal services.
          </p>
        </div>

        <div className="pricing-wrapper">
          <div className="pricing-table-header">
            <span>Treatment</span>
            <span style={{ textAlign: 'right' }}>Starting From</span>
          </div>

          {prices.map((item, idx) => (
            <div key={idx} className="pricing-row">
              <div className="pricing-treatment">
                <h4 className="pricing-treatment-name">{item.treatment}</h4>
                <p className="pricing-treatment-desc">{item.description}</p>
              </div>
              <div className="pricing-price">{item.price}</div>
            </div>
          ))}

          <p className="pricing-note">
            * Prices may vary based on the complexity of the case, chosen materials, and clinic location.
          </p>
        </div>
      </div>
    </section>
  );
}
