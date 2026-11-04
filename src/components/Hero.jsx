import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Star } from 'lucide-react';
import { ClayLogo, HighLevelLogo, MetaLogo, InstantlyLogo, KlaviyoLogo } from './Icons';
import HeroCardStack from './HeroCardStack';
import { upworkLeftReviews, upworkRightReviews } from '../data/upworkReviews';

import frameFlowgrid from '../assets/frame_flowgrid.png';
import frameFlowline from '../assets/frame_flowline.png';
import frameWeihu from '../assets/frame_weihu.png';
import frameBoltshift from '../assets/frame_boltshift.png';
import frameHelixon from '../assets/frame_helixon.png';

const leftTestimonialCards = upworkLeftReviews;
const rightTestimonialCards = upworkRightReviews;

const showcaseCards = [
  {
    id: 'flowgrid',
    brand: 'FlowGrid',
    category: 'Meta ads - lead campaigns',
    metric: '4x',
    metricLabel: 'Ad performance',
    systemBadge: 'Meta Ads Engine',
    frame: frameFlowgrid,
  },
  {
    id: 'flowline',
    brand: 'Flowline',
    category: 'Email automation - workflows',
    metric: '+40%',
    metricLabel: 'Follow-up replies',
    systemBadge: 'Email Automation',
    frame: frameFlowline,
  },
  {
    id: 'welhu',
    brand: 'Welhu',
    category: 'List building - enrichment',
    metric: '10k',
    metricLabel: 'Verified leads',
    systemBadge: 'Data Enrichment',
    frame: frameWeihu,
  },
  {
    id: 'boltshift',
    brand: 'Boltshift',
    category: 'Lead generation - pipeline',
    metric: '3x',
    metricLabel: 'Booked meetings',
    systemBadge: 'Pipeline Growth',
    frame: frameBoltshift,
  },
  {
    id: 'helixon',
    brand: 'Helixon',
    category: 'Cold email - outreach',
    metric: '+65%',
    metricLabel: 'Reply rate',
    systemBadge: 'Outreach Engine',
    frame: frameHelixon,
  },
];

// Duplicate cards for seamless infinite continuous roaming loop
const duplicatedCards = [...showcaseCards, ...showcaseCards];

