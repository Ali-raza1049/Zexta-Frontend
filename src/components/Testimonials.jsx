import React from 'react';
import { Link } from 'react-router-dom';
import { CornerBadge, UpworkLogo } from './Icons';
import { Star, CheckCircle2, ArrowUpRight, MessageSquareQuote, Clock } from 'lucide-react';
import { allUpworkReviews, upworkLeftReviews } from '../data/upworkReviews';
import avatarKarin from '../assets/avatar_karin.jpg';

// Pull verified reviews from the shared dataset while preserving clean single-source copy
const findReview = (id, fallbackIndex = 0) =>
  allUpworkReviews.find((r) => r.id === id) ||
  upworkLeftReviews.find((r) => r.id === id) ||
  allUpworkReviews[fallbackIndex];

const formatQuote = (quote = '') => `“${quote.replace(/^["'“”]|["'“”]$/g, '')}”`;

const FEATURED_STORY = {
  ...findReview('upwork-arlenny-1', 2),
  statValue: '100%',
  statLabel: 'Scalable email automation infrastructure',
};

const TOP_RIGHT_REVIEW = {
  ...findReview('upwork-karin', 0),
  statValue: '3.8X',
  statLabel: 'Increase in pipeline growth',
  avatar: avatarKarin,
};

const DARK_HIGHLIGHT_REVIEW = findReview('upwork-louis', 3);
const LIGHT_HIGHLIGHT_REVIEW = findReview('upwork-arshia-1', 20);

