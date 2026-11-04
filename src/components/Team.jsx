import React from 'react';
import { LinkedInIcon, CornerBadge } from './Icons';
import { teamMembers } from '../data/teamMembers';
import { CheckCircle2, ArrowUpRight, BadgeCheck } from 'lucide-react';

export default function Team({ onBookCall }) {
  return (
    <section id="team" className="section team-section py-10 sm:py-14 relative overflow-hidden bg-[#F6F9F7]">
      {/* Background ambient radial aura glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[280px] bg-gradient-to-b from-emerald-100/35 via-teal-50/15 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Sleek, Compact Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-9 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <CornerBadge label="Core Growth Squad" />
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-100/70 text-emerald-800 text-[10.5px] font-bold border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                <span>Direct Specialist Access</span>
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0F1E17] tracking-tight leading-tight">
              The Specialists Behind{' '}
              <span className="bg-gradient-to-r from-[#122B22] via-[#163E2D] to-[#10B981] bg-clip-text text-transparent">
                Your Pipeline
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-[#52635A] mt-1.5 max-w-lg leading-relaxed">
              Direct access to dedicated senior operators. No middlemen, no account managers.
            </p>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
            <button
              type="button"
              onClick={onBookCall}
              className="inline-flex items-center gap-1.5 bg-[#122B22] hover:bg-[#1A4D39] text-white text-xs font-bold px-4 py-2.5 rounded-full transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5 group shrink-0 border border-emerald-500/20"
            >
              <span>Deploy Full Squad</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* 4-Column Responsive Member Cards (Compact & Single-Line Skills) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 lg:gap-4 xl:gap-5 max-w-sm sm:max-w-none mx-auto items-stretch">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative bg-white border border-[#E2ECE6] hover:border-emerald-500/50 rounded-[22px] sm:rounded-[24px] p-4 sm:p-4.5 shadow-[0_2px_14px_-2px_rgba(18,43,34,0.04)] hover:shadow-[0_16px_36px_-6px_rgba(18,43,34,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between items-center text-center overflow-hidden"
            >
              {/* Subtle ambient hover glow */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-emerald-400/15 to-teal-300/0 rounded-full blur-xl group-hover:from-emerald-400/30 group-hover:scale-125 transition-all duration-500 pointer-events-none" />

              {/* Top Section: Crisp High-Resolution Round Avatar Frame */}
              <div className="w-full flex flex-col items-center">
                {/* Round Picture Avatar */}
                <div className="relative mb-3.5 transition-transform duration-300 group-hover:scale-[1.03]">
                  {/* Outer Luxury Gradient Ring */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-24 lg:h-24 xl:w-28 xl:h-28 rounded-full p-1 bg-gradient-to-tr from-emerald-500/35 via-[#153C2D]/15 to-emerald-400/40 group-hover:from-emerald-500 group-hover:to-teal-400 transition-all duration-300 shadow-sm">
                    {/* Inner White Border Frame */}
                    <div className="w-full h-full rounded-full overflow-hidden bg-white p-0.5 shadow-inner">
                      <img
                        src={member.image}
                        alt={member.name}
                        width={360}
                        height={360}
                        loading="eager"
                        decoding="sync"
                        className="w-full h-full rounded-full object-cover object-center filter contrast-[1.03] saturate-[1.05]"
                      />
                    </div>
                  </div>

                  {/* Verified Indicator Badge Overlay */}
                  <div
                    className="absolute bottom-0.5 right-0.5 bg-white rounded-full p-0.5 shadow-sm border border-[#D5E3DB] flex items-center justify-center"
                    title="Verified Specialist"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-50" />
                  </div>
                </div>

                {/* Member Name */}
                <h3 className="text-sm sm:text-base font-bold text-[#112219] group-hover:text-emerald-900 transition-colors leading-snug truncate max-w-full">
                  {member.name}
                </h3>

                {/* Member Role: strictly single-line */}
                <p className="text-[11.5px] font-semibold text-emerald-700 mt-0.5 truncate max-w-full text-center leading-tight whitespace-nowrap">
                  {member.role}
                </p>

                {/* Specialty Pill / Skills: strictly single-line */}
                <div className="mt-2 mb-2.5 px-2.5 py-1 bg-[#F4F8F5] group-hover:bg-emerald-50/80 border border-[#DEEAE2] group-hover:border-emerald-200 rounded-full transition-colors w-full overflow-hidden">
                  <p className="text-[10.5px] sm:text-[11px] font-medium text-[#2D3E35] truncate text-center whitespace-nowrap">
                    {member.specialty}
                  </p>
                </div>

                {/* Proof Strip: Top Rated & JSS */}
                <div className="w-full py-1 px-2.5 bg-[#F9FCFA] border border-[#E5EFE9] rounded-xl flex items-center justify-between text-[10.5px] mb-3">
                  <span className="inline-flex items-center gap-1 text-[#0A6C25] font-bold truncate max-w-[115px]">
                    <BadgeCheck className="w-3 h-3 text-[#14A800] shrink-0" />
                    <span className="truncate">{member.badge}</span>
                  </span>
                  <span className="font-bold text-[#153C2D] shrink-0 ml-1">
                    {member.jss || '100% JSS'}
                  </span>
                </div>
              </div>

              {/* Bottom Action Row: LinkedIn Profile & Direct Booking */}
              <div className="w-full pt-2.5 border-t border-[#EEF4F0] flex items-center justify-between gap-2 mt-auto">
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#F4F8F5] hover:bg-[#0A66C2] text-[#0A66C2] hover:text-white border border-[#D5E3DB] hover:border-transparent flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105 shrink-0"
                  title={`Connect with ${member.name} on LinkedIn`}
                >
                  <LinkedInIcon className="w-3.5 h-3.5 fill-current" />
                </a>

                <button
                  type="button"
                  onClick={onBookCall}
                  className="flex-1 inline-flex items-center justify-center gap-1 bg-[#122B22] hover:bg-[#1A4D39] text-white text-[11.5px] font-bold py-1.5 px-3 rounded-full transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-xs group/btn"
                >
                  <span>Book Call</span>
                  <ArrowUpRight className="w-3 h-3 text-emerald-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