function ShowcaseScreenFrame({ card, onBookCall }) {
  return (
    <div
      onClick={onBookCall}
      className="hero-screen-frame group relative flex-none w-[280px] sm:w-[380px] md:w-[460px] lg:w-[520px] rounded-[18px] sm:rounded-[24px] overflow-hidden border border-[#D5E1D9] hover:border-emerald-500 shadow-[0_8px_30px_rgba(18,43,34,0.08)] hover:shadow-[0_20px_45px_rgba(18,43,34,0.18)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer select-none bg-white p-2 sm:p-2.5"
    >
      <div className="overflow-hidden rounded-[14px] sm:rounded-[18px] aspect-[520/344] relative bg-[#E8EEF5]">
        <img
          src={card.frame}
          alt={`${card.brand} - Screen Frame`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default function Hero({ onBookCall }) {
  const [mobileActiveTab, setMobileActiveTab] = useState('left');

  return (
    <section id="hero" className="hero-section relative overflow-hidden pt-28 sm:pt-32 pb-14 sm:pb-16">
      {/* Background vertical mint aura glow columns with gentle organic breathing */}
      <div className="hero-glow-bg pointer-events-none absolute inset-x-0 top-0 flex justify-center gap-24 sm:gap-44 h-[640px] z-0">
        <div className="glow-strip glow-strip-1 w-32 sm:w-44 h-full bg-gradient-to-b from-emerald-200/35 via-emerald-100/10 to-transparent blur-3xl animate-pulse-slow"></div>
        <div className="glow-strip glow-strip-2 w-48 sm:w-72 h-full bg-gradient-to-b from-emerald-300/40 via-emerald-100/15 to-transparent blur-3xl animate-pulse-slow [animation-delay:1.5s]"></div>
        <div className="glow-strip glow-strip-3 w-32 sm:w-44 h-full bg-gradient-to-b from-emerald-200/35 via-emerald-100/10 to-transparent blur-3xl animate-pulse-slow [animation-delay:3s]"></div>
      </div>

      <div className="container hero-container relative z-10 mx-auto px-3 sm:px-6 text-center max-w-[1400px]">
        {/* Top pill badge with subtle float */}
        <div className="hero-badge-wrapper flex justify-center mb-5 sm:mb-6">
          <a
            href="#testimonials"
            className="hero-pill-badge inline-flex items-center gap-2 sm:gap-2.5 bg-white border border-[#DFE8E2] px-3.5 sm:px-4 py-1.5 rounded-full text-[12px] sm:text-[13px] font-medium text-[#17382B] shadow-sm hover:border-[#BDCEC4] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <span className="pulse-dot"></span>
            <span>Top Rated by 100+ clients worldwide</span>
            <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* 3-Column Flanking Layout for Laptop & Desktop (Visible from 1024px lg upwards) */}
        <div className="hero-flanking-layout flex items-start justify-between gap-3 lg:gap-4 xl:gap-6 2xl:gap-8 max-w-[1400px] mx-auto">
          {/* Left 3-Cards Stack: visible on laptops (1024px+) & desktops without controls */}
          <div className="hero-flank-column flank-left hidden lg:block w-[218px] xl:w-[235px] 2xl:w-[250px] flex-shrink-0 text-left pt-2 transition-all duration-300">
            <HeroCardStack side="left" cards={leftTestimonialCards} showControls={false} />
          </div>

          {/* Center Main Header Content */}
          <div className="hero-header-content flex-1 max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto px-1 sm:px-4">
            <h1 className="hero-title text-3xl sm:text-4xl lg:text-[38px] xl:text-[46px] 2xl:text-[52px] font-extrabold text-[#0F1E17] tracking-tight leading-[1.14] mb-4 sm:mb-5">
              Predictable Leads and Growth
              <br className="hidden sm:inline" />{' '}
              <span className="bg-gradient-to-r from-[#0F1E17] via-[#153C2D] to-[#10B981] bg-clip-text text-transparent">
                For Ambitious B2B Businesses
              </span>
            </h1>

            <p className="hero-subtitle text-[14px] sm:text-[15.5px] xl:text-[16px] text-[#495D53] max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              We build cold outreach systems, targeted lead lists, and paid ad campaigns that fill your calendar with qualified sales calls every month.
            </p>

            {/* CTA Button in Full Round Form */}
            <div className="hero-cta-wrapper flex justify-center mb-5 sm:mb-6">
              <button
                type="button"
                className="btn-primary hero-main-btn group inline-flex items-center gap-2 sm:gap-2.5 bg-gradient-to-r from-[#122B22] via-[#163E2D] to-[#122B22] text-white px-6 sm:px-9 py-3 sm:py-4 rounded-full font-bold text-[14px] sm:text-[15.5px] shadow-[0_8px_24px_rgba(18,43,34,0.22)] hover:shadow-[0_12px_32px_rgba(16,185,129,0.32)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer border border-emerald-500/20"
                style={{ borderRadius: '9999px' }}
                onClick={onBookCall}
              >
                <span>Book a Free Strategy Call</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Social Proof Rating */}
            <div className="hero-social-proof inline-flex items-center gap-2 sm:gap-2.5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-gray-200/80 shadow-xs hover:shadow-sm transition-shadow">
              <div className="stars-row flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="review-count-text text-xs sm:text-[12.5px] font-semibold text-[#2C3E34]">
                Rated 5.0 from 100+ clients worldwide
              </span>
            </div>
          </div>

          {/* Right 3-Cards Stack: visible on laptops (1024px+) & desktops without controls */}
          <div className="hero-flank-column flank-right hidden lg:block w-[218px] xl:w-[235px] 2xl:w-[250px] flex-shrink-0 text-left pt-2 transition-all duration-300">
            <HeroCardStack side="right" cards={rightTestimonialCards} showControls={false} />
          </div>
        </div>

        {/* Mobile/Tablet Fallback (< 1024px) */}
        <div className="block lg:hidden mt-8 sm:mt-10 max-w-2xl mx-auto px-1 sm:px-2">
          {/* Mobile Phone Tab Switcher (< 640px) */}
          <div className="flex sm:hidden items-center justify-center gap-2 mb-4">
            <button
              type="button"
              onClick={() => setMobileActiveTab('left')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                mobileActiveTab === 'left'
                  ? 'bg-[#122B22] text-white shadow-xs'
                  : 'bg-white text-[#495D53] border border-[#D5E1D9]'
              }`}
            >
              <span>✉ Cold Email (3)</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileActiveTab('right')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                mobileActiveTab === 'right'
                  ? 'bg-[#122B22] text-white shadow-xs'
                  : 'bg-white text-[#495D53] border border-[#D5E1D9]'
              }`}
            >
              <span>📈 Paid Ads (3)</span>
            </button>
          </div>

          {/* Mobile Phone Card View: Single active deck with touch swipe & pagination */}
          <div className="block sm:hidden text-left max-w-[280px] mx-auto">
            <HeroCardStack
              side={mobileActiveTab}
              cards={mobileActiveTab === 'left' ? leftTestimonialCards : rightTestimonialCards}
            />
          </div>

          {/* Tablet Card View (640px - 1023px): Two comfortable side-by-side columns */}
          <div className="hidden sm:grid sm:grid-cols-2 gap-5 text-left">
            <div>
              <div className="text-xs font-bold text-[#153C2D] mb-2 px-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Cold Email & Warmup</span>
              </div>
              <HeroCardStack side="left" cards={leftTestimonialCards} />
            </div>
            <div>
              <div className="text-xs font-bold text-[#153C2D] mb-2 px-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Paid Ads & Tracking</span>
              </div>
              <HeroCardStack side="right" cards={rightTestimonialCards} />
            </div>
          </div>
        </div>

        {/* Continuous Roaming Screen Frames Showcase */}
        <div className="hero-showcase-section mt-12 sm:mt-16 relative">
          {/* Full-width continuous roaming screen frames marquee with zero horizontal scroll overflow */}
          <div className="roam-marquee-container relative w-screen max-w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden py-4">
            {/* Left & Right gradient vignettes for edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-28 md:w-44 bg-gradient-to-r from-[#F6F9F7] via-[#F6F9F7]/85 to-transparent z-20"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-28 md:w-44 bg-gradient-to-l from-[#F6F9F7] via-[#F6F9F7]/85 to-transparent z-20"></div>

            {/* Roaming Track 1 & Track 2 for infinite seamless loop */}
            <div className="flex w-max select-none">
              {/* Track 1 */}
              <div className="flex shrink-0 items-center gap-4 sm:gap-8 pr-4 sm:pr-8 animate-roam-marquee">
                {duplicatedCards.map((card, idx) => (
                  <ShowcaseScreenFrame
                    key={`track1-${card.id}-${idx}`}
                    card={card}
                    onBookCall={onBookCall}
                  />
                ))}
              </div>

              {/* Track 2 (Duplicate for seamless continuous roaming) */}
              <div
                className="flex shrink-0 items-center gap-4 sm:gap-8 pr-4 sm:pr-8 animate-roam-marquee"
                aria-hidden="true"
              >
                {duplicatedCards.map((card, idx) => (
                  <ShowcaseScreenFrame
                    key={`track2-${card.id}-${idx}`}
                    card={card}
                    onBookCall={onBookCall}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Partner Logos Bar ("Powered by the tools that top teams trust") */}
        <div className="hero-trust-bar mt-12 sm:mt-14 pt-8 sm:pt-10 border-t border-[#E5EBE7]">
          <p className="trust-bar-heading text-[11px] sm:text-xs font-semibold text-[#72827A] uppercase tracking-widest mb-5 sm:mb-6">
            Powered by the tools that top teams trust
          </p>
          <div className="trust-logos-row flex items-center justify-center gap-6 sm:gap-10 md:gap-14 flex-wrap px-2">
            <div className="trust-logo-item opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105 flex items-center">
              <ClayLogo className="h-5 sm:h-7 w-auto text-gray-700" />
            </div>
            <div className="trust-logo-item opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105 flex items-center">
              <HighLevelLogo className="h-5 sm:h-7 w-auto text-gray-700" />
            </div>
            <div className="trust-logo-item opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105 flex items-center">
              <MetaLogo className="h-5 sm:h-7 w-auto text-gray-700" />
            </div>
            <div className="trust-logo-item opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105 flex items-center">
              <InstantlyLogo className="h-5 sm:h-7 w-auto text-gray-700" />
            </div>
            <div className="trust-logo-item opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105 flex items-center">
              <KlaviyoLogo className="h-5 sm:h-7 w-auto text-gray-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
