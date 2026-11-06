import React, { useState, useEffect } from 'react';
import { CornerBadge, GoogleAdsLogo, MetaIcon } from './Icons';
import {
  Calendar,
  TrendingUp,
  CheckCircle2,
  Layers,
  Bot,
  Sparkles,
  Send,
  Rocket,
  ShieldCheck,
  Check,
  Mail,
  Inbox,
  Flame,
  Shield,
  Terminal as TerminalIcon,
  Cpu,
  Zap,
  Search,
  ArrowUpRight,
  Activity,
  Filter,
  Clock,
  Target,
  BarChart3,
} from 'lucide-react';

const mernLogs = [
  { text: 'GET /api/v2/pipelines • 200 OK (12ms)', tag: 'FAST' },
  { text: 'RedisCache.fastRoute hit: 99.8% ratio', tag: 'CACHE' },
  { text: 'React 19 SSR hydrated in 24ms', tag: 'HYDRATED' },
];

const pernLogs = [
  { text: 'Prisma query executed in 1.4ms (ACID safe)', tag: 'DB' },
  { text: 'PostgreSQL pool: 40 active worker threads', tag: 'POOL' },
  { text: 'Next.js Server Action dispatch: 200 OK', tag: 'EDGE' },
];

const aiLogs = [
  { text: 'Pinecone: 15,200 vector embeddings searched', tag: 'SEARCH' },
  { text: 'RAG Context injected to Claude 3.5 Sonnet', tag: 'RAG' },
  { text: 'Autonomous Agent tool call: Cal.com webhook', tag: 'ACTION' },
];

