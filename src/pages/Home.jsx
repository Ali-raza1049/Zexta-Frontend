import React from 'react';
import Hero from '../components/Hero';
import ImpactStats from '../components/ImpactStats';
import UpworkSection from '../components/UpworkSection';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import Process from '../components/Process';
import CTASection from '../components/CTASection';

export default function Home({ onBookCall }) {
  return (
    <main id="main-content">
      {/* 1. Hero Section with Aura Glow, Playing Cards & Live Reel */}
      <Hero onBookCall={onBookCall} />

      {/* 2. Impact & Stats Section with Crosshair Guide */}
      <ImpactStats />

      {/* 3. Upwork Profiles / Work with us on Upwork */}
      <UpworkSection onBookCall={onBookCall} />

      {/* 4. Capabilities Bento Grid (MERN, PERN, AI, Cold Email, Ads) */}
      <Services />

      {/* 5. Portfolio / Our Work Section with Scenic UI Backdrops */}
      <Portfolio />

      {/* 6. Results & Testimonials Section */}
      <Testimonials />

      {/* 7. Dedicated Core Specialists & Leadership Team */}
      <Team onBookCall={onBookCall} />

      {/* 8. Proven 5-Step Outreach Process Timeline */}
      <Process />

      {/* 9. Ready to Scale CTA Banner */}
      <CTASection onBookCall={onBookCall} />
    </main>
  );
}
