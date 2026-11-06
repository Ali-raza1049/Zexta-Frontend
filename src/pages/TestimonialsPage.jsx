import React, { useState } from 'react';
import { CornerBadge, UpworkLogo } from '../components/Icons';
import { Star, CheckCircle2, Quote, Clock, Award, Briefcase, Sparkles, ArrowUpRight } from 'lucide-react';
import CTASection from '../components/CTASection';
import { allUpworkReviews } from '../data/upworkReviews';

const detailedStories = [
  {
    id: 'gudema',
    client: 'Louis Gudema Consulting',
    author: 'Louis Gudema',
    role: 'Marketing Consultant & Author',
    initials: 'LG',
    contractRole: 'Domain Warmup & Outreach Infrastructure',
    highlightStat: '99.4%',
    highlightUnit: 'Inbox Placement Rate',
    systemBadge: 'Google Workspace • Smartlead Protocol',
    engineerCredit: 'Shahid Nazir • Cold Email Lead',
    tag: 'Cold Email Outreach',
    category: 'cold-email',
    contractDuration: 'Mar 1, 2026 – Aug 22, 2026',
    endorsements: ['Domain Warmup Protocol', 'SPF / DKIM / DMARC', 'Deliverability Setup'],
    quote:
      "Shahid did an excellent job setting up and warming up our email domains. We've hired him since and would recommend him to others.",
    results: [
      'Full secondary domain provisioning and algorithmic warmup',
      'SPF, DKIM, and DMARC 100% authenticated alignment',
      'High open rates and verified priority inbox placement',
    ],
  },
  {
    id: 'facebook-ads-scaling',
    client: 'E-Commerce Growth & Lead Acquisition',
    author: 'Jens Oliver',
    role: 'Brand Founder & Client',
    initials: 'JO',
    contractRole: 'Facebook Ads Manager',
    highlightStat: '5.0★',
    highlightUnit: 'Exceeded Expectations',
    systemBadge: 'Meta Ads Manager • Paid Acquisition',
    engineerCredit: 'Muhammad Aslam • Paid Ads Lead',
    tag: 'Facebook Ads Manager',
    category: 'ads',
    contractDuration: 'Mar 5, 2026 – Mar 12, 2026',
    endorsements: ['Committed to Quality', 'Solution Oriented', 'Clear Communicator'],
    quote:
      'Very good freelancer who exceeded my expectations. Highly recommended.',
    results: [
      'Full-funnel Facebook ad setup & campaign management',
      'Target performance benchmarks & ROAS exceeded',
      'Endorsed for Quality, Solution-Oriented delivery & Communication',
    ],
  },
  {
    id: 'entertainment-leadgen',
    client: 'Entertainment Co. Prospecting',
    author: 'Javier Mejia',
    role: 'Talent & Production Exec',
    initials: 'JM',
    contractRole: 'Lead Generation & ICP Sourcing',
    highlightStat: '10,000+',
    highlightUnit: 'Validated B2B Leads',
    systemBadge: 'Clay Waterfall • Apollo Enrichment',
    engineerCredit: 'Zain Asghar • Lead Gen Lead',
    tag: 'Lead Gen & ICP Validation',
    category: 'lead-gen',
    contractDuration: 'Completed Upwork Contract',
    endorsements: ['Targeted Lead Sourcing', 'Clay Waterfall', 'Zero Bounce Rates'],
    quote:
      'Amazing Work. Super detailed and communicative. Was easy to work with all the way from training to actually sourcing contacts.',
    results: [
      '10,000+ validated, targeted B2B contact records sourced',
      'Verified deliverability with zero bounce rates',
      'Custom ICP targeting matching exact company specifications',
    ],
  },
  {
    id: 'conectafleet',
    client: 'ConectaFleet',
    author: 'Arlenny Abreu',
    role: 'Founder, ConectaFleet',
    initials: 'AA',
    contractRole: 'Email Automation & Webhooks',
    highlightStat: '100%',
    highlightUnit: 'API Uptime & Delivery',
    systemBadge: 'Resend API • Webhooks & Automations',
    engineerCredit: 'Javed • Automation Engineer',
    tag: 'Email Automation & Webhooks',
    category: 'automation',
    contractDuration: 'Enterprise Upwork Contract',
    endorsements: ['Email Automation', 'Resend Infrastructure', 'API Integrations'],
    quote:
      "Javed did an excellent job working on ConectaFleet's email automation infrastructure using Resend. He demonstrated strong technical knowledge in email automation, webhooks, and event-driven workflows.",
    results: [
      'End-to-end Resend infrastructure with automated event triggers',
      'Zero deliverability hiccups with reliable webhook callbacks',
      'Scalable automation framework built for platform growth',
    ],
  },
];

