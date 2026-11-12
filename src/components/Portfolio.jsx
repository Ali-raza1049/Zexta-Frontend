import React from 'react';
import { CornerBadge } from './Icons';
import { ArrowUpRight } from 'lucide-react';

import workInfluencerImg from '../assets/work_case_influencer.png';
import workEmailImg from '../assets/work_case_coldemail.png';
import workLeadlistImg from '../assets/work_case_leadlist.png';
import workMetaadsImg from '../assets/work_case_metaads.png';

const PROJECTS = [
  {
    id: 'influencer-outreach',
    category: 'Ecommerce',
    channel: 'Instagram',
    title: 'Influencer Outreach',
    image: workInfluencerImg,
    alt: 'Influencer outreach activities and campaign tracking dashboard',
    frameBg: 'linear-gradient(135deg, #E8F0EB 0%, #DAE7DE 100%)',
  },
  {
    id: 'cold-email-infrastructure',
    category: 'SaaS',
    channel: 'Deliverability',
    title: 'Cold Email Infrastructure',
    image: workEmailImg,
    alt: 'LinkedIn post engagers to lead outreach dashboard',
    frameBg: 'linear-gradient(135deg, #E2EEF5 0%, #D5E5EE 100%)',
  },
  {
    id: 'lead-list-build',
    category: 'B2B',
    channel: 'Data Enrichment',
    title: 'Lead List Build',
    image: workLeadlistImg,
    alt: 'HostProtect nurturing sequence automation workflow builder',
    frameBg: 'linear-gradient(135deg, #ECEEF6 0%, #E1E5F0 100%)',
  },
  {
    id: 'meta-ads',
    category: 'Local Business',
    channel: 'Lead Ads',
    title: 'Meta Ads',
    image: workMetaadsImg,
    alt: 'Nexus deals pipeline CRM dashboard with campaign metrics',
    frameBg: 'linear-gradient(135deg, #F1ECEF 0%, #E6EBDD 100%)',
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="py-20 relative bg-[#F6F9F7]">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-10">
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

        {/* Tight 2x2 Framed Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-[20px] sm:rounded-[24px] p-2 sm:p-2.5 border border-[#E3ECE6] hover:border-[#10B981]/40 shadow-[0_4px_20px_-4px_rgba(18,43,34,0.05)] hover:shadow-[0_14px_32px_-6px_rgba(18,43,34,0.11)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Uniform Gallery Frame preserving full UI without cropping */}
              <div
                className="relative w-full aspect-[16/10] rounded-[14px] sm:rounded-[16px] overflow-hidden border border-[#DCE6DF]/80 flex items-center justify-center p-1 sm:p-1.5"
                style={{ background: project.frameBg }}
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  className="w-full h-full object-contain rounded-[10px] drop-shadow-[0_4px_12px_rgba(17,34,25,0.08)]"
                />
              </div>

              {/* Project Metadata */}
              <div className="pt-2.5 pb-0.5 px-1.5">
                <div className="text-xs font-semibold text-[#64748B] mb-0.5">
                  {project.category} <span className="inline-block mx-1.5">•</span> {project.channel}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#112219]">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
