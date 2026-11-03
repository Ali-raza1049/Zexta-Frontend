import React, { useState } from 'react';
import { CornerBadge, UpworkLogo } from './Icons';
import { Star, CheckCircle2, ArrowUpRight, Filter, Sparkles, MessageSquareQuote, Clock } from 'lucide-react';
import { allUpworkReviews } from '../data/upworkReviews';

const categories = [
  { id: 'all', label: 'All Reviews' },
  { id: 'ads', label: 'Meta & Google Ads' },
  { id: 'cold-email', label: 'Cold Outreach' },
  { id: 'automation', label: 'Email Automation' },
  { id: 'lead-gen', label: 'Lead Generation' },
  { id: 'strategy', label: 'Marketing Strategy' },
];

export default function Testimonials() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAllExpanded, setShowAllExpanded] = useState(false);

  // Dynamic review count helper
  const getCategoryCount = (catId) =>
    catId === 'all'
      ? allUpworkReviews.length
      : allUpworkReviews.filter((r) => r.category === catId).length;

  // Filter reviews based on active category
  const filteredReviews =
    activeCategory === 'all'
      ? allUpworkReviews
      : allUpworkReviews.filter((r) => r.category === activeCategory);

  // Spotlight cards (top 3 highlights)
  const spotlightEnterprise = allUpworkReviews.find((r) => r.id === 'upwork-arlenny-1');
  const spotlightColdEmail = allUpworkReviews.find((r) => r.id === 'upwork-louis');
  const spotlightLeadGen = allUpworkReviews.find((r) => r.id === 'upwork-leisha-all') || allUpworkReviews.find((r) => r.id === 'upwork-javier');

  // Display subset or all when expanded
  const displayedReviews = showAllExpanded
    ? filteredReviews
    : filteredReviews.slice(0, 6);

  return (
    <section id="testimonials" className="py-20 sm:py-24 relative overflow-hidden bg-gradient-to-b from-[#FAFDFB] via-[#F4F8F5] to-white">
      {/* Background ambient decorative mint glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-gradient-to-r from-emerald-100/40 via-teal-100/25 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="flex justify-center mb-3.5">
            <CornerBadge label="Verified Upwork Testimonials" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#112219] tracking-tight leading-[1.15]">
            Results That Speak Volumes
            <br />
            <span className="bg-gradient-to-r from-[#112219] via-[#1A4D38] to-[#10B981] bg-clip-text text-transparent">
              Real Upwork Success Stories
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#52635A] mt-3.5 max-w-2xl mx-auto leading-relaxed">
            100% verified Upwork feedback from founders, marketing directors, and growth leaders across cold outreach deliverability, high-ROAS Meta & Google ads, GTM conversion tracking, and email automations.
          </p>

          {/* Upwork Verified Trust Pills with Hover Motion */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 flex-wrap">
            <div className="inline-flex items-center gap-2 bg-white border border-[#D7E4DC] hover:border-emerald-500/50 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#143B2C] shadow-2xs hover:-translate-y-0.5 hover:shadow-xs transition-all cursor-default">
              <UpworkLogo className="h-3.5 w-auto" />
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#14A800]"></span>
              </span>
              <span>100% Job Success Score</span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200/80 hover:border-emerald-400 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-800 shadow-2xs hover:-translate-y-0.5 hover:shadow-xs transition-all cursor-default">
              <div className="flex text-amber-400 animate-star-twinkle">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span>Top Rated Client Reviews</span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-white border border-[#D7E4DC] hover:border-emerald-500/50 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#143B2C] shadow-2xs hover:-translate-y-0.5 hover:shadow-xs transition-all cursor-default">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>100+ Jobs Completed</span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-white border border-[#D7E4DC] hover:border-emerald-500/50 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#143B2C] shadow-2xs hover:-translate-y-0.5 hover:shadow-xs transition-all cursor-default">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
              <span>1,000+ Hours Worked</span>
            </div>
          </div>
        </div>

        {/* 1. TOP SPOTLIGHT BENTO: 3 Featured Flagship Case Reviews */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
          {/* Card 1 (Left 6 Cols): Dark Emerald Enterprise Obsidian Card - Arlenny Abreu */}
          {spotlightEnterprise && (
            <div className="lg:col-span-6 bg-[#0E2319] border border-emerald-500/30 rounded-[32px] p-7 sm:p-9 text-white shadow-[0_12px_36px_rgba(14,35,25,0.25)] hover:border-emerald-400/60 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(16,185,129,0.2)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
              {/* Dynamic Animated Ambient Aurora */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none animate-aurora" />
              {/* Interactive Glass Shine Sweep on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="inline-flex items-center gap-1.5 bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold shadow-inner">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                    <span>Flagship Enterprise Project</span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-300 bg-emerald-900/50 border border-emerald-700/60 px-2.5 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>Upwork Verified</span>
                  </span>
                </div>

                <div className="mb-4">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight block">
                    Resend Email Automation
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-emerald-400/90 mt-1 block">
                    API Integrations, Webhooks & Event-Driven Workflows
                  </span>
                </div>

                <div className="flex gap-1 text-amber-400 mb-4 animate-star-twinkle">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm sm:text-[14.5px] text-gray-200 leading-relaxed font-normal mb-8 italic">
                  "{spotlightEnterprise.quote}"
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between pt-5 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-bold text-sm flex items-center justify-center border border-emerald-300 shadow-sm group-hover:scale-105 transition-transform">
                    {spotlightEnterprise.initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">
                      {spotlightEnterprise.author}
                    </h4>
                    <p className="text-xs text-emerald-400/80 leading-tight mt-0.5">
                      {spotlightEnterprise.role}
                    </p>
                  </div>
                </div>

                <span className="text-[11px] font-medium text-gray-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                  {spotlightEnterprise.date}
                </span>
              </div>
            </div>
          )}

          {/* Right 6 Cols: 2 Complementary Spotlight Cards (Louis Gudema & Javier Mejia) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Card 2: Louis Gudema (Domain Warmup & Outreach) */}
            {spotlightColdEmail && (
              <div className="bg-white border border-[#DEE9E2] hover:border-emerald-500/50 rounded-[28px] p-6 sm:p-7 shadow-[0_4px_20px_-2px_rgba(18,43,34,0.05)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="inline-flex items-center gap-1.5 bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0] px-3 py-1 rounded-full text-xs font-bold">
                      <span>Domain Warmup & Outreach</span>
                    </div>

                    <div className="flex gap-0.5 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-[#263830] leading-relaxed mb-5 italic">
                    "{spotlightColdEmail.quote}"
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3.5 border-t border-[#EEF4F0]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#122B22] to-[#245D44] text-white font-bold text-xs flex items-center justify-center border border-emerald-100 shadow-2xs">
                      {spotlightColdEmail.initials}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#112219] leading-tight">
                        {spotlightColdEmail.author}
                      </h4>
                      <p className="text-[11px] text-[#55665D] leading-tight mt-0.5">
                        {spotlightColdEmail.job}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10.5px] font-semibold text-[#0A6C25] bg-[#E8F8F0] border border-[#C6EBD7] px-2 py-0.5 rounded-full shrink-0">
                    Upwork Verified
                  </span>
                </div>
              </div>
            )}

            {/* Card 3: Javier Mejia (10,000+ Lead Generation & Validation) */}
            {spotlightLeadGen && (
              <div className="bg-gradient-to-br from-white to-[#F6FAF7] border border-[#DEE9E2] hover:border-emerald-500/50 rounded-[28px] p-6 sm:p-7 shadow-[0_4px_20px_-2px_rgba(18,43,34,0.05)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="inline-flex items-center gap-1.5 bg-[#EFF6FF] text-[#1E40AF] border border-[#BFDBFE] px-3 py-1 rounded-full text-xs font-bold">
                      <span>10,000+ Validated Leads</span>
                    </div>

                    <div className="flex gap-0.5 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-[#263830] leading-relaxed mb-5 italic">
                    "{spotlightLeadGen.quote}"
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3.5 border-t border-[#EEF4F0]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#122B22] to-[#245D44] text-white font-bold text-xs flex items-center justify-center border border-emerald-100 shadow-2xs">
                      {spotlightLeadGen.initials}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#112219] leading-tight">
                        {spotlightLeadGen.author}
                      </h4>
                      <p className="text-[11px] text-[#55665D] leading-tight mt-0.5">
                        {spotlightLeadGen.job}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10.5px] font-semibold text-[#0A6C25] bg-[#E8F8F0] border border-[#C6EBD7] px-2 py-0.5 rounded-full shrink-0">
                    Upwork Verified
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Continuous Flowing Upwork Praise Ticker Tape Ribbon */}
        <div className="w-full overflow-hidden py-3 mb-10 bg-gradient-to-r from-[#ECF7F1] via-[#F4FAF6] to-[#ECF7F1] border-y border-[#D5E7DC] rounded-xl relative select-none">
          <div className="flex items-center gap-6 animate-ticker-tape whitespace-nowrap">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#143B2C]">
              <span className="flex text-amber-400">★★★★★</span>
              <span>"Flawless domain setup and email deliverability"</span>
              <span className="text-[10px] text-[#55665D] font-mono">— Louis Gudema</span>
            </div>
            <span className="text-emerald-400 font-bold">•</span>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#143B2C]">
              <span className="flex text-amber-400">★★★★★</span>
              <span>"Exceptional talent in Facebook & Instagram ads with outstanding reach"</span>
              <span className="text-[10px] text-[#55665D] font-mono">— Leisha Ryan</span>
            </div>
            <span className="text-emerald-400 font-bold">•</span>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#143B2C]">
              <span className="flex text-amber-400">★★★★★</span>
              <span>"Fixed GTM conversion tracking & confirmed firing immediately"</span>
              <span className="text-[10px] text-[#55665D] font-mono">— Hafiz M. Abdullah</span>
            </div>
            <span className="text-emerald-400 font-bold">•</span>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#143B2C]">
              <span className="flex text-amber-400">★★★★★</span>
              <span>"Very quick, professional, and precise performance ads execution"</span>
              <span className="text-[10px] text-[#55665D] font-mono">— Henry Schein</span>
            </div>
            <span className="text-emerald-400 font-bold">•</span>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#143B2C]">
              <span className="flex text-amber-400">★★★★★</span>
              <span>"Custom event-driven Resend webhook pipeline built in hours"</span>
              <span className="text-[10px] text-[#55665D] font-mono">— Arlenny Abreu</span>
            </div>
            <span className="text-emerald-400 font-bold">•</span>
            {/* Repeated for continuous seamless loop */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#143B2C]">
              <span className="flex text-amber-400">★★★★★</span>
              <span>"Flawless domain setup and email deliverability"</span>
              <span className="text-[10px] text-[#55665D] font-mono">— Louis Gudema</span>
            </div>
            <span className="text-emerald-400 font-bold">•</span>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#143B2C]">
              <span className="flex text-amber-400">★★★★★</span>
              <span>"Exceptional talent in Facebook & Instagram ads with outstanding reach"</span>
              <span className="text-[10px] text-[#55665D] font-mono">— Leisha Ryan</span>
            </div>
            <span className="text-emerald-400 font-bold">•</span>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#143B2C]">
              <span className="flex text-amber-400">★★★★★</span>
              <span>"Fixed GTM conversion tracking & confirmed firing immediately"</span>
              <span className="text-[10px] text-[#55665D] font-mono">— Hafiz M. Abdullah</span>
            </div>
            <span className="text-emerald-400 font-bold">•</span>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#143B2C]">
              <span className="flex text-amber-400">★★★★★</span>
              <span>"Very quick, professional, and precise performance ads execution"</span>
              <span className="text-[10px] text-[#55665D] font-mono">— Henry Schein</span>
            </div>
          </div>
        </div>

        {/* 2. CATEGORY FILTER TABS */}
        <div className="flex items-center justify-between gap-4 mb-8 flex-wrap border-b border-[#E3EDE7] pb-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#153C2D]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#153C2D]">Filter By Domain</span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = getCategoryCount(cat.id);
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setShowAllExpanded(true);
                  }}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#122B22] text-white shadow-sm ring-2 ring-emerald-500/40 scale-105'
                      : 'bg-white text-[#4A5D53] border border-[#D8E4DC] hover:border-emerald-500 hover:text-[#112219] hover:-translate-y-0.5'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. WALL OF LOVE: Responsive 3-Column Aesthetic Grid of Client Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {displayedReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-[#E1ECE5] hover:border-emerald-500/60 rounded-[22px] p-5 sm:p-6 shadow-[0_4px_16px_-2px_rgba(18,43,34,0.04)] hover:shadow-[0_16px_36px_rgba(18,43,34,0.09)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Background Watermark Quote Icon with Hover Motion */}
              <MessageSquareQuote className="w-16 h-16 text-emerald-900/[0.03] group-hover:text-emerald-500/10 group-hover:scale-110 transition-all duration-300 pointer-events-none absolute right-3 bottom-10" />

              <div className="relative z-10">
                {/* Header: Author & Upwork Verified Pill */}
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#F0F5F2] mb-3.5">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#122B22] to-[#256149] text-white text-[11px] font-bold flex items-center justify-center shrink-0 border border-emerald-100 shadow-2xs group-hover:scale-105 transition-transform">
                      {review.initials}
                    </div>

                    <div className="flex flex-col min-w-0">
                      <span className="text-[13px] font-bold text-[#112219] truncate leading-tight">
                        {review.author}
                      </span>
                      <span className="text-[10px] text-[#63756C] font-medium truncate leading-tight mt-0.5">
                        {review.role}
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[9.5px] font-bold text-[#0A6C25] bg-[#E8F8F0] border border-[#C6EBD7] px-2 py-0.5 rounded-full shrink-0 group-hover:border-emerald-400 transition-colors">
                    <CheckCircle2 className="w-2.5 h-2.5 text-[#10B981]" />
                    <span>Upwork Verified</span>
                  </span>
                </div>

                {/* Rating Stars & Metric Tag */}
                <div className="flex items-center justify-between mb-3 text-xs">
                  <div className="flex gap-0.5 text-amber-400 group-hover:scale-105 transition-transform">
                    {[...Array(review.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="text-[10px] font-semibold text-[#153C2D] bg-[#F2F8F4] px-2 py-0.5 rounded border border-[#D5E6DC]">
                    {review.tag}
                  </span>
                </div>

                {/* Contract Job Title */}
                <p className="text-[11px] font-semibold text-[#3B4E44] mb-2.5 line-clamp-2">
                  Job: {review.job}
                </p>

                {/* Quotation Feedback */}
                <p className="text-[12px] leading-[1.6] text-[#2D3F36] italic mb-4">
                  "{review.quote}"
                </p>
              </div>

              {/* Card Footer: Date */}
              <div className="relative z-10 pt-3 border-t border-[#F2F7F4] flex items-center justify-between text-[10.5px] text-[#6D8176]">
                <span>Contract Date:</span>
                <span className="font-semibold text-[#183629]">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Expand / Collapse All 14 Reviews Button */}
        <div className="flex justify-center mb-12">
          <button
            type="button"
            onClick={() => setShowAllExpanded(!showAllExpanded)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold bg-white border border-[#CBDCD1] hover:border-emerald-600 text-[#143B2C] shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            <MessageSquareQuote className="w-4 h-4 text-emerald-600" />
            <span>
              {showAllExpanded
                ? 'Collapse Reviews'
                : `View All ${filteredReviews.length} Verified Upwork Reviews`}
            </span>
          </button>
        </div>

        {/* Bottom Upwork Trust & Social Proof Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:p-6 bg-white border border-[#DFEBE3] rounded-2xl shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E8F8F0] border border-[#C6EBD7] flex items-center justify-center text-emerald-700">
              <UpworkLogo className="h-4 w-auto" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#112219]">Top Rated Agency on Upwork</h4>
              <p className="text-xs text-[#52635A]">100% Job Success • 100+ Completed Jobs • 1,000+ Hours</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex gap-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-sm text-[#112219]">Top Rated</span>
            <span className="text-xs text-[#6F8278]">Based on {allUpworkReviews.length}+ verified reviews</span>
          </div>

          <a
            href="#upwork"
            className="inline-flex items-center gap-1.5 border border-[#122B22] bg-[#122B22] text-white hover:bg-[#1A4535] px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-xs hover:shadow-md cursor-pointer"
          >
            <span>View Upwork Profiles</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
