import React from 'react';
import { Link } from 'react-router-dom';
import { CornerBadge, UpworkLogo } from './Icons';
import { Star, CheckCircle2, ArrowUpRight, MessageSquareQuote, Clock } from 'lucide-react';
import { allUpworkReviews } from '../data/upworkReviews';

// Curated 6 flagship verified client reviews representing our core capabilities
const featuredHomeReviews = [
  // 1. Cold Email & Deliverability (Louis Gudema)
  allUpworkReviews.find((r) => r.id === 'upwork-louis') || allUpworkReviews[0],
  // 2. Email Automation & Webhooks (Arlenny Abreu)
  allUpworkReviews.find((r) => r.id === 'upwork-arlenny-1') || allUpworkReviews[1],
  // 3. Meta Ads Scaling (Leisha Ryan)
  allUpworkReviews.find((r) => r.id === 'upwork-leisha-all') || allUpworkReviews.find((r) => r.id === 'upwork-leisha') || allUpworkReviews[2],
  // 4. GTM & Conversion Tracking (Hafiz M. Abdullah)
  allUpworkReviews.find((r) => r.id === 'upwork-hafiz') || allUpworkReviews[3],
  // 5. Paid Acquisition Strategy (Henry Schein)
  allUpworkReviews.find((r) => r.id === 'upwork-henry') || allUpworkReviews[4],
  // 6. Lead Generation & Scraping (Javier Mejia)
  allUpworkReviews.find((r) => r.id === 'upwork-javier') || allUpworkReviews[5],
].filter(Boolean);

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-24 relative overflow-hidden bg-gradient-to-b from-[#FAFDFB] via-[#F4F8F5] to-white">
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

        {/* 6 Curated Flagship Reviews in Aesthetic Cards (Only Review & Client Name) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10">
          {featuredHomeReviews.map((review) => (
            <div
              key={review.id}
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
                  {review.quote.replace(/^["']|["']$/g, '')}
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

              {/* Only Client Name: • {review.author} */}
              <div className="mt-auto flex items-center gap-2">
                <span className="text-[#151619] font-black text-xs leading-none select-none">•</span>
                <span
                  className="font-bold text-[#151619] tracking-tight"
                  style={{
                    fontSize: '13px',
                    fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  }}
                >
                  {review.author}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Link to Dedicated Testimonials Page (which shows ALL reviews) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 bg-[#122B22] hover:bg-[#1A4535] text-white px-7 py-3 rounded-full text-xs sm:text-sm font-bold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer border border-emerald-500/20 group"
          >
            <MessageSquareQuote className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span>View All Reviews on Wall of Love ({allUpworkReviews.length}+)</span>
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

          <a
            href="#upwork"
            className="inline-flex items-center gap-1.5 border border-[#122B22] bg-[#122B22] text-white hover:bg-[#1A4535] px-5 py-2 rounded-full text-xs font-bold transition-all shadow-xs hover:shadow-sm cursor-pointer"
          >
            <span>View All Upwork Profiles</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
