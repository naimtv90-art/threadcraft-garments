import React from 'react';
import { ShieldCheck, Award, Factory, Users, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const milestones = [
    { year: '1999', title: 'FOUNDATION', desc: 'Established with 80 lockstitch sewing machines dedicated to high-end circular knit jersey basics.' },
    { year: '2008', title: 'ORGANIC CERTIFICATION', desc: 'Acquired first GOTS & OEKO-TEX Class 1 accreditation, introducing chemical-free enzyme finishing.' },
    { year: '2015', title: '3D CAD & AUTOMATION', desc: 'Commissioned automated Gerber multi-ply vacuum cutting tables and CLO 3D digital fit visualization labs.' },
    { year: '2020', title: 'ZERO LIQUID DISCHARGE', desc: 'Invested $4.2M into our closed-loop biological effluent water treatment facility recycling 94% of wet process water.' },
    { year: '2024+', title: 'SMART DIGITAL TWIN FACTORY', desc: 'Achieved 500,000+ monthly capacity with RFID automated tracking and 32 global export destination corridors.' }
  ];

  return (
    <div className="pt-28 pb-20 bg-[#F5F3EE] text-[#191919]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero Header */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-2 text-xs font-mono text-[#191919] tracking-widest uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-[#191919]"></span>
            OUR HERITAGE & MANUFACTURING ETHOS
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-[#191919] mb-6">
            PIONEERING APPAREL PRECISION SINCE 1999.
          </h1>
          <p className="text-base sm:text-lg text-[#777777] leading-relaxed">
            THREADCRAFT was founded on a singular conviction: high-volume garment manufacturing can coexist with artisanal craftsmanship, rigorous environmental stewardship, and dignified working conditions.
          </p>
        </div>

        {/* Cinematic Imagery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-neutral-200 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80"
              alt="Design and pattern making"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-neutral-200 shadow-md md:translate-y-8">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
              alt="Industrial garment testing"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-neutral-200 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80"
              alt="Raw sustainable cotton"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          <div className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm">
            <h3 className="font-display font-bold text-xl text-[#191919] mb-3">
              ZERO-COMPROMISE QUALITY
            </h3>
            <p className="text-xs text-[#777777] leading-relaxed">
              Every production batch undergoes 4-point fabric inspection, spectrophotometer color delta testing, and wash shrinkage audits conforming to international AQL 1.5 standards.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm">
            <h3 className="font-display font-bold text-xl text-[#191919] mb-3">
              CIRCULAR RESPONSIBILITY
            </h3>
            <p className="text-xs text-[#777777] leading-relaxed">
              From closed-loop wet processing to 100% biodegradable polybags and zero-landfill cutting scrap policies, we design production systems for minimal carbon intensity.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm">
            <h3 className="font-display font-bold text-xl text-[#191919] mb-3">
              ETHICAL HUMAN CAPITAL
            </h3>
            <p className="text-xs text-[#777777] leading-relaxed">
              We employ over 2,800 certified technicians provided with above-standard living wages, comprehensive healthcare coverage, on-site childcare, and fair labor representation.
            </p>
          </div>
        </div>

        {/* Heritage Timeline */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#171717] text-white mb-20 border border-white/10">
          <div className="max-w-xl mb-12">
            <span className="text-xs font-mono text-[#C7F36B] uppercase tracking-widest block mb-2">
              HISTORICAL TRAJECTORY
            </span>
            <h2 className="text-3xl font-display font-bold">
              25 YEARS OF APPAREL INNOVATION
            </h2>
          </div>

          <div className="space-y-8">
            {milestones.map((m, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-start gap-4 pb-8 border-b border-white/10 last:border-0 last:pb-0">
                <span className="font-mono text-xl sm:text-2xl font-bold text-[#C7F36B] w-28 flex-shrink-0">
                  {m.year}
                </span>
                <div>
                  <h4 className="font-display font-bold text-base text-white tracking-wide mb-1">
                    {m.title}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed max-w-2xl">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <h3 className="text-2xl font-display font-bold text-[#191919]">
            READY TO TOUR OUR PRODUCTION FACILITIES?
          </h3>
          <p className="text-xs text-[#777777]">
            Schedule an on-site factory inspection or explore our digital 3D twin online.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link
              to="/factory"
              className="px-6 py-3 rounded-xl bg-[#171717] text-[#C7F36B] font-mono text-xs font-bold uppercase"
            >
              Tour 3D Factory Twin
            </Link>
            <Link
              to="/quote"
              className="px-6 py-3 rounded-xl bg-white border border-black/15 text-black font-mono text-xs font-bold uppercase hover:bg-neutral-100"
            >
              Request a Quote
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
