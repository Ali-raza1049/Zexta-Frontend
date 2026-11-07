import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Calendar, Sparkles, Check } from 'lucide-react';
import { WhatsAppIcon } from './Icons';

const SERVICES_LIST = [
  { id: 'meta-google-ads', name: 'Meta & Google Ads', tag: 'High ROAS' },
  { id: 'lead-generation', name: 'Lead Gen & List Building', tag: 'Verified ICP' },
  { id: 'marketing-automation', name: 'Marketing Automation', tag: 'n8n & Webhooks' },
  { id: 'cold-email', name: 'Cold Email Infrastructure', tag: '99.4% Inboxing' },
  { id: 'influencer-outreach', name: 'Influencer Outreach', tag: 'Creator Collabs' },
  { id: 'mern-pern-web', name: 'MERN & PERN Web Dev', tag: 'Full-Stack' },
  { id: 'ai-agents', name: 'AI Full-Stack & Agents', tag: 'Autonomous' },
];

export default function CTASection({ onBookCall }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '$5k - $10k / month',
    notes: '',
  });

  const [selectedServices, setSelectedServices] = useState([]);
  const [sendingState, setSendingState] = useState(false);

  const toggleService = (serviceName) => {
    setSelectedServices((prev) =>
      prev.includes(serviceName)
        ? prev.filter((s) => s !== serviceName)
        : [...prev, serviceName]
    );
  };

  const buildWhatsAppMessage = () => {
    const servicesText =
      selectedServices.length > 0
        ? selectedServices.map((s) => `• ${s}`).join('\n')
        : '• General Growth Consultation';

    return `*New Project Inquiry via Zexta Website*

*Name:* ${formData.name || 'Not specified'}
*Email:* ${formData.email || 'Not specified'}
*Company / Website:* ${formData.company || 'Not specified'}
*Budget:* ${formData.budget}

*Selected Services:*
${servicesText}

*Project Details:*
${formData.notes || 'Looking forward to connecting with your team.'}`;
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    setSendingState(true);

    const message = buildWhatsAppMessage();
    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/923001767257?text=${encoded}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setSendingState(false);
    }, 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[36px] bg-[#0A1F17] border border-emerald-500/25 px-5 py-12 sm:px-10 sm:py-16 text-center shadow-[0_25px_65px_-12px_rgba(10,28,21,0.65)]">
          {/* Ambient Radial Mint & Emerald Glows */}
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[450px] bg-gradient-to-b from-emerald-500/25 via-teal-500/15 to-transparent blur-3xl pointer-events-none rounded-full animate-pulse-slow" />
          <div className="absolute -bottom-32 right-1/4 w-[480px] h-[300px] bg-emerald-600/15 blur-3xl pointer-events-none rounded-full" />

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Top Corner Pill Badge */}
            <div className="flex justify-center mb-5">
              <div className="relative inline-flex items-center gap-1.5 px-4 py-1 text-xs font-semibold tracking-wide text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 rounded-full backdrop-blur-md shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Ready to Scale?</span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.18] mb-4">
              Ready to generate 30+ qualified
              <br />
              sales calls every single month?
            </h2>

            <p className="text-sm sm:text-base text-emerald-100/75 max-w-xl mx-auto mb-9 leading-relaxed">
              Select the services you need below and send your project brief directly to our founders on WhatsApp for an immediate response.
            </p>

            {/* Aesthetic Interactive Proposal Builder Form */}
            <div className="bg-white/[0.04] border border-white/10 hover:border-emerald-500/30 rounded-[28px] p-5 sm:p-8 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.35)] text-left transition-all duration-300">
              {/* 1. Services Multi-Select Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-extrabold text-emerald-300 uppercase tracking-wider flex items-center gap-2">
                    <span>1. Select Services of Interest</span>
                    <span className="text-[10px] font-normal text-emerald-200/60 lowercase">
                      ({selectedServices.length > 0 ? `${selectedServices.length} selected` : 'tap to select'})
                    </span>
                  </label>
                  <span className="text-[11px] text-emerald-200/60 hidden sm:inline">
                    Click to select
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2.5">
                  {SERVICES_LIST.map((service) => {
                    const isSelected = selectedServices.includes(service.name);
                    return (
                      <button
                        type="button"
                        key={service.id}
                        onClick={() => toggleService(service.name)}
                        className={`group relative flex items-center justify-between p-3 rounded-xl sm:rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-gradient-to-r from-emerald-500/25 via-teal-500/20 to-emerald-500/20 border-emerald-400 text-white shadow-[0_0_20px_rgba(16,185,129,0.25)] scale-[1.01]'
                            : 'bg-white/[0.03] border-white/10 text-emerald-100/75 hover:border-white/25 hover:bg-white/[0.06] hover:text-white'
                        }`}
                      >
                        <div className="min-w-0 pr-2">
                          <span className="block text-xs sm:text-sm font-bold truncate">
                            {service.name}
                          </span>
                          <span className="block text-[10px] text-emerald-200/60 font-medium">
                            {service.tag}
                          </span>
                        </div>

                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all ${
                            isSelected
                              ? 'bg-emerald-400 text-[#0A1F17] scale-105 shadow-xs'
                              : 'border border-white/20 text-transparent group-hover:border-white/40'
                          }`}
                        >
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Client & Project Details */}
              <div className="mb-6 pt-5 border-t border-white/10">
                <label className="block text-xs font-extrabold text-emerald-300 uppercase tracking-wider mb-3">
                  2. Your Details & Scope
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Full Name (e.g. Alex Morgan)"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/25 border border-white/15 text-white placeholder-emerald-100/35 text-xs sm:text-sm focus:outline-none focus:border-emerald-400 focus:bg-black/40 transition-all"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Work Email (e.g. alex@company.com)"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/25 border border-white/15 text-white placeholder-emerald-100/35 text-xs sm:text-sm focus:outline-none focus:border-emerald-400 focus:bg-black/40 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Company Website (e.g. company.com)"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/25 border border-white/15 text-white placeholder-emerald-100/35 text-xs sm:text-sm focus:outline-none focus:border-emerald-400 focus:bg-black/40 transition-all"
                    />
                  </div>

                  <div>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#091A13] border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400 transition-all cursor-pointer"
                    >
                      <option className="bg-[#0D231A] text-white" value="$2k - $5k / month">Budget: $2k - $5k / month</option>
                      <option className="bg-[#0D231A] text-white" value="$5k - $10k / month">Budget: $5k - $10k / month</option>
                      <option className="bg-[#0D231A] text-white" value="$10k - $25k / month">Budget: $10k - $25k / month</option>
                      <option className="bg-[#0D231A] text-white" value="$25k+ / month">Budget: $25k+ / month</option>
                    </select>
                  </div>
                </div>

                <div>
                  <textarea
                    rows={2}
                    placeholder="Project details, current challenges, or specific goals (optional)..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/25 border border-white/15 text-white placeholder-emerald-100/35 text-xs sm:text-sm focus:outline-none focus:border-emerald-400 focus:bg-black/40 transition-all resize-none"
                  />
                </div>
              </div>

              {/* 3. Single High-Impact WhatsApp Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="w-full group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#25D366] via-[#20BD5A] to-[#128C7E] hover:from-[#20BD5A] hover:to-[#0F7569] active:scale-[0.99] text-white py-4 px-8 rounded-2xl font-black text-sm sm:text-base shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_36px_rgba(37,211,102,0.55)] transition-all cursor-pointer overflow-hidden"
                >
                  <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 fill-white group-hover:scale-110 transition-transform" />
                  <span>
                    {sendingState ? 'Opening WhatsApp Chat...' : 'Send Inquiry via WhatsApp'}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <p className="text-[11px] text-emerald-200/50 text-center mt-3">
                  Direct founder connection • Formats your inquiry automatically on WhatsApp with 0 waiting
                </p>
              </div>
            </div>

            {/* Direct Cal.com 1-on-1 Call Secondary Link */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8 mb-8 text-xs sm:text-sm text-center px-2">
              <span className="text-emerald-100/60">Prefer an immediate 1-on-1 video call?</span>
              <a
                href="https://cal.com/zexta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-emerald-300 hover:text-white underline underline-offset-4 decoration-emerald-400/60 transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-emerald-300" />
                <span>Book 30-Min Call Directly on Cal.com</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-300" />
              </a>
            </div>

            {/* Guarantee badges */}
            <div className="flex items-center justify-center gap-4 sm:gap-8 flex-wrap text-xs sm:text-sm text-emerald-100/85 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero spam risk guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>14-day setup to first booked call</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>No long-term contracts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
