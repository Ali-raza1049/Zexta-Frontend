import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import zextaFullLogo from '../assets/zexta-full-logo.png';
import { ChevronRight, Menu, X } from 'lucide-react';

export default function Navbar({ onBookCall, onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isServicesPage = location.pathname === '/services';
  const isTestimonialsPage = location.pathname === '/testimonials';
  const isHomePage = location.pathname === '/';

  return (
    <header className="fixed top-4 sm:top-5 left-0 right-0 z-50 flex justify-center pointer-events-none px-3 sm:px-4">
      <nav
        style={{ backgroundColor: '#122B22' }}
        className={`pointer-events-auto border border-white/15 rounded-full py-1.5 sm:py-2 pl-4 sm:pl-5 pr-2 sm:pr-2.5 flex items-center justify-between gap-3 sm:gap-8 shadow-[0_12px_36px_-4px_rgba(10,28,21,0.35),0_4px_12px_rgba(0,0,0,0.15)] backdrop-blur-xl transition-all duration-300 ${
          scrolled ? '-translate-y-0.5 shadow-[0_18px_45px_-4px_rgba(10,28,21,0.45)] border-emerald-400/40' : ''
        }`}
      >
        {/* Brand matching Footer Logotype */}
        <Link to="/" className="flex items-center group">
          <img
            src={zextaFullLogo}
            alt="Zexta"
            className="h-6 sm:h-7 w-auto object-contain brightness-0 invert group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          <Link
            to="/"
            className={`text-sm font-semibold transition-colors duration-200 ${
              isHomePage ? 'text-white font-bold' : 'text-white/80 hover:text-white'
            }`}
          >
            Home
          </Link>

          <Link
            to="/services"
            className={`text-sm font-semibold transition-colors duration-200 inline-flex items-center gap-1.5 ${
              isServicesPage ? 'text-emerald-300 font-bold' : 'text-white/80 hover:text-white'
            }`}
          >
            <span>Services</span>
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 text-[#0A1C15] text-[10px] font-black px-2 py-0.5 rounded-full tracking-wider uppercase shadow-xs">
              New
            </span>
          </Link>

          <Link
            to="/testimonials"
            className={`text-sm font-semibold transition-colors duration-200 ${
              isTestimonialsPage ? 'text-emerald-300 font-bold' : 'text-white/80 hover:text-white'
            }`}
          >
            Testimonials
          </Link>

          <a
            href="/#about"
            className="text-white/80 hover:text-white text-sm font-semibold transition-colors duration-200"
          >
            About
          </a>

          <a
            href="/#team"
            className="text-white/80 hover:text-white text-sm font-semibold transition-colors duration-200"
          >
            Team
          </a>

          <button
            type="button"
            onClick={onOpenContact}
            className="text-white/80 hover:text-white text-sm font-semibold transition-colors duration-200 cursor-pointer"
          >
            Contact
          </button>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onBookCall}
            className="group bg-white hover:bg-[#E8F7EE] text-[#122B22] px-4 py-2 rounded-full font-bold text-[13.5px] inline-flex items-center gap-1 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 cursor-pointer"
          >
            <span>Book a Call</span>
            <ChevronRight className="w-4 h-4 text-emerald-800 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="flex md:hidden p-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{ backgroundColor: '#122B22' }}
          className="fixed top-20 left-5 right-5 border border-white/15 rounded-2xl p-6 flex flex-col gap-4 pointer-events-auto shadow-2xl md:hidden z-50 text-white"
        >
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <img
              src={zextaFullLogo}
              alt="Zexta"
              className="h-6 w-auto object-contain brightness-0 invert"
            />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-1 rounded-lg text-white/70 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white/90 text-base font-semibold py-1.5 border-b border-white/10"
          >
            Home
          </Link>

          <Link
            to="/services"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white/90 text-base font-semibold py-1.5 border-b border-white/10 flex items-center justify-between"
          >
            <span>Services Page</span>
            <span className="bg-emerald-400 text-dark font-bold text-[10px] px-2 py-0.5 rounded-full">New</span>
          </Link>

          <Link
            to="/testimonials"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white/90 text-base font-semibold py-1.5 border-b border-white/10"
          >
            Testimonials Page
          </Link>

          <a
            href="/#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white/90 text-base font-semibold py-1.5 border-b border-white/10"
          >
            About
          </a>

          <a
            href="/#team"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white/90 text-base font-semibold py-1.5 border-b border-white/10"
          >
            Our Team
          </a>

          <a
            href="/#work"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white/90 text-base font-semibold py-1.5 border-b border-white/10"
          >
            Our Work
          </a>

          <a
            href="/#process"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white/90 text-base font-semibold py-1.5 border-b border-white/10"
          >
            Our Process
          </a>

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full text-left text-white/90 text-base font-semibold py-1.5 border-b border-white/10 flex items-center justify-between cursor-pointer"
          >
            <span>Contact Us</span>
            <span className="text-[11px] text-emerald-300 font-medium">WhatsApp • Calendly • Email</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onBookCall();
            }}
            className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-400 to-teal-300 text-[#0A1C15] py-3 rounded-full font-black text-sm hover:opacity-95 transition-opacity cursor-pointer shadow-md"
          >
            Book a Call
          </button>
        </div>
      )}
    </header>
  );
}
