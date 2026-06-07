import React from 'react';
import { Star } from 'lucide-react';
import avatarPriya from '../assets/avatar_priya.png';
import avatarRahul from '../assets/avatar_rahul.png';
import avatarAnjali from '../assets/avatar_anjali.png';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Laser RCT Patient',
      avatar: avatarPriya,
      stars: 5,
      quote: 'I was terrified of the dentist, but Clove Dental changed everything. The Laser RCT was painless and quick!',
    },
    {
      id: 2,
      name: 'Rahul Verma',
      role: 'Implant Patient',
      avatar: avatarRahul,
      stars: 5,
      quote: 'The precision and care taken during my implant procedure were outstanding. Highly recommended!',
    },
    {
      id: 3,
      name: 'Anjali Gupta',
      role: 'Cosmetic Dentistry Patient',
      avatar: avatarAnjali,
      stars: 5,
      quote: 'My smile makeover is incredible. The doctors explained every step and made me feel so comfortable.',
    },
  ];

  return (
    <section className="section-padding testimonials">
      <div className="container" style={{ textAlign: 'center' }}>
        <span className="section-tag" style={{ margin: '0 auto 12px' }}>Success Stories</span>
        <h2 className="section-title">Real Smiles, Real Transformations</h2>
        <p className="section-subtitle" style={{ margin: '0 auto 48px' }}>
          See the life-changing results our patients experience every day.
        </p>

        <div className="testimonials-grid">
          {reviews.map((review) => (
            <div key={review.id} className="testimonial-card">
              <div className="testimonial-quote-badge">”</div>
              
              <div>
                <div className="rating-stars">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                
                <p className="testimonial-text">
                  "{review.quote}"
                </p>
              </div>

              <div className="testimonial-user">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="testimonial-user-avatar" 
                />
                <div style={{ textAlign: 'left' }}>
                  <h4 className="testimonial-user-name">{review.name}</h4>
                  <span className="testimonial-user-role">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