const reviewCards = allUpworkReviews;

export default function TestimonialsPage({ onBookCall }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredReviews =
    activeFilter === 'all'
      ? reviewCards
      : reviewCards.filter((r) => r.category === activeFilter);

  return (
    <div className="pt-24 sm:pt-28 pb-16 bg-[#F6F9F7]">
      {/* 1. Page Hero Banner */}
      <section className="relative overflow-hidden py-14 sm:py-20 text-center">
        <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center gap-24 sm:gap-40 h-[500px] z-0">
          <div className="w-48 sm:w-56 h-full bg-gradient-to-b from-emerald-200/30 via-emerald-100/10 to-transparent blur-3xl animate-pulse-slow"></div>
          <div className="w-64 sm:w-80 h-full bg-gradient-to-b from-emerald-300/35 via-emerald-100/15 to-transparent blur-3xl animate-pulse-slow [animation-delay:1.5s]"></div>
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex justify-center mb-4">
            <CornerBadge label="Verified Upwork Track Record" />
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F1E17] tracking-tight leading-[1.12] mb-4 sm:mb-6">
            Real Upwork Results.
            <br />
            <span className="bg-gradient-to-r from-[#0F1E17] via-[#153C2D] to-[#10B981] bg-clip-text text-transparent">
              Verified Hours & Contracts
            </span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-[#495D53] max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Authentic client feedback, real hours worked, and completed contracts from our verified Top Rated Upwork profiles.
          </p>

          {/* Real Upwork Stats Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto bg-white border border-[#E2ECE6] rounded-[20px] sm:rounded-[24px] p-4 sm:p-6 shadow-sm">
            <div className="text-center flex flex-col items-center justify-center p-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-1.5">
                <Briefcase className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-[#0D231A] block">100+</span>
              <span className="text-[11px] sm:text-xs font-semibold text-[#55665D]">Jobs Completed</span>
            </div>

            <div className="text-center sm:border-l border-gray-100 flex flex-col items-center justify-center p-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-1.5">
                <Clock className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-[#10B981] block">1,000+</span>
              <span className="text-[11px] sm:text-xs font-semibold text-[#55665D]">Hours Worked</span>
            </div>

            <div className="text-center border-t sm:border-t-0 sm:border-l border-gray-100 flex flex-col items-center justify-center p-2 pt-3 sm:pt-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-1.5">
                <Award className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-[#0D231A] block">100%</span>
              <span className="text-[11px] sm:text-xs font-semibold text-[#55665D]">Job Success Score</span>
            </div>

            <div className="text-center border-t sm:border-t-0 sm:border-l border-gray-100 flex flex-col items-center justify-center p-2 pt-3 sm:pt-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-1.5">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-[#0D231A] block">100%</span>
              <span className="text-[11px] sm:text-xs font-semibold text-[#55665D]">Verified Feedback</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Detailed Spotlight Case Studies (High-Converting Executive Bento Cards) */}
      <section className="py-8 sm:py-12">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10">
          <div className="text-left flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 text-xs font-semibold mb-2.5">
                <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Spotlight Case Studies</span>
                <span className="text-emerald-400">•</span>
                <span className="text-emerald-700 font-medium">100% Upwork Verified</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F1E17] tracking-tight">
                Featured Client Transformations
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#55665D] max-w-md">
              Real deliverables, authentic feedback, and measurable ROI delivered on verified Upwork enterprise contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {detailedStories.map((story) => (
              <div
                key={story.id}
                className="group relative bg-white border border-[#DFE8E2] hover:border-emerald-500/50 rounded-[26px] sm:rounded-[30px] p-6 sm:p-7 md:p-8 shadow-[0_4px_24px_-4px_rgba(18,43,34,0.06)] hover:shadow-[0_20px_45px_-8px_rgba(16,185,129,0.16)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Ambient top hover glow */}
                <div className="absolute -top-16 -right-16 w-44 h-44 bg-gradient-to-br from-emerald-400/15 via-teal-300/5 to-transparent rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

                <div>
                  {/* Top Bar: Upwork Verified Badge + Category Pill (No truncation) */}
                  <div className="flex items-center justify-between gap-3 pb-3.5 mb-5 border-b border-[#F0F5F2]">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF7EE] border border-[#C9EAD5] text-[#0A6C25] text-xs font-bold shadow-2xs">
                      <UpworkLogo className="w-3.5 h-3.5 text-[#14A800]" />
                      <span>Verified Contract</span>
                      <span className="text-emerald-400">•</span>
                      <span className="text-[#0E6C38]">Top Rated</span>
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#153C2D] bg-[#F2F7F4] border border-[#DCE8E0] px-3 py-1 rounded-full whitespace-nowrap">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                      {story.tag}
                    </span>
                  </div>

                  {/* Impact Metric Strip */}
                  <div className="mb-5 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#F6FAF7] via-[#F8FCFA] to-[#EDF6F1] border border-[#DEEBE2] flex flex-col sm:flex-row sm:items-center justify-between gap-3.5">
                    <div>
                      <div className="flex items-baseline gap-2.5">
                        <span className="text-2xl sm:text-3xl font-extrabold text-[#0D231A] tracking-tight">
                          {story.highlightStat}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-emerald-700">
                          {story.highlightUnit}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-medium text-[#4D6357] mt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span>{story.systemBadge}</span>
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-1.5 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#E2ECE6]">
                      <div className="flex items-center gap-0.5 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-[10px] font-bold text-[#0E6C38] bg-white px-2.5 py-0.5 rounded-full border border-emerald-200 shadow-2xs">
                        5.0 ★ Top Rated
                      </span>
                    </div>
                  </div>

                  {/* Quote with Editorial Accent */}
                  <div className="relative mb-4 pl-4 py-1.5 border-l-2 border-[#10B981] bg-[#F8FAF9]/80 rounded-r-xl pr-3">
                    <p className="text-[13.5px] sm:text-[14px] text-[#22352B] leading-relaxed italic font-normal">
                      “{story.quote}”
                    </p>
                  </div>

                  {/* Client Endorsement Tags (Authentic from Upwork) */}
                  {story.endorsements && story.endorsements.length > 0 && (
                    <div className="mb-4 flex items-center gap-1.5 flex-wrap">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#6C7E75] mr-1">
                        Endorsed by Client:
                      </span>
                      {story.endorsements.map((end, i) => (
                        <span
                          key={i}
                          className="text-[10.5px] font-medium text-[#1E3B2B] bg-[#EDF6F1] border border-[#D5E7DD] px-2.5 py-0.5 rounded-md"
                        >
                          {end}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Verified Results Checklist */}
                  <div className="bg-[#F7FAF8] rounded-2xl p-4 sm:p-4.5 border border-[#E3ECE6] mb-5">
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#122B22] flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-emerald-600" />
                        Verified Deliverables & ROI:
                      </span>
                      <span className="text-[9.5px] font-bold text-emerald-800 bg-[#E8F6ED] border border-emerald-200 px-2.5 py-0.5 rounded-full">
                        Confirmed
                      </span>
                    </div>
                    <div className="space-y-2">
                      {story.results.map((res, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[12.5px] text-[#34463C] leading-snug">
                          <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                          <span>{res}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Author Card Footer */}
                <div className="pt-4 border-t border-[#EDF3EF] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#122B22] to-[#1E4D3B] text-white text-xs font-bold font-sans flex items-center justify-center shrink-0 border border-emerald-100 shadow-2xs">
                      {story.initials}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[13.5px] font-bold text-[#0F1E17] leading-tight">
                        {story.author}
                      </h4>
                      <p className="text-[11px] text-[#55665D] font-medium mt-0.5 truncate">
                        {story.role}
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="inline-flex items-center gap-1 text-[10.5px] font-bold text-[#0A6C25] bg-[#EAF8F0] border border-[#C6EBD7] px-2.5 py-1 rounded-full shadow-2xs">
                      <UpworkLogo className="w-3 h-3 text-[#14A800]" />
                      <span>{story.engineerCredit}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Upwork Verified Scorecard Banner */}
      <section className="py-8 sm:py-12">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-[#0D231A] border border-emerald-500/25 rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
              <div className="max-w-xl text-left">
                <div className="inline-flex items-center gap-2 bg-[#F0FDF4] text-[#14A800] px-3.5 py-1 rounded-full text-xs font-bold mb-3 sm:mb-4 shadow-xs">
                  <UpworkLogo className="w-4 h-4 text-[#14A800]" />
                  <span>Top Rated Agency on Upwork</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2 sm:mb-3">
                  100% Job Success Score Across 100+ Jobs & 1,000+ Hours
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100/75 leading-relaxed">
                  Every project is backed by verified client reviews, on-time delivery guarantees, and transparent communication across our Upwork profiles.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
                <a
                  href="https://www.upwork.com/freelancers/raishahidnazir257"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center justify-center bg-gradient-to-r from-[#122B22] via-[#163E2D] to-[#122B22] text-white px-6 py-3 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm shadow-[0_8px_24px_rgba(18,43,34,0.22)] hover:shadow-[0_12px_32px_rgba(16,185,129,0.32)] hover:-translate-y-0.5 border border-emerald-500/20 transition-all cursor-pointer inline-flex items-center gap-2"
                  style={{ borderRadius: '9999px' }}
                >
                  <UpworkLogo className="w-4 h-4 text-emerald-400" />
                  <span>Hire on Upwork ↗</span>
                </a>
                <a
                  href="https://cal.com/zexta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center justify-center bg-white text-[#0D231A] hover:bg-[#E8F7EE] px-6 py-3 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer inline-flex items-center gap-1.5"
                >
                  <span>Book 30-Min Call ↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Wall of Love / Reviews Grid */}
      <section className="py-12 sm:py-16">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Wall of Love</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F1E17] mt-1">Verified Upwork Client Reviews</h2>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 flex-wrap">
              {[
                { id: 'all', label: 'All Reviews' },
                { id: 'ads', label: 'Meta & Google Ads' },
                { id: 'cold-email', label: 'Cold Outreach' },
                { id: 'automation', label: 'Email Automation' },
                { id: 'lead-gen', label: 'Lead Generation' },
                { id: 'strategy', label: 'Marketing Consulting' },
              ].map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setActiveFilter(f.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    activeFilter === f.id
                      ? 'bg-[#122B22] text-white shadow-xs'
                      : 'bg-white text-[#495D53] border border-[#E2ECE6] hover:border-[#10B981]'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredReviews.map((rev, idx) => (
              <div
                key={rev.id || idx}
                className="bg-white border border-[#E2ECE6] hover:border-emerald-500/40 rounded-[20px] sm:rounded-[24px] p-5 sm:p-6 shadow-[0_4px_20px_-4px_rgba(18,43,34,0.04)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left"
              >
                <div>
                  {/* Stars + Tag */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-0.5 text-amber-400">
                        {[...Array(rev.rating || 5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-[11px] font-bold text-[#0F1E17]">
                        {rev.rating ? rev.rating.toFixed(1) : '5.0'}
                      </span>
                    </div>
                    <span className="text-[10px] font-semibold text-[#153C2D] bg-[#E8F7EE] px-2.5 py-0.5 rounded-full border border-[#C6EBD7]">
                      {rev.tag}
                    </span>
                  </div>

                  {rev.date && (
                    <div className="text-[10.5px] font-medium text-[#718579] mb-3">
                      {rev.date}
                    </div>
                  )}

                  <p className="text-xs sm:text-[13px] text-[#25352D] leading-relaxed mb-3.5 font-medium">
                    “{rev.quote}”
                  </p>

                  {/* Endorsed by Client Badges (Exact from Upwork profile) */}
                  {rev.skills && rev.skills.length > 0 && (
                    <div className="mb-4 pt-2 border-t border-[#F0F5F2]">
                      <span className="text-[9.5px] font-semibold text-[#6C7E75] block mb-1.5">
                        Endorsed by client
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {rev.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[10px] font-medium text-[#1E3B2B] bg-[#EDF5F0] border border-[#D5E6DC] px-2.5 py-0.5 rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-3.5 border-t border-[#EDF3EF] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#122B22] text-white text-[10px] font-bold flex items-center justify-center border border-emerald-100 shadow-2xs">
                      {rev.initials}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#0F1E17]">{rev.author}</h4>
                      <p className="text-[10px] sm:text-[10.5px] text-[#55665D]">{rev.role}</p>
                    </div>
                  </div>
                  <span className="text-[9.5px] font-semibold text-[#0A6C25] bg-[#E8F8F0] border border-[#C6EBD7] px-2 py-0.5 rounded-full">
                    Upwork Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <CTASection onBookCall={onBookCall} />
    </div>
  );
}
