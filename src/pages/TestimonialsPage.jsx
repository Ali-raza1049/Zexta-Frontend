import React, { useState } from 'react';
import { CornerBadge, UpworkLogo } from '../components/Icons';
import { Star, Clock, Award, Briefcase } from 'lucide-react';
import CTASection from '../components/CTASection';
import { allUpworkReviews } from '../data/upworkReviews';

const reviewCards = allUpworkReviews;

export default function TestimonialsPage({ onBookCall, onOpenContact, onOpenUpwork }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
            {filteredReviews.map((rev, idx) => {
              const cardKey = rev.id || String(idx);
              const cleanQuote = rev.quote.replace(/^["'“”]|["'“”]$/g, '');
              const isLong = cleanQuote.length > 175;
              const isExpanded = expandedId === cardKey;

              return (
                <article
                  key={cardKey}
                  className={`bg-white rounded-[22px] p-6 border border-[#DCE6DF] hover:border-emerald-500/40 shadow-[0_4px_20px_-6px_rgba(17,34,25,0.06)] hover:shadow-[0_14px_30px_-8px_rgba(17,34,25,0.1)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between text-left group ${
                    isExpanded ? 'h-auto' : 'h-full min-h-[245px]'
                  }`}
                >
                  <div>
                    {/* Top Meta Row: Stars + Category Pill + Signature Quote Mark */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="flex items-center gap-0.5 text-amber-400 shrink-0" aria-label="5 out of 5 stars">
                          {[...Array(rev.rating || 5)].map((_, sIdx) => (
                            <Star key={sIdx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        {(rev.categoryLabel || rev.tag) && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#F2F7F4] border border-[#DCE8E1] text-[10.5px] font-semibold text-[#143F30] truncate">
                            {rev.categoryLabel || rev.tag}
                          </span>
                        )}
                      </div>

                      <svg
                        width="18"
                        height="14"
                        viewBox="0 0 20 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0 select-none text-[#143F30]/80 group-hover:text-[#143F30] transition-colors"
                        aria-hidden="true"
                      >
                        <path
                          d="M5.35 0C2.4 0 0 2.4 0 5.35C0 7.71 1.5 9.71 3.57 10.4L2.28 15C2.11 15.57 2.54 16 3.14 16H4.85C5.25 16 5.61 15.74 5.75 15.35L7.78 9.57C8.07 8.71 8.21 7.85 8.21 6.97V2.14C8.21 0.95 7.25 0 6.07 0H5.35ZM16.78 0C13.82 0 11.42 2.4 11.42 5.35C11.42 7.71 12.92 9.71 15 10.4L13.71 15C13.54 15.57 13.97 16 14.57 16H16.28C16.68 16 17.04 15.74 17.18 15.35L19.21 9.57C19.5 8.71 19.64 7.85 19.64 6.97V2.14C19.64 0.95 18.68 0 17.5 0H16.78Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>

                    {/* Review Quote clamped to uniform height unless expanded */}
                    <p
                      className={`text-[13.5px] sm:text-[14px] leading-[1.6] text-[#475569] font-normal whitespace-pre-line ${
                        isExpanded ? '' : 'line-clamp-4'
                      }`}
                    >
                      “{cleanQuote}”
                    </p>

                    {isLong && (
                      <button
                        type="button"
                        onClick={() => toggleExpand(cardKey)}
                        className="mt-2 text-xs font-semibold text-[#143F30] hover:text-emerald-700 underline underline-offset-2 cursor-pointer"
                      >
                        {isExpanded ? 'Show less' : 'Read full review'}
                      </button>
                    )}
                  </div>

                  {/* Clean Author Footer */}
                  <div className="flex items-center justify-between gap-3 pt-4 mt-5 border-t border-[#EFF4F1]">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-full bg-[#E9F3ED] border border-[#CFE2D7] text-[#143F30] flex items-center justify-center text-[11px] font-extrabold shrink-0">
                        {rev.initials}
                      </div>
                      <div className="min-w-0">
                        <p className="text-[13px] font-bold text-[#111827] truncate leading-tight">
                          {rev.author}
                        </p>
                        {rev.role && (
                          <p className="text-[11px] text-[#64748B] truncate mt-0.5">
                            {rev.role}
                          </p>
                        )}
                      </div>
                    </div>

                    <UpworkLogo className="w-3.5 h-3.5 opacity-75 shrink-0" />
                  </div>
                </article>
              );
            })}
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
                  <UpworkLogo className="w-4 h-4" />
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
                  <UpworkLogo className="w-4 h-4 brightness-0 invert" />
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
