import React from 'react';
import { CornerBadge, UpworkLogo } from './Icons';
import { Star, ArrowUpRight, CheckCircle2, Calendar } from 'lucide-react';

const upworkProfiles = [
  {
    id: 'cold-email',
    title: 'Cold Email Outreach',
    url: 'https://www.upwork.com/freelancers/raishahidnazir257',
    description:
      'End-to-end B2B outbound infrastructure, automated mailbox warmups, and personalized Clay campaigns that land in the inbox and book meetings.',
    jss: '100% Job Success',
    rating: 'Verified Reviews',
    buttonText: 'View Upwork Profile',
    iconType: 'mail',
  },
  {
    id: 'automation',
    title: 'Email Automation',
    url: 'https://upwork.com/freelancers/~01549881dcc4c8599c?mp_source=share',
    description:
      'Automated multi-channel flows, CRM pipeline synchronization, and follow-up sequences that nurture every lead and turn them into paying customers.',
    jss: '100% Job Success',
    rating: 'Verified Reviews',
    buttonText: 'View Upwork Profile',
    iconType: 'automation',
  },
  {
    id: 'ads',
    title: 'Meta & Google Ads',
    url: 'https://upwork.com/freelancers/~01bdb47ba4630db792',
    description:
      'Targeted lead generation campaigns on Facebook, Instagram, and Google Search engineered to capture qualified leads with positive ROAS.',
    jss: '100% Job Success',
    rating: 'Verified Reviews',
    buttonText: 'View Upwork Profile',
    iconType: 'meta',
  },
];

export default function UpworkSection({ onBookCall }) {
  return (
    <section id="upwork" className="section upwork-section py-20 relative overflow-hidden bg-[#F6F9F7]">
      {/* Soft Ambient Background Glow */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-center">
        <div className="w-[850px] h-[380px] bg-gradient-to-r from-emerald-100/35 via-teal-100/20 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex justify-center mb-3.5">
            <CornerBadge label="Hire Us On Upwork" />
          </div>

          <h2 className="section-title text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#112219] tracking-tight leading-[1.16] mb-3">
            Work with us on Upwork.
            <br />
            <span className="bg-gradient-to-r from-[#112219] via-[#163E2D] to-[#10B981] bg-clip-text text-transparent">
              Pick the service you need.
            </span>
          </h2>

          <p className="text-[15px] sm:text-base text-[#52635A] max-w-lg mx-auto font-normal leading-relaxed">
            Every profile features a 100% Job Success Score and verified 5-star client reviews.
          </p>
        </div>

        {/* 3 High-Aesthetic Upwork Cards with Strictly Equal Dimensions & Unified Palette */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-lg lg:max-w-6xl mx-auto items-stretch">
          {upworkProfiles.map((profile) => (
            <div
              key={profile.id}
              className="upwork-clean-card group relative bg-white border border-[#E2ECE6] hover:border-emerald-500/40 rounded-[28px] p-6 sm:p-8 shadow-[0_4px_24px_-4px_rgba(18,43,34,0.04)] hover:shadow-[0_20px_45px_-8px_rgba(18,43,34,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden"
            >
              {/* Subtle top-right ambient hover glow */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-gradient-to-br from-emerald-400/10 to-teal-300/0 rounded-full blur-xl group-hover:from-emerald-400/25 group-hover:scale-125 transition-all duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Top Row: Upwork Logo Icon */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/70 flex items-center justify-center text-emerald-600 shadow-2xs group-hover:scale-105 group-hover:bg-emerald-100/60 group-hover:border-emerald-300 transition-all duration-300">
                    <UpworkLogo className="w-6 h-6 text-emerald-600" />
                  </div>

                  {profile.tag && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-900 bg-emerald-50 border border-emerald-200/80 px-3.5 py-1 rounded-full group-hover:border-emerald-300 shadow-2xs transition-colors">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />
                      <span>{profile.tag}</span>
                    </span>
                  )}
                </div>

                {/* Service Title - Harmonized Across All Cards */}
                <h3 className="text-xl sm:text-[22px] font-bold text-[#112219] group-hover:text-emerald-800 tracking-tight leading-snug mb-3 transition-colors">
                  {profile.title}
                </h3>

                {/* Description */}
                <p className="text-[14.5px] text-[#52635A] leading-[1.65] font-normal mb-6">
                  {profile.description}
                </p>

                {/* Proof Strip */}
                <div className="flex items-center justify-between py-2.5 px-3.5 bg-[#F6FAF7] border border-[#E2ECE6] rounded-xl text-[12px] font-medium mb-6 group-hover:bg-white group-hover:border-emerald-200 transition-colors">
                  <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{profile.jss}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-[#112219]">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />
                    <span>{profile.rating}</span>
                  </span>
                </div>
              </div>

              {/* Bottom Action Button (Direct Upwork Link) - Unified Single-Line Pill */}
              <div className="pt-4 w-full mt-auto relative z-10">
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn w-full h-[48px] sm:h-[50px] flex items-center justify-between bg-gradient-to-r from-[#122B22] via-[#163E2D] to-[#122B22] hover:from-[#163E2D] hover:to-[#122B22] text-white px-5 sm:px-6 rounded-full shadow-[0_4px_16px_rgba(18,43,34,0.18)] hover:shadow-[0_8px_24px_rgba(16,185,129,0.25)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer border border-emerald-500/20 select-none"
                  style={{ borderRadius: '9999px' }}
                >
                  <span className="font-bold text-[13px] sm:text-[13.5px] text-white tracking-tight truncate whitespace-nowrap">
                    {profile.buttonText || 'View Upwork Profile'}
                  </span>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 group-hover/btn:bg-white/20 flex items-center justify-center shrink-0 transition-colors ml-2">
                    <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated Upwork Escrow & Contract Guarantee Banner */}
        <div className="mt-14 max-w-4xl mx-auto">
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

            <a
              href="#upwork"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-teal-300 hover:to-emerald-400 text-[#0A1C15] px-6 sm:px-7 py-3.5 rounded-full font-bold text-sm shadow-[0_4px_16px_rgba(16,185,129,0.3)] hover:shadow-[0_6px_22px_rgba(16,185,129,0.45)] transition-all hover:scale-[1.03] shrink-0 cursor-pointer relative z-10"
            >
              <span>Explore All 3 Upwork Profiles</span>
              <ArrowUpRight className="w-4 h-4 text-[#0A1C15]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
