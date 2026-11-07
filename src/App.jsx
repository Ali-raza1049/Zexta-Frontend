import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import ContactModal from './components/ContactModal';
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
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const handleOpenContact = () => {
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen relative bg-[#F6F9F7] text-[#0F1E17] font-sans antialiased selection:bg-emerald-100 selection:text-emerald-900 flex flex-col justify-between">
        {/* Floating Pill Navigation */}
        <Navbar onBookCall={handleOpenBooking} onOpenContact={handleOpenContact} />

        {/* Route Viewport */}
        <main id="main-content" className="flex-1">
          <Routes>
            <Route path="/" element={<Home onBookCall={handleOpenBooking} onOpenContact={handleOpenContact} />} />
            <Route path="/services" element={<ServicesPage onBookCall={handleOpenBooking} onOpenContact={handleOpenContact} />} />
            <Route path="/testimonials" element={<TestimonialsPage onBookCall={handleOpenBooking} onOpenContact={handleOpenContact} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onBookCall={handleOpenBooking} onOpenContact={handleOpenContact} />

        {/* 1. Book a Call Modal - Exclusively Calendly / Cal.com */}
        <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />

        {/* 2. Contact Modal - WhatsApp, Calendly, and Email */}
        <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
      </div>
    </BrowserRouter>
  );
}
