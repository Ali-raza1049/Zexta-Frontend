import React from 'react';
import { CornerBadge } from './Icons';
import { ArrowUpRight, Calendar, CheckCircle2 } from 'lucide-react';

export default function ImpactStats() {
  const stats = [
    {
      value: '100+',
      title: 'Upwork Jobs Completed',
      description:
        'Proven track record across 100+ verified Upwork contracts delivering cold email, deliverability setups, and lead generation.',
    },
    {
      value: '1,000+',
      title: 'Hours Worked on Upwork',
      description:
        'Over one thousand hours of hands-on client work configuring outreach infrastructure, API workflows, and automated pipelines.',
    },
    {
      value: '100%',
      title: 'Job Success Score (Top Rated)',
      description:
        'Flawless 100% client feedback rating backed by transparent communication, on-time delivery, and verified ROI.',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex justify-center mb-3">
            <CornerBadge label="Our Impact" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#112219] tracking-tight leading-tight">
            Simple systems that deliver real pipeline
          </h2>
        </div>

        {/* Stats Big Card */}
        <div className="bg-white border border-[#E2ECE6] rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 md:p-12 shadow-[0_6px_30px_-6px_rgba(13,35,26,0.05)]">
          {/* Decorative Dashed Line with Harmonized Emerald Crosshair */}
          <div className="flex items-center gap-3 mb-8 sm:mb-10">
            <div className="flex-1 h-px border-t border-dashed border-emerald-300/80"></div>
            <div className="relative flex items-center justify-center shrink-0 w-8 h-8">
              <span className="absolute inset-0 rounded-full bg-emerald-400/25 animate-ping"></span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="relative z-10">
                <path d="M12 2V22M2 12H22" stroke="#10B981" strokeWidth="1.5" strokeDasharray="2 2" />
                <path d="M5 5L19 19M19 5L5 19" stroke="#10B981" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="3" stroke="#059669" strokeWidth="1.5" fill="white" />
              </svg>
            </div>
            <div className="flex-1 h-px border-t border-dashed border-emerald-300/80"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 pb-6 sm:pb-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="text-left group p-4 sm:p-6 rounded-2xl hover:bg-[#F3FAF6] border border-transparent hover:border-emerald-200/70 hover:-translate-y-1.5 transition-all duration-300 cursor-default hover:shadow-xs"
              >
                <div className="text-3xl sm:text-5xl font-extrabold text-[#0D231A] group-hover:text-emerald-700 tracking-tight leading-none mb-2 sm:mb-3 transition-colors duration-300">
                  {stat.value}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#112219] mb-1.5 sm:mb-2 leading-snug">
                  {stat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#495D53] leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Verified Guarantee & Infrastructure Strip */}
          <div className="pt-6 sm:pt-8 border-t border-[#EEF4F0] flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-5 bg-[#F9FCFA] -mx-5 -mb-5 sm:-mx-8 sm:-mb-8 md:-mx-12 md:-mb-12 p-5 sm:p-6 md:p-8 rounded-b-[24px] sm:rounded-b-[32px]">
            <div className="flex items-center gap-3 sm:gap-3.5 text-center sm:text-left">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-700" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-[#112219]">Engineered for 99.4% Deliverability & Predictable Pipeline</h4>
                <p className="text-xs sm:text-sm text-[#52635A]">Dedicated infrastructure, DNS authentication protocols, and automated mailbox fleets.</p>
              </div>
            </div>

            <a
              href="#services"
              className="w-full sm:w-auto text-center justify-center inline-flex items-center gap-2 bg-[#122B22] hover:bg-[#1A4D39] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm shadow-md hover:-translate-y-0.5 transition-all cursor-pointer shrink-0"
            >
              <span>Explore Capabilities ↗</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
