import React from 'react';
import { CornerBadge } from './Icons';

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discovery & Audit',
    desc: 'We learn your offer, your ideal customer, and your goals, then plan the right channels and targeting.',
  },
  {
    number: '02',
    title: 'List Building and Research',
    desc: 'We build and verify a targeted lead list so every message reaches a real decision maker.',
  },
  {
    number: '03',
    title: 'Setup and Infrastructure',
    desc: 'We configure domains, mailboxes, warmup, ad accounts, and automations so everything runs smoothly.',
  },
  {
    number: '04',
    title: 'Launch and Outreach',
    desc: 'We write the copy, launch the campaigns, and start booking conversations with your prospects.',
  },
  {
    number: '05',
    title: 'Report and Optimize',
    desc: 'We track opens, replies, and meetings every week and keep improving what works.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-24 relative bg-[#F6F9F7]">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Sticky Header Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 text-left">
            <CornerBadge label="Our Process" />

            <h2 className="text-[28px] xs:text-[32px] sm:text-[38px] lg:text-[42px] font-medium text-[#111827] tracking-[-0.025em] leading-[1.16] mt-4 mb-3.5">
              A proven and simple
              <br />
              outreach process.
            </h2>

            <p className="text-[14px] sm:text-[15px] text-[#5F6D66] leading-[1.6] max-w-[300px] font-normal">
              See how we take you from zero to a working lead generation system.
            </p>
          </div>

          {/* Right Open-Rail Timeline Column */}
          <div className="lg:col-span-7">
            <div className="flex flex-col">
              {PROCESS_STEPS.map((step, idx) => {
                const isLast = idx === PROCESS_STEPS.length - 1;
                return (
                  <div
                    key={step.number}
                    className="group flex gap-5 sm:gap-8 items-stretch text-left"
                  >
                    {/* Step Number Badge + Segmented Dark-Green Vertical Line */}
                    <div className="flex flex-col items-center shrink-0 w-8 sm:w-9">
                      <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-[#EAEFEA] shadow-[0_1px_4px_rgba(17,24,39,0.06)] group-hover:border-[#123828] transition-colors duration-200 flex items-center justify-center text-[11px] sm:text-xs font-medium text-[#111827] tabular-nums select-none">
                        {step.number}
                      </span>
                      <span
                        className={`w-[1.5px] flex-1 bg-[#123828] mt-2 ${
                          isLast ? 'mb-0 min-h-[96px]' : 'mb-2 min-h-[108px] sm:min-h-[120px]'
                        }`}
                        aria-hidden="true"
                      />
                    </div>

                    {/* Open Framed Step Content aligned alongside the connector line */}
                    <div
                      className={`flex-1 pt-7 sm:pt-11 ${
                        isLast ? 'pb-4 sm:pb-6' : 'pb-6 sm:pb-9'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-[18px] sm:text-[21px] font-medium text-[#111827] tracking-[-0.02em] leading-[1.3]">
                          {step.title}
                        </h3>
                        <span
                          className="w-2.5 h-2.5 border-t-[1.5px] border-r-[1.5px] border-[#123828] mt-1 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </div>

                      <p className="text-[13.5px] sm:text-[14px] text-[#5F6D66] leading-[1.6] mt-2.5 max-w-[420px] font-normal">
                        {step.desc}
                      </p>
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
