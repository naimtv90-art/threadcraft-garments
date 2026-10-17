import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Factory, Sparkles } from 'lucide-react';

export const PartnershipSection: React.FC = () => {
  const engagementModels = [
    {
      title: 'FULL OEM PRODUCTION',
      subtitle: 'Original Equipment Manufacturing',
      desc: 'You provide complete tech packs, BOM specifications, and grading tables. We handle yarn sourcing, knit/weave manufacturing, embellishment, QA, and FOB/DDP export logistics.',
      features: ['Client proprietary patterns & tech packs', 'Custom branded trim & hardware sourcing', 'Strict buyer non-disclosure agreements']
    },
    {
      title: 'COLLABORATIVE ODM DESIGN',
      subtitle: 'Original Design Manufacturing',
      desc: 'Leverage THREADCRAFT’s seasonal fabric research library, trend forecasting silhouettes, and 3D CLO fit avatars to accelerate your private-label collection launches.',
      features: ['Access to 450+ developed fabric weaves', '48-hour digital 3D sample iteration', 'Ready-to-brand private label catalog']
    },
    {
      title: 'FAST-TRACK CAPSULE CONTRACTS',
      subtitle: 'Agile & Low-MOQ Tier',
      desc: 'Specialized agile production cells engineered for high-frequency fashion capsules, urgent retail re-orders, and limited-edition luxury streetwear drops.',
      features: ['Lower minimum order starting at 250 pcs', 'Accelerated 18-24 day production turnaround', 'Express bonded air freight dispatch']
    }
  ];

  return (
    <section className="py-24 bg-[#171717] text-white relative overflow-hidden border-t border-white/10">
      
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#C7F36B] tracking-widest uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-[#C7F36B]"></span>
            B2B CLIENT COOPERATION // GLOBAL SOURCING
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white mb-6">
            LET'S MAKE SOMETHING EXCEPTIONAL.
          </h2>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Whether you are an established international apparel retailer scaling seasonal volume or an emerging luxury designer requiring bespoke fabric engineering, THREADCRAFT delivers end-to-end manufacturing reliability.
          </p>
        </div>

        {/* 3 Partnership Models */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {engagementModels.map((model, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#C7F36B]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono uppercase text-[#C7F36B] tracking-widest block mb-1">
                  TIER 0{idx + 1} // {model.subtitle}
                </span>
                <h3 className="font-display font-bold text-xl text-white tracking-tight mb-4">
                  {model.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                  {model.desc}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-white/10">
                  {model.features.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C7F36B] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <Link
                  to="/quote"
                  className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-[#C7F36B] hover:text-black font-semibold text-xs font-mono uppercase tracking-wider text-center transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Select Partnership Model</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Confidentiality & NDA Banner */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C7F36B]" />
            <span>Strict Proprietary Tech Pack Protection: All patterns, designs, and tech specs are safeguarded by international bi-lateral NDA agreements.</span>
          </div>
          <Link to="/contact" className="text-white hover:text-[#C7F36B] transition-colors whitespace-nowrap font-bold">
            Download Standard Mutual NDA →
          </Link>
        </div>

      </div>
    </section>
  );
};