export default function Services() {
  const [activeStackTab, setActiveStackTab] = useState('mern');
  const [activeAdsTab, setActiveAdsTab] = useState('both'); // 'both' | 'meta' | 'google'
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % 3);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="services" className="py-14 sm:py-20 relative">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-8 sm:mb-12">
          <CornerBadge label="Our Capabilities" />
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#112219] tracking-tight leading-tight mt-3">
            Everything you need to grow and scale,
            <br className="hidden sm:inline" />
            {' '}all under one roof.
          </h2>
          <p className="text-xs sm:text-base text-[#52635A] mt-2.5 sm:mt-3 leading-relaxed">
            From cold outreach pipelines and paid ads to custom MERN/PERN platforms and production AI full-stack systems.
          </p>
        </div>

        {/* 1. Unified Full-Stack (MERN & PERN) + AI Engineering Flagship Card in One */}
        <div className="w-full bg-white border border-[#E1EAE4] hover:border-[#CADAD0] rounded-[22px] sm:rounded-[32px] p-3.5 xs:p-4.5 sm:p-7 lg:p-9 shadow-[0_4px_24px_-4px_rgba(18,43,34,0.04)] hover:shadow-[0_16px_40px_rgba(18,43,34,0.08)] transition-all mb-6">
          {/* Header Row: Badge & 3-Way Switcher */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-5 sm:mb-6 pb-4 sm:pb-5 border-b border-[#EEF4F0]">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200/80 rounded-full text-[11px] sm:text-xs font-bold shadow-2xs">
                <Layers className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Full-Stack Engineering & AI Systems</span>
              </span>
              <span className="hidden md:inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span>Production Architecture</span>
              </span>
            </div>

            {/* 3-Way Stack Switcher: MERN, PERN, and AI Services */}
            <div className="w-full sm:w-auto grid grid-cols-3 sm:inline-flex items-center p-1 bg-[#F3F7F5] border border-[#E2EAE5] rounded-xl sm:rounded-full text-[10.5px] sm:text-xs font-semibold shadow-inner text-center">
              <button
                type="button"
                onClick={() => setActiveStackTab('mern')}
                className={`px-1.5 xs:px-2.5 sm:px-3.5 py-1.5 rounded-lg sm:rounded-full transition-all cursor-pointer truncate ${
                  activeStackTab === 'mern'
                    ? 'bg-[#153C2D] text-white shadow-xs font-bold'
                    : 'text-[#55665D] hover:text-[#112219]'
                }`}
              >
                <span className="sm:hidden">MERN</span>
                <span className="hidden sm:inline">MERN Stack</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveStackTab('pern')}
                className={`px-1.5 xs:px-2.5 sm:px-3.5 py-1.5 rounded-lg sm:rounded-full transition-all cursor-pointer truncate ${
                  activeStackTab === 'pern'
                    ? 'bg-[#153C2D] text-white shadow-xs font-bold'
                    : 'text-[#55665D] hover:text-[#112219]'
                }`}
              >
                <span className="sm:hidden">PERN</span>
                <span className="hidden sm:inline">PERN Stack</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveStackTab('ai')}
                className={`px-1.5 xs:px-2.5 sm:px-3.5 py-1.5 rounded-lg sm:rounded-full transition-all cursor-pointer truncate ${
                  activeStackTab === 'ai'
                    ? 'bg-[#153C2D] text-white shadow-xs font-bold'
                    : 'text-[#55665D] hover:text-[#112219]'
                }`}
              >
                <span className="sm:hidden">AI Agents</span>
                <span className="hidden sm:inline">AI Services & Agents</span>
              </button>
            </div>
          </div>

          {/* 2-Column Responsive Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Left Column: Stack Narrative & Capabilities */}
            <div className="lg:col-span-6 flex flex-col justify-between text-left">
              <div>
                <h3 className="text-[19px] xs:text-[21px] sm:text-[24px] font-bold text-[#112219] mb-2.5 sm:mb-3 leading-snug">
                  {activeStackTab === 'mern' && 'MERN Architecture (MongoDB, Express, React 19, Node.js)'}
                  {activeStackTab === 'pern' && 'PERN Enterprise Platforms (PostgreSQL, Express, React 19, Node.js)'}
                  {activeStackTab === 'ai' && 'Autonomous AI Agents, RAG Pipelines & Multi-Model Systems'}
                </h3>

                <p className="text-xs sm:text-[14.5px] text-[#52635A] leading-relaxed mb-4 sm:mb-6">
                  {activeStackTab === 'mern' &&
                    'Fast, reactive, and flexible full-stack web applications with MongoDB document stores, Express REST/GraphQL APIs, React 19/Next.js dynamic frontends, and high-throughput Node.js microservices.'}
                  {activeStackTab === 'pern' &&
                    'Mission-critical enterprise software backed by relational PostgreSQL with strict ACID compliance, Prisma ORM type-safety, Express/Node.js API layers, and cutting-edge React 19 client interfaces.'}
                  {activeStackTab === 'ai' &&
                    'Turn complex business operations into autonomous workflows. We build custom RAG (Retrieval-Augmented Generation) search engines, vector database embeddings (Pinecone & pgvector), and multi-agent LLM systems with OpenAI, Claude, and Gemini.'}
                </p>
              </div>

              {/* Stack Tech Pills */}
              <div className="pt-1 sm:pt-2">
                <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap mb-4">
                  {activeStackTab === 'mern' && (
                    <>
                      <span className="text-[11px] sm:text-xs font-semibold bg-[#F0FDF4] text-[#166534] border border-[#DCFCE7] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg hover:border-emerald-400/80 hover:scale-105 transition-all duration-200 cursor-default shadow-2xs">
                        MongoDB Atlas
                      </span>
                      <span className="text-[11px] sm:text-xs font-semibold bg-[#F0FDF4] text-[#166534] border border-[#DCFCE7] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg hover:border-emerald-400/80 hover:scale-105 transition-all duration-200 cursor-default shadow-2xs">
                        Express.js REST
                      </span>
                      <span className="text-[11px] sm:text-xs font-semibold bg-[#F0FDF4] text-[#166534] border border-[#DCFCE7] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg hover:border-emerald-400/80 hover:scale-105 transition-all duration-200 cursor-default shadow-2xs">
                        React 19 / Next.js
                      </span>
                      <span className="text-[11px] sm:text-xs font-semibold bg-[#F0FDF4] text-[#166534] border border-[#DCFCE7] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg hover:border-emerald-400/80 hover:scale-105 transition-all duration-200 cursor-default shadow-2xs">
                        Node.js Runtime
                      </span>
                      <span className="text-[11px] sm:text-xs font-semibold bg-[#F0FDF4] text-[#166534] border border-[#DCFCE7] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg hover:border-emerald-400/80 hover:scale-105 transition-all duration-200 cursor-default shadow-2xs">
                        Redis Cache
                      </span>
                    </>
                  )}
                  {activeStackTab === 'pern' && (
                    <>
                      <span className="text-[11px] sm:text-xs font-semibold bg-[#F0FDF4] text-[#166534] border border-[#DCFCE7] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg hover:border-emerald-400/80 hover:scale-105 transition-all duration-200 cursor-default shadow-2xs">
                        PostgreSQL DB
                      </span>
                      <span className="text-[11px] sm:text-xs font-semibold bg-[#F0FDF4] text-[#166534] border border-[#DCFCE7] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg hover:border-emerald-400/80 hover:scale-105 transition-all duration-200 cursor-default shadow-2xs">
                        Prisma / Drizzle ORM
                      </span>
                      <span className="text-[11px] sm:text-xs font-semibold bg-[#F0FDF4] text-[#166534] border border-[#DCFCE7] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg hover:border-emerald-400/80 hover:scale-105 transition-all duration-200 cursor-default shadow-2xs">
                        Express & GraphQL
                      </span>
                      <span className="text-[11px] sm:text-xs font-semibold bg-[#F0FDF4] text-[#166534] border border-[#DCFCE7] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg hover:border-emerald-400/80 hover:scale-105 transition-all duration-200 cursor-default shadow-2xs">
                        Next.js Server Actions
                      </span>
                      <span className="text-[11px] sm:text-xs font-semibold bg-[#F0FDF4] text-[#166534] border border-[#DCFCE7] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg hover:border-emerald-400/80 hover:scale-105 transition-all duration-200 cursor-default shadow-2xs">
                        ACID Compliance
                      </span>
                    </>
                  )}
                  {activeStackTab === 'ai' && (
                    <>
                      <span className="text-[11px] sm:text-xs font-semibold bg-purple-50 text-purple-900 border border-purple-200 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg hover:border-purple-400/80 hover:scale-105 transition-all duration-200 cursor-default shadow-2xs">
                        OpenAI & Claude APIs
                      </span>
                      <span className="text-[11px] sm:text-xs font-semibold bg-purple-50 text-purple-900 border border-purple-200 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg hover:border-purple-400/80 hover:scale-105 transition-all duration-200 cursor-default shadow-2xs">
                        Pinecone & pgvector
                      </span>
                      <span className="text-[11px] sm:text-xs font-semibold bg-purple-50 text-purple-900 border border-purple-200 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg hover:border-purple-400/80 hover:scale-105 transition-all duration-200 cursor-default shadow-2xs">
                        LangChain & LlamaIndex
                      </span>
                      <span className="text-[11px] sm:text-xs font-semibold bg-purple-50 text-purple-900 border border-purple-200 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg hover:border-purple-400/80 hover:scale-105 transition-all duration-200 cursor-default shadow-2xs">
                        Autonomous Agents
                      </span>
                      <span className="text-[11px] sm:text-xs font-semibold bg-purple-50 text-purple-900 border border-purple-200 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg hover:border-purple-400/80 hover:scale-105 transition-all duration-200 cursor-default shadow-2xs">
                        Streaming UI
                      </span>
                    </>
                  )}
                  <span className="text-[11px] sm:text-xs font-semibold bg-gray-50 text-gray-700 border border-gray-200 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg hover:border-gray-400/80 hover:scale-105 transition-all duration-200 cursor-default shadow-2xs">
                    TypeScript 5.0
                  </span>
                </div>

                <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2 text-xs text-[#55665D] pt-3 border-t border-[#EEF4F0]">
                  <span className="flex items-center gap-2 font-semibold text-emerald-800">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
                    </span>
                    {activeStackTab === 'ai' ? 'Zero hallucination guardrails' : 'Sub-second page speeds'}
                  </span>
                  <span className="font-semibold text-[#112219] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse shrink-0" />
                    {activeStackTab === 'ai' ? 'Real-Time Tool Calling' : '99.9% Uptime SLA'}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Terminal / Interactive Architecture Visual */}
            <div className="lg:col-span-6 relative group/terminal">
              {/* Ambient Neon Backlight Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500/25 via-teal-500/20 to-emerald-600/25 rounded-3xl blur-xl opacity-60 group-hover/terminal:opacity-95 transition-opacity duration-500 -z-10" />

              {activeStackTab === 'ai' ? (
                /* AI Live Execution Sandbox */
                <div className="bg-[#0A1711] rounded-2xl p-3.5 xs:p-4 sm:p-6 border border-emerald-900/60 shadow-[0_12px_40px_rgba(0,0,0,0.35)] text-left relative overflow-hidden backdrop-blur-md">
                  {/* Subtle Scanner Beam */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-400/[0.04] to-transparent pointer-events-none animate-sweep" style={{ animationDuration: '4.5s' }} />

                  {/* Header */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-white/10 mb-4 relative z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-xs font-bold shadow-2xs">
                        AI
                      </div>
                      <span className="text-xs font-semibold text-white tracking-tight">Autonomous Agent Router</span>
                      <span className="relative flex h-2 w-2 ml-1">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-800">
                      Confidence: 99.4%
                    </span>
                  </div>

                  {/* 3 Interactive Pipeline Steps with Flowing Connection Connectors */}
                  <div className="space-y-2 sm:space-y-2.5 text-xs font-mono relative z-10">
                    <div className="bg-white/[0.04] hover:bg-white/[0.07] rounded-xl p-2.5 sm:p-3 border border-white/5 hover:border-emerald-500/30 flex items-center justify-between transition-all group/step">
                      <div className="flex items-center gap-2 min-w-0 flex-1 mr-2">
                        <span className="w-5 h-5 rounded-md bg-emerald-900/60 border border-emerald-700/50 text-emerald-300 text-[10px] font-bold flex items-center justify-center shrink-0">1</span>
                        <span className="text-gray-200 truncate text-[11px] sm:text-xs">Vector Search (Pinecone / pgvector)</span>
                      </div>
                      <span className="text-emerald-400 font-bold bg-emerald-950/60 px-1.5 sm:px-2 py-0.5 rounded border border-emerald-800/60 text-[10px] sm:text-xs shrink-0">0.96 Match</span>
                    </div>

                    <div className="bg-white/[0.04] hover:bg-white/[0.07] rounded-xl p-2.5 sm:p-3 border border-white/5 hover:border-purple-500/30 flex items-center justify-between transition-all group/step">
                      <div className="flex items-center gap-2 min-w-0 flex-1 mr-2">
                        <span className="w-5 h-5 rounded-md bg-purple-900/60 border border-purple-700/50 text-purple-300 text-[10px] font-bold flex items-center justify-center shrink-0">2</span>
                        <span className="text-gray-200 truncate text-[11px] sm:text-xs">RAG Context &amp; Reasoning</span>
                      </div>
                      <span className="text-purple-300 font-bold bg-purple-950/60 px-1.5 sm:px-2 py-0.5 rounded border border-purple-800/60 text-[10px] sm:text-xs shrink-0">LangChain</span>
                    </div>

                    <div className="bg-white/[0.04] hover:bg-white/[0.07] rounded-xl p-2.5 sm:p-3 border border-white/5 hover:border-teal-500/30 flex items-center justify-between transition-all group/step">
                      <div className="flex items-center gap-2 min-w-0 flex-1 mr-2">
                        <span className="w-5 h-5 rounded-md bg-teal-900/60 border border-teal-700/50 text-teal-300 text-[10px] font-bold flex items-center justify-center shrink-0">3</span>
                        <span className="text-gray-200 truncate text-[11px] sm:text-xs">Multi-Tool Function Calling</span>
                      </div>
                      <span className="text-emerald-300 font-bold bg-emerald-950/60 px-1.5 sm:px-2 py-0.5 rounded border border-emerald-800/60 text-[10px] sm:text-xs shrink-0">Realtime</span>
                    </div>
                  </div>

                  {/* AI Live Telemetry Log */}
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-emerald-400 relative z-10">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <span className="text-emerald-400 animate-pulse">⚡</span>
                      <span className="text-white/80 truncate">
                        {aiLogs[logIndex].text}
                      </span>
                    </div>
                    <span className="text-[9.5px] uppercase font-bold text-emerald-300 bg-emerald-900/40 px-2 py-0.5 rounded border border-emerald-700/40 shrink-0 ml-2">
                      {aiLogs[logIndex].tag}
                    </span>
                  </div>
                </div>
              ) : (
                /* Code Terminal for MERN or PERN with Line Numbers & Real-Time Live Execution */
                <div className="bg-[#0B1D15] rounded-2xl p-3.5 xs:p-4 sm:p-6 border border-emerald-900/60 shadow-[0_12px_40px_rgba(0,0,0,0.35)] text-left relative overflow-hidden backdrop-blur-md">
                  {/* Subtle Animated Light Sweep */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-400/[0.035] to-transparent pointer-events-none animate-sweep" style={{ animationDuration: '4.8s' }} />

                  {/* Mac Window Chrome */}
                  <div className="flex items-center justify-between pb-3 sm:pb-3.5 border-b border-white/10 mb-3.5 sm:mb-4 relative z-10">
                    <div className="flex items-center gap-2">
                      {/* Mac Dots */}
                      <div className="flex items-center gap-1.5 mr-1">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] shadow-[0_0_6px_rgba(255,95,86,0.6)]"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] shadow-[0_0_6px_rgba(255,189,46,0.6)]"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] shadow-[0_0_6px_rgba(39,201,63,0.6)]"></span>
                      </div>

                      {/* Active File Tab */}
                      <div className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 rounded-md bg-emerald-950/70 border border-emerald-800/50 text-[10px] sm:text-[11px] font-mono text-emerald-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span className="truncate max-w-[130px] sm:max-w-none">{activeStackTab === 'mern' ? 'models/LeadPipeline.js' : 'prisma/schema.prisma'}</span>
                      </div>
                    </div>

                    {/* Status Indicators */}
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400/90 bg-emerald-950/70 border border-emerald-800/60 px-2 py-0.5 rounded">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                        <span>Live Stream</span>
                      </span>
                      <span className="text-[9.5px] sm:text-[10px] font-mono text-white/50 bg-white/5 px-1.5 sm:px-2 py-0.5 rounded border border-white/5">
                        TS 5.0
                      </span>
                    </div>
                  </div>

                  {/* Code Editor Body with Line Numbers */}
                  <div className="flex font-mono text-[10.5px] xs:text-[11.5px] sm:text-[12px] lg:text-[12.5px] leading-relaxed relative z-10 select-none">
                    {/* Line Numbers Column */}
                    <div className="flex flex-col text-right pr-2.5 sm:pr-3.5 mr-2.5 sm:mr-3.5 border-r border-emerald-900/60 text-emerald-600/50 select-none font-medium">
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                    </div>

                    {/* Code Lines */}
                    <div className="flex-1 space-y-1 overflow-x-auto no-scrollbar">
                      {activeStackTab === 'mern' ? (
                        <>
                          <p className="text-gray-300">
                            <span className="text-purple-400 font-semibold">const</span>{' '}
                            <span className="text-blue-300 font-semibold">pipelineSchema</span> ={' '}
                            <span className="text-purple-400 font-semibold">new</span>{' '}
                            <span className="text-yellow-300 font-semibold">Schema</span>({'{'}
                          </p>
                          <p className="pl-3 sm:pl-4 text-emerald-300">
                            client: <span className="text-blue-200">String</span>, leadsCount:{' '}
                            <span className="text-yellow-200">Number</span>, status:{' '}
                            <span className="text-emerald-400 font-semibold">'SCALING'</span>,
                          </p>
                          <p className="pl-3 sm:pl-4 text-gray-300">
                            cache: <span className="text-blue-300 font-semibold">RedisCluster</span>.<span className="text-yellow-300 font-semibold">fastRoute</span>({'{'} ttl: <span className="text-emerald-400">3600</span> {'}'})
                          </p>
                          <p className="text-gray-300">
                            {'}'});
                            <span className="inline-block w-1.5 sm:w-2 h-3.5 sm:h-4 bg-emerald-400 ml-1.5 animate-pulse align-middle shadow-[0_0_8px_#10B981]" />
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="text-purple-400 font-semibold">
                            model <span className="text-yellow-300 font-semibold">EnterpriseClient</span> {'{'}
                          </p>
                          <p className="pl-3 sm:pl-4 text-emerald-300">
                            id <span className="text-blue-200">String</span> @id @default(uuid())
                          </p>
                          <p className="pl-3 sm:pl-4 text-emerald-300">
                            dbEngine <span className="text-blue-200">PostgreSQL</span> @relation(fields: [pgId])
                          </p>
                          <p className="pl-3 sm:pl-4 text-gray-300">
                            perfScore <span className="text-yellow-200">Float</span> @default(<span className="text-emerald-400">99.8</span>)
                          </p>
                          <p className="text-purple-400">
                            {'}'}
                            <span className="inline-block w-1.5 sm:w-2 h-3.5 sm:h-4 bg-emerald-400 ml-1.5 animate-pulse align-middle shadow-[0_0_8px_#10B981]" />
                          </p>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Live Runtime Execution Drawer / Telemetry Footer */}
                  <div className="mt-4 pt-3.5 border-t border-emerald-900/60 flex items-center justify-between text-[11px] font-mono relative z-10">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <span className="relative flex h-2 w-2 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
                      </span>
                      <span className="text-white/80 truncate">
                        {activeStackTab === 'mern' ? mernLogs[logIndex].text : pernLogs[logIndex].text}
                      </span>
                    </div>
                    <span className="text-[9.5px] uppercase font-bold text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/80 shrink-0 ml-2">
                      {activeStackTab === 'mern' ? mernLogs[logIndex].tag : pernLogs[logIndex].tag}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 2. Outreach & Lead Gen Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6 items-stretch">
          {/* Card 1: Cold Email Campaign (Tall Left Card) with Animated Envelope & Floating Pills */}
          <div className="group/parcel lg:col-span-5 bg-white border border-[#E1EAE4] hover:border-emerald-500/40 rounded-[24px] sm:rounded-[28px] p-4 xs:p-5 sm:p-7 lg:p-6 xl:p-8 shadow-[0_4px_20px_-2px_rgba(18,43,34,0.04)] hover:shadow-[0_16px_36px_rgba(18,43,34,0.08)] transition-all flex flex-col justify-between min-h-[440px] sm:min-h-[480px] lg:h-full relative overflow-hidden">
            <div>
              <h3 className="text-[19px] xs:text-[20px] sm:text-[22px] font-bold text-[#112219] mb-2 sm:mb-2.5">Cold Email Infrastructure</h3>
              <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
                We set up your domains, mailboxes, SPF, DKIM, DMARC, and warmup, then write and run campaigns that land in the inbox and get replies.
              </p>

              {/* Infrastructure Health & Deliverability Control Strip */}
              <div className="mt-3.5 sm:mt-5 bg-[#F9FAF9] rounded-2xl p-2.5 xs:p-3 sm:p-3.5 border border-[#E8EFEA] relative overflow-hidden group-hover/parcel:border-emerald-500/30 transition-colors">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
                    </span>
                    <span className="text-[10.5px] xs:text-[11px] sm:text-[11.5px] font-bold text-[#112219] tracking-tight">Active Deliverability Engine</span>
                  </div>
                  <span className="text-[8.5px] xs:text-[9px] sm:text-[9.5px] font-bold text-[#0A6C25] bg-[#E8F8F0] px-2 py-0.5 rounded-full border border-[#C6EBD7]">
                    100% HEALTH
                  </span>
                </div>

                {/* Protocol Badges & Live Deliverability Specs */}
                <div className="grid grid-cols-3 gap-1 xs:gap-1.5 sm:gap-2">
                  <div className="bg-white rounded-xl p-1.5 xs:p-2 sm:p-2.5 border border-[#E2EAE5] text-center shadow-2xs hover:border-emerald-400/60 transition-colors">
                    <div className="flex items-center justify-center gap-1 text-[8px] xs:text-[8.5px] sm:text-[9.5px] text-[#697E72] font-semibold">
                      <Mail className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-600 shrink-0" />
                      <span className="truncate">Mailboxes</span>
                    </div>
                    <span className="text-[11px] xs:text-[12px] sm:text-[13px] font-extrabold text-[#112219] block mt-0.5 truncate">15 Inboxes</span>
                    <span className="text-[7.5px] xs:text-[8px] sm:text-[9px] text-[#0A6C25] font-semibold block truncate">Rotated daily</span>
                  </div>

                  <div className="bg-white rounded-xl p-1.5 xs:p-2 sm:p-2.5 border border-[#E2EAE5] text-center shadow-2xs hover:border-emerald-400/60 transition-colors">
                    <div className="flex items-center justify-center gap-1 text-[8px] xs:text-[8.5px] sm:text-[9.5px] text-[#697E72] font-semibold">
                      <ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-600 shrink-0" />
                      <span className="truncate">Protocols</span>
                    </div>
                    <span className="text-[11px] xs:text-[12px] sm:text-[13px] font-extrabold text-emerald-700 block mt-0.5 truncate">SPF • DKIM</span>
                    <span className="text-[7.5px] xs:text-[8px] sm:text-[9px] text-[#5A6E63] font-medium block truncate">DMARC Passed</span>
                  </div>

                  <div className="bg-white rounded-xl p-1.5 xs:p-2 sm:p-2.5 border border-[#E2EAE5] text-center shadow-2xs hover:border-emerald-400/60 transition-colors">
                    <div className="flex items-center justify-center gap-1 text-[8px] xs:text-[8.5px] sm:text-[9.5px] text-[#697E72] font-semibold">
                      <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-500 shrink-0" />
                      <span className="truncate">Placement</span>
                    </div>
                    <span className="text-[11px] xs:text-[12px] sm:text-[13px] font-extrabold text-[#112219] block mt-0.5 truncate">99.4% Inbox</span>
                    <span className="text-[7.5px] xs:text-[8px] sm:text-[9px] text-emerald-700 font-semibold block truncate">Spam Shielded</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Interactive Parcel Graphic with All 7 Animated Floating Buttons */}
            <div className="mt-4 sm:mt-6 mb-2 relative flex-1 flex justify-center items-center py-3 xs:py-4 sm:py-6 select-none min-h-[190px] sm:min-h-[220px] overflow-hidden">
              {/* Ethereal background radial glow */}
              <div className="absolute w-52 h-44 bg-emerald-100/40 rounded-full blur-2xl pointer-events-none -z-0" />

              <div className="relative w-[270px] sm:w-[300px] h-[180px] sm:h-[195px] flex items-center justify-center scale-[0.76] xs:scale-[0.84] sm:scale-[0.92] lg:scale-[0.84] xl:scale-100 origin-center transition-transform">
                {/* 1. Complete Envelope Graphic (Back Wall, Emerging Letter, Front Pocket, Flap, and Radar Pulse) */}
                <svg className="w-full h-full absolute inset-0 block overflow-visible select-none" viewBox="0 0 280 180" fill="none">
                  <defs>
                    <linearGradient id="parcelInterior" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#C9DED1" />
                      <stop offset="100%" stopColor="#E2ECE6" />
                    </linearGradient>
                    <linearGradient id="parcelFrontGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="100%" stopColor="#F1F7F3" />
                    </linearGradient>
                    <filter id="flapDropShadow" x="-10%" y="0%" width="120%" height="160%">
                      <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#122B22" floodOpacity="0.12" />
                    </filter>
                    <filter id="glowGreenMail" x="-50%" y="-50%" width="200%" height="200%">
                      <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#10B981" floodOpacity="0.8" />
                    </filter>
                  </defs>

                  {/* Concentric Radar Warmup Pulses emitting from envelope opening */}
                  <circle cx="140" cy="50" r="26" stroke="#A7F3D0" strokeWidth="1" strokeDasharray="3 3" opacity="0.7" className="animate-ping" style={{ animationDuration: '3s' }} />
                  <circle cx="140" cy="50" r="44" stroke="#D1FAE5" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />

                  {/* Envelope Interior Back Wall */}
                  <path
                    d="M 12 48 H 268 V 158 C 268 165 262 170 255 170 H 25 C 18 170 12 165 12 158 Z"
                    fill="url(#parcelInterior)"
                    stroke="#CADCD2"
                    strokeWidth="1.5"
                  />

                  {/* Active Animated Letter Emerging from Envelope */}
                  <g className="animate-float">
                    <rect x="36" y="22" width="208" height="96" rx="8" fill="#FFFFFF" stroke="#CADCD2" strokeWidth="1.2" />
                    {/* Letter mock header and text lines */}
                    <circle cx="56" cy="40" r="4" fill="#10B981" />
                    <line x1="68" y1="40" x2="135" y2="40" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="56" y1="56" x2="220" y2="56" stroke="#E2ECE6" strokeWidth="2" strokeLinecap="round" />
                    <line x1="56" y1="70" x2="185" y2="70" stroke="#E2ECE6" strokeWidth="2" strokeLinecap="round" />
                    <line x1="56" y1="84" x2="150" y2="84" stroke="#E2ECE6" strokeWidth="2" strokeLinecap="round" />
                  </g>

                  {/* Envelope Front Pocket (V-neck opening) */}
                  <path
                    d="M 12 48 L 140 120 L 268 48 V 158 C 268 165 262 170 255 170 H 25 C 18 170 12 165 12 158 Z"
                    fill="url(#parcelFrontGrad)"
                    stroke="#CADCD2"
                    strokeWidth="1.5"
                  />

                  {/* Front Pocket Crease Lines */}
                  <line x1="12" y1="158" x2="110" y2="100" stroke="#D7E6DD" strokeWidth="1.5" />
                  <line x1="268" y1="158" x2="170" y2="100" stroke="#D7E6DD" strokeWidth="1.5" />

                  {/* Open Flap (pointing upward to reveal letter & radiating warm-up flow) */}
                  <path
                    d="M 12 48 L 140 -20 L 268 48 Z"
                    fill="#E8F1EC"
                    stroke="#CADCD2"
                    strokeWidth="1.5"
                  />

                  {/* Traveling Energy Comets drifting upwards */}
                  <circle r="3" fill="#10B981" filter="url(#glowGreenMail)">
                    <animateMotion path="M 140 50 C 120 10, 160 -15, 140 -35" dur="2.4s" repeatCount="indefinite" />
                  </circle>
                  <circle r="2" fill="#34D399" opacity="0.8">
                    <animateMotion path="M 140 50 C 160 15, 120 -10, 140 -35" dur="2.4s" begin="1.2s" repeatCount="indefinite" />
                  </circle>
                </svg>

                {/* 2. ALL 7 ANIMATED BUTTONS (Optimized coordinates so they never clip card boundaries) */}

                {/* Button 1: Outreach (Top Center) */}
                <div className="absolute top-[-22px] left-1/2 -translate-x-1/2 z-30 animate-float">
                  <div className="inline-flex items-center gap-1.5 bg-[#D1FAE5] text-[#065F46] text-[11px] sm:text-[11.5px] font-bold px-2.5 sm:px-3 py-1 rounded-full border border-[#A7F3D0] shadow-[0_4px_12px_rgba(6,95,70,0.15)] hover:scale-105 transition-transform cursor-default">
                    <Send className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Outreach</span>
                  </div>
                </div>

                {/* Button 2: Launch (Top Left) */}
                <div className="absolute top-[4px] left-[2px] sm:left-[6px] z-30 animate-float-delayed">
                  <div className="inline-flex items-center gap-1.5 bg-[#11261D] text-white text-[10.5px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-1 rounded-full shadow-[0_4px_14px_rgba(17,38,29,0.3)] border border-emerald-500/40 hover:scale-105 transition-transform cursor-default">
                    <Rocket className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Launch</span>
                  </div>
                </div>

                {/* Button 3: 99.4% Inbox (Top Right) */}
                <div className="absolute top-[4px] right-[2px] sm:right-[6px] z-30 animate-float">
                  <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-600 to-teal-500 text-white text-[10.5px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full shadow-[0_4px_12px_rgba(16,185,129,0.25)] hover:scale-105 transition-transform cursor-default">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span>99.4% Inbox</span>
                  </div>
                </div>

                {/* Button 4: Verify lead list (Mid Left) */}
                <div className="absolute top-[64px] left-[-10px] sm:left-[-6px] z-30 animate-float">
                  <div className="inline-flex items-center gap-1.5 bg-white text-[#1C3C2E] text-[10.5px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-1 rounded-full border border-[#D5E2DA] shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:border-emerald-400 hover:scale-105 transition-all cursor-default">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verify lead list</span>
                  </div>
                </div>

                {/* Button 5: Fix spam & DNS (Mid Right) */}
                <div className="absolute top-[64px] right-[-10px] sm:right-[-6px] z-30 animate-float-delayed">
                  <div className="inline-flex items-center gap-1.5 bg-white text-[#1C3C2E] text-[10.5px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-1 rounded-full border border-[#D5E2DA] shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:border-emerald-400 hover:scale-105 transition-all cursor-default">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Fix spam & DNS</span>
                  </div>
                </div>

                {/* Button 6: Test subject lines (Bottom Left) */}
                <div className="absolute bottom-[-8px] left-[8px] sm:left-[16px] z-30 animate-float-delayed">
                  <div className="inline-flex items-center gap-1.5 bg-white text-[#1C3C2E] text-[10px] sm:text-[10.5px] font-bold px-2.5 sm:px-3 py-1 rounded-full border border-[#D5E2DA] shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:border-emerald-400 hover:scale-105 transition-all cursor-default">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Test subject lines</span>
                  </div>
                </div>

                {/* Button 7: SPF • DKIM (Bottom Right) */}
                <div className="absolute bottom-[-8px] right-[8px] sm:right-[16px] z-30 animate-float">
                  <div className="inline-flex items-center gap-1.5 bg-[#F0FDF4] text-[#0A6C25] text-[10px] sm:text-[10.5px] font-bold px-2.5 py-1 rounded-full border border-[#C6EBD7] shadow-[0_4px_12px_rgba(10,108,37,0.08)] hover:scale-105 transition-all cursor-default">
                    <Check className="w-3 h-3 text-[#14A800]" />
                    <span>SPF • DKIM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column with Card 2 & Card 3 */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Card 2: Lead Generation and List Building */}
            <div className="bg-white border border-[#E1EAE4] hover:border-[#CADAD0] rounded-[24px] sm:rounded-[28px] p-4 xs:p-5 sm:p-7 shadow-[0_4px_20px_-2px_rgba(18,43,34,0.04)] hover:shadow-[0_10px_30px_rgba(18,43,34,0.07)] transition-all flex flex-col justify-between min-h-[220px]">
              <div>
                <h3 className="text-[19px] xs:text-[20px] sm:text-[22px] font-bold text-[#112219] mb-2 sm:mb-2.5">Lead Generation and List Building</h3>
                <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
                  Targeted, verified B2B lead lists built with Apollo, Clay, and LinkedIn, matched to your ideal customer profile
                </p>
              </div>

              {/* Visual Flow: Mini Chart connecting dynamically to Clay, Modash, Apollo */}
              <div className="overflow-x-auto no-scrollbar mt-4 sm:mt-6 bg-[#F9FAF9] rounded-2xl p-2 xs:p-2.5 sm:p-5 border border-[#E8EFEA]">
                <div className="w-full flex items-center justify-between gap-1 sm:gap-2.5">
                  {/* Source Data Box */}
                  <div className="bg-white border border-[#E4EDE7] rounded-xl p-1.5 xs:p-2 sm:p-3 w-[84px] xs:w-[100px] sm:w-[130px] md:w-[140px] shadow-xs shrink-0 relative group/chart hover:border-emerald-500/40 transition-colors">
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center gap-1 sm:gap-1.5 min-w-0">
                        <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2 shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-[#10B981]"></span>
                        </span>
                        <span className="text-[10.5px] xs:text-[11.5px] sm:text-[13px] font-bold text-[#153628] truncate">$20,007</span>
                      </div>
                      <span className="text-[7.5px] xs:text-[8px] sm:text-[9px] font-bold text-[#0A6C25] bg-[#E8F8F0] px-1 sm:px-1.5 py-0.5 rounded border border-[#C6EBD7]">
                        LIVE
                      </span>
                    </div>

                    <div className="flex items-end gap-1 sm:gap-1.5 h-7 xs:h-8 sm:h-11">
                      <div className="flex-1 bg-[#E2EBE5] rounded-t-xs animate-bar-live-1" style={{ height: '35%' }}></div>
                      <div className="flex-1 bg-[#E2EBE5] rounded-t-xs animate-bar-live-2" style={{ height: '55%' }}></div>
                      <div className="flex-1 bg-[#E2EBE5] rounded-t-xs animate-bar-live-3" style={{ height: '45%' }}></div>
                      <div className="flex-1 bg-[#153C2D] rounded-t-xs" style={{ height: '85%' }}></div>
                      <div className="flex-1 bg-[#10B981] rounded-t-xs animate-pulse" style={{ height: '70%' }}></div>
                      <div className="flex-1 bg-[#E2EBE5] rounded-t-xs" style={{ height: '50%' }}></div>
                    </div>

                    <div className="mt-1 xs:mt-1.5 pt-1 xs:pt-1.5 border-t border-[#F0F5F2] flex items-center justify-between text-[8px] xs:text-[9px] sm:text-[10px] text-[#63796D] font-medium">
                      <span>Stream</span>
                      <span className="text-emerald-700 font-bold">+24%</span>
                    </div>
                  </div>

                  {/* Animated Branching Lines SVG */}
                  <div className="w-8 xs:w-12 sm:w-20 md:w-24 h-18 xs:h-22 sm:h-28 flex items-center justify-center shrink-0">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 90 120" fill="none" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="leadLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
                          <stop offset="50%" stopColor="#34D399" stopOpacity="1" />
                          <stop offset="100%" stopColor="#059669" stopOpacity="0.9" />
                        </linearGradient>
                        <filter id="glowGreen" x="-50%" y="-50%" width="200%" height="200%">
                          <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#10B981" floodOpacity="0.8" />
                        </filter>
                        <filter id="glowPink" x="-50%" y="-50%" width="200%" height="200%">
                          <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#EC4899" floodOpacity="0.8" />
                        </filter>
                        <filter id="glowAmber" x="-50%" y="-50%" width="200%" height="200%">
                          <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#F59E0B" floodOpacity="0.8" />
                        </filter>
                      </defs>

                      {/* 1. Base Dashed Guide Paths */}
                      <path d="M 0 60 C 42 60, 48 20, 90 20" stroke="#DCE8E1" strokeWidth="1.5" strokeDasharray="3 3" />
                      <path d="M 0 60 L 90 60" stroke="#DCE8E1" strokeWidth="1.5" strokeDasharray="3 3" />
                      <path d="M 0 60 C 42 60, 48 100, 90 100" stroke="#DCE8E1" strokeWidth="1.5" strokeDasharray="3 3" />

                      {/* 2. Active Flowing Dashes (animate-dash-stream) */}
                      <path d="M 0 60 C 42 60, 48 20, 90 20" stroke="url(#leadLineGrad)" strokeWidth="2.5" strokeDasharray="6 10" strokeLinecap="round" className="animate-dash-stream" />
                      <path d="M 0 60 L 90 60" stroke="url(#leadLineGrad)" strokeWidth="2.5" strokeDasharray="6 10" strokeLinecap="round" className="animate-dash-stream" />
                      <path d="M 0 60 C 42 60, 48 100, 90 100" stroke="url(#leadLineGrad)" strokeWidth="2.5" strokeDasharray="6 10" strokeLinecap="round" className="animate-dash-stream" />

                      {/* 3. Traveling Energy Comets */}
                      {/* Comet 1: Heading to Clay */}
                      <circle r="3.5" fill="#10B981" filter="url(#glowGreen)">
                        <animateMotion path="M 0 60 C 42 60, 48 20, 90 20" dur="2.2s" repeatCount="indefinite" calcMode="linear" />
                      </circle>
                      <circle r="1.5" fill="#FFFFFF">
                        <animateMotion path="M 0 60 C 42 60, 48 20, 90 20" dur="2.2s" repeatCount="indefinite" calcMode="linear" />
                      </circle>

                      {/* Comet 2: Heading to Modash */}
                      <circle r="3.5" fill="#EC4899" filter="url(#glowPink)">
                        <animateMotion path="M 0 60 L 90 60" dur="2.2s" begin="0.45s" repeatCount="indefinite" calcMode="linear" />
                      </circle>
                      <circle r="1.5" fill="#FFFFFF">
                        <animateMotion path="M 0 60 L 90 60" dur="2.2s" begin="0.45s" repeatCount="indefinite" calcMode="linear" />
                      </circle>

                      {/* Comet 3: Heading to Apollo */}
                      <circle r="3.5" fill="#F59E0B" filter="url(#glowAmber)">
                        <animateMotion path="M 0 60 C 42 60, 48 100, 90 100" dur="2.2s" begin="0.9s" repeatCount="indefinite" calcMode="linear" />
                      </circle>
                      <circle r="1.5" fill="#FFFFFF">
                        <animateMotion path="M 0 60 C 42 60, 48 100, 90 100" dur="2.2s" begin="0.9s" repeatCount="indefinite" calcMode="linear" />
                      </circle>
                    </svg>
                  </div>

                  {/* Specific Functionalities / Tools Column */}
                  <div className="flex flex-col gap-1 xs:gap-1.5 sm:gap-2 w-[100px] xs:w-[120px] sm:w-[155px] md:w-[170px] shrink-0">
                    {/* Tool 1: Clay */}
                    <div className="bg-white border border-[#E2EAE5] hover:border-emerald-400 rounded-xl px-1.5 py-1 xs:px-2 xs:py-1.5 sm:px-3 sm:py-2 flex items-center justify-between shadow-xs transition-all hover:translate-x-0.5">
                      <div className="flex items-center gap-1 sm:gap-2 min-w-0">
                        <span className="relative flex h-2 w-2 sm:h-3 sm:w-3 shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D26A] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-[#00D26A]"></span>
                        </span>
                        <div className="min-w-0">
                          <span className="font-bold text-[10px] xs:text-[11px] sm:text-xs text-[#112219] block leading-none truncate">Clay</span>
                          <span className="text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] text-[#697E72] font-medium leading-tight truncate">Enrichment</span>
                        </div>
                      </div>
                      <span className="text-[8px] xs:text-[9px] sm:text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-1 sm:px-1.5 py-0.5 rounded shrink-0">
                        +12%
                      </span>
                    </div>

                    {/* Tool 2: Modash */}
                    <div className="bg-white border border-[#E2EAE5] hover:border-pink-400 rounded-xl px-1.5 py-1 xs:px-2 xs:py-1.5 sm:px-3 sm:py-2 flex items-center justify-between shadow-xs transition-all hover:translate-x-0.5">
                      <div className="flex items-center gap-1 sm:gap-2 min-w-0">
                        <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#EC4899] text-white text-[7.5px] sm:text-[9px] font-bold flex items-center justify-center shrink-0">
                          m
                        </span>
                        <div className="min-w-0">
                          <span className="font-bold text-[10px] xs:text-[11px] sm:text-xs text-[#112219] block leading-none truncate">Modash</span>
                          <span className="text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] text-[#697E72] font-medium leading-tight truncate">Creators</span>
                        </div>
                      </div>
                      <span className="text-[8px] xs:text-[9px] sm:text-[10px] font-bold text-pink-700 bg-pink-50 border border-pink-200/80 px-1 sm:px-1.5 py-0.5 rounded shrink-0">
                        +12%
                      </span>
                    </div>

                    {/* Tool 3: Apollo */}
                    <div className="bg-white border border-[#E2EAE5] hover:border-amber-400 rounded-xl px-1.5 py-1 xs:px-2 xs:py-1.5 sm:px-3 sm:py-2 flex items-center justify-between shadow-xs transition-all hover:translate-x-0.5">
                      <div className="flex items-center gap-1 sm:gap-2 min-w-0">
                        <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#F59E0B] text-white text-[8px] sm:text-[10px] flex items-center justify-center shrink-0">
                          ☀
                        </span>
                        <div className="min-w-0">
                          <span className="font-bold text-[10px] xs:text-[11px] sm:text-xs text-[#112219] block leading-none truncate">Apollo</span>
                          <span className="text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] text-[#697E72] font-medium leading-tight truncate">B2B Contacts</span>
                        </div>
                      </div>
                      <span className="text-[8px] xs:text-[9px] sm:text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200/80 px-1 sm:px-1.5 py-0.5 rounded shrink-0">
                        +12%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Meta and Google Ads */}
            <div className="bg-white border border-[#E1EAE4] hover:border-[#CADAD0] rounded-[24px] sm:rounded-[28px] p-4 xs:p-5 sm:p-7 lg:p-7 xl:p-8 shadow-[0_4px_20px_-2px_rgba(18,43,34,0.04)] hover:shadow-[0_10px_30px_rgba(18,43,34,0.07)] transition-all flex flex-col justify-between min-h-[300px] relative overflow-hidden">
              {/* Header Row: Title & 3-Way Mode Switcher */}
              <div>
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 flex-wrap">
                      <span className="inline-flex items-center gap-1.5 text-[9px] xs:text-[9.5px] sm:text-[10.5px] font-bold text-blue-900 bg-blue-50 border border-blue-200/80 px-2 sm:px-2.5 py-0.5 rounded-full">
                        <BarChart3 className="w-3 h-3 text-blue-600 shrink-0" />
                        <span>Dual-Channel Paid Acquisition</span>
                      </span>
                      <span className="inline-flex items-center gap-1 text-[9px] xs:text-[9.5px] sm:text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                        <span>CAPI Verified</span>
                      </span>
                    </div>
                    <h3 className="text-[19px] xs:text-[20px] sm:text-[22px] font-bold text-[#112219]">Meta and Google Ads</h3>
                  </div>

                  {/* 3-Way Mode Switcher Tabs */}
                  <div className="w-full xl:w-auto grid grid-cols-3 sm:inline-flex items-center p-1 bg-[#F3F7F5] border border-[#E2EAE5] rounded-xl sm:rounded-full text-[10px] xs:text-[10.5px] sm:text-[11px] font-semibold shadow-inner text-center">
                    <button
                      type="button"
                      onClick={() => setActiveAdsTab('both')}
                      className={`px-1.5 xs:px-2 sm:px-3 py-1 rounded-lg sm:rounded-full transition-all cursor-pointer truncate ${
                        activeAdsTab === 'both'
                          ? 'bg-[#153C2D] text-white shadow-xs font-bold'
                          : 'text-[#55665D] hover:text-[#112219]'
                      }`}
                    >
                      <span className="sm:hidden">Dual Flow</span>
                      <span className="hidden sm:inline">⚡ Dual Pipeline</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveAdsTab('meta')}
                      className={`px-1.5 xs:px-2 sm:px-3 py-1 rounded-lg sm:rounded-full transition-all cursor-pointer truncate ${
                        activeAdsTab === 'meta'
                          ? 'bg-blue-600 text-white shadow-xs font-bold'
                          : 'text-[#55665D] hover:text-[#112219]'
                      }`}
                    >
                      <span className="sm:hidden">Meta Ads</span>
                      <span className="hidden sm:inline">Meta (FB &amp; IG)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveAdsTab('google')}
                      className={`px-1.5 xs:px-2 sm:px-3 py-1 rounded-lg sm:rounded-full transition-all cursor-pointer truncate ${
                        activeAdsTab === 'google'
                          ? 'bg-[#112219] text-white shadow-xs font-bold'
                          : 'text-[#55665D] hover:text-[#112219]'
                      }`}
                    >
                      <span className="sm:hidden">Google Ads</span>
                      <span className="hidden sm:inline">Google Search &amp; PMax</span>
                    </button>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
                  {activeAdsTab === 'both' &&
                    'Google Search captures bottom-of-funnel buyers actively searching to hire; Meta scales net-new demand with high-converting video hooks, 2-tap instant forms, and server-side CAPI tracking.'}
                  {activeAdsTab === 'meta' &&
                    'Engineered Meta funnels with 8-12 creative variations tested weekly, zero-drop native instant lead forms, and direct cloud server-to-server CAPI bypassing iOS 14.5+ ATT blocks.'}
                  {activeAdsTab === 'google' &&
                    'High-commercial-intent Google Search and Performance Max campaigns with 10/10 quality scores and a 1,200+ negative keyword guardrail shield that eliminates 35%+ of wasted ad spend.'}
                </p>
              </div>

              {/* ---------------------------------------------------------------
                  MODE 1: DUAL PIPELINE VISUAL STREAM (Default)
                  --------------------------------------------------------------- */}
              {activeAdsTab === 'both' && (
                <div className="w-full mt-4 sm:mt-6 bg-[#F9FAF9] rounded-2xl p-2 xs:p-2.5 sm:p-4 border border-[#E8EFEA] overflow-x-auto no-scrollbar">
                  <div className="w-full flex items-center justify-between gap-1 sm:gap-2">
                    {/* Left: Official Ad Platforms Ingestion */}
                    <div className="flex flex-col gap-1 sm:gap-1.5 shrink-0 w-[58px] xs:w-[66px] sm:w-auto">
                      {/* Meta Platform Badge */}
                      <div
                        className="inline-flex items-center gap-1 sm:gap-1.5 bg-white border border-[#DCE6E0] hover:border-[#0081FB] rounded-full px-1.5 xs:px-2 sm:px-2.5 py-0.5 sm:py-1 shadow-2xs hover:shadow-xs transition-all group/meta cursor-default"
                        title="Meta Ads (Facebook & Instagram)"
                      >
                        <MetaIcon className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 shrink-0 group-hover/meta:scale-110 transition-transform" />
                        <span className="text-[9px] xs:text-[10px] sm:text-[11px] font-bold text-[#112219] tracking-tight">Meta</span>
                      </div>

                      {/* Google Ads Platform Badge */}
                      <div
                        className="inline-flex items-center gap-1 sm:gap-1.5 bg-white border border-[#DCE6E0] hover:border-[#4285F4] rounded-full px-1.5 xs:px-2 sm:px-2.5 py-0.5 sm:py-1 shadow-2xs hover:shadow-xs transition-all group/google cursor-default"
                        title="Google Ads (Search & Performance Max)"
                      >
                        <GoogleAdsLogo className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 shrink-0 group-hover/google:scale-110 transition-transform" />
                        <span className="text-[9px] xs:text-[10px] sm:text-[11px] font-bold text-[#112219] tracking-tight">Google</span>
                      </div>

                      {/* Live Campaign Status */}
                      <div className="flex items-center gap-1 pl-0.5 sm:pl-1 pt-0.5">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#10B981]"></span>
                        </span>
                        <span className="text-[8px] xs:text-[8.5px] sm:text-[9.5px] font-semibold text-[#5A6E63] tracking-tight whitespace-nowrap">
                          Active Ads
                        </span>
                      </div>
                    </div>

                    {/* Connector 1: Ad Ingestion converging to High-Intent Leads Hub */}
                    <div className="flex-1 min-w-[8px] xs:min-w-[12px] sm:min-w-[16px] max-w-[42px] h-12 xs:h-14 sm:h-18 flex items-center justify-center shrink-0">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 36 60" fill="none" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="adStreamGradMeta" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#0081FB" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
                          </linearGradient>
                          <linearGradient id="adStreamGradGoogle" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#FBBC04" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
                          </linearGradient>
                          <filter id="glowBlue" x="-50%" y="-50%" width="200%" height="200%">
                            <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#0081FB" floodOpacity="0.8" />
                          </filter>
                        </defs>

                        {/* 1. Base Dashed Guide Paths converging into center */}
                        <path d="M 0 16 C 18 16, 18 30, 36 30" stroke="#DCE8E1" strokeWidth="1.5" strokeDasharray="3 3" />
                        <path d="M 0 44 C 18 44, 18 30, 36 30" stroke="#DCE8E1" strokeWidth="1.5" strokeDasharray="3 3" />

                        {/* 2. Flowing Animated Dashes */}
                        <path d="M 0 16 C 18 16, 18 30, 36 30" stroke="url(#adStreamGradMeta)" strokeWidth="2" strokeDasharray="4 6" strokeLinecap="round" className="animate-dash-stream" />
                        <path d="M 0 44 C 18 44, 18 30, 36 30" stroke="url(#adStreamGradGoogle)" strokeWidth="2" strokeDasharray="4 6" strokeLinecap="round" className="animate-dash-stream" />

                        {/* 3. Traveling Comet (Meta Blue) */}
                        <circle r="2.8" fill="#0081FB" filter="url(#glowBlue)">
                          <animateMotion path="M 0 16 C 18 16, 18 30, 36 30" dur="1.8s" repeatCount="indefinite" calcMode="linear" />
                        </circle>
                        {/* Traveling Comet (Google Amber) */}
                        <circle r="2.8" fill="#F59E0B">
                          <animateMotion path="M 0 44 C 18 44, 18 30, 36 30" dur="1.8s" begin="0.9s" repeatCount="indefinite" calcMode="linear" />
                        </circle>
                      </svg>
                    </div>

                    {/* Center: High-Intent Leads Hub */}
                    <div className="shrink-0 relative group/hub">
                      <div className="inline-flex items-center gap-1 sm:gap-1.5 bg-[#122B22] text-white px-1.5 xs:px-2 sm:px-3 py-1 sm:py-2 rounded-full text-[8.5px] xs:text-[9.5px] sm:text-[11.5px] font-bold shadow-[0_4px_14px_rgba(18,43,34,0.22)] border border-emerald-500/35">
                        <span className="relative flex h-1.5 w-1.5 shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#34D399]"></span>
                        </span>
                        <span className="tracking-tight whitespace-nowrap">High-Intent Leads</span>
                      </div>
                    </div>

                    {/* Connector 2: Branching from Hub to Specific Outcomes */}
                    <div className="flex-1 min-w-[8px] xs:min-w-[12px] sm:min-w-[16px] max-w-[42px] h-14 xs:h-16 sm:h-22 flex items-center justify-center shrink-0">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 36 80" fill="none" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="hubOutflowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#10B981" stopOpacity="0.9" />
                            <stop offset="50%" stopColor="#34D399" stopOpacity="1" />
                            <stop offset="100%" stopColor="#A855F7" stopOpacity="0.9" />
                          </linearGradient>
                          <filter id="glowPurple" x="-50%" y="-50%" width="200%" height="200%">
                            <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#A855F7" floodOpacity="0.8" />
                          </filter>
                          <filter id="glowGreen2" x="-50%" y="-50%" width="200%" height="200%">
                            <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#10B981" floodOpacity="0.8" />
                          </filter>
                        </defs>

                        {/* 1. Base Dashed Guide Paths */}
                        <path d="M 0 40 C 16 40, 20 14, 36 14" stroke="#DCE8E1" strokeWidth="1.5" strokeDasharray="3 3" />
                        <path d="M 0 40 L 36 40" stroke="#DCE8E1" strokeWidth="1.5" strokeDasharray="3 3" />
                        <path d="M 0 40 C 16 40, 20 66, 36 66" stroke="#DCE8E1" strokeWidth="1.5" strokeDasharray="3 3" />

                        {/* 2. Active Flowing Dashes */}
                        <path d="M 0 40 C 16 40, 20 14, 36 14" stroke="url(#hubOutflowGrad)" strokeWidth="2" strokeDasharray="4 6" strokeLinecap="round" className="animate-dash-stream" />
                        <path d="M 0 40 L 36 40" stroke="url(#hubOutflowGrad)" strokeWidth="2" strokeDasharray="4 6" strokeLinecap="round" className="animate-dash-stream" />
                        <path d="M 0 40 C 16 40, 20 66, 36 66" stroke="url(#hubOutflowGrad)" strokeWidth="2" strokeDasharray="4 6" strokeLinecap="round" className="animate-dash-stream" />

                        {/* 3. Traveling Energy Comets */}
                        <circle r="2.8" fill="#10B981" filter="url(#glowGreen2)">
                          <animateMotion path="M 0 40 C 16 40, 20 14, 36 14" dur="2.0s" repeatCount="indefinite" calcMode="linear" />
                        </circle>
                        <circle r="1.4" fill="#FFFFFF">
                          <animateMotion path="M 0 40 C 16 40, 20 14, 36 14" dur="2.0s" repeatCount="indefinite" calcMode="linear" />
                        </circle>

                        <circle r="2.8" fill="#3B82F6" filter="url(#glowBlue)">
                          <animateMotion path="M 0 40 L 36 40" dur="2.0s" begin="0.4s" repeatCount="indefinite" calcMode="linear" />
                        </circle>
                        <circle r="1.4" fill="#FFFFFF">
                          <animateMotion path="M 0 40 L 36 40" dur="2.0s" begin="0.4s" repeatCount="indefinite" calcMode="linear" />
                        </circle>

                        <circle r="2.8" fill="#A855F7" filter="url(#glowPurple)">
                          <animateMotion path="M 0 40 C 16 40, 20 66, 36 66" dur="2.0s" begin="0.8s" repeatCount="indefinite" calcMode="linear" />
                        </circle>
                        <circle r="1.4" fill="#FFFFFF">
                          <animateMotion path="M 0 40 C 16 40, 20 66, 36 66" dur="2.0s" begin="0.8s" repeatCount="indefinite" calcMode="linear" />
                        </circle>
                      </svg>
                    </div>

                    {/* Right: The 3 Specific Outcomes */}
                    <div className="flex flex-col gap-1 sm:gap-1.5 shrink-0 w-[84px] xs:w-[94px] sm:w-[136px]">
                      {/* Outcome 1: Calls Booked */}
                      <div className="bg-white border border-[#E2EAE5] hover:border-emerald-400 rounded-lg sm:rounded-xl px-1.5 py-0.5 xs:py-1 sm:px-2.5 sm:py-1.5 flex items-center gap-1 sm:gap-2 shadow-2xs transition-all hover:translate-x-0.5 group/f1">
                        <div className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6.5 sm:h-6.5 rounded-md sm:rounded-lg bg-[#E8F8F0] border border-[#C6EBD7] flex items-center justify-center shrink-0">
                          <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-700 group-hover/f1:scale-110 transition-transform" />
                        </div>
                        <div className="text-left min-w-0 flex-1">
                          <span className="font-bold text-[8px] xs:text-[9px] sm:text-[11px] text-[#112219] block leading-tight truncate">Calls Booked</span>
                          <span className="text-[7px] xs:text-[7.5px] sm:text-[9px] text-[#697E72] font-medium leading-none block truncate mt-0.5">Cal.com</span>
                        </div>
                      </div>

                      {/* Outcome 2: 5.6× ROAS */}
                      <div className="bg-white border border-[#E2EAE5] hover:border-blue-400 rounded-lg sm:rounded-xl px-1.5 py-0.5 xs:py-1 sm:px-2.5 sm:py-1.5 flex items-center gap-1 sm:gap-2 shadow-2xs transition-all hover:translate-x-0.5 group/f2">
                        <div className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6.5 sm:h-6.5 rounded-md sm:rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center shrink-0">
                          <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-600 group-hover/f2:scale-110 transition-transform" />
                        </div>
                        <div className="text-left min-w-0 flex-1">
                          <span className="font-bold text-[8px] xs:text-[9px] sm:text-[11px] text-[#112219] block leading-tight truncate">5.6× ROAS</span>
                          <span className="text-[7px] xs:text-[7.5px] sm:text-[9px] text-[#697E72] font-medium leading-none block truncate mt-0.5">Positive ROI</span>
                        </div>
                      </div>

                      {/* Outcome 3: CRM Verified */}
                      <div className="bg-white border border-[#E2EAE5] hover:border-purple-400 rounded-lg sm:rounded-xl px-1.5 py-0.5 xs:py-1 sm:px-2.5 sm:py-1.5 flex items-center gap-1 sm:gap-2 shadow-2xs transition-all hover:translate-x-0.5 group/f3">
                        <div className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6.5 sm:h-6.5 rounded-md sm:rounded-lg bg-[#FAF5FF] border border-[#E9D5FF] flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-600 group-hover/f3:scale-110 transition-transform" />
                        </div>
                        <div className="text-left min-w-0 flex-1">
                          <span className="font-bold text-[8px] xs:text-[9px] sm:text-[11px] text-[#112219] block leading-tight truncate">CRM Verified</span>
                          <span className="text-[7px] xs:text-[7.5px] sm:text-[9px] text-[#697E72] font-medium leading-none block truncate mt-0.5">HubSpot</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dual Features Proof Strip */}
                  <div className="mt-3 pt-2.5 sm:pt-3 border-t border-[#EEF4F0] flex flex-wrap items-center justify-between gap-1.5 sm:gap-2 text-[8.5px] xs:text-[9px] sm:text-[10px] text-[#52635A]">
                    <span className="inline-flex items-center gap-1 font-semibold text-emerald-800 shrink-0">
                      <Zap className="w-3 h-3 text-emerald-600" />
                      <span>Server-Side CAPI (iOS Bypassed)</span>
                    </span>
                    <span className="inline-flex items-center gap-1 font-semibold text-blue-800 shrink-0">
                      <Check className="w-3 h-3 text-blue-600" />
                      <span>8.4% Native Form CVR</span>
                    </span>
                    <span className="inline-flex items-center gap-1 font-semibold text-[#112219] shrink-0">
                      <Sparkles className="w-3 h-3 text-amber-500" />
                      <span>10/10 Quality Score</span>
                    </span>
                  </div>
                </div>
              )}

              {/* ---------------------------------------------------------------
                  MODE 2: META ADS DEEP-DIVE SIMULATOR
                  --------------------------------------------------------------- */}
              {activeAdsTab === 'meta' && (
                <div className="w-full mt-5 bg-[#F8FAFD] rounded-2xl p-4 border border-blue-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between pb-2.5 border-b border-blue-100">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                        Z
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[#0F1E17] block">Zexta Growth Lab • Meta In-Feed</span>
                        <span className="text-[10px] text-gray-400">Sponsored • Creative Testing &amp; Native Forms</span>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                      <span>Live CAPI Sync</span>
                    </span>
                  </div>

                  {/* Creative Banner */}
                  <div className="bg-gradient-to-r from-[#0D231A] to-[#164332] rounded-xl p-3 sm:p-3.5 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3 shadow-2xs">
                    <div>
                      <span className="bg-emerald-400 text-[#0A1C15] text-[8.5px] sm:text-[9px] font-black uppercase px-2 py-0.5 rounded-full tracking-wider inline-block mb-1">
                        14-Day Calendar Guarantee
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold leading-tight">Fill Your Pipeline with 30+ B2B Calls</h4>
                      <p className="text-[10px] sm:text-[10.5px] text-emerald-200 mt-0.5">Native Instant Forms + 0% page load drop-off.</p>
                    </div>
                    <div className="p-1.5 sm:p-2 bg-white/10 rounded-lg text-center shrink-0 border border-white/10 self-end sm:self-auto min-w-[56px]">
                      <span className="text-[8.5px] sm:text-[9px] text-white/70 block uppercase font-mono">ROAS</span>
                      <span className="text-xs sm:text-sm font-extrabold text-emerald-300 font-mono">5.6x</span>
                    </div>
                  </div>

                  {/* 3 Meta Performance Specs */}
                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-center text-xs">
                    <div className="p-1.5 sm:p-2 bg-white rounded-lg border border-[#E2ECE6] shadow-2xs">
                      <span className="text-[8.5px] sm:text-[9.5px] text-gray-500 uppercase font-bold block truncate">Avg CTR</span>
                      <span className="text-[11px] sm:text-xs font-black text-blue-700 font-mono">3.8%</span>
                      <span className="text-[8px] sm:text-[8.5px] text-gray-400 block truncate">Top 1% Rank</span>
                    </div>
                    <div className="p-1.5 sm:p-2 bg-white rounded-lg border border-[#E2ECE6] shadow-2xs">
                      <span className="text-[8.5px] sm:text-[9.5px] text-gray-500 uppercase font-bold block truncate">Form CVR</span>
                      <span className="text-[11px] sm:text-xs font-black text-emerald-700 font-mono">8.4%</span>
                      <span className="text-[8px] sm:text-[8.5px] text-gray-400 block truncate">Pre-Filled</span>
                    </div>
                    <div className="p-1.5 sm:p-2 bg-white rounded-lg border border-[#E2ECE6] shadow-2xs">
                      <span className="text-[8.5px] sm:text-[9.5px] text-gray-500 uppercase font-bold block truncate">CAPI Match</span>
                      <span className="text-[11px] sm:text-xs font-black text-emerald-800 font-mono">9.8/10</span>
                      <span className="text-[8px] sm:text-[8.5px] text-gray-400 block truncate">iOS Bypass</span>
                    </div>
                  </div>
                </div>
              )}

              {/* ---------------------------------------------------------------
                  MODE 3: GOOGLE ADS DEEP-DIVE SIMULATOR
                  --------------------------------------------------------------- */}
              {activeAdsTab === 'google' && (
                <div className="w-full mt-5 bg-[#FAFDFB] rounded-2xl p-3 sm:p-4 border border-emerald-200/80 shadow-xs space-y-2.5 sm:space-y-3">
                  {/* Google Search Bar Mockup */}
                  <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 bg-white border border-[#E2ECE6] rounded-xl text-xs">
                    <Search className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span className="font-medium text-[#112219] truncate text-[10.5px] sm:text-[11.5px]">
                      hire b2b cold outreach agency for saas
                    </span>
                    <span className="ml-auto text-[8.5px] sm:text-[9.5px] font-mono text-emerald-700 bg-emerald-50 px-1.5 sm:px-2 py-0.5 rounded border border-emerald-200 shrink-0">
                      Exact Match
                    </span>
                  </div>

                  {/* Google Sponsored Card */}
                  <div className="bg-white rounded-xl p-2.5 sm:p-3 border border-[#E2ECE6] space-y-1">
                    <div className="flex items-center gap-1.5 text-[10px] sm:text-[10.5px]">
                      <span className="font-bold text-[#202124]">Sponsored</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-gray-500 font-mono text-[9.5px] sm:text-[10.5px] truncate">zexta.co › b2b-outbound</span>
                    </div>
                    <h4 className="text-[11.5px] sm:text-[13px] font-bold text-[#1a0dab] hover:underline cursor-pointer leading-snug">
                      Zexta™ B2B Lead Gen &amp; Paid Ads | Pack Your Pipeline (30+ Calls/Mo)
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-[#4d5156] leading-relaxed">
                      Stop burning cash on generic clicks. Commercial exact-match Google Search &amp; PMax with negative keyword guardrails.
                    </p>

                    {/* Sitelinks Mini Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                      <span className="text-[9.5px] sm:text-[10px] text-[#1a0dab] font-semibold bg-[#F6FAF8] p-1.5 rounded border border-[#E2ECE6] truncate">
                        📊 5.6x Average ROAS
                      </span>
                      <span className="text-[9.5px] sm:text-[10px] text-[#1a0dab] font-semibold bg-[#F6FAF8] p-1.5 rounded border border-[#E2ECE6] truncate">
                        ⚡ Instant Cal.com Booking
                      </span>
                    </div>
                  </div>

                  {/* 3 Google Performance Specs */}
                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-center text-xs">
                    <div className="p-1.5 sm:p-2 bg-white rounded-lg border border-[#E2ECE6] shadow-2xs">
                      <span className="text-[8.5px] sm:text-[9.5px] text-gray-500 uppercase font-bold block truncate">Quality Score</span>
                      <span className="text-[11px] sm:text-xs font-black text-emerald-800 font-mono">10 / 10</span>
                      <span className="text-[8px] sm:text-[8.5px] text-gray-400 block truncate">Above Avg</span>
                    </div>
                    <div className="p-1.5 sm:p-2 bg-white rounded-lg border border-[#E2ECE6] shadow-2xs">
                      <span className="text-[8.5px] sm:text-[9.5px] text-gray-500 uppercase font-bold block truncate">Top of Page</span>
                      <span className="text-[11px] sm:text-xs font-black text-emerald-700 font-mono">94.6%</span>
                      <span className="text-[8px] sm:text-[8.5px] text-gray-400 block truncate">Impression</span>
                    </div>
                    <div className="p-1.5 sm:p-2 bg-white rounded-lg border border-[#E2ECE6] shadow-2xs">
                      <span className="text-[8.5px] sm:text-[9.5px] text-gray-500 uppercase font-bold block truncate">Negative Shield</span>
                      <span className="text-[11px] sm:text-xs font-black text-purple-700 font-mono">1,200+</span>
                      <span className="text-[8px] sm:text-[8.5px] text-gray-400 block truncate">Waste Cut</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 3. Automation & Influencer Outreach Row with Interactive Micro-Workflows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-white border border-[#E1EAE4] hover:border-emerald-500/50 rounded-[20px] sm:rounded-[24px] p-4 xs:p-5 sm:p-6 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div className="flex items-start gap-2.5 xs:gap-3 sm:gap-4">
              <div className="w-9 h-9 xs:w-10 xs:h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-800 shrink-0 group-hover:scale-110 group-hover:bg-emerald-100 transition-all">
                <Bot className="w-4 h-4 xs:w-5 xs:h-5 text-emerald-700 animate-pulse" />
              </div>
              <div>
                <h4 className="text-[14.5px] xs:text-[15px] sm:text-base font-bold text-[#112219] mb-1">Marketing Automation</h4>
                <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
                  Multi-channel follow-ups, CRM syncing, and automated lead routing so no prospect ever slips through the cracks.
                </p>
              </div>
            </div>

            {/* Interactive Live Automation Flow Ribbon */}
            <div className="mt-3.5 sm:mt-4 pt-3 border-t border-[#F0F5F2] flex items-center justify-between text-[8.5px] xs:text-[9.5px] sm:text-[10.5px] font-semibold text-[#153C2D] gap-1 select-none overflow-x-auto no-scrollbar">
              <span className="flex items-center gap-1 sm:gap-1.5 bg-[#F4F9F6] border border-[#D5E5DC] px-1.5 xs:px-2 py-0.5 xs:py-1 rounded-full shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span>Form Webhook</span>
              </span>
              <span className="text-emerald-500 font-bold animate-pulse shrink-0">→</span>
              <span className="bg-[#F4F9F6] border border-[#D5E5DC] px-1.5 xs:px-2 py-0.5 xs:py-1 rounded-full shrink-0">
                CRM Routing
              </span>
              <span className="text-emerald-500 font-bold animate-pulse shrink-0">→</span>
              <span className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-1.5 xs:px-2 py-0.5 xs:py-1 rounded-full font-bold shrink-0">
                Fast Follow-up
              </span>
            </div>
          </div>

          <div className="bg-white border border-[#E1EAE4] hover:border-emerald-500/50 rounded-[20px] sm:rounded-[24px] p-4 xs:p-5 sm:p-6 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div className="flex items-start gap-2.5 xs:gap-3 sm:gap-4">
              <div className="w-9 h-9 xs:w-10 xs:h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-800 shrink-0 group-hover:scale-110 group-hover:bg-emerald-100 transition-all">
                <Sparkles className="w-4 h-4 xs:w-5 xs:h-5 text-amber-500 animate-pulse" />
              </div>
              <div>
                <h4 className="text-[14.5px] xs:text-[15px] sm:text-base font-bold text-[#112219] mb-1">Influencer Sourcing and Outreach</h4>
                <p className="text-xs sm:text-sm text-[#52635A] leading-relaxed">
                  Targeted creator vetting, custom outreach templates, and negotiation for high-ROI influencer partnerships.
                </p>
              </div>
            </div>

            {/* Interactive Creator Badges Ribbon */}
            <div className="mt-3.5 sm:mt-4 pt-3 border-t border-[#F0F5F2] flex items-center justify-between text-[9px] xs:text-[10px] sm:text-[11px] gap-2 select-none overflow-x-auto no-scrollbar">
              <div className="flex items-center gap-1.5 shrink-0">
                <div className="flex -space-x-1.5">
                  <span className="w-4.5 h-4.5 xs:w-5 xs:h-5 sm:w-6 sm:h-6 rounded-full bg-[#122B22] text-emerald-300 text-[7.5px] xs:text-[8px] sm:text-[9px] font-bold flex items-center justify-center border-2 border-white shadow-2xs">YT</span>
                  <span className="w-4.5 h-4.5 xs:w-5 xs:h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-tr from-amber-500 to-pink-600 text-white text-[7.5px] xs:text-[8px] sm:text-[9px] font-bold flex items-center justify-center border-2 border-white shadow-2xs">IG</span>
                  <span className="w-4.5 h-4.5 xs:w-5 xs:h-5 sm:w-6 sm:h-6 rounded-full bg-blue-600 text-white text-[7.5px] xs:text-[8px] sm:text-[9px] font-bold flex items-center justify-center border-2 border-white shadow-2xs">X</span>
                </div>
                <span className="text-[9.5px] xs:text-[10px] sm:text-[10.5px] font-semibold text-[#153C2D]">500+ Creators Vetted</span>
              </div>
              <span className="inline-flex items-center gap-1 bg-[#F2FAF5] border border-[#CDE5D8] text-emerald-800 text-[8.5px] xs:text-[9.5px] sm:text-[10px] font-bold px-1.5 xs:px-2 sm:px-2.5 py-0.5 rounded-full shrink-0">
                <Check className="w-3 h-3 text-[#10B981]" />
                <span>Verified ROI</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
