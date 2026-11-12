import React, { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, ShieldCheck, Star } from 'lucide-react';
import { TopRatedIcon, UpworkLogo } from './Icons';
import { teamMembers } from '../data/teamMembers';

const TEAM_UPWORK_PROFILES = [
  ...teamMembers
    .filter((member) => Boolean(member.upworkUrl))
    .map((member) => ({
      id: member.id,
      name: member.name,
      role: member.role,
      specialty: member.specialty,
      jss: member.jss || '100% Job Success',
      badge: member.badge || 'Top Rated',
      url: member.upworkUrl,
    })),
  {
    id: 'email-automation-specialist',
    name: 'Email Automation Specialist',
    role: 'Workflows & Webhooks',
    specialty: 'Email Automation & CRM Sync',
    jss: '100% Job Success',
    badge: 'Top Rated',
    url: 'https://upwork.com/freelancers/~01549881dcc4c8599c?mp_source=share',
  },
];

export default function UpworkModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="upwork-modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-[28px] border border-[#DCE6E0] p-5 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] max-h-[92vh] overflow-y-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          aria-label="Close Upwork profiles modal"
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-5 pr-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F8F0] border border-[#C6EBD7] text-[#143B2C] text-xs font-bold mb-3">
            <UpworkLogo className="w-4 h-4 text-[#14A800]" />
            <span>Verified Upwork Agency Team</span>
          </div>

          <h3
            id="upwork-modal-title"
            className="text-xl sm:text-2xl font-extrabold text-[#112219] tracking-tight mb-1.5"
          >
            Hire Our Team on Upwork
          </h3>
          <p className="text-xs sm:text-sm text-[#55665D] leading-relaxed">
            Select a Zexta specialist profile below to review verified Upwork feedback, hours worked, and start a contract protected by Upwork Escrow.
          </p>
        </div>

        {/* Summary Trust Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-900 text-xs font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#14A800] shrink-0" />
            <span>100% Job Success</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-900 text-xs font-semibold">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />
            <span>Top Rated Specialists</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-900 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
            <span>Payment Escrow Protected</span>
          </span>
        </div>

        {/* All Team Upwork Profiles (No Portrait Images) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          {TEAM_UPWORK_PROFILES.map((profile, idx) => {
            const isFullWidthLast =
              idx === TEAM_UPWORK_PROFILES.length - 1 && TEAM_UPWORK_PROFILES.length % 2 === 1;

            return (
              <div
                key={profile.id}
                className={`group rounded-2xl border border-[#DCE6E0] hover:border-[#14A800]/60 bg-[#FAFDFB] hover:bg-white p-4 flex flex-col justify-between gap-4 transition-all duration-200 shadow-2xs hover:shadow-md ${
                  isFullWidthLast ? 'sm:col-span-2' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E8F8F0] border border-[#C6EBD7] flex items-center justify-center shrink-0">
                    <UpworkLogo className="w-5 h-5 text-[#14A800]" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm sm:text-[15px] font-bold text-[#112219] truncate">
                      {profile.name}
                    </h4>
                    <p className="text-xs font-semibold text-emerald-700 truncate">
                      {profile.role}
                    </p>
                    <p className="text-[11.5px] text-[#55665D] mt-1 line-clamp-1">
                      {profile.specialty}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mt-auto">
                  <div className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-white border border-[#E5EFE9] text-[11px]">
                    <span className="inline-flex items-center gap-1 font-bold text-[#0A6C25]">
                      <TopRatedIcon className="w-3.5 h-3.5 shrink-0" />
                      <span>{profile.badge}</span>
                    </span>
                    <span className="font-semibold text-[#153C2D]">{profile.jss}</span>
                  </div>

                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#122B22] hover:bg-[#14A800] text-white py-2.5 px-4 rounded-full text-xs font-bold transition-all duration-200 shadow-xs cursor-pointer group/link"
                  >
                    <UpworkLogo className="w-3.5 h-3.5 text-emerald-300 group-hover/link:text-white transition-colors" />
                    <span>View Upwork Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-emerald-300 group-hover/link:text-white group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <p className="text-[11px] text-[#71867A] text-center mt-5 pt-4 border-t border-[#E5EFE8]">
          All profiles open directly on Upwork.com • Hourly & fixed-price contracts supported
        </p>
      </div>
    </div>
  );
}
