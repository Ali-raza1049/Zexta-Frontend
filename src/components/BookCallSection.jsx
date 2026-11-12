import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CornerBadge, PartnerLogosMarquee } from './Icons';

export default function BookCallSection({ onBookCall }) {
  return (
    <section
      id="book-call"
      className="py-20 sm:py-24 relative overflow-hidden bg-gradient-to-b from-[#FAFDFB] via-[#FFFFFF] to-[#F6F9F7]"
    >
      {/* Subtle radial atmosphere behind centered conversion block */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[340px] bg-gradient-to-r from-emerald-50/50 via-white to-teal-50/40 blur-3xl pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex justify-center mb-4">
          <CornerBadge label="Book a call" />
        </div>

        <h2 className="text-[26px] xs:text-[30px] sm:text-[40px] lg:text-[46px] font-medium text-[#111827] tracking-[-0.025em] leading-[1.16] mb-4">
          Join 100+ businesses growing
          <br />
          with predictable leads
        </h2>

        <p className="text-[14px] sm:text-[15.5px] text-[#5F6D66] leading-[1.55] max-w-[440px] mx-auto font-normal">
          Book a free call and get a clear plan for your next 90
          <br className="hidden sm:inline" /> days of lead generation.
        </p>

        {/* Centered Monochrome Partner Stack Strip */}
        <div className="mt-9 mb-10 sm:mt-10 sm:mb-11">
          <PartnerLogosMarquee />
        </div>

        {/* Primary Conversion Pill CTA */}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={onBookCall}
            className="group inline-flex items-center gap-3 bg-[#144333] hover:bg-[#195440] text-white pl-6 pr-2.5 py-2.5 sm:py-3 rounded-full text-[14px] sm:text-[15px] font-medium shadow-[0_8px_22px_-4px_rgba(20,67,51,0.32)] hover:shadow-[0_12px_28px_-4px_rgba(20,67,51,0.42)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            <span>Book a 15-Min call</span>
            <span className="w-7 h-7 rounded-full bg-white/15 group-hover:bg-white/25 flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>
        </div>

        {/* Verified Rating Footnote */}
        <div className="inline-flex items-center justify-center gap-2 mt-5 text-[12px] sm:text-[13px] font-medium text-[#526059]">
          <span className="w-2 h-2 rounded-full bg-[#123828] shrink-0" aria-hidden="true" />
          <span>5.0 rated by 100+ clients worldwide</span>
        </div>
      </div>
    </section>
  );
}

