import React from 'react';
import { CornerBadge, UpworkLogo } from './Icons';
import { ArrowUpRight } from 'lucide-react';

export default function UpworkSection({ onOpenUpwork }) {
  return (
    <section id="upwork" className="section upwork-section py-20 relative overflow-hidden bg-[#F6F9F7]">
      {/* Soft Ambient Background Glow */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-center">
        <div className="w-[850px] h-[380px] bg-gradient-to-r from-emerald-100/35 via-teal-100/20 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header + Modal Trigger CTA */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex justify-center mb-3.5">
            <CornerBadge label="Hire Us On Upwork" />
          </div>

          <h2 className="section-title text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#112219] tracking-tight leading-[1.16] mb-3">
            Work with us on Upwork.
            <br />
            <span className="bg-gradient-to-r from-[#112219] via-[#163E2D] to-[#10B981] bg-clip-text text-transparent">
              Pick the specialist you need.
            </span>
          </h2>

          <p className="text-[15px] sm:text-base text-[#52635A] max-w-lg mx-auto font-normal leading-relaxed">
            Every profile features a 100% Job Success Score and verified 5-star client reviews.
          </p>
        </div>

        {/* Dedicated Upwork Escrow & Contract Guarantee Banner with Single Modal Trigger */}
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-r from-[#0D231A] via-[#122B22] to-[#163E2D] border border-emerald-500/20 rounded-[28px] p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_12px_36px_rgba(10,28,21,0.25)]">
            {/* Ambient Background Aura */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-4 text-center sm:text-left relative z-10">
              <div className="w-13 h-13 rounded-2xl bg-emerald-400/15 border border-emerald-400/30 flex items-center justify-center text-emerald-300 shrink-0 shadow-inner">
                <UpworkLogo className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                  Protected by Upwork Payment Escrow & Hourly Tracking
                </h4>
                <p className="text-xs sm:text-sm text-emerald-100/70 mt-1">
                  100% verified contracts, milestone releases, and top-tier client protections.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenUpwork}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-teal-300 hover:to-emerald-400 text-[#0A1C15] px-6 sm:px-7 py-3.5 rounded-full font-bold text-sm shadow-[0_4px_16px_rgba(16,185,129,0.3)] hover:shadow-[0_6px_22px_rgba(16,185,129,0.45)] transition-all hover:scale-[1.03] shrink-0 cursor-pointer relative z-10"
            >
              <span>Hire on Upwork</span>
              <ArrowUpRight className="w-4 h-4 text-[#0A1C15]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
