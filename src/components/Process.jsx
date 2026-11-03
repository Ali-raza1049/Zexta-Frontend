import React, { useState } from 'react';
import { CornerBadge } from './Icons';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discovery & Audit',
    desc: 'We learn your offer, your ideal customer, and your goals, then plan the right channels and targeting.',
    deliverables: [
      'ICP & buyer persona workshop',
      'Competitor outreach teardown',
      'Channel viability scoring (Email vs LinkedIn vs Paid)',
    ],
  },
  {
    number: '02',
    title: 'List Building and Research',
    desc: 'We build and verify a targeted lead list so every message reaches a real decision maker.',
    deliverables: [
      'Multi-source scraping (Apollo, Clay, Sales Navigator)',
      'Waterfall email deliverability verification (0% bounce rate guarantee)',
      'Custom intent triggers & funding signals',
    ],
  },
  {
    number: '03',
    title: 'Setup and Infrastructure',
    desc: 'We configure domains, mailboxes, warmup, ad accounts, and automations so everything runs smoothly.',
    deliverables: [
      'Secondary domain registration & inbox provisioning',
      'SPF, DKIM, DMARC, and custom tracking domains configured',
      '21-day algorithmic warmup & reputation scoring',
    ],
  },
  {
    number: '04',
    title: 'Launch and Outreach',
    desc: 'We write the copy, launch the campaigns, and start booking conversations with your prospects.',
    deliverables: [
      'High-converting copy with A/B variant testing',
      'Staggered campaign launches & spam word checks',
      'Direct CRM sync and instant lead notifications',
    ],
  },
  {
    number: '05',
    title: 'Report and Optimize',
    desc: 'We track opens, replies, and meetings every week and keep improving what works.',
    deliverables: [
      'Weekly performance dashboards & Loom walkthroughs',
      'Continuous subject line & offer angle iteration',
      'Bi-weekly strategy syncs to scale winning segments',
    ],
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-20 relative">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sticky Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="space-y-4">
              <CornerBadge label="Our Process" />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#112219] tracking-tight leading-tight">
                A proven and simple
                <br />
                outreach process.
              </h2>
              <p className="text-base text-[#55665D] leading-relaxed">
                See how we take you from zero to a working lead generation system.
              </p>

              {/* Progress Indicator Card */}
              <div className="mt-8 bg-white border border-[#E1EAE4] rounded-2xl p-5 shadow-xs">
                <div className="flex items-center justify-between text-sm font-semibold mb-3">
                  <span className="text-[#112219]">Implementation Cycle</span>
                  <span className="text-emerald-700 font-bold">14 Days to Launch</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 rounded-full"
                    style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-2.5">
                  Currently viewing Step {steps[activeStep].number}: {steps[activeStep].title}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline */}
          <div className="lg:col-span-7">
            <div className="relative pl-6 sm:pl-8 space-y-6">
              {/* Continuous vertical green line */}
              <div className="absolute left-2.5 sm:left-3.5 top-3 bottom-3 w-0.5 bg-[#CBDAD1]"></div>

              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={step.number}
                    className="relative group cursor-pointer transition-all duration-200"
                    onClick={() => setActiveStep(idx)}
                  >
                    {/* Number Node with Circle */}
                    <div className="absolute -left-6 sm:-left-8 top-1.5">
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all ${
                          isActive
                            ? 'bg-[#153C2D] border-[#153C2D] text-white shadow-md shadow-[#153C2D]/20 scale-105'
                            : 'bg-white border-[#CBDAD1] text-[#71857A] group-hover:border-[#153C2D]'
                        }`}
                      >
                        {step.number}
                      </div>
                    </div>

                    {/* Step Content Box */}
                    <div
                      className={`rounded-2xl p-6 transition-all duration-300 border ${
                        isActive
                          ? 'bg-white border-[#153C2D] shadow-[0_8px_30px_-6px_rgba(18,43,34,0.08)]'
                          : 'bg-white border-[#E1EAE4] hover:border-[#CBDAD1] shadow-xs'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <h3 className="text-lg font-bold text-[#112219]">{step.title}</h3>
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                            isActive
                              ? 'bg-[#153C2D] text-white rotate-45'
                              : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
                          }`}
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>

                      <p className="text-sm text-[#55665D] leading-relaxed">{step.desc}</p>

                      {/* Expandable Deliverables on active */}
                      {isActive && (
                        <div className="mt-4 pt-4 border-t border-[#EEF4F0] animate-fadeIn">
                          <div className="text-xs font-bold uppercase tracking-wider text-[#153C2D] mb-2.5">
                            Key Deliverables:
                          </div>
                          <ul className="space-y-2">
                            {step.deliverables.map((del, dIdx) => (
                              <li key={dIdx} className="flex items-center gap-2 text-xs sm:text-sm text-[#34483E]">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                <span>{del}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
