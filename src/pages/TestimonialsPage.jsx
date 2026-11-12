import React, { useState } from 'react';
import { CornerBadge, UpworkLogo } from '../components/Icons';
import { Star, Clock, Award, Briefcase } from 'lucide-react';
import CTASection from '../components/CTASection';
import { allUpworkReviews } from '../data/upworkReviews';

const reviewCards = allUpworkReviews;

export default function TestimonialsPage({ onBookCall, onOpenContact, onOpenUpwork }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredReviews =
    activeFilter === 'all'
      ? reviewCards
      : reviewCards.filter((r) => r.category === activeFilter);

  return (
    <div className="pt-24 sm:pt-28 pb-16 bg-[#F6F9F7]">
      {/* 1. Page Hero Banner */}
      <section className="relative overflow-hidden py-14 sm:py-20 text-center">
        <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center gap-24 sm:gap-40 h-[500px] z-0">
          <div className="w-48 sm:w-56 h-full bg-gradient-to-b from-emerald-200/30 via-emerald-100/10 to-transparent blur-3xl animate-pulse-slow"></div>
          <div className="w-64 sm:w-80 h-full bg-gradient-to-b from-emerald-300/35 via-emerald-100/15 to-transparent blur-3xl animate-pulse-slow [animation-delay:1.5s]"></div>
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex justify-center mb-4">
            <CornerBadge label="Verified Upwork Track Record" />
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F1E17] tracking-tight leading-[1.12] mb-4 sm:mb-6">
            Real Upwork Results.
            <br />
            <span className="bg-gradient-to-r from-[#0F1E17] via-[#153C2D] to-[#10B981] bg-clip-text text-transparent">
              Verified Hours & Contracts
            </span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-[#495D53] max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Authentic client feedback, real hours worked, and completed contracts from our verified Top Rated Upwork profiles.
          </p>

          {/* Real Upwork Stats Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto bg-white border border-[#E2ECE6] rounded-[20px] sm:rounded-[24px] p-4 sm:p-6 shadow-sm">
            <div className="text-center flex flex-col items-center justify-center p-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-1.5">
                <Briefcase className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-[#0D231A] block">100+</span>
              <span className="text-[11px] sm:text-xs font-semibold text-[#55665D]">Jobs Completed</span>
            </div>

            <div className="text-center sm:border-l border-gray-100 flex flex-col items-center justify-center p-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-1.5">
                <Clock className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-[#10B981] block">1,000+</span>
              <span className="text-[11px] sm:text-xs font-semibold text-[#55665D]">Hours Worked</span>
            </div>

            <div className="text-center border-t sm:border-t-0 sm:border-l border-gray-100 flex flex-col items-center justify-center p-2 pt-3 sm:pt-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-1.5">
                <Award className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-[#0D231A] block">100%</span>
              <span className="text-[11px] sm:text-xs font-semibold text-[#55665D]">Job Success Score</span>
            </div>

            <div className="text-center border-t sm:border-t-0 sm:border-l border-gray-100 flex flex-col items-center justify-center p-2 pt-3 sm:pt-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-1.5">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-[#0D231A] block">100%</span>
              <span className="text-[11px] sm:text-xs font-semibold text-[#55665D]">Verified Feedback</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Wall of Love / Reviews Grid */}
      <section className="py-12 sm:py-16">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <div className="mb-2">
                <CornerBadge label="Wall of Love" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F1E17] mt-1">Verified Upwork Client Reviews</h2>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 flex-wrap">
              {[
                { id: 'all', label: 'All Reviews' },
                { id: 'ads', label: 'Meta & Google Ads' },
                { id: 'cold-email', label: 'Cold Outreach' },
                { id: 'automation', label: 'Email Automation' },
                { id: 'lead-gen', label: 'Lead Generation' },
                { id: 'strategy', label: 'Marketing Consulting' },
              ].map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setActiveFilter(f.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    activeFilter === f.id
                      ? 'bg-[#122B22] text-white shadow-xs'
                      : 'bg-white text-[#495D53] border border-[#E2ECE6] hover:border-[#10B981]'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredReviews.map((rev, idx) => (
              <div
                key={rev.id || idx}
                className="bg-white rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between text-left hover:-translate-y-1.5 hover:shadow-[0_16px_36px_-6px_rgba(159,170,193,0.35)] shadow-[0_6px_20px_-4px_rgba(159,170,193,0.18)] cursor-default group"
                style={{
                  borderRadius: '16px',
                  border: '0.13px solid #9FAAC1',
                  borderWidth: '0.13px',
                  borderColor: '#9FAAC1',
                  borderStyle: 'solid',
                  background: '#FFFFFF',
                }}
              >
                {/* Review Quote + Aesthetic Quote Mark (#9FAAC1) */}
                <div className="flex items-start justify-between gap-3 mb-6">
                  <p
                    className="leading-[1.6] text-[#556070] font-medium tracking-tight pr-1"
                    style={{
                      fontSize: '13.5px',
                      fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    }}
                  >
                    {rev.quote.replace(/^["'“”]|["'“”]$/g, '')}
                  </p>
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 select-none mt-1 group-hover:scale-110 transition-transform"
                    aria-hidden="true"
                  >
                    <path
                      d="M3.75 0C1.68 0 0 1.68 0 3.75C0 5.4 1.05 6.8 2.5 7.28L1.6 10.5C1.48 10.9 1.78 11.3 2.2 11.3H3.4C3.68 11.3 3.93 11.12 4.03 10.85L5.45 6.7C5.65 6.1 5.75 5.5 5.75 4.88V1.5C5.75 0.67 5.08 0 4.25 0H3.75ZM11.75 0C9.68 0 8 1.68 8 3.75C8 5.4 9.05 6.8 10.5 7.28L9.6 10.5C9.48 10.9 9.78 11.3 10.2 11.3H11.4C11.68 11.3 11.93 11.12 12.03 10.85L13.45 6.7C13.65 6.1 13.75 5.5 13.75 4.88V1.5C13.75 0.67 13.08 0 12.25 0H11.75Z"
                      fill="#9FAAC1"
                    />
                  </svg>
                </div>

                {/* Only Client Name: • {rev.author} */}
                <div className="mt-auto flex items-center gap-2">
                  <span className="text-[#151619] font-black text-xs leading-none select-none">•</span>
                  <span
                    className="font-bold text-[#151619] tracking-tight"
                    style={{
                      fontSize: '13px',
                      fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    }}
                  >
                    {rev.author}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Upwork Verified Scorecard Banner */}
      <section className="py-8 sm:py-12">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-[#0D231A] border border-emerald-500/25 rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
              <div className="max-w-xl text-left">
                <div className="inline-flex items-center gap-2 bg-[#F0FDF4] text-[#14A800] px-3.5 py-1 rounded-full text-xs font-bold mb-3 sm:mb-4 shadow-xs">
                  <UpworkLogo className="w-4 h-4 text-[#14A800]" />
                  <span>Top Rated Agency on Upwork</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2 sm:mb-3">
                  100% Job Success Score Across 100+ Jobs & 1,000+ Hours
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100/75 leading-relaxed">
                  Every project is backed by verified client reviews, on-time delivery guarantees, and transparent communication across our Upwork profiles.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
                <button
                  type="button"
                  onClick={onOpenUpwork}
                  className="w-full sm:w-auto text-center justify-center bg-gradient-to-r from-[#122B22] via-[#163E2D] to-[#122B22] text-white px-6 py-3 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm shadow-[0_8px_24px_rgba(18,43,34,0.22)] hover:shadow-[0_12px_32px_rgba(16,185,129,0.32)] hover:-translate-y-0.5 border border-emerald-500/20 transition-all cursor-pointer inline-flex items-center gap-2"
                  style={{ borderRadius: '9999px' }}
                >
                  <UpworkLogo className="w-4 h-4 text-emerald-400" />
                  <span>View All Specialist Profiles ↗</span>
                </button>
                <a
                  href="https://cal.com/zexta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center justify-center bg-white text-[#0D231A] hover:bg-[#E8F7EE] px-6 py-3 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer inline-flex items-center gap-1.5"
                >
                  <span>Book 30-Min Call ↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <CTASection onBookCall={onBookCall} />
    </div>
  );
}
