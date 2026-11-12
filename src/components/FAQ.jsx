import React, { useState } from 'react';
import { CornerBadge } from './Icons';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';

const FAQ_ITEMS = [
  {
    id: 'services',
    question: 'What services does your agency offer?',
    answer:
      'We offer cold email outreach, lead generation, list building, Meta and Google ads, marketing automation, and influencer outreach.',
  },
  {
    id: 'timeline',
    question: 'How long does it take to see results?',
    answer:
      'Domain infrastructure and warmup launch within the first two weeks, with initial qualified replies arriving around weeks 3 to 4. Paid ad campaigns typically begin generating lead data within 7 to 10 days.',
  },
  {
    id: 'reporting',
    question: 'How do you track results and keep campaigns improving?',
    answer:
      'We track opens, positive reply rates, cost per qualified lead, and booked calls every week, continuously testing copy angles and targeting to scale what works.',
  },
  {
    id: 'spam',
    question: 'Will my emails land in spam?',
    answer:
      'No — we isolate campaigns on secondary domains configured with SPF, DKIM, DMARC, custom tracking, and a full algorithmic warmup to protect deliverability and primary inbox placement.',
  },
  {
    id: 'leads',
    question: 'Do you provide the leads?',
    answer:
      'Yes. We build and enrich custom prospect lists tailored to your ICP, running waterfall verification so every message reaches a real, active decision maker.',
  },
  {
    id: 'contracts',
    question: 'Do I need to sign a long contract?',
    answer:
      'No long-term lock-ins. We operate on flexible monthly retainers and clearly scoped engagements backed by weekly transparent reporting.',
  },
  {
    id: 'tools',
    question: 'Which tools do you use?',
    answer:
      'We build with proven outbound and growth tools including Clay, Instantly, Smartlead, GoHighLevel, Meta & Google Ads, Klaviyo, Resend, and custom automation workflows.',
  },
];

export default function FAQ({ onOpenContact }) {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  const handleContactClick = () => {
    if (onOpenContact) {
      onOpenContact();
      return;
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="faq" className="py-20 sm:py-24 relative bg-white">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-x-14 lg:gap-y-8 text-left">
          {/* Top-Left Heading Block */}
          <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1">
            <CornerBadge label="FAQ" />

            <h2 className="text-[28px] xs:text-[32px] sm:text-[38px] lg:text-[42px] font-medium text-[#111827] tracking-[-0.025em] leading-[1.15] mt-4 mb-3.5">
              Have questions,
              <br />
              We got answers.
            </h2>

            <p className="text-[14px] sm:text-[15px] text-[#5F6D66] leading-[1.6] max-w-[290px] font-normal">
              Everything you need to know before we start working together.
            </p>
          </div>

          {/* Right Column: Clean Hairline-Divided FAQ Accordion */}
          <div className="lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:row-span-2 flex flex-col">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={item.id}
                  className={`border-b border-[#D4DCE5] ${
                    idx === 0 ? 'pt-0 pb-5 sm:pb-6' : 'py-5 sm:py-6'
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => handleToggle(idx)}
                    className="w-full flex items-center justify-between gap-4 text-left cursor-pointer group"
                  >
                    <span className="text-[15.5px] sm:text-[17px] font-medium text-[#111827] group-hover:text-[#123828] tracking-[-0.015em] leading-[1.35] transition-colors">
                      {item.question}
                    </span>
                    <span className="shrink-0 text-[#111827] transition-transform duration-200">
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[1.75]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[1.75]" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <p className="text-[13.5px] sm:text-[14.5px] text-[#5F6D66] leading-[1.6] font-normal mt-3 max-w-[510px]">
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Support CTA: Bottom of Left Column on Desktop, After Accordion on Mobile */}
          <div className="lg:col-span-5 lg:col-start-1 lg:row-start-2 lg:self-end pt-2 lg:pt-8">
            <h3 className="text-[16px] sm:text-[17.5px] font-medium text-[#111827] tracking-[-0.015em] leading-snug">
              Can’t find your answer?
            </h3>
            <p className="text-[13px] sm:text-[13.5px] text-[#5F6D66] leading-[1.55] mt-1.5 mb-5 font-normal">
              Get in touch with our support team, they are friendly.
            </p>

            <button
              type="button"
              onClick={handleContactClick}
              className="group inline-flex items-center gap-3 bg-white hover:bg-[#F6F9F7] text-[#111827] border border-[#D8E1EB] hover:border-[#123828]/35 rounded-full pl-5 pr-2 py-2 text-[13px] font-medium shadow-[0_1px_3px_rgba(17,24,39,0.04)] hover:shadow-sm transition-all duration-200 cursor-pointer"
            >
              <span>Contact Us</span>
              <span className="w-6 h-6 rounded-full bg-[#F1F5F9] group-hover:bg-[#E8F3EC] flex items-center justify-center transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5 text-[#111827] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

