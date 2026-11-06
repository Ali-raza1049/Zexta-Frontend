import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Calendar, Sparkles } from 'lucide-react';
import { CornerBadge } from './Icons';

export default function CTASection({ onBookCall }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      window.open(`https://cal.com/zexta?email=${encodeURIComponent(email)}`, '_blank');
      setTimeout(() => {
        if (onBookCall) onBookCall();
      }, 500);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[36px] bg-[#0D231A] border border-emerald-500/25 px-6 py-16 sm:px-12 sm:py-20 text-center shadow-[0_25px_65px_-12px_rgba(10,28,21,0.55)]">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-gradient-to-b from-emerald-500/25 via-teal-500/15 to-transparent blur-3xl pointer-events-none rounded-full animate-pulse-slow" />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Top Corner Badge */}
            <div className="flex justify-center mb-5">
              <div className="relative inline-flex items-center px-4 py-1 text-xs font-semibold tracking-wide text-emerald-300">
                <span className="absolute top-0 left-0 w-2 h-2 border-t-1.5 border-l-1.5 border-emerald-400" />
                <span>Ready to Scale?</span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b-1.5 border-r-1.5 border-emerald-400" />
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.15] mb-4">
              Ready to generate 30+ qualified
              <br />
              sales calls every single month?
            </h2>

            <p className="text-base sm:text-lg text-emerald-100/75 max-w-xl mx-auto mb-10 leading-relaxed">
              We handle the infrastructure, scraping, copywriting, and inbox delivery. You only show up to close the deals.
            </p>

            {/* Redesigned Premium Unified Pill Form */}
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-5">
              <div className="flex flex-col sm:flex-row items-center gap-2 p-1.5 rounded-2xl sm:rounded-full bg-white/10 border border-white/20 backdrop-blur-md focus-within:border-emerald-400 focus-within:bg-white/15 transition-all shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                <input
                  type="email"
                  placeholder="Enter your work email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full sm:flex-1 bg-transparent px-5 py-3.5 sm:py-2 text-sm sm:text-base text-white placeholder-emerald-100/40 focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 text-[#0A1C15] px-7 py-3.5 rounded-xl sm:rounded-full font-bold text-sm shadow-[0_4px_16px_rgba(16,185,129,0.3)] hover:shadow-[0_6px_24px_rgba(16,185,129,0.45)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer shrink-0"
                >
                  <span>{submitted ? 'Opening Calendar...' : 'Claim Free Audit'}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#0A1C15]" />
                </button>
              </div>
            </form>

            {/* Direct Cal.com Instant Booking Secondary CTA */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-10 text-xs sm:text-sm text-center px-2">
              <span className="text-emerald-100/60">Prefer immediate scheduling?</span>
              <a
                href="https://cal.com/zexta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-bold text-emerald-300 hover:text-white underline underline-offset-4 decoration-emerald-400/60 transition-colors cursor-pointer"
              >
                <span>Book 30-Min Call Directly on Cal.com</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-300" />
              </a>
            </div>

            {/* Guarantee badges */}
            <div className="flex items-center justify-center gap-6 sm:gap-8 flex-wrap text-xs sm:text-sm text-emerald-100/85 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero spam risk guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>14-day setup to first booked call</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>No long-term contracts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
