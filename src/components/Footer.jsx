import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, X } from 'lucide-react';
import { ZextaWordmark } from './Icons';
import zextaFullLogo from '../assets/zexta-full-logo.png';

const COMPANY_LINKS = [
  { label: 'About us', type: 'anchor', href: '/#about' },
  { label: 'Testimonials', type: 'route', to: '/testimonials' },
  { label: 'Contact Us', type: 'contact' },
  { label: 'Services', type: 'route', to: '/services' },
];

const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com/', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', external: true },
  { label: 'Instagram', href: 'https://www.instagram.com/', external: true },
  { label: 'Upwork', type: 'upwork' },
];

const LEGAL_CONTENT = {
  privacy: {
    title: 'Privacy Policy',
    body: 'Zexta only collects contact details you voluntarily submit when booking a strategy call, requesting outreach audits, or subscribing to our newsletter. We never sell or share your data with third parties.',
  },
  terms: {
    title: 'Terms & Conditions',
    body: 'All outreach systems, lead generation campaigns, and advisory retainers are governed by the written scope agreed upon prior to kickoff. Contact support@zexta.co for any billing or agreement questions.',
  },
};

export default function Footer({ onOpenContact, onOpenUpwork }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [legalDoc, setLegalDoc] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  const linkClass =
    'text-[13.5px] text-[#64748B] hover:text-[#111827] transition-colors cursor-pointer w-fit font-normal';

  return (
    <footer className="relative overflow-hidden bg-white border-t border-[#E6EDE9] pt-16 pb-10 text-[#111827]">
      {/* Subtle Background Zexta Wordmark Watermark Matching Navbar Brand Font */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0 px-4"
        aria-hidden="true"
      >
        <ZextaWordmark className="w-[88%] max-w-[900px] h-auto text-[#111827] opacity-[0.045] sm:opacity-[0.055]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main 4-Column Minimal Editorial Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 items-start">
          {/* Column 1: Brand + Support Headline */}
          <div className="xs:col-span-2 lg:col-span-4 text-left">
            <Link to="/" className="inline-block mb-5">
              <img
                src={zextaFullLogo}
                alt="Zexta"
                className="h-7 sm:h-8 w-auto object-contain"
              />
            </Link>

            <p className="text-[18px] sm:text-[20px] text-[#5C6661] leading-[1.35] font-normal max-w-[270px]">
              Have questions or need assistance? We’re here to help!
            </p>
          </div>

          {/* Column 2: Company */}
          <div className="lg:col-span-2 lg:col-start-6 text-left">
            <h4 className="text-[13.5px] font-semibold text-[#111827] mb-4 tracking-tight">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {COMPANY_LINKS.map((item) => (
                <li key={item.label}>
                  {item.type === 'route' && (
                    <Link to={item.to} className={linkClass}>
                      {item.label}
                    </Link>
                  )}
                  {item.type === 'anchor' && (
                    <a href={item.href} className={linkClass}>
                      {item.label}
                    </a>
                  )}
                  {item.type === 'contact' && (
                    <button
                      type="button"
                      onClick={onOpenContact}
                      className={linkClass}
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social */}
          <div className="lg:col-span-2 text-left">
            <h4 className="text-[13.5px] font-semibold text-[#111827] mb-4 tracking-tight">
              Social
            </h4>
            <ul className="flex flex-col gap-3">
              {SOCIAL_LINKS.map((item) => (
                <li key={item.label}>
                  {item.type === 'upwork' ? (
                    <button
                      type="button"
                      onClick={onOpenUpwork}
                      className={linkClass}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className={linkClass}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="xs:col-span-2 lg:col-span-3 text-left">
            <h4 className="text-[13.5px] font-semibold text-[#111827] mb-2.5 tracking-tight">
              Newsletter
            </h4>
            <p className="text-[12.5px] text-[#5F6D66] leading-[1.55] mb-5 max-w-[270px] font-normal">
              Stay ahead with outreach and lead generation tips that bring real results.
            </p>

            <form onSubmit={handleSubscribe} className="w-full max-w-[330px]">
              <div className="flex items-center bg-white border border-[#DCE5EB] focus-within:border-[#124232] rounded-full p-1.5 pl-5 shadow-[0_1px_4px_rgba(17,24,39,0.03)] transition-colors">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (subscribed) setSubscribed(false);
                  }}
                  placeholder="Enter your email"
                  aria-label="Email address for newsletter"
                  className="w-full bg-transparent text-[13px] text-[#111827] placeholder-[#6B7280] focus:outline-none pr-3"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="w-9 h-9 rounded-full bg-[#124232] hover:bg-[#195440] text-white flex items-center justify-center shrink-0 transition-colors cursor-pointer"
                >
                  {subscribed ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </button>
              </div>
              {subscribed && (
                <p className="text-[11.5px] text-[#124232] font-medium mt-2 pl-2">
                  Thanks for subscribing — you’re on the list.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Copyright & Legal Bar */}
        <div className="mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#64748B]">
          <p className="text-[#64748B]">
            © {new Date().getFullYear()} Zexta. All rights reserved
          </p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setLegalDoc('privacy')}
              className="text-[#64748B] hover:text-[#111827] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setLegalDoc('terms')}
              className="text-[#64748B] hover:text-[#111827] transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>

      {/* Compact Legal Info Modal */}
      {legalDoc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
          onClick={() => setLegalDoc(null)}
        >
          <div
            className="w-full max-w-md bg-white rounded-2xl border border-[#E2ECE6] p-6 shadow-xl text-left relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close legal dialog"
              onClick={() => setLegalDoc(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-gray-500 hover:bg-gray-100 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
            <h3 className="text-lg font-semibold text-[#111827] mb-2">
              {LEGAL_CONTENT[legalDoc].title}
            </h3>
            <p className="text-sm text-[#5F6D66] leading-relaxed">
              {LEGAL_CONTENT[legalDoc].body}
            </p>
          </div>
        </div>
      )}
    </footer>
  );
}
