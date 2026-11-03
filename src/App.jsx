import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import TestimonialsPage from './pages/TestimonialsPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen relative bg-[#F6F9F7] text-[#0F1E17] font-sans antialiased selection:bg-emerald-100 selection:text-emerald-900 flex flex-col justify-between">
        {/* Floating Pill Navigation */}
        <Navbar onBookCall={handleOpenBooking} />

        {/* Route Viewport */}
        <main id="main-content" className="flex-1">
          <Routes>
            <Route path="/" element={<Home onBookCall={handleOpenBooking} />} />
            <Route path="/services" element={<ServicesPage onBookCall={handleOpenBooking} />} />
            <Route path="/testimonials" element={<TestimonialsPage onBookCall={handleOpenBooking} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onBookCall={handleOpenBooking} />

        {/* Interactive Booking Strategy Modal */}
        <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
      </div>
    </BrowserRouter>
  );
}
