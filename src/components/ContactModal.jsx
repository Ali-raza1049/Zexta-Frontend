import React from 'react';
import { X, Calendar, Clock, ArrowUpRight, Sparkles, Mail, MessageSquare } from 'lucide-react';
import { ZextaLogo, WhatsAppIcon } from './Icons';

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-[28px] border border-[#DCE6E0] p-5 sm:p-7 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] max-h-[92vh] overflow-y-auto"
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
        <div className="mb-5 text-left pr-8">
          <ZextaLogo className="w-6 h-6" textClassName="text-[#112219] font-bold text-lg" />
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#112219] tracking-tight mt-3 mb-1.5">
            Contact Zexta
          </h3>
          <p className="text-xs sm:text-sm text-[#55665D] leading-relaxed">
            Choose your preferred channel to connect directly with Shahid Nazir and our core team:
          </p>
        </div>

        {/* Quick Highlights / Badges */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-900 border border-emerald-200/80 rounded-full text-[11px] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse shrink-0"></span>
            <span>WhatsApp Online</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-900 border border-emerald-200/80 rounded-full text-[11px] font-semibold">
            <Calendar className="w-3 h-3 text-emerald-600 shrink-0" />
            <span>Calendly Live Slots</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-900 border border-emerald-200/80 rounded-full text-[11px] font-semibold">
            <Mail className="w-3 h-3 text-emerald-600 shrink-0" />
            <span>Fast Email Response</span>
          </div>
        </div>

        {/* The 3 Direct Contact Channels: WhatsApp, Calendly, and Email */}
        <div className="flex flex-col gap-3 sm:gap-3.5">
          {/* 1. WhatsApp Direct Chat */}
          <div className="p-4 sm:p-4.5 rounded-2xl bg-white hover:bg-emerald-50/30 border border-[#D6E3DC] hover:border-emerald-400 transition-all shadow-xs hover:shadow-md text-left">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <WhatsAppIcon className="w-5 h-5 fill-white" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[#112219] text-sm sm:text-base leading-tight">
                    Chat on WhatsApp
                  </h4>
                  <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></span>
                    Direct Line • Instant Response
                  </span>
                </div>
              </div>
              <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-bold tracking-wide shrink-0">
                Fast Reply
              </span>
            </div>

            <p className="text-xs text-[#55665D] leading-relaxed mb-3">
              Direct mobile messaging with our founding team. Ideal for fast project scopes and quick questions.
            </p>

            <a
              href="https://wa.me/923001767257?text=Hi%20Zexta%20team,%20I'd%20like%20to%20inquire%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] active:bg-[#1A9E4D] text-white py-2.5 sm:py-3 px-5 rounded-xl font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Start WhatsApp Chat</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </a>
          </div>

          {/* 2. Calendly / Cal.com Direct Booking */}
          <div className="p-4 sm:p-4.5 rounded-2xl bg-gradient-to-br from-emerald-50/90 via-[#F3FAF6] to-teal-50/50 border-2 border-emerald-400/80 hover:border-emerald-500 transition-all shadow-xs hover:shadow-md text-left">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#153C2D] text-emerald-300 flex items-center justify-center shrink-0 shadow-xs">
                  <Calendar className="w-4 h-4 text-emerald-300" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[#112219] text-sm sm:text-base leading-tight">
                    Schedule 1-on-1 Call (Calendly / Cal.com)
                  </h4>
                  <span className="text-[11px] text-[#55665D]">30-Min Strategy Call • Google Meet or Zoom</span>
                </div>
              </div>
              <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-emerald-200/70 text-emerald-900 text-[10px] font-extrabold tracking-wide uppercase shrink-0">
                Call
              </span>
            </div>

            <p className="text-xs text-[#44564D] leading-relaxed mb-3">
              Pick a 30-min slot on Shahid Nazir's live calendar. We'll audit your outbound pipeline & tech stack.
            </p>

            <a
              href="https://cal.com/zexta"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#153C2D] hover:bg-[#1E523D] active:bg-[#0F2B1D] text-white py-2.5 sm:py-3 px-5 rounded-xl font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-emerald-300" />
              <span>Pick a Slot on Calendar</span>
              <ArrowUpRight className="w-4 h-4 text-emerald-300" />
            </a>
          </div>

          {/* 3. Direct Email */}
          <div className="p-4 sm:p-4.5 rounded-2xl bg-white hover:bg-emerald-50/30 border border-[#D6E3DC] hover:border-emerald-400 transition-all shadow-xs hover:shadow-md text-left">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-blue-700" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[#112219] text-sm sm:text-base leading-tight">
                    Direct Studio Email
                  </h4>
                  <span className="text-[11px] text-[#55665D]">zextastudio@gmail.com</span>
                </div>
              </div>
              <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-gray-100 text-gray-700 text-[10px] font-semibold tracking-wide shrink-0">
                Inbox
              </span>
            </div>

            <p className="text-xs text-[#55665D] leading-relaxed mb-3">
              Send your project RFP, technical brief, or partner request directly to our main inbox.
            </p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=zextastudio@gmail.com&su=Project%20Inquiry%20via%20Zexta%20Website"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#112219] hover:bg-[#1C3627] text-white py-2.5 sm:py-3 px-5 rounded-xl font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4 text-emerald-300" />
              <span>Send Direct Email</span>
              <ArrowUpRight className="w-4 h-4 text-emerald-300" />
            </a>
            <div className="mt-2 text-center">
              <a
                href="mailto:zextastudio@gmail.com?subject=Project%20Inquiry%20via%20Zexta%20Website"
                className="text-[11px] text-[#55665D] hover:text-[#112219] underline transition-colors cursor-pointer"
              >
                Or open default mail app (Outlook / Apple Mail)
              </a>
            </div>
          </div>
        </div>

        {/* Modal Sub-footer */}
        <div className="mt-5 pt-4 border-t border-[#E5EFE8] text-center">
          <p className="text-[11px] text-[#71867A]">
            Direct connection to founding partners • No forms or backends required
          </p>
        </div>
      </div>
    </div>
  );
}

