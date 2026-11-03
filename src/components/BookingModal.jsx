import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Clock, ArrowRight, Sparkles, ArrowUpRight } from 'lucide-react';
import { ZextaLogo } from './Icons';

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    targetRevenue: '$50k - $100k / mo',
    channels: ['Cold Email'],
  });
  const [booked, setBooked] = useState(false);

  if (!isOpen) return null;

  const toggleChannel = (channel) => {
    if (formData.channels.includes(channel)) {
      setFormData({
        ...formData,
        channels: formData.channels.filter((c) => c !== channel),
      });
    } else {
      setFormData({
        ...formData,
        channels: [...formData.channels, channel],
      });
    }
  };

  const handleBook = (e) => {
    e.preventDefault();
    setBooked(true);
    const params = new URLSearchParams();
    if (formData.name) params.set('name', formData.name);
    if (formData.email) params.set('email', formData.email);
    window.open(`https://calendly.com/shahidnazir/30min?${params.toString()}`, '_blank');
  };

  const handleReset = () => {
    setBooked(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-[28px] border border-[#E1EAE4] p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors cursor-pointer"
          onClick={onClose}
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {!booked ? (
          <div>
            <div className="mb-5 text-left">
              <ZextaLogo className="w-6 h-6" textClassName="text-[#112219] font-bold text-lg" />
              <h3 className="text-2xl font-extrabold text-[#112219] tracking-tight mt-3 mb-1.5">
                Book Your 1-on-1 Growth Strategy Call
              </h3>
              <p className="text-sm text-[#55665D] leading-relaxed">
                Review your offer, identify pipeline bottlenecks, and build your custom outbound roadmap with Shahid Nazir.
              </p>
            </div>

            {/* Direct Calendly Instant Scheduler Banner */}
            <div className="mb-6">
              <a
                href="https://calendly.com/shahidnazir/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50/40 border border-emerald-300 hover:border-emerald-500 text-[#0F2B1D] font-bold text-xs sm:text-sm transition-all group shadow-xs hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#153C2D] text-emerald-300 flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4 text-emerald-300" />
                  </div>
                  <div className="text-left">
                    <span className="block font-extrabold text-[#112219]">Instant 1-Click Scheduling</span>
                    <span className="text-[11px] text-[#55665D] font-normal">Pick a 30-min slot directly on Shahid Nazir's Calendly</span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 bg-[#153C2D] text-white text-xs font-bold px-3 py-1.5 rounded-full group-hover:bg-[#1A4D39] transition-colors shrink-0">
                  <span>Calendly ↗</span>
                </span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-2 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-900 border border-emerald-100 rounded-full text-xs font-semibold">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>30 Minutes</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-900 border border-emerald-100 rounded-full text-xs font-semibold">
                <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                <span>Google Meet / Zoom</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-900 border border-emerald-100 rounded-full text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Free Strategy Audit</span>
              </div>
            </div>

            <form onSubmit={handleBook} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#34483E] uppercase tracking-wider mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-[#112219] focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all bg-[#F9FBFA]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#34483E] uppercase tracking-wider mb-1.5">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-[#112219] focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all bg-[#F9FBFA]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#34483E] uppercase tracking-wider mb-1.5">
                  Company Website
                </label>
                <input
                  type="text"
                  required
                  placeholder="https://yourcompany.com"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-[#112219] focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all bg-[#F9FBFA]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#34483E] uppercase tracking-wider mb-1.5">
                  Target Monthly Pipeline Goal
                </label>
                <select
                  value={formData.targetRevenue}
                  onChange={(e) => setFormData({ ...formData, targetRevenue: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-[#112219] focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all bg-[#F9FBFA]"
                >
                  <option>$20k - $50k / month</option>
                  <option>$50k - $100k / month</option>
                  <option>$100k - $250k / month</option>
                  <option>$250k+ / month</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#34483E] uppercase tracking-wider mb-1.5">
                  Channels of Interest
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Meta & Google Ads',
                    'Lead List Building',
                    'Marketing Automation',
                    'Cold Email',
                    'Influencer Outreach',
                    'MERN & PERN Web Dev',
                    'AI Full-Stack & Agents',
                  ].map((c) => (
                    <button
                      type="button"
                      key={c}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                        formData.channels.includes(c)
                          ? 'bg-[#153C2D] text-white border-[#153C2D]'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => toggleChannel(c)}
                    >
                      {formData.channels.includes(c) && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                      <span>{c}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#153C2D] hover:bg-[#1E523D] text-white py-3.5 px-6 rounded-full font-bold text-sm shadow-md transition-all cursor-pointer mt-4"
              >
                <span>Continue to Calendly Slot Confirmation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-[#112219]">Strategy Call Requested!</h3>
            <p className="text-gray-600 mb-6 max-w-sm mx-auto text-sm leading-relaxed">
              We've opened Shahid Nazir's 30-min calendar. If the window did not open automatically, click the button below:
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`https://calendly.com/shahidnazir/30min?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#153C2D] hover:bg-[#1E523D] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                <span>Select 30-Min Slot on Calendly ↗</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-400" />
              </a>
              <button
                type="button"
                className="text-xs text-gray-500 hover:text-gray-800 transition-colors cursor-pointer py-1"
                onClick={handleReset}
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
