import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Locations from './components/Locations';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <>
      <Navbar onBookAppointment={openBooking} />
      <main>
        <Hero onBookAppointment={openBooking} />
        <Services />
        <Features />
        <Testimonials />
        <Locations />
        <Pricing />
        <FAQ />
      </main>
      <Footer />

      {/* Global Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </>
  );
}

export default App;