function QuoteMark({ className = 'text-[#143F30]' }) {
  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      aria-hidden="true"
    >
      <path
        d="M5.35 0C2.4 0 0 2.4 0 5.35C0 7.71 1.5 9.71 3.57 10.4L2.28 15C2.11 15.57 2.54 16 3.14 16H4.85C5.25 16 5.61 15.74 5.75 15.35L7.78 9.57C8.07 8.71 8.21 7.85 8.21 6.97V2.14C8.21 0.95 7.25 0 6.07 0H5.35ZM16.78 0C13.82 0 11.42 2.4 11.42 5.35C11.42 7.71 12.92 9.71 15 10.4L13.71 15C13.54 15.57 13.97 16 14.57 16H16.28C16.68 16 17.04 15.74 17.18 15.35L19.21 9.57C19.5 8.71 19.64 7.85 19.64 6.97V2.14C19.64 0.95 18.68 0 17.5 0H16.78Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ReviewerFooter({ review, dark = false, showCornerDot = false }) {
  return (
    <div className="flex items-center justify-between gap-3 pt-5">
      <div className="flex items-center gap-3 min-w-0">
        {review.avatar ? (
          <img
            src={review.avatar}
            alt={review.author}
            className="w-9 h-9 rounded-full object-cover shrink-0 border border-[#DCE6DF]"
          />
        ) : (
          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-extrabold shrink-0 ${
              dark
                ? 'bg-white/15 text-white border border-white/20'
                : 'bg-[#E9F3ED] text-[#143F30] border border-[#CFE2D7]'
            }`}
          >
            {review.initials}
          </div>
        )}

        <div className="min-w-0">
          <p
            className={`text-xs sm:text-[13px] font-bold truncate leading-tight ${
              dark ? 'text-white' : 'text-[#111827]'
            }`}
          >
            {review.author}
          </p>
          <p
            className={`text-[11px] truncate mt-0.5 ${
              dark ? 'text-emerald-100/75' : 'text-[#64748B]'
            }`}
          >
            {review.role}
          </p>
        </div>
      </div>

      {showCornerDot && (
        <span
          className="w-4 h-4 rounded-full bg-[#E5E7EB] shrink-0"
          aria-hidden="true"
        />
      )}
    </div>
  );
}

export default function Testimonials({ onOpenUpwork }) {
  return (
    <section
      id="testimonials"
      className="py-20 sm:py-24 relative overflow-hidden bg-gradient-to-b from-[#FAFDFB] via-[#F4F8F5] to-white"
    >
      {/* Background ambient decorative mint glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-gradient-to-r from-emerald-100/40 via-teal-100/25 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="flex justify-center mb-3.5">
            <CornerBadge label="Verified Upwork Testimonials" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#112219] tracking-tight leading-[1.16]">
            Results That Speak Volumes
            <br />
            <span className="bg-gradient-to-r from-[#112219] via-[#1A4D38] to-[#10B981] bg-clip-text text-transparent">
              Real Upwork Success Stories
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#52635A] mt-3.5 max-w-2xl mx-auto leading-relaxed">
            100% verified Upwork feedback from founders, marketing directors, and growth leaders across cold outreach deliverability, high-ROAS Meta & Google ads, and full-stack automations.
          </p>

          {/* Upwork Verified Trust Pills */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 flex-wrap">
            <div className="inline-flex items-center gap-2 bg-white border border-[#D7E4DC] px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#143B2C] shadow-2xs">
              <UpworkLogo className="h-3.5 w-auto" />
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#14A800]"></span>
              </span>
              <span>100% Job Success Score</span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200/80 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-800 shadow-2xs">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span>Top Rated Client Reviews</span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-white border border-[#D7E4DC] px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#143B2C] shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>100+ Jobs Completed</span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-white border border-[#D7E4DC] px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#143B2C] shadow-2xs">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
              <span>1,000+ Hours Worked</span>
            </div>
          </div>
        </div>

        {/* Asymmetric 4-Card Bento Testimonial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 mb-10 items-start text-left">
          {/* Left Tall Feature Card */}
          <div className="bg-white rounded-[24px] p-6 sm:p-8 border border-[#E3ECE6] shadow-[0_6px_24px_-6px_rgba(17,34,25,0.06)] hover:shadow-[0_14px_34px_-8px_rgba(17,34,25,0.1)] transition-all duration-300 flex flex-col">
            <div>
              <div className="text-4xl sm:text-5xl font-extrabold text-[#111827] tracking-tight leading-none">
                {FEATURED_STORY.statValue}
              </div>
              <p className="text-base sm:text-lg font-medium text-[#1F2937] mt-2.5 mb-5">
                {FEATURED_STORY.statLabel}
              </p>

              <QuoteMark className="text-[#143F30] mb-3.5" />

              <div className="space-y-2.5 text-[13px] sm:text-[13.5px] leading-[1.6] text-[#556070] font-normal">
                {FEATURED_STORY.quote
                  .replace(/^["'“”]|["'“”]$/g, '')
                  .split(/\n\n+/)
                  .map((para, pIdx, arr) => (
                    <p key={pIdx} className="text-[#556070]">
                      {pIdx === 0 ? '“' : ''}
                      {para}
                      {pIdx === arr.length - 1 ? '”' : ''}
                    </p>
                  ))}
              </div>
            </div>

            <ReviewerFooter review={FEATURED_STORY} showCornerDot />
          </div>

          {/* Right Stacked Column: 1 Wide Top Card + 2 Split Bottom Cards */}
          <div className="flex flex-col gap-4 sm:gap-5">
            {/* Top-Right Wide Metric Card */}
            <div className="bg-white rounded-[24px] p-6 sm:p-7 border border-[#E3ECE6] shadow-[0_6px_24px_-6px_rgba(17,34,25,0.06)] hover:shadow-[0_14px_34px_-8px_rgba(17,34,25,0.1)] transition-all duration-300 flex flex-col">
              <div>
                <div className="flex flex-wrap items-baseline gap-2.5 mb-4">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight leading-none">
                    {TOP_RIGHT_REVIEW.statValue}
                  </span>
                  <span className="text-sm sm:text-base font-medium text-[#1F2937]">
                    {TOP_RIGHT_REVIEW.statLabel}
                  </span>
                </div>

                <QuoteMark className="text-[#143F30] mb-3" />

                <p className="text-sm leading-[1.65] text-[#556070]">
                  {formatQuote(TOP_RIGHT_REVIEW.quote)}
                </p>
              </div>

              <ReviewerFooter review={TOP_RIGHT_REVIEW} showCornerDot />
            </div>

            {/* Bottom-Right 2-Card Split */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 items-start">
              {/* Dark Forest Green Highlight Card */}
              <div className="bg-[#143F30] text-white rounded-[24px] p-6 border border-[#1E5441] shadow-[0_10px_28px_-6px_rgba(17,45,35,0.3)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col">
                <div>
                  <QuoteMark className="text-white mb-3.5" />
                  <p className="text-[13.5px] sm:text-sm leading-[1.65] text-white/95">
                    {formatQuote(DARK_HIGHLIGHT_REVIEW.quote)}
                  </p>
                </div>

                <ReviewerFooter review={DARK_HIGHLIGHT_REVIEW} dark />
              </div>

              {/* Clean White Highlight Card */}
              <div className="bg-white rounded-[24px] p-6 border border-[#E3ECE6] shadow-[0_6px_24px_-6px_rgba(17,34,25,0.06)] hover:shadow-[0_14px_34px_-8px_rgba(17,34,25,0.1)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col">
                <div>
                  <QuoteMark className="text-[#143F30] mb-3.5" />
                  <p className="text-[13.5px] sm:text-sm leading-[1.65] text-[#556070]">
                    {formatQuote(LIGHT_HIGHLIGHT_REVIEW.quote)}
                  </p>
                </div>

                <ReviewerFooter review={LIGHT_HIGHLIGHT_REVIEW} />
              </div>
            </div>
          </div>
        </div>

        {/* View All Testimonials Page CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 bg-[#122B22] hover:bg-[#1A4535] text-white px-7 py-3 rounded-full text-xs sm:text-sm font-bold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer border border-emerald-500/20 group"
          >
            <MessageSquareQuote className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span>View All Testimonials ({allUpworkReviews.length}+)</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Bottom Upwork Trust & Social Proof Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:p-6 bg-white border border-[#DFEBE3] rounded-2xl shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E8F8F0] border border-[#C6EBD7] flex items-center justify-center text-emerald-700">
              <UpworkLogo className="h-4 w-auto" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#112219]">Top Rated Agency on Upwork</h4>
              <p className="text-xs text-[#52635A]">100% Job Success • 100+ Completed Jobs • 1,000+ Hours</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex gap-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-sm text-[#112219]">Top Rated</span>
            <span className="text-xs text-[#6F8278]">Based on {allUpworkReviews.length}+ verified reviews</span>
          </div>

          <button
            type="button"
            onClick={onOpenUpwork}
            className="inline-flex items-center gap-1.5 border border-[#122B22] bg-[#122B22] text-white hover:bg-[#1A4535] px-5 py-2 rounded-full text-xs font-bold transition-all shadow-xs hover:shadow-sm cursor-pointer"
          >
            <span>View All Upwork Profiles</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
          </button>
        </div>
      </div>
    </section>
  );
}
