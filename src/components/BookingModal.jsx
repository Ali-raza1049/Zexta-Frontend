import React from 'react';
import { X, Calendar, Clock, ArrowUpRight, CheckCircle2, ShieldCheck, Video } from 'lucide-react';
import { ZextaLogo } from './Icons';

export default function BookingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-[28px] border border-[#DCE6E0] p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          aria-label="Close dialog"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 transition-colors cursor-pointer"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-5 text-left pr-6">
          <ZextaLogo className="w-6 h-6" textClassName="text-[#112219] font-bold text-lg" />
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#112219] tracking-tight mt-3 mb-1.5">
            Book Your 1-on-1 Strategy Call
          </h3>
          <p className="text-xs sm:text-sm text-[#55665D] leading-relaxed">
            Reserve a dedicated 30-minute growth strategy session with the Zexta team on our live calendar.
          </p>
        </div>

        {/* Meeting Details Pill Strip */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-900 border border-emerald-200/80 rounded-full text-xs font-semibold">
            <Clock className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
            <span>30 Minutes</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-900 border border-emerald-200/80 rounded-full text-xs font-semibold">
            <Video className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
            <span>Google Meet / Zoom</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-900 border border-emerald-200/80 rounded-full text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
            <span>100% Free Consultation</span>
          </div>
        </div>

        {/* Exclusive Calendly / Cal.com Booking Card */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-emerald-50/90 via-[#F3FAF6] to-teal-50/50 border-2 border-emerald-400/80 text-left mb-6 shadow-xs">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#153C2D] text-emerald-300 flex items-center justify-center shrink-0 shadow-xs">
              <Calendar className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <h4 className="font-extrabold text-[#112219] text-base leading-tight">
                Zexta's Live Calendar
              </h4>
              <span className="text-xs text-emerald-700 font-semibold">
                Available slots synced in real time
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#44564D] leading-relaxed mb-4">
            We will conduct a comprehensive audit of your cold email deliverability, mailbox setup, scraping workflow, paid ad campaigns, or custom full-stack system.
          </p>

          <ul className="space-y-2 mb-5 text-xs text-[#2A4337]">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Full deliverability & DNS protocol check (SPF, DKIM, DMARC)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Cold outreach & lead list validation teardown</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Actionable execution roadmap tailored to your target revenue</span>
            </li>
          </ul>

          <a
            href="https://cal.com/zexta"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#122B22] hover:bg-[#1A4D39] active:bg-[#0F221B] text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-emerald-300" />
            <span>Pick a Time on Zexta Calendar (Calendly)</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-300" />
          </a>
        </div>

        {/* Modal Sub-footer */}
        <div className="pt-3 border-t border-[#E5EFE8] text-center">
          <p className="text-[11.5px] text-[#71867A]">
            No sales pressure • Instant calendar invite with video link sent to your email
          </p>
        </div>
      </div>
    </div>
  );
}
