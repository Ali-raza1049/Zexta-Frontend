import React from 'react';
import { CornerBadge } from './Icons';
import { ArrowUpRight, Search, CheckCircle2, ChevronRight, Activity, ArrowRight, Sparkles, Filter, ShieldCheck } from 'lucide-react';

import workInfluencerBg from '../assets/work_influencer.jpg';
import workEmailBg from '../assets/work_email.jpg';
import workLeadlistBg from '../assets/work_leadlist.jpg';
import workMetaadsBg from '../assets/work_metaads.jpg';

export default function Portfolio() {
  return (
    <section id="work" className="py-20 relative bg-[#F6F9F7]">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header with Title and "View all projects" button exactly as screenshot */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
          <div>
            <CornerBadge label="Our Work" />
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#112219] tracking-tight leading-tight mt-3 mb-2">
              How we've helped other businesses.
            </h2>
            <p className="text-base text-[#55665D]">
              See how we turned outreach challenges into steady streams of qualified leads.
            </p>
          </div>

          <a
            href="#work"
            className="inline-flex items-center gap-1.5 border border-[#E2EAE5] hover:border-[#153C2D] bg-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-[#112219] transition-all shrink-0 cursor-pointer shadow-2xs hover:shadow-sm"
          >
            <span>View all projects</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#112219]" />
          </a>
        </div>

        {/* 2x2 Grid of Project Cards matching screenshot frame */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8">
          
          {/* Card 1: Influencer Outreach */}
          <div className="group bg-white rounded-[28px] sm:rounded-[32px] p-3.5 sm:p-4 border border-[#E8EFEA] hover:border-[#10B981]/40 shadow-[0_4px_24px_-4px_rgba(18,43,34,0.05)] hover:shadow-[0_16px_40px_-6px_rgba(18,43,34,0.12)] hover:-translate-y-1.5 transition-all duration-300">
            {/* Scenic Image Frame with Centered Frosted Glass Dashboard */}
            <div
              className="relative w-full aspect-[16/10.5] rounded-[20px] sm:rounded-[24px] overflow-hidden flex items-center justify-center p-3 sm:p-4 bg-cover bg-center shadow-inner"
              style={{ backgroundImage: `url(${workInfluencerBg})` }}
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>

              {/* Floating Glassmorphic UI Dashboard: Influencer Activities */}
              <div className="relative z-10 w-full max-w-[94%] bg-white/85 backdrop-blur-xl border border-white/60 rounded-xl sm:rounded-2xl p-3 sm:p-3.5 shadow-2xl text-left">
                {/* Navbar */}
                <div className="flex items-center justify-between pb-2 border-b border-gray-200/60 mb-2 text-[10px]">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-[#112219] text-xs">Modash</span>
                    <span className="text-gray-400">|</span>
                    <span className="text-gray-600 font-medium">Last 7 days</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-600 font-medium">Amount</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-1.5 py-0.5 rounded">
                      Download Report
                    </span>
                  </div>
                </div>

                {/* Subheader */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#112219]">Activities</span>
                  <span className="text-[10px] text-gray-500">Overview 42 active creators</span>
                </div>

                {/* Table Rows */}
                <div className="space-y-1 text-[9.5px] sm:text-[10px]">
                  <div className="flex items-center justify-between py-1 px-2 rounded-md bg-white/70 border border-white/80">
                    <span className="font-semibold text-gray-800 w-12">Paid</span>
                    <span className="text-gray-700 font-medium w-16">$450 USD</span>
                    <span className="text-emerald-700 font-bold bg-emerald-50 px-1 rounded text-[9px]">Success</span>
                    <span className="text-gray-600 truncate flex-1 px-2">Sample shipped to @SarahChen</span>
                    <span className="text-gray-400 shrink-0">Aug 21</span>
                  </div>

                  <div className="flex items-center justify-between py-1 px-2 rounded-md bg-white/70 border border-white/80">
                    <span className="font-semibold text-gray-800 w-12">Pending</span>
                    <span className="text-gray-700 font-medium w-16">$1,200 USD</span>
                    <span className="text-amber-700 font-bold bg-amber-50 px-1 rounded text-[9px]">Pending</span>
                    <span className="text-gray-600 truncate flex-1 px-2">Contract signed for 3 reels</span>
                    <span className="text-gray-400 shrink-0">Aug 21</span>
                  </div>

                  <div className="flex items-center justify-between py-1 px-2 rounded-md bg-white/70 border border-white/80">
                    <span className="font-semibold text-gray-800 w-12">Approved</span>
                    <span className="text-gray-700 font-medium w-16">$850 USD</span>
                    <span className="text-emerald-700 font-bold bg-emerald-50 px-1 rounded text-[9px]">Success</span>
                    <span className="text-gray-600 truncate flex-1 px-2">Live post review verified</span>
                    <span className="text-gray-400 shrink-0">Aug 20</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Typography Below Image matching screenshot */}
            <div className="pt-3.5 pb-1 px-1">
              <div className="text-xs font-semibold text-[#64748B] mb-1">
                Ecommerce <span className="inline-block mx-1.5">•</span> Instagram
              </div>
              <h3 className="text-xl font-bold text-[#112219]">
                Influencer Outreach
              </h3>
            </div>
          </div>

          {/* Card 2: Cold Email Infrastructure */}
          <div className="group bg-white rounded-[28px] sm:rounded-[32px] p-3.5 sm:p-4 border border-[#E8EFEA] hover:border-[#10B981]/40 shadow-[0_4px_24px_-4px_rgba(18,43,34,0.05)] hover:shadow-[0_16px_40px_-6px_rgba(18,43,34,0.12)] hover:-translate-y-1.5 transition-all duration-300">
            {/* Scenic Image Frame with Centered Frosted Glass Dashboard */}
            <div
              className="relative w-full aspect-[16/10.5] rounded-[20px] sm:rounded-[24px] overflow-hidden flex items-center justify-center p-3 sm:p-4 bg-cover bg-center shadow-inner"
              style={{ backgroundImage: `url(${workEmailBg})` }}
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>

              {/* Floating Dark Slate Glassmorphic Dashboard: Cold Email */}
              <div className="relative z-10 w-full max-w-[94%] bg-[#0D211A]/90 backdrop-blur-xl border border-emerald-500/30 rounded-xl sm:rounded-2xl p-3 sm:p-3.5 shadow-2xl text-left text-white">
                {/* Header */}
                <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2.5">
                  <span className="text-xs font-bold text-white tracking-wide">U.S. Inbound / Outbound Lead Delivery</span>
                  <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                    99.4% Primary Inbox
                  </span>
                </div>

                {/* 4 Metric Cards */}
                <div className="grid grid-cols-4 gap-1.5 mb-2.5">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-1.5 text-center">
                    <span className="text-xs sm:text-sm font-black text-white font-mono block">69</span>
                    <span className="text-[8px] text-gray-300 uppercase">Active Boxes</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-1.5 text-center">
                    <span className="text-xs sm:text-sm font-black text-emerald-400 font-mono block">48.5</span>
                    <span className="text-[8px] text-gray-300 uppercase">Health Score</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-1.5 text-center">
                    <span className="text-xs sm:text-sm font-black text-white font-mono block">321</span>
                    <span className="text-[8px] text-gray-300 uppercase">Daily Sent</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-1.5 text-center">
                    <span className="text-xs sm:text-sm font-black text-emerald-400 font-mono block">78.4%</span>
                    <span className="text-[8px] text-gray-300 uppercase">Open Rate</span>
                  </div>
                </div>

                {/* Mailbox List */}
                <div className="space-y-1 text-[9.5px] font-mono">
                  <div className="flex items-center justify-between gap-1 py-1 px-2 rounded bg-white/5 border border-white/5">
                    <span className="text-emerald-300 truncate">inbox-01.outboundreach.io</span>
                    <span className="text-gray-300 shrink-0 hidden xs:inline">Google Workspace</span>
                    <span className="text-emerald-400 font-bold shrink-0">100% Passed</span>
                  </div>
                  <div className="flex items-center justify-between gap-1 py-1 px-2 rounded bg-white/5 border border-white/5">
                    <span className="text-emerald-300 truncate">inbox-02.growthscale.co</span>
                    <span className="text-gray-300 shrink-0 hidden xs:inline">Microsoft 365</span>
                    <span className="text-emerald-400 font-bold shrink-0">100% Passed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Typography Below Image matching screenshot */}
            <div className="pt-3.5 pb-1 px-1">
              <div className="text-xs font-semibold text-[#64748B] mb-1">
                SaaS <span className="inline-block mx-1.5">•</span> Deliverability
              </div>
              <h3 className="text-xl font-bold text-[#112219]">
                Cold Email Infrastructure
              </h3>
            </div>
          </div>

          {/* Card 3: Lead List Build */}
          <div className="group bg-white rounded-[28px] sm:rounded-[32px] p-3.5 sm:p-4 border border-[#E8EFEA] hover:border-[#10B981]/40 shadow-[0_4px_24px_-4px_rgba(18,43,34,0.05)] hover:shadow-[0_16px_40px_-6px_rgba(18,43,34,0.12)] hover:-translate-y-1.5 transition-all duration-300">
            {/* Scenic Image Frame with Centered Frosted Glass Dashboard */}
            <div
              className="relative w-full aspect-[16/10.5] rounded-[20px] sm:rounded-[24px] overflow-hidden flex items-center justify-center p-3 sm:p-4 bg-cover bg-center shadow-inner"
              style={{ backgroundImage: `url(${workLeadlistBg})` }}
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>

              {/* Floating Glassmorphic Workflow Visualizer: Lead List Build */}
              <div className="relative z-10 w-full max-w-[94%] bg-white/85 backdrop-blur-xl border border-white/60 rounded-xl sm:rounded-2xl p-3 sm:p-3.5 shadow-2xl text-left">
                {/* Header */}
                <div className="flex items-center justify-between pb-2 border-b border-gray-200/60 mb-2.5">
                  <span className="text-xs font-bold text-[#112219]">Lead Opt-in / Marketing Sequence</span>
                  <span className="text-[9px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">
                    Clay + Apollo Waterfall
                  </span>
                </div>

                {/* Workflow Canvas Mockup */}
                <div className="space-y-1.5 text-[10px]">
                  <div className="flex items-center gap-2 p-1.5 rounded-lg bg-white/80 border border-gray-200 shadow-2xs">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-[10px] shrink-0">1</span>
                    <span className="font-semibold text-gray-800">Apollo Scraping: Verified Decision Makers</span>
                    <span className="ml-auto text-[9px] text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.2 rounded">5,000 Leads</span>
                  </div>

                  <div className="flex items-center gap-2 p-1.5 rounded-lg bg-white/80 border border-gray-200 shadow-2xs">
                    <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-[10px] shrink-0">2</span>
                    <span className="font-semibold text-gray-800">Clay AI Waterfall Email Finding (0% Bounce)</span>
                    <span className="ml-auto text-[9px] text-purple-700 font-bold bg-purple-50 px-1.5 py-0.2 rounded">Triple Verified</span>
                  </div>

                  <div className="flex items-center gap-2 p-1.5 rounded-lg bg-white/80 border border-gray-200 shadow-2xs">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-[10px] shrink-0">3</span>
                    <span className="font-semibold text-gray-800">Instantly Campaign Auto-Sync & Drip</span>
                    <span className="ml-auto text-[9px] text-blue-700 font-bold bg-blue-50 px-1.5 py-0.2 rounded">Ready to Send</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Typography Below Image matching screenshot */}
            <div className="pt-3.5 pb-1 px-1">
              <div className="text-xs font-semibold text-[#64748B] mb-1">
                B2B <span className="inline-block mx-1.5">•</span> Data Enrichment
              </div>
              <h3 className="text-xl font-bold text-[#112219]">
                Lead List Build
              </h3>
            </div>
          </div>

          {/* Card 4: Meta Ads */}
          <div className="group bg-white rounded-[28px] sm:rounded-[32px] p-3.5 sm:p-4 border border-[#E8EFEA] hover:border-[#10B981]/40 shadow-[0_4px_24px_-4px_rgba(18,43,34,0.05)] hover:shadow-[0_16px_40px_-6px_rgba(18,43,34,0.12)] hover:-translate-y-1.5 transition-all duration-300">
            {/* Scenic Image Frame with Centered Frosted Glass Dashboard */}
            <div
              className="relative w-full aspect-[16/10.5] rounded-[20px] sm:rounded-[24px] overflow-hidden flex items-center justify-center p-3 sm:p-4 bg-cover bg-center shadow-inner"
              style={{ backgroundImage: `url(${workMetaadsBg})` }}
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>

              {/* Floating Glassmorphic CRM & Deals Dashboard: Meta Ads */}
              <div className="relative z-10 w-full max-w-[94%] bg-white/90 backdrop-blur-xl border border-white/60 rounded-xl sm:rounded-2xl p-3 sm:p-3.5 shadow-2xl text-left">
                {/* Header */}
                <div className="flex items-center justify-between pb-2 border-b border-gray-200/60 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-extrabold text-[#112219]">Nexus</span>
                    <span className="text-gray-400">/</span>
                    <span className="text-xs font-bold text-gray-700">Deals</span>
                  </div>
                  <span className="text-[9px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                    5.2x ROAS
                  </span>
                </div>

                {/* 4 Metric Cards */}
                <div className="grid grid-cols-4 gap-1.5 mb-2.5">
                  <div className="bg-gray-50 border border-gray-100 rounded-lg p-1.5 text-center">
                    <span className="text-xs sm:text-sm font-bold text-[#112219] block">124</span>
                    <span className="text-[8px] text-gray-500 uppercase">Won Deals</span>
                  </div>
                  <div className="bg-gray-50 border border-gray-100 rounded-lg p-1.5 text-center">
                    <span className="text-xs sm:text-sm font-bold text-emerald-700 block">$485,200</span>
                    <span className="text-[8px] text-gray-500 uppercase">Pipeline Value</span>
                  </div>
                  <div className="bg-gray-50 border border-gray-100 rounded-lg p-1.5 text-center">
                    <span className="text-xs sm:text-sm font-bold text-blue-700 block">36</span>
                    <span className="text-[8px] text-gray-500 uppercase">Days to Close</span>
                  </div>
                  <div className="bg-gray-50 border border-gray-100 rounded-lg p-1.5 text-center">
                    <span className="text-xs sm:text-sm font-bold text-[#112219] block">30.6%</span>
                    <span className="text-[8px] text-gray-500 uppercase">Close Rate</span>
                  </div>
                </div>

                {/* Deals Table */}
                <div className="space-y-1 text-[9.5px]">
                  <div className="flex items-center justify-between py-1 px-2 rounded bg-white border border-gray-100 shadow-2xs">
                    <span className="font-semibold text-gray-800">Vertex Health</span>
                    <span className="font-mono text-emerald-700 font-bold">$42,000</span>
                    <span className="text-emerald-800 bg-emerald-50 px-1.5 rounded font-medium">Closed Won</span>
                  </div>
                  <div className="flex items-center justify-between py-1 px-2 rounded bg-white border border-gray-100 shadow-2xs">
                    <span className="font-semibold text-gray-800">Supabase Scale</span>
                    <span className="font-mono text-emerald-700 font-bold">$18,000</span>
                    <span className="text-blue-800 bg-blue-50 px-1.5 rounded font-medium">Demo Done</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Typography Below Image matching screenshot */}
            <div className="pt-3.5 pb-1 px-1">
              <div className="text-xs font-semibold text-[#64748B] mb-1">
                Local Business <span className="inline-block mx-1.5">•</span> Lead Ads
              </div>
              <h3 className="text-xl font-bold text-[#112219]">
                Meta Ads
              </h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
