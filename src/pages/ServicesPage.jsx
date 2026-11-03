import React, { useState } from 'react';
import { CornerBadge } from '../components/Icons';
import {
  Code2,
  Cpu,
  Mail,
  Target,
  BarChart3,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Check,
  Workflow,
  Activity,
  Filter,
} from 'lucide-react';
import CTASection from '../components/CTASection';

export default function ServicesPage({ onBookCall }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeStackTab, setActiveStackTab] = useState('mern');
  
  // Interactive Ads Calculator State
  const [adSpendTier, setAdSpendTier] = useState('growth'); // 'starter' | 'growth' | 'scale'
  
  // Interactive Lead Gen Table Persona State
  const [activeLeadPersona, setActiveLeadPersona] = useState('saas'); // 'saas' | 'ecommerce' | 'agency'

  // Interactive Marketing Automation Workflow Step
  const [activeAutoStep, setActiveAutoStep] = useState(2);

  const categories = [
    { id: 'all', label: 'All Services (7)' },
    { id: 'ads', label: 'Meta & Google Ads' },
    { id: 'lead-gen', label: 'Lead Gen & List Building' },
    { id: 'automation', label: 'Marketing Automation' },
    { id: 'outbound', label: 'Cold Email Infrastructure' },
    { id: 'influencer', label: 'Influencer Outreach' },
    { id: 'web-dev', label: 'MERN & PERN Web Dev' },
    { id: 'ai', label: 'AI Full-Stack & Agents' },
  ];

  // Ad Spend Calculator Data
  const adMetrics = {
    starter: {
      budget: '$3,500/mo',
      leads: '115 - 145',
      demos: '18 - 24',
      pipeline: '$85,000+',
      cpa: '$26.40',
      roas: '4.8x',
    },
    growth: {
      budget: '$7,500/mo',
      leads: '260 - 320',
      demos: '42 - 55',
      pipeline: '$240,000+',
      cpa: '$23.10',
      roas: '5.6x',
    },
    scale: {
      budget: '$15,000/mo',
      leads: '640 - 750',
      demos: '95 - 120',
      pipeline: '$580,000+',
      cpa: '$20.80',
      roas: '6.4x',
    },
  };

  // Lead Gen Interactive Mock Rows
  const leadData = {
    saas: [
      { name: 'Alex Rivera', title: 'VP of Growth', company: 'Supabase Scale', verified: '100% Apollo', email: 'a.rivera@supabase.io', phone: '+1 (415) •••-9182', intent: 'High Intent (Hiring B2B SDRs)' },
      { name: 'Elena Rostova', title: 'Chief Product Officer', company: 'FinPulse AI', verified: '100% Clay', email: 'elena@finpulse.ai', phone: '+1 (212) •••-4412', intent: 'Series-B Funded ($18M)' },
      { name: 'Marcus Chen', title: 'Head of RevOps', company: 'Vektor Analytics', verified: '100% Verified', email: 'm.chen@vektor.tech', phone: '+1 (650) •••-3091', intent: 'Expanding Outbound Team' },
    ],
    ecommerce: [
      { name: 'Sarah Jenkins', title: 'Founder & CEO', company: 'Lumina Glow Apparel', verified: '100% Clay', email: 'sarah@luminaglow.com', phone: '+1 (310) •••-8823', intent: '$4M+ Annual GMV' },
      { name: 'David Vance', title: 'Head of Acquisition', company: 'Nordic Clean Beauty', verified: '100% Modash', email: 'david@nordicclean.co', phone: '+1 (702) •••-1290', intent: 'Meta Ads Spend >$30k/mo' },
      { name: 'Maya Patel', title: 'E-Com Director', company: 'Drift & Co Footwear', verified: '100% Verified', email: 'maya@driftfootwear.com', phone: '+1 (512) •••-7741', intent: 'Shopify Plus Brand' },
    ],
    agency: [
      { name: 'Liam Gallagher', title: 'Managing Partner', company: 'Apex Performance Media', verified: '100% Clay', email: 'liam@apexpm.agency', phone: '+1 (312) •••-5591', intent: '14 Active Retainers' },
      { name: 'Zoe Kravitz', title: 'Director of Business Dev', company: 'Kinetic Creative Studio', verified: '100% Apollo', email: 'zoe@kinetic.studio', phone: '+1 (646) •••-3820', intent: 'Seeking White-Label Partner' },
      { name: 'Julian Thorne', title: 'Chief Strategy Officer', company: 'Vanguard Growth Partners', verified: '100% Verified', email: 'julian@vanguardgp.com', phone: '+1 (415) •••-6019', intent: 'Enterprise B2B Client Focus' },
    ],
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16 bg-[#F6F9F7]">
      {/* 1. Page Hero Banner */}
      <section className="relative overflow-hidden py-14 sm:py-20 text-center">
        {/* Soft Background Auras */}
        <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center gap-24 sm:gap-40 h-[500px] z-0">
          <div className="w-48 sm:w-64 h-full bg-gradient-to-b from-emerald-200/35 via-emerald-100/10 to-transparent blur-3xl animate-pulse-slow"></div>
          <div className="w-64 sm:w-96 h-full bg-gradient-to-b from-emerald-300/40 via-emerald-100/15 to-transparent blur-3xl animate-pulse-slow [animation-delay:1.5s]"></div>
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex justify-center mb-4">
            <CornerBadge label="The Full Zexta Growth & Tech Arsenal" />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#0F1E17] tracking-tight leading-[1.14] mb-4 sm:mb-6">
            Engineered Acquisition & Software,
            <br />
            <span className="bg-gradient-to-r from-[#0F1E17] via-[#153C2D] to-[#10B981] bg-clip-text text-transparent">
              Built to Multiply Your Revenue
            </span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-[#495D53] max-w-2xl mx-auto mb-8 sm:mb-10 px-1 leading-relaxed">
            Every core engine your company needs: High-ROAS Paid Ads, Precision Clay Lead Generation, Automated CRM Workflows, Deliverability-Guaranteed Cold Outreach, and Full-Stack MERN/PERN & AI Development.
          </p>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap max-w-4xl mx-auto mb-4 px-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#122B22] text-white shadow-md shadow-emerald-950/20 ring-2 ring-emerald-400/40'
                    : 'bg-white text-[#495D53] hover:text-[#0F1E17] border border-[#E2ECE6] hover:border-[#10B981]/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Main Services Deep-Dive Sections */}
      <div className="w-full max-w-6xl mx-auto px-3 sm:px-6 space-y-10 sm:space-y-16">

        {/* =========================================================================
            SHOWSTOPPER SERVICE 1: META & GOOGLE ADS POWERHOUSE
            ========================================================================= */}
        {(activeCategory === 'all' || activeCategory === 'ads') && (
          <section id="ads" className="bg-white border border-[#E2ECE6] rounded-[22px] sm:rounded-[28px] lg:rounded-[32px] p-5 sm:p-7 md:p-8 lg:p-10 xl:p-12 shadow-[0_6px_36px_-6px_rgba(13,35,26,0.06)] relative overflow-hidden">
            {/* Top Badge & Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-[#E8EFEA] mb-6 sm:mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-900 border border-blue-200/80 rounded-full text-xs font-bold mb-3">
                  <BarChart3 className="w-4 h-4 text-blue-600" />
                  <span>High-Converting Paid Traffic</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F1E17] tracking-tight">
                  Meta & Google Lead Ad Campaigns
                </h2>
                <p className="text-sm sm:text-base text-[#495D53] mt-2 max-w-2xl leading-relaxed">
                  We engineer predictable paid customer acquisition on Meta (Facebook & Instagram) and high-intent Google Search/YouTube. Custom creative, conversion rate optimization, and instant lead capture forms connected directly to your calendar.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <a
                  href="https://upwork.com/freelancers/aslamchanddotme?mp_source=share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#122B22] via-[#163E2D] to-[#122B22] text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm shadow-[0_4px_16px_rgba(18,43,34,0.18)] hover:shadow-[0_8px_24px_rgba(16,185,129,0.3)] hover:-translate-y-0.5 border border-emerald-500/20 transition-all cursor-pointer inline-flex items-center gap-1.5"
                  style={{ borderRadius: '9999px' }}
                >
                  <span>Hire on Upwork ↗</span>
                </a>
                <a
                  href="https://calendly.com/shahidnazir/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#122B22] hover:bg-[#183F30] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Book 30-Min Call</span>
                  <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                </a>
              </div>
            </div>

            {/* Interactive Live Ad ROI & Pipeline Forecaster */}
            <div className="mb-8 sm:mb-10 bg-[#0A1C15] rounded-[20px] sm:rounded-[24px] p-4 sm:p-6 md:p-8 text-white border border-emerald-500/20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold block mb-1">
                      Interactive Ad Forecaster
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                      Simulate Your Monthly Paid Ad Returns
                    </h3>
                  </div>

                  {/* Spend Tier Selector Tabs */}
                  <div className="flex flex-wrap sm:inline-flex items-center gap-1 p-1 bg-white/10 rounded-2xl sm:rounded-full border border-white/10 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => setAdSpendTier('starter')}
                      className={`flex-1 sm:flex-none px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-bold transition-all cursor-pointer whitespace-nowrap text-center ${
                        adSpendTier === 'starter' ? 'bg-emerald-400 text-[#0A1C15] shadow-xs' : 'text-white/80 hover:text-white'
                      }`}
                    >
                      $3.5k Ad Spend
                    </button>
                    <button
                      type="button"
                      onClick={() => setAdSpendTier('growth')}
                      className={`flex-1 sm:flex-none px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-bold transition-all cursor-pointer whitespace-nowrap text-center ${
                        adSpendTier === 'growth' ? 'bg-emerald-400 text-[#0A1C15] shadow-xs' : 'text-white/80 hover:text-white'
                      }`}
                    >
                      $7.5k Growth
                    </button>
                    <button
                      type="button"
                      onClick={() => setAdSpendTier('scale')}
                      className={`flex-1 sm:flex-none px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-bold transition-all cursor-pointer whitespace-nowrap text-center ${
                        adSpendTier === 'scale' ? 'bg-emerald-400 text-[#0A1C15] shadow-xs' : 'text-white/80 hover:text-white'
                      }`}
                    >
                      $15k Scale
                    </button>
                  </div>
                </div>

                {/* Dynamic Metrics Forecast Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                  <div className="bg-white/5 rounded-2xl p-4 sm:p-5 border border-white/10">
                    <span className="text-xs text-white/60 block mb-1">Projected Leads</span>
                    <span className="text-2xl sm:text-3xl font-black text-white font-mono block">
                      {adMetrics[adSpendTier].leads}
                    </span>
                    <span className="text-[11px] text-emerald-300 font-medium">In-app Native Lead Forms</span>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-4 sm:p-5 border border-white/10">
                    <span className="text-xs text-white/60 block mb-1">Qualified Demos Booked</span>
                    <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono block">
                      {adMetrics[adSpendTier].demos}
                    </span>
                    <span className="text-[11px] text-emerald-300 font-medium">Syncs Directly to Cal.com</span>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-4 sm:p-5 border border-white/10">
                    <span className="text-xs text-white/60 block mb-1">Avg. Cost Per Lead</span>
                    <span className="text-2xl sm:text-3xl font-black text-white font-mono block">
                      {adMetrics[adSpendTier].cpa}
                    </span>
                    <span className="text-[11px] text-blue-300 font-medium">45% below industry avg</span>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-4 sm:p-5 border border-white/10">
                    <span className="text-xs text-white/60 block mb-1">Estimated Pipeline Value</span>
                    <span className="text-2xl sm:text-3xl font-black text-emerald-300 font-mono block">
                      {adMetrics[adSpendTier].pipeline}
                    </span>
                    <span className="text-[11px] text-emerald-300 font-medium">{adMetrics[adSpendTier].roas} Expected ROAS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ad Anatomy & Multi-Channel Visual Showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Core Ads Pillars */}
              <div className="lg:col-span-6 space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-[#112219]">
                  Why Our Ad Campaigns Consistently Outperform
                </h3>
                <p className="text-sm text-[#52635A] leading-relaxed">
                  We don't waste budget on vanity impressions. We deploy structured full-funnel ad architectures that combine psychological hooks, high-converting video and static creatives, and automated SMS/email lead speed-to-lead nurturing.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2ECE6] flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0F1E17]">High-Velocity Creative Testing</h4>
                      <p className="text-xs text-[#52635A] mt-0.5">
                        We split-test 8-12 hook and visual variations weekly to discover outlier winning creatives before scaling spend.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2ECE6] flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0F1E17]">Instant Native Lead Forms & 2-Tap Booking</h4>
                      <p className="text-xs text-[#52635A] mt-0.5">
                        Frictionless Facebook & Instagram instant forms with pre-filled verified info and instant calendar scheduler redirect.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#E2ECE6] flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0F1E17]">Server-Side Conversions API (CAPI) & Pixel Tracking</h4>
                      <p className="text-xs text-[#52635A] mt-0.5">
                        Complete iOS14+ tracking bypass with Meta Conversions API and Google Enhanced Conversions for 100% data integrity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Live Ad Preview Mockup */}
              <div className="lg:col-span-6 bg-[#F6FAF8] border border-[#E2EBE5] rounded-[24px] p-6 shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b border-[#E2ECE6] mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#1877F2] text-white flex items-center justify-center font-bold text-xs">
                      f
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#0F1E17] block">Sponsored Meta Campaign</span>
                      <span className="text-[10px] text-gray-400">Targeting: B2B Decision Makers • Active Now</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full">
                    3.8% CTR (Top 1%)
                  </span>
                </div>

                {/* Ad Creative Card Visual */}
                <div className="bg-white rounded-xl border border-[#E0EBE4] overflow-hidden shadow-xs mb-4">
                  <div className="p-3 text-xs text-[#1F2E26] leading-relaxed">
                    <p className="font-semibold mb-1">
                      Tired of cold outreach that lands in spam and ad agencies burning your cash with 0 meetings?
                    </p>
                    <p className="text-[#55665D]">
                      Zexta builds autonomous outbound engines and paid funnels guaranteed to pack your calendar with 30+ qualified sales calls every single month.
                    </p>
                  </div>

                  {/* Ad Banner Graphic */}
                  <div className="bg-gradient-to-br from-[#0D231A] to-[#164332] p-6 text-white text-center relative overflow-hidden">
                    <div className="relative z-10">
                      <span className="bg-emerald-400 text-[#0A1C15] text-[10px] font-black uppercase px-2.5 py-1 rounded-full tracking-wider inline-block mb-2">
                        Guaranteed Pipeline
                      </span>
                      <h4 className="text-xl font-black mb-1">Fill Your Calendar in 14 Days</h4>
                      <p className="text-xs text-emerald-200">Zero fluff. 100% Pay-on-performance qualified meetings.</p>
                    </div>
                  </div>

                  <div className="p-3 bg-[#FAFCFA] flex items-center justify-between border-t border-[#EEF4F0]">
                    <div>
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider block">zexta.co</span>
                      <span className="text-xs font-bold text-[#0F1E17]">Claim Your Outbound Roadmap</span>
                    </div>
                    <button
                      type="button"
                      onClick={onBookCall}
                      className="bg-[#122B22] text-white text-xs font-bold px-4 py-2 rounded-lg cursor-pointer hover:bg-emerald-800 transition-colors"
                    >
                      Book Now ↗
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-[#52635A] px-1">
                  <span>Audience Reach: 148,000+</span>
                  <span className="font-bold text-emerald-700">Conversion Rate: 8.4%</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =========================================================================
            SHOWSTOPPER SERVICE 2: LEAD GENERATION & LIST BUILDING POWERHOUSE
            ========================================================================= */}
        {(activeCategory === 'all' || activeCategory === 'lead-gen') && (
          <section id="lead-gen" className="bg-white border border-[#E2ECE6] rounded-[22px] sm:rounded-[28px] lg:rounded-[32px] p-5 sm:p-7 md:p-8 lg:p-10 xl:p-12 shadow-[0_6px_36px_-6px_rgba(13,35,26,0.06)] relative overflow-hidden">
            {/* Top Badge & Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-[#E8EFEA] mb-6 sm:mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200/80 rounded-full text-xs font-bold mb-3">
                  <Target className="w-4 h-4 text-emerald-600" />
                  <span>Precision Data Engineering</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F1E17] tracking-tight">
                  Lead Generation & Custom List Building
                </h2>
                <p className="text-sm sm:text-base text-[#495D53] mt-2 max-w-2xl leading-relaxed">
                  Bad data kills cold outreach. We build hyper-targeted, triple-verified B2B lead lists using proprietary Clay waterfalls, Apollo, Sales Navigator, and real-time buying intent signals.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onBookCall}
                  className="bg-[#122B22] hover:bg-[#183F30] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Build Custom Lead List</span>
                  <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                </button>
              </div>
            </div>

            {/* Interactive Lead Enrichment Table Simulator */}
            <div className="bg-[#FAFDFB] border border-[#E0EBE4] rounded-[20px] sm:rounded-[24px] p-4 sm:p-6 mb-8 sm:mb-10 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                    Live Data Preview Engine
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#112219]">
                    Triple-Waterfall Verified Prospect Data
                  </h3>
                </div>

                {/* Persona Switcher */}
                <div className="flex flex-wrap sm:inline-flex items-center gap-1 p-1 bg-white border border-[#E2EAE5] rounded-2xl sm:rounded-full text-xs font-semibold w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setActiveLeadPersona('saas')}
                    className={`flex-1 sm:flex-none px-3 py-1.5 rounded-full transition-all cursor-pointer text-center text-[11px] sm:text-xs ${
                      activeLeadPersona === 'saas' ? 'bg-[#122B22] text-white shadow-xs' : 'text-[#55665D]'
                    }`}
                  >
                    B2B SaaS Founders
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveLeadPersona('ecommerce')}
                    className={`flex-1 sm:flex-none px-3 py-1.5 rounded-full transition-all cursor-pointer text-center text-[11px] sm:text-xs ${
                      activeLeadPersona === 'ecommerce' ? 'bg-[#122B22] text-white shadow-xs' : 'text-[#55665D]'
                    }`}
                  >
                    E-Commerce Brands
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveLeadPersona('agency')}
                    className={`flex-1 sm:flex-none px-3 py-1.5 rounded-full transition-all cursor-pointer text-center text-[11px] sm:text-xs ${
                      activeLeadPersona === 'agency' ? 'bg-[#122B22] text-white shadow-xs' : 'text-[#55665D]'
                    }`}
                  >
                    Agencies & Services
                  </button>
                </div>
              </div>

              {/* Data Table Preview */}
              <div className="overflow-x-auto rounded-xl border border-[#E2ECE6] bg-white shadow-xs">
                <table className="w-full min-w-[640px] text-left text-xs">
                  <thead className="bg-[#F0F5F2] text-[#2C4035] font-bold border-b border-[#E2ECE6]">
                    <tr>
                      <th className="py-3 px-4">Decision Maker</th>
                      <th className="py-3 px-4">Company</th>
                      <th className="py-3 px-4">Enriched Email</th>
                      <th className="py-3 px-4">Mobile Direct</th>
                      <th className="py-3 px-4">Buying Signal & Intent</th>
                      <th className="py-3 px-4 text-right">Verification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EDF3EF]">
                    {leadData[activeLeadPersona].map((lead, idx) => (
                      <tr key={idx} className="hover:bg-[#F9FCFA] transition-colors">
                        <td className="py-3.5 px-4 font-semibold text-[#112219]">
                          <div>{lead.name}</div>
                          <div className="text-[11px] text-gray-500 font-normal">{lead.title}</div>
                        </td>
                        <td className="py-3.5 px-4 font-medium text-[#2F3E37]">
                          <span className="inline-flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                            {lead.company}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-mono text-[#0A1C15]">
                          <span className="bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded border border-emerald-200">
                            {lead.email}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-mono text-gray-600">
                          {lead.phone}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="text-[11px] bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded-full border border-blue-200">
                            {lead.intent}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                            <Check className="w-3 h-3 text-emerald-700" />
                            {lead.verified}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 text-xs text-[#52635A]">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 font-semibold text-[#112219]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Zero Catch-All Emails
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-[#112219]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    &lt; 1.5% Bounce Guarantee
                  </span>
                </div>
                <span className="font-mono text-emerald-800 bg-emerald-100/60 px-2.5 py-1 rounded-md font-bold">
                  Clay Waterfall Engine: Apollo → Findymail → Prospeo → Dropcontact
                </span>
              </div>
            </div>

            {/* 3 Pillars of Lead Generation Excellence */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2ECE6]">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                  <Filter className="w-5 h-5 text-emerald-700" />
                </div>
                <h4 className="text-base font-bold text-[#0F1E17] mb-1.5">Hyper-Specific ICP Criteria</h4>
                <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
                  We filter by exact headcount, technology stack (e.g. Klaviyo, Salesforce, React), recent funding rounds, and active job postings.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2ECE6]">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center mb-4">
                  <Activity className="w-5 h-5 text-blue-700" />
                </div>
                <h4 className="text-base font-bold text-[#0F1E17] mb-1.5">Real-Time Buying Signals</h4>
                <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
                  Identify companies actively researching your solution, hiring relevant roles, or upgrading tech stacks for timely relevance.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-[#E2ECE6]">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5 text-purple-700" />
                </div>
                <h4 className="text-base font-bold text-[#0F1E17] mb-1.5">Bounce-Free Guarantee</h4>
                <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
                  Every single email passes through rigorous MX pinging and SMTP handshake verification before export. Never risk your domain score.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* =========================================================================
            SHOWSTOPPER SERVICE 3: MARKETING AUTOMATION & CRM INFRASTRUCTURE
            ========================================================================= */}
        {(activeCategory === 'all' || activeCategory === 'automation') && (
          <section id="automation" className="bg-white border border-[#E2ECE6] rounded-[22px] sm:rounded-[28px] lg:rounded-[32px] p-4.5 sm:p-7 md:p-8 lg:p-10 xl:p-12 shadow-[0_6px_36px_-6px_rgba(13,35,26,0.06)] relative overflow-hidden">
            {/* Top Badge & Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-[#E8EFEA] mb-6 sm:mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200/80 rounded-full text-xs font-bold mb-3">
                  <Workflow className="w-4 h-4 text-emerald-600" />
                  <span>Autonomous RevOps & Pipelines</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F1E17] tracking-tight leading-tight">
                  Marketing Automation & CRM Infrastructure
                </h2>
                <p className="text-sm sm:text-base text-[#495D53] mt-2 max-w-2xl leading-relaxed">
                  Never lose another lead to slow follow-ups. We engineer end-to-end automated workflows in GoHighLevel, HubSpot, Zapier, and Make that capture, score, assign, and book prospects within 60 seconds of opt-in.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <a
                  href="https://upwork.com/freelancers/~01549881dcc4c8599c?mp_source=share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto justify-center bg-gradient-to-r from-[#122B22] via-[#163E2D] to-[#122B22] text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm shadow-[0_4px_16px_rgba(18,43,34,0.18)] hover:shadow-[0_8px_24px_rgba(16,185,129,0.3)] hover:-translate-y-0.5 border border-emerald-500/20 transition-all cursor-pointer inline-flex items-center gap-1.5"
                >
                  <span>Hire on Upwork ↗</span>
                </a>
                <a
                  href="https://calendly.com/shahidnazir/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto justify-center bg-[#122B22] hover:bg-[#183F30] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Book 30-Min Call</span>
                  <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                </a>
              </div>
            </div>

            {/* Interactive Visual Workflow Canvas */}
            <div className="bg-[#0A1C15] rounded-[20px] sm:rounded-[24px] p-4.5 sm:p-7 md:p-8 text-white border border-emerald-500/20 shadow-xl mb-8 sm:mb-10 overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 sm:pb-6 border-b border-white/10 mb-6 sm:mb-8">
                <div>
                  <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold block mb-1">
                    Live Pipeline Visualizer
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-snug">
                    Automated 60-Second Speed-to-Lead Engine
                  </h3>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-xs text-emerald-300 font-mono">Running (0 ms Latency)</span>
                </div>
              </div>

              {/* Workflow Step Nodes Flow */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 relative">
                {/* Node 1 */}
                <div
                  onClick={() => setActiveAutoStep(1)}
                  className={`p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer ${
                    activeAutoStep === 1
                      ? 'bg-emerald-950/70 border-emerald-400 shadow-md shadow-emerald-900/40'
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">TRIGGER</span>
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs flex items-center justify-center font-bold">1</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">Lead Ingest</h4>
                  <p className="text-xs text-white/60 leading-relaxed">Webhook fires from Meta Ad, Cold Email, or Website form.</p>
                </div>

                {/* Node 2 */}
                <div
                  onClick={() => setActiveAutoStep(2)}
                  className={`p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer ${
                    activeAutoStep === 2
                      ? 'bg-emerald-950/70 border-emerald-400 shadow-md shadow-emerald-900/40'
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-purple-400 font-bold">AI ENRICH</span>
                    <span className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 text-xs flex items-center justify-center font-bold">2</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">Intent Scoring</h4>
                  <p className="text-xs text-white/60 leading-relaxed">Clay AI enriches revenue, tech stack, and assigns priority score.</p>
                </div>

                {/* Node 3 */}
                <div
                  onClick={() => setActiveAutoStep(3)}
                  className={`p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer ${
                    activeAutoStep === 3
                      ? 'bg-emerald-950/70 border-emerald-400 shadow-md shadow-emerald-900/40'
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-blue-400 font-bold">MULTI-CHANNEL</span>
                    <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 text-xs flex items-center justify-center font-bold">3</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">Omnichannel Drip</h4>
                  <p className="text-xs text-white/60 leading-relaxed">Instant SMS confirmation + personalized email sequence + Slack rep ping.</p>
                </div>

                {/* Node 4 */}
                <div
                  onClick={() => setActiveAutoStep(4)}
                  className={`p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer ${
                    activeAutoStep === 4
                      ? 'bg-emerald-950/70 border-emerald-400 shadow-md shadow-emerald-900/40'
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">CONVERSION</span>
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs flex items-center justify-center font-bold">4</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">Calendar Hold</h4>
                  <p className="text-xs text-white/60 leading-relaxed">Auto-books into sales rep calendar with calendar invite & Zoom link.</p>
                </div>
              </div>

              {/* Live Event Execution Terminal */}
              <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-white/10 bg-black/40 rounded-xl p-3.5 sm:p-4 font-mono text-xs overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-white/50 pb-2 border-b border-white/5 mb-2 gap-1.5 text-[11px] sm:text-xs">
                  <span>REAL-TIME AUTOMATION LOG</span>
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    HubSpot & GoHighLevel Connected
                  </span>
                </div>
                <div className="space-y-1.5 text-emerald-300 text-[11px] sm:text-xs font-mono break-words">
                  <p><span className="text-white/40">[15:58:02]</span> Opt-in detected: CEO @ $12M ARR SaaS (Alex Rivera)</p>
                  <p><span className="text-white/40">[15:58:04]</span> Clay webhook enriched 14 custom fields into CRM pipeline stage [Qualified Target]</p>
                  <p><span className="text-white/40">[15:58:09]</span> SMS notification sent: &quot;Alex, grabbed your inquiry! Here is direct access to Malik&apos;s calendar.&quot;</p>
                  <p><span className="text-white/40">[15:58:32]</span> Status updated: Meeting confirmed for Tomorrow @ 11:00 AM EST ⚡</p>
                </div>
              </div>
            </div>

            {/* Automation Stack Integrations Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
              <div className="p-3 sm:p-4 rounded-xl bg-[#F8FAF9] border border-[#E2ECE6] text-center">
                <span className="text-xs font-bold text-[#0F1E17] block">GoHighLevel</span>
                <span className="text-[10px] text-gray-500">Full CRM & Funnels</span>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-[#F8FAF9] border border-[#E2ECE6] text-center">
                <span className="text-xs font-bold text-[#0F1E17] block">HubSpot CRM</span>
                <span className="text-[10px] text-gray-500">Enterprise Sync</span>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-[#F8FAF9] border border-[#E2ECE6] text-center">
                <span className="text-xs font-bold text-[#0F1E17] block">Make.com</span>
                <span className="text-[10px] text-gray-500">Complex Logic</span>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-[#F8FAF9] border border-[#E2ECE6] text-center">
                <span className="text-xs font-bold text-[#0F1E17] block">Zapier Central</span>
                <span className="text-[10px] text-gray-500">Cross-App Webhooks</span>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-[#F8FAF9] border border-[#E2ECE6] text-center">
                <span className="text-xs font-bold text-[#0F1E17] block">Slack Alerts</span>
                <span className="text-[10px] text-gray-500">Instant Rep Pings</span>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-[#F8FAF9] border border-[#E2ECE6] text-center">
                <span className="text-xs font-bold text-[#0F1E17] block">Cal.com & Calendly</span>
                <span className="text-[10px] text-gray-500">Round-Robin Booking</span>
              </div>
            </div>
          </section>
        )}

        {/* =========================================================================
            SHOWSTOPPER SERVICE 4: COLD EMAIL INFRASTRUCTURE & DELIVERABILITY
            ========================================================================= */}
        {(activeCategory === 'all' || activeCategory === 'outbound') && (
          <section id="outbound" className="bg-white border border-[#E2ECE6] rounded-[22px] sm:rounded-[28px] lg:rounded-[32px] p-4.5 sm:p-7 md:p-8 lg:p-10 xl:p-12 shadow-[0_6px_36px_-6px_rgba(13,35,26,0.06)] relative overflow-hidden">
            {/* Top Badge & Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-[#E8EFEA] mb-6 sm:mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200/80 rounded-full text-xs font-bold mb-3">
                  <Mail className="w-4 h-4 text-emerald-600" />
                  <span>Bulletproof Outbound</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F1E17] tracking-tight leading-tight">
                  Cold Email Infrastructure & Inbox Deliverability
                </h2>
                <p className="text-sm sm:text-base text-[#495D53] mt-2 max-w-2xl leading-relaxed">
                  We don't send emails from your primary domain. We build isolated secondary domain infrastructure with Google Workspace and Microsoft 365, strict authentication, and automated ramp-up so your pitch hits the primary inbox every time.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <a
                  href="https://www.upwork.com/freelancers/raishahidnazir257"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto justify-center bg-gradient-to-r from-[#122B22] via-[#163E2D] to-[#122B22] text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm shadow-[0_4px_16px_rgba(18,43,34,0.18)] hover:shadow-[0_8px_24px_rgba(16,185,129,0.3)] hover:-translate-y-0.5 border border-emerald-500/20 transition-all cursor-pointer inline-flex items-center gap-1.5"
                >
                  <span>Hire on Upwork ↗</span>
                </a>
                <a
                  href="https://calendly.com/shahidnazir/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto justify-center bg-[#122B22] hover:bg-[#183F30] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Book 30-Min Call</span>
                  <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                </a>
              </div>
            </div>

            {/* Deliverability Shield & DNS Health Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center mb-6 sm:mb-10">
              <div className="lg:col-span-6 space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-[#112219]">
                  Engineered for 99.4% Primary Inbox Placement
                </h3>
                <p className="text-sm text-[#52635A] leading-relaxed">
                  Most cold outbound fails because of poor domain hygiene. We set up 15 to 40 dedicated mailboxes with gradual algorithmic volume warming, custom tracking domains, and copy rotation that completely bypasses spam filters.
                </p>

                <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-2">
                  <div className="bg-[#F8FAF9] border border-[#E2ECE6] p-3.5 sm:p-4 rounded-xl">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#0D231A] block">99.4%</span>
                    <span className="text-xs text-[#55665D]">Inbox Placement Rate</span>
                  </div>
                  <div className="bg-[#F8FAF9] border border-[#E2ECE6] p-3.5 sm:p-4 rounded-xl">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#0D231A] block">15 - 40</span>
                    <span className="text-xs text-[#55665D]">Mailboxes in Rotation</span>
                  </div>
                  <div className="bg-[#F8FAF9] border border-[#E2ECE6] p-3.5 sm:p-4 rounded-xl">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#0D231A] block">&lt; 1.2%</span>
                    <span className="text-xs text-[#55665D]">Spam Complaint Rate</span>
                  </div>
                  <div className="bg-[#F8FAF9] border border-[#E2ECE6] p-3.5 sm:p-4 rounded-xl">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#0D231A] block">21 Days</span>
                    <span className="text-xs text-[#55665D]">Natural Peer Warmup</span>
                  </div>
                </div>
              </div>

              {/* DNS Authentication Monitor Visual */}
              <div className="lg:col-span-6 bg-[#0E221A] rounded-2xl p-4 sm:p-6 border border-emerald-900/60 shadow-xl text-white overflow-hidden">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 sm:mb-4 gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="text-xs font-mono font-bold text-white truncate">DNS Security & Protocol Check</span>
                  </div>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono shrink-0">
                    All Passed (4/4)
                  </span>
                </div>

                <div className="space-y-2.5 sm:space-y-3 font-mono text-xs">
                  <div className="bg-white/5 rounded-lg p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 border border-white/5">
                    <div className="min-w-0">
                      <span className="text-emerald-400 font-bold block text-xs">SPF (Sender Policy Framework)</span>
                      <span className="text-[11px] text-gray-400 break-all font-mono">v=spf1 include:_spf.google.com ~all</span>
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold text-emerald-400 self-start sm:self-center shrink-0 bg-emerald-500/10 px-2 py-0.5 rounded">VALID</span>
                  </div>

                  <div className="bg-white/5 rounded-lg p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 border border-white/5">
                    <div className="min-w-0">
                      <span className="text-emerald-400 font-bold block text-xs">DKIM (2048-Bit Cryptographic Key)</span>
                      <span className="text-[11px] text-gray-400 break-all font-mono">google._domainkey.companyoutbound.com</span>
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold text-emerald-400 self-start sm:self-center shrink-0 bg-emerald-500/10 px-2 py-0.5 rounded">VALID</span>
                  </div>

                  <div className="bg-white/5 rounded-lg p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 border border-white/5">
                    <div className="min-w-0">
                      <span className="text-emerald-400 font-bold block text-xs">DMARC Policy Enforcement</span>
                      <span className="text-[11px] text-gray-400 break-all font-mono">v=DMARC1; p=quarantine; rua=mailto:...</span>
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold text-emerald-400 self-start sm:self-center shrink-0 bg-emerald-500/10 px-2 py-0.5 rounded">VALID</span>
                  </div>

                  <div className="bg-white/5 rounded-lg p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 border border-white/5">
                    <div className="min-w-0">
                      <span className="text-emerald-400 font-bold block text-xs">Custom Tracking Domain (SSL)</span>
                      <span className="text-[11px] text-gray-400 break-all font-mono">track.companyoutbound.com CNAME active</span>
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold text-emerald-400 self-start sm:self-center shrink-0 bg-emerald-500/10 px-2 py-0.5 rounded">SECURE</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =========================================================================
            SERVICE 5: INFLUENCER SOURCING AND OUTREACH
            ========================================================================= */}
        {(activeCategory === 'all' || activeCategory === 'influencer') && (
          <section id="influencer" className="bg-white border border-[#E2ECE6] rounded-[22px] sm:rounded-[28px] lg:rounded-[32px] p-4.5 sm:p-7 md:p-8 lg:p-10 xl:p-12 shadow-[0_6px_36px_-6px_rgba(13,35,26,0.06)] relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-50 text-pink-900 border border-pink-200/80 rounded-full text-xs font-bold">
                  <Sparkles className="w-4 h-4 text-pink-600" />
                  <span>Creator Partnerships</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F1E17] tracking-tight leading-tight">
                  Influencer Sourcing & Outreach
                </h2>

                <p className="text-sm sm:text-base text-[#495D53] leading-relaxed">
                  Scale word-of-mouth with targeted creator partnerships. We utilize Modash, TikTok Creator Marketplace, and Instagram scraping to vet genuine creators, analyze fake follower ratios, and negotiate profitable sponsorships.
                </p>

                <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-[#2F3E37]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Algorithmic fake follower and bot audience audits via Modash</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Custom personalized outreach pitches with 30%+ response rates</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>End-to-end contracting, content usage rights, and affiliate tracking</span>
                  </li>
                </ul>

                <div className="pt-2 sm:pt-4">
                  <button
                    type="button"
                    onClick={onBookCall}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#122B22] hover:bg-[#183F30] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                  >
                    <span>Launch Influencer Campaign</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Creator Matrix Card Showcase */}
              <div className="lg:col-span-6 bg-[#F8FAF9] rounded-2xl p-4 sm:p-6 border border-[#E2ECE6] space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-[#E2ECE6]">
                  <span className="text-xs font-bold text-[#112219]">Creator Vetting & Audit Matrix</span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                    Verified High-ROI
                  </span>
                </div>

                <div className="bg-white rounded-xl p-3.5 sm:p-4 border border-[#E2ECE6] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center font-bold text-sm shrink-0">
                      IG
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-[#0F1E17]">Tech & SaaS Creators</h4>
                      <p className="text-[11px] text-gray-500">Avg. 4.6% Engagement • 92% Real Audience</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg self-start sm:self-center shrink-0">
                    $18 CPM
                  </span>
                </div>

                <div className="bg-white rounded-xl p-3.5 sm:p-4 border border-[#E2ECE6] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm shrink-0">
                      YT
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-[#0F1E17]">YouTube Dedicated Reviews</h4>
                      <p className="text-[11px] text-gray-500">Evergreen Search Traffic • Direct CTA Link</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg self-start sm:self-center shrink-0">
                    5.2x ROAS
                  </span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =========================================================================
            SERVICE 6: FULL-STACK WEB DEVELOPMENT (MERN & PERN)
            ========================================================================= */}
        {(activeCategory === 'all' || activeCategory === 'web-dev') && (
          <section id="web-dev" className="bg-white border border-[#E2ECE6] rounded-[22px] sm:rounded-[28px] lg:rounded-[32px] p-4.5 sm:p-7 md:p-8 lg:p-10 xl:p-12 shadow-[0_6px_36px_-6px_rgba(13,35,26,0.06)] relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200/80 rounded-full text-xs font-bold">
                  <Code2 className="w-4 h-4 text-emerald-600" />
                  <span>Full-Stack Engineering</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F1E17] tracking-tight leading-tight">
                  MERN & PERN Stack Web Development
                </h2>

                <p className="text-sm sm:text-base text-[#495D53] leading-relaxed">
                  We engineer high-throughput web applications and SaaS platforms. Choose between <strong>MERN</strong> (MongoDB document-based flexibility) or <strong>PERN</strong> (PostgreSQL relational data with ACID reliability).
                </p>

                {/* Stack Switcher */}
                <div className="flex flex-wrap sm:inline-flex items-center p-1 bg-[#F3F7F5] border border-[#E2EAE5] rounded-xl sm:rounded-full text-xs font-bold my-2 gap-1">
                  <button
                    type="button"
                    onClick={() => setActiveStackTab('mern')}
                    className={`px-3.5 sm:px-4 py-1.5 rounded-lg sm:rounded-full transition-all cursor-pointer text-xs ${
                      activeStackTab === 'mern' ? 'bg-[#122B22] text-white shadow-xs' : 'text-[#495D53]'
                    }`}
                  >
                    MERN Architecture
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveStackTab('pern')}
                    className={`px-3.5 sm:px-4 py-1.5 rounded-lg sm:rounded-full transition-all cursor-pointer text-xs ${
                      activeStackTab === 'pern' ? 'bg-[#122B22] text-white shadow-xs' : 'text-[#495D53]'
                    }`}
                  >
                    PERN Architecture
                  </button>
                </div>

                {/* Key Deliverables Checkmarks */}
                <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-[#2F3E37]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Next.js 15 Server Actions, React 19 UI, and Tailwind CSS</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Express.js & Node.js backend with Redis caching and sub-40ms latency</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>PostgreSQL with Prisma/Drizzle ORM or MongoDB Atlas clusters</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Enterprise authentication (OAuth, JWT, RBAC) and payment gateways (Stripe)</span>
                  </li>
                </ul>

                <div className="pt-2 sm:pt-4">
                  <button
                    type="button"
                    onClick={onBookCall}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#122B22] hover:bg-[#183F30] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                  >
                    <span>Request Web Dev Consultation</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Code Sandbox Preview */}
              <div className="lg:col-span-6 bg-[#0E221A] rounded-2xl p-4 sm:p-5 border border-emerald-950/60 shadow-xl text-left overflow-hidden">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 gap-2">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] shrink-0"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] shrink-0"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] shrink-0"></span>
                    <span className="ml-2 text-xs font-mono text-emerald-400 truncate">
                      {activeStackTab === 'mern' ? 'server/controllers/leads.js' : 'prisma/schema.prisma'}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800 shrink-0">
                    Production Ready
                  </span>
                </div>

                <div className="font-mono text-[11px] sm:text-xs leading-relaxed space-y-1.5 text-gray-300 overflow-x-auto pb-1">
                  {activeStackTab === 'mern' ? (
                    <>
                      <p className="text-purple-400">// High-Throughput MERN Endpoint</p>
                      <p>
                        <span className="text-blue-300">export async function</span>{' '}
                        <span className="text-yellow-300">getQualifiedPipeline</span>(req, res) {'{'}
                      </p>
                      <p className="pl-4 text-emerald-300">
                        const cached = await redis.get(`pipeline:${'{req.params.id}'}`);
                      </p>
                      <p className="pl-4 text-emerald-300">
                        if (cached) return res.json(JSON.parse(cached));
                      </p>
                      <p className="pl-4 text-gray-400">
                        const leads = await MongoLead.aggregate([{'{ $match: { revenue: { $gte: 100000 } } }'}]);
                      </p>
                      <p className="pl-4 text-blue-300">return res.status(200).json(leads);</p>
                      <p>{'}'}</p>
                    </>
                  ) : (
                    <>
                      <p className="text-purple-400">// PERN Schema & Relational Models</p>
                      <p>
                        model <span className="text-yellow-300">Organization</span> {'{'}
                      </p>
                      <p className="pl-4 text-emerald-300">id String @id @default(uuid())</p>
                      <p className="pl-4 text-emerald-300">name String</p>
                      <p className="pl-4 text-emerald-300">deals Deal[] @relation</p>
                      <p className="pl-4 text-emerald-300">createdAt DateTime @default(now())</p>
                      <p>{'}'}</p>
                      <p className="text-gray-400">// Sub-second PostgreSQL indexed query</p>
                    </>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-white/10 text-center">
                  <div className="bg-white/5 p-2 rounded-lg">
                    <span className="text-[10px] text-gray-400 block">Performance</span>
                    <span className="text-xs font-bold text-emerald-400 font-mono">100/100</span>
                  </div>
                  <div className="bg-white/5 p-2 rounded-lg">
                    <span className="text-[10px] text-gray-400 block">API Latency</span>
                    <span className="text-xs font-bold text-emerald-400 font-mono">&lt; 38ms</span>
                  </div>
                  <div className="bg-white/5 p-2 rounded-lg">
                    <span className="text-[10px] text-gray-400 block">Type Safety</span>
                    <span className="text-xs font-bold text-emerald-400 font-mono">Strict TS</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =========================================================================
            SERVICE 7: AI FULL-STACK ENGINEERING & AUTONOMOUS AGENTS
            ========================================================================= */}
        {(activeCategory === 'all' || activeCategory === 'ai') && (
          <section id="ai" className="bg-white border border-[#E2ECE6] rounded-[22px] sm:rounded-[28px] lg:rounded-[32px] p-4.5 sm:p-7 md:p-8 lg:p-10 xl:p-12 shadow-[0_6px_36px_-6px_rgba(13,35,26,0.06)] relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 text-purple-900 border border-purple-200/80 rounded-full text-xs font-bold">
                  <Cpu className="w-4 h-4 text-purple-600" />
                  <span>AI & Agentic Systems</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F1E17] tracking-tight leading-tight">
                  AI Full-Stack Capabilities & Autonomous Agents
                </h2>

                <p className="text-sm sm:text-base text-[#495D53] leading-relaxed">
                  We build custom AI applications that take autonomous action. Connect custom knowledge bases through RAG pipelines, run vector similarity search, and deploy multi-model agents.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="bg-[#F8FAF9] border border-[#E2ECE6] p-3.5 sm:p-4 rounded-xl">
                    <span className="text-xs font-bold text-[#0F1E17] block mb-1">RAG & Vector Search</span>
                    <p className="text-xs text-[#55665D] leading-relaxed">Pinecone, pgvector, and LangChain knowledge embeddings with zero hallucination.</p>
                  </div>
                  <div className="bg-[#F8FAF9] border border-[#E2ECE6] p-3.5 sm:p-4 rounded-xl">
                    <span className="text-xs font-bold text-[#0F1E17] block mb-1">Autonomous Function Calls</span>
                    <p className="text-xs text-[#55665D] leading-relaxed">Agents trigger real-world APIs, update CRMs, and book meetings dynamically.</p>
                  </div>
                </div>

                <ul className="space-y-2 pt-2 text-xs sm:text-sm text-[#2F3E37]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, and Gemini 2.0 integration</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>Real-time streaming UI with AI SDK and Vercel AI</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>Deterministic guardrails for strict privacy and data isolation</span>
                  </li>
                </ul>

                <div className="pt-2 sm:pt-4">
                  <button
                    type="button"
                    onClick={onBookCall}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#122B22] hover:bg-[#183F30] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                  >
                    <span>Deploy AI Architecture</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* AI Live Execution Diagram */}
              <div className="lg:col-span-6 bg-[#0E221A] rounded-2xl p-4 sm:p-5 border border-purple-950/60 shadow-xl text-left overflow-hidden">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 gap-2">
                  <span className="text-xs font-mono text-purple-400 font-bold truncate">Autonomous Agent Pipeline</span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800 shrink-0">
                    Live Status: Ready
                  </span>
                </div>

                <div className="space-y-2.5 sm:space-y-3 font-mono text-xs">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <span className="text-purple-300 font-bold text-[11px] block mb-1">Step 1: Ingestion & Vectorization</span>
                    <p className="text-gray-300 text-[11px] break-words">Chunk raw documents & ICP criteria into 1536-dim embeddings via pgvector.</p>
                  </div>

                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <span className="text-emerald-400 font-bold text-[11px] block mb-1">Step 2: Semantic Reasoning</span>
                    <p className="text-gray-300 text-[11px] break-words">LLM evaluates prospect intent score and constructs contextual pitch hook.</p>
                  </div>

                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <span className="text-blue-300 font-bold text-[11px] block mb-1">Step 3: Webhook Action Trigger</span>
                    <p className="text-gray-300 text-[11px] break-words">Trigger outbound campaign & calendar hold through Instantly & Cal.com.</p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-400">
                  <span>Accuracy Benchmark: 99.4%</span>
                  <span className="text-emerald-400 font-bold">Latency: 280ms</span>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* 3. Pricing / Engagement Models */}
      <section className="py-14 sm:py-20">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <div className="flex justify-center mb-3">
              <CornerBadge label="Engagement Models" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F1E17] tracking-tight leading-tight">
              Flexible Partnership Structures
            </h2>
            <p className="text-sm sm:text-base text-[#495D53] mt-2">
              Select the right model to accelerate your pipeline and engineering velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Tier 1 */}
            <div className="bg-white border border-[#E2ECE6] rounded-[22px] sm:rounded-[28px] p-5 sm:p-7 md:p-8 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all">
              <div>
                <span className="text-xs font-bold text-[#10B981] uppercase tracking-wider block mb-2">Sprint</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F1E17] mb-2">14-Day Setup</h3>
                <p className="text-xs sm:text-sm text-[#55665D] mb-5 sm:mb-6 leading-relaxed">Complete outbound setup, lead engine build, or rapid web MVP build.</p>
                <ul className="space-y-2 text-xs text-[#2F3E37] mb-6">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Infrastructure & DNS Setup</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> 1,500 Clay Verified Leads</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Meta/Google Ad Launch</li>
                </ul>
              </div>
              <button
                type="button"
                onClick={onBookCall}
                className="w-full py-3 rounded-full border border-[#CBDAD1] hover:border-[#122B22] text-xs font-bold text-[#122B22] transition-colors cursor-pointer"
              >
                Inquire About Sprint
              </button>
            </div>

            {/* Tier 2 (Featured) */}
            <div className="bg-[#0D231A] border border-emerald-500/30 rounded-[22px] sm:rounded-[28px] p-5 sm:p-7 md:p-8 flex flex-col justify-between text-white shadow-xl hover:-translate-y-1 transition-all">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Growth Retainer</span>
                  <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full">Most Popular</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">Pipeline Scale Engine</h3>
                <p className="text-xs sm:text-sm text-emerald-100/70 mb-5 sm:mb-6 leading-relaxed">Guaranteed qualified meetings & continuous outbound + ads optimization.</p>
                <ul className="space-y-2 text-xs text-emerald-100/90 mb-6">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> 30+ Qualified Calls / mo</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Meta/Google Ads + Cold Outbound</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> CRM Automation & Speed-to-Lead</li>
                </ul>
              </div>
              <button
                type="button"
                onClick={onBookCall}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-emerald-400 to-teal-300 text-[#0A1C15] text-xs font-black shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
              >
                Book Strategy Session
              </button>
            </div>

            {/* Tier 3 */}
            <div className="bg-white border border-[#E2ECE6] rounded-[22px] sm:rounded-[28px] p-5 sm:p-7 md:p-8 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all">
              <div>
                <span className="text-xs font-bold text-[#10B981] uppercase tracking-wider block mb-2">Enterprise</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F1E17] mb-2">Dedicated Growth Pod</h3>
                <p className="text-xs sm:text-sm text-[#55665D] mb-5 sm:mb-6 leading-relaxed">Full-stack web & AI engineering team dedicated to your roadmap.</p>
                <ul className="space-y-2 text-xs text-[#2F3E37] mb-6">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Senior MERN/PERN Engineers</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Custom Autonomous AI Agents</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> 24/7 Slack & Jira Integration</li>
                </ul>
              </div>
              <button
                type="button"
                onClick={onBookCall}
                className="w-full py-3 rounded-full border border-[#CBDAD1] hover:border-[#122B22] text-xs font-bold text-[#122B22] transition-colors cursor-pointer"
              >
                Inquire Enterprise
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA Section */}
      <CTASection onBookCall={onBookCall} />
    </div>
  );
}
