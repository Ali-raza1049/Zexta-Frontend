import React from 'react';
import { Link } from 'react-router-dom';
import zextaFullLogo from '../assets/zexta-full-logo.png';
import { ArrowUpRight } from 'lucide-react';
import { TopRatedIcon } from './Icons';

export default function Footer({ onBookCall }) {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#F7FAF8] via-[#F2F7F4] to-[#EAF2ED] border-t border-[#DDE7E1] pt-16 pb-12 text-[#112219]">
      {/* Subtle Luxury Typographic Background Watermark of the "Zexta" Brand in the Middle */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <span
          style={{ fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
          className="text-[#112219] opacity-[0.045] sm:opacity-[0.055] font-extrabold tracking-tight text-[110px] sm:text-[170px] md:text-[230px] lg:text-[290px] xl:text-[340px] leading-none text-center whitespace-nowrap"
        >
          Zexta
        </span>
      </div>

      {/* Ambient Radial Mint Glow in Center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-b from-emerald-100/40 via-teal-100/20 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#D8E4DD]">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4 hover:opacity-90 transition-opacity">
              <img
                src={zextaFullLogo}
                alt="Zexta"
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-[#4E6056] leading-relaxed mb-6 max-w-sm">
              Predictable leads, modern full-stack web platforms, and growth for ambitious B2B businesses. We build MERN/PERN software, autonomous AI systems, and cold outreach engines that compound.
            </p>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D5E4DC] text-xs font-semibold text-[#143B2A] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>All Systems Operational (99.4% Inbox Placement • 100% Upwork JSS)</span>
            </div>
          </div>

          {/* Links Column 1: Solutions */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#143B2A] mb-1">Solutions</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-[#4E6056]">
              <li><Link to="/services" className="hover:text-[#112219] hover:translate-x-0.5 transition-all">MERN & PERN Full-Stack</Link></li>
              <li><Link to="/services" className="hover:text-[#112219] hover:translate-x-0.5 transition-all">AI Agents & RAG Systems</Link></li>
              <li><Link to="/services" className="hover:text-[#112219] hover:translate-x-0.5 transition-all">Cold Email Infrastructure</Link></li>
              <li><Link to="/services" className="hover:text-[#112219] hover:translate-x-0.5 transition-all">Lead Generation & Lists</Link></li>
              <li><Link to="/services" className="hover:text-[#112219] hover:translate-x-0.5 transition-all">Meta & Google Ads</Link></li>
              <li><Link to="/services" className="hover:text-[#112219] hover:translate-x-0.5 transition-all">Growth Retainers</Link></li>
            </ul>
          </div>

          {/* Links Column 2: Company */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#143B2A] mb-1">Company</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-[#4E6056]">
              <li><Link to="/#about" className="hover:text-[#112219] hover:translate-x-0.5 transition-all">About Our Impact</Link></li>
              <li><Link to="/#team" className="hover:text-[#112219] hover:translate-x-0.5 transition-all">Leadership & Team</Link></li>
              <li><Link to="/#work" className="hover:text-[#112219] hover:translate-x-0.5 transition-all">Case Studies & Work</Link></li>
              <li><Link to="/testimonials" className="hover:text-[#112219] hover:translate-x-0.5 transition-all font-semibold text-emerald-800">Wall of Love (Reviews)</Link></li>
              <li><Link to="/services" className="hover:text-[#112219] hover:translate-x-0.5 transition-all">All Services & Pricing</Link></li>
              <li><Link to="/#process" className="hover:text-[#112219] hover:translate-x-0.5 transition-all">Our 5-Step Process</Link></li>
              <li>
                <a
                  href="https://cal.com/zexta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-emerald-700 hover:text-emerald-800 font-bold transition-colors cursor-pointer"
                >
                  <span>Book a Strategy Call</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Verified Badges */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#143B2A] mb-1">Verified Badges</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-[#4E6056]">
              <li>
                <a
                  href="https://www.upwork.com/freelancers/raishahidnazir257"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#112219] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#14A800]">★</span> 100% Upwork Job Success ↗
                </a>
              </li>
              <li className="flex items-center gap-1.5"><TopRatedIcon className="w-3.5 h-3.5 shrink-0" /> Top Rated Agency</li>
              <li className="flex items-center gap-1.5"><span className="text-emerald-600">✔</span> Clay Certified Partner</li>
              <li className="flex items-center gap-1.5"><span className="text-emerald-600">✔</span> Apollo Certified</li>
              <li className="flex items-center gap-1.5"><span className="text-emerald-600">✔</span> Meta Business Verified</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-[#6F8277]">
          <p>
            © {new Date().getFullYear()} Zexta Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <Link to="/" className="hover:text-[#112219] transition-colors font-medium">Home</Link>
            <span>•</span>
            <Link to="/services" className="hover:text-[#112219] transition-colors font-medium">Services</Link>
            <span>•</span>
            <Link to="/testimonials" className="hover:text-[#112219] transition-colors font-medium">Testimonials</Link>
            <span>•</span>
            <a
              href="https://cal.com/zexta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 hover:text-emerald-800 font-semibold transition-colors"
            >
              Cal.com 30-Min Call ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
