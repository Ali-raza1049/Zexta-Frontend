import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Star } from 'lucide-react';
import { PartnerLogosMarquee } from './Icons';
import HeroCardStack from './HeroCardStack';
import { upworkLeftReviews, upworkRightReviews } from '../data/upworkReviews';

import avatarClient1 from '../assets/avatar_client_1.jpg';
import avatarClient2 from '../assets/avatar_client_2.jpg';
import avatarClient3 from '../assets/avatar_client_3.jpg';

import frameFlowgrid from '../assets/frame_flowgrid.png';
import frameFlowline from '../assets/frame_flowline.png';
import frameWeihu from '../assets/frame_weihu.png';
import frameBoltshift from '../assets/frame_boltshift.png';
import frameHelixon from '../assets/frame_helixon.png';
import heroGlassBg from '../assets/hero_glass_bg.png';

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
    <section id="hero" className="hero-section relative overflow-hidden pt-24 sm:pt-28 pb-14 sm:pb-16">
      {/* Background Fluted Glass Backdrop */}
      <div className="hero-glass-backdrop" aria-hidden="true">
        <img
          src={heroGlassBg}
          alt=""
          className="w-full h-[580px] sm:h-[680px] lg:h-[760px] object-cover object-top select-none"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
          }}
        />
      </div>

      <div className="hero-container w-full relative z-10 mx-auto px-3 sm:px-6 text-center max-w-[1260px]">
        {/* Top pill badge matching Figma */}
        <div className="hero-badge-wrapper flex justify-center mb-5 sm:mb-6 relative z-20">
          <a
            href="#testimonials"
            className="hero-pill-badge group inline-flex items-center gap-2 bg-white/95 border border-[#DFE8E2] px-4 py-1.5 rounded-full text-[12px] sm:text-[13px] font-medium text-[#111827] shadow-[0_2px_10px_rgba(15,30,23,0.05)] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#123324]"></span>
            <span>5.0 rated by 100+ clients worldwide</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#111827] group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Balanced Centered 3-Column Flanking Layout (keeps cards framed snugly beside hero copy) */}
        <div className="hero-flanking-layout relative z-30 flex items-start justify-center gap-4 lg:gap-6 xl:gap-10 max-w-[1180px] mx-auto">
          {/* Left 3-Cards Stack: tilts cleanly at rest, cascades all 3 cards downward cleanly on hover */}
          <div className="hero-flank-column flank-left relative z-30 hover:z-50 hidden lg:block w-[232px] xl:w-[244px] flex-shrink-0 text-left pt-4 xl:pt-6 transition-all duration-300">
            <HeroCardStack side="left" cards={leftTestimonialCards} allowExpand={true} showControls={false} />
          </div>

          {/* Center Main Header Content */}
          <div className="hero-header-content relative z-20 flex-1 min-w-0 max-w-[660px] mx-auto px-1 sm:px-3">
            <h1 className="hero-title text-[23px] xs:text-[26px] sm:text-[34px] md:text-[38px] lg:text-[27px] xl:text-[38px] 2xl:text-[44px] font-bold text-[#0F1E17] tracking-[-0.02em] leading-[1.2] mb-4 sm:mb-5">
              <span className="block sm:whitespace-nowrap">Predictable Leads and Growth</span>
              <span className="block sm:whitespace-nowrap mt-1 sm:mt-1.5">For Ambitious B2B Businesses</span>
            </h1>

            <p className="hero-subtitle text-[14px] sm:text-[15px] xl:text-[15.5px] text-[#475569] max-w-[540px] mx-auto mb-6 sm:mb-7 leading-[1.6]">
              We build cold outreach systems, targeted lead lists, and paid ad campaigns that fill your calendar with qualified sales calls every month.
            </p>

            {/* CTA Button in Full Round Form */}
            <div className="hero-cta-wrapper flex justify-center mb-5 sm:mb-6">
              <button
                type="button"
                className="hero-main-btn group inline-flex items-center gap-2.5 bg-[#133827] hover:bg-[#1A4D36] text-white pl-6 pr-2.5 sm:pr-3 py-2.5 sm:py-3 rounded-full font-semibold text-[14px] sm:text-[15px] shadow-[0_10px_24px_-4px_rgba(19,56,39,0.34)] hover:shadow-[0_14px_30px_-4px_rgba(19,56,39,0.45)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                style={{ borderRadius: '9999px' }}
                onClick={onBookCall}
              >
                <span>Book a Free Strategy Call</span>
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/15 group-hover:bg-white/25 flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </button>
            </div>

            {/* Social Proof Rating (z-10 -> z-40 left to right so +2K sits cleanly in front) */}
            <div className="hero-social-proof flex items-center justify-center gap-3">
              <div className="flex items-center">
                <img
                  src={avatarClient1}
                  alt="Client"
                  className="relative z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-2xs"
                />
                <img
                  src={avatarClient2}
                  alt="Client"
                  className="relative z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover -ml-2.5 shadow-2xs"
                />
                <img
                  src={avatarClient3}
                  alt="Client"
                  className="relative z-30 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover -ml-2.5 shadow-2xs"
                />
                <div className="relative z-40 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-white text-[#111827] font-bold text-[10px] sm:text-[11px] flex items-center justify-center -ml-2.5 shadow-xs">
                  +2K
                </div>
              </div>

              <div className="flex flex-col items-start text-left">
                <div className="flex items-center gap-0.5 text-[#111827]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#111827] text-[#111827]" />
                  ))}
                </div>
                <span className="text-[11px] sm:text-[11.5px] text-[#556070] font-medium leading-tight mt-0.5">
                  From 1.5K reviews
                </span>
              </div>
            </div>
          </div>

          {/* Right 3-Cards Stack: tilts cleanly at rest, cascades all 3 cards downward cleanly on hover */}
          <div className="hero-flank-column flank-right relative z-30 hover:z-50 hidden lg:block w-[232px] xl:w-[244px] flex-shrink-0 text-left pt-4 xl:pt-6 transition-all duration-300">
            <HeroCardStack side="right" cards={rightTestimonialCards} allowExpand={true} showControls={false} />
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
              allowExpand={false}
            />
          </div>

          {/* Tablet Card View (640px - 1023px): Two comfortable side-by-side columns */}
          <div className="hidden sm:grid sm:grid-cols-2 gap-5 text-left">
            <div>
              <div className="text-xs font-bold text-[#153C2D] mb-2 px-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Cold Email & Warmup</span>
              </div>
              <HeroCardStack side="left" cards={leftTestimonialCards} allowExpand={false} />
            </div>
            <div>
              <div className="text-xs font-bold text-[#153C2D] mb-2 px-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Paid Ads & Tracking</span>
              </div>
              <HeroCardStack side="right" cards={rightTestimonialCards} allowExpand={false} />
            </div>
          </div>
        </div>

        {/* Continuous Roaming Screen Frames Showcase */}
        <div className="hero-showcase-section mt-14 sm:mt-16 relative z-10">
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

        {/* Partner Logos Bar ("Powered by the tools that top teams trust") - Centered Half-Screen Monochrome Marquee */}
        <div className="hero-trust-bar mt-10 sm:mt-14 pt-6 sm:pt-8">
          <p className="trust-bar-heading text-xs sm:text-[13px] font-medium text-[#6B7280] mb-6 sm:mb-7">
            Powered by the tools that top teams trust
          </p>
          <PartnerLogosMarquee />
        </div>
      </div>
    </section>
  );
}
