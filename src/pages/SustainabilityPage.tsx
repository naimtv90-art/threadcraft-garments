import React from 'react';
import { Droplets, Leaf, Recycle, ShieldCheck, Award, Info, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SustainabilityPage: React.FC = () => {
  const certifications = [
    { title: 'GOTS', full: 'Global Organic Textile Standard', desc: '100% of organic cotton raw materials audited from farm to mill.' },
    { title: 'OEKO-TEX® 100', full: 'Class 1 (Infants Standard)', desc: 'Tested for over 300 hazardous substances, heavy metals, and forbidden amines.' },
    { title: 'ZDHC MRSL 3.0', full: 'Zero Discharge of Hazardous Chemicals', desc: 'Conforming chemical inventory preventing toxic riverway discharges.' },
    { title: 'WRAP GOLD', full: 'Worldwide Responsible Accredited Production', desc: 'Annual social audits verifying living wages, worker safety, and ethical shifts.' },
    { title: 'HIGG FEM & FSLM', full: 'Sustainable Apparel Coalition', desc: 'Verified scores for factory environmental and labor modules.' }
  ];

  return (
    <div className="pt-28 pb-20 bg-[#F5F3EE] text-[#191919]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#191919] tracking-widest uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-[#191919]"></span>
            ENVIRONMENTAL STEWARDSHIP & ZERO-DEFECT QUALITY
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-[#191919] mb-6">
            SUSTAINABILITY & QUALITY AUDIT.
          </h1>
          <p className="text-base sm:text-lg text-[#777777] leading-relaxed">
            THREADCRAFT operates on the premise that fashion transparency must be verifiable, data-backed, and integral to our daily production routines.
          </p>
        </div>

        {/* Audited Standards Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-black/5 shadow-sm mb-20">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 mb-6 uppercase">
            <ShieldCheck className="w-4 h-4 text-black" />
            <span>Verified Third-Party Compliance Accreditations</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((c, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#EFECE6]/50 border border-black/5">
                <span className="text-sm font-bold font-mono text-black block mb-1">{c.title}</span>
                <span className="text-xs font-semibold text-neutral-800 block mb-2">{c.full}</span>
                <p className="text-xs text-[#777777] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-black/10 flex items-center gap-2 text-xs font-mono text-neutral-500">
            <Info className="w-4 h-4 flex-shrink-0" />
            <span>Note: Standards shown are industry benchmark certifications. Individual buyers can request certificate PDFs with active license numbers.</span>
          </div>
        </div>

        {/* Closed-Loop Wet Processing Deep Dive */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#171717] text-white border border-white/10 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-mono text-[#C7F36B] uppercase tracking-widest block">
                ZLD EFFLUENT TREATMENT PLANT
              </span>
              <h2 className="text-3xl font-display font-bold">
                RECYCLING 94.2% OF DYEING WATER
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Conventional garment wet processing consumes up to 100 liters of water per kilogram of cloth. THREADCRAFT’s biological membrane filtration and reverse-osmosis system reclaims 94.2% of water for re-use, with the remaining residue solidified into non-hazardous construction bricks.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs font-mono">
                <div>
                  <span className="text-neutral-400 block uppercase">Water Recovery</span>
                  <span className="text-xl font-bold text-[#C7F36B]">94.2%</span>
                </div>
                <div>
                  <span className="text-neutral-400 block uppercase">Solar Energy</span>
                  <span className="text-xl font-bold text-[#C7F36B]">2.4 MW Solar</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-2xl overflow-hidden aspect-[16/10] bg-neutral-800">
              <img
                src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80"
                alt="Water treatment plant"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Worker Welfare & Fair Labor */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm">
            <h3 className="font-display font-bold text-xl text-[#191919] mb-3">
              LIVING WAGES & SOCIAL INTEGRITY
            </h3>
            <p className="text-xs text-[#777777] leading-relaxed mb-4">
              All 2,800+ employees earn salaries exceeding local statutory minimums, indexed against independent Anker living wage benchmarks. We enforce an absolute zero-tolerance policy regarding forced labor or child labor.
            </p>
            <ul className="space-y-2 text-xs font-mono text-neutral-800">
              <li>✓ Bi-weekly health screenings & on-site clinic</li>
              <li>✓ Subsidized nutritious dining cafeteria</li>
              <li>✓ Full maternal leave & daycare centers</li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm">
            <h3 className="font-display font-bold text-xl text-[#191919] mb-3">
              ZERO-DEFECT AQL 1.5 AUDITS
            </h3>
            <p className="text-xs text-[#777777] leading-relaxed mb-4">
              Quality is audited at 5 discrete inspection gates: raw yarn testing, grey fabric inspection on light frames, post-dyeing dimensional stability wash tests, in-line sewing audits, and final pre-packing carton audits.
            </p>
            <ul className="space-y-2 text-xs font-mono text-neutral-800">
              <li>✓ Datacolor spectrophotometer color delta &lt; 0.6</li>
              <li>✓ 100% continuous needle & metal detection</li>
              <li>✓ Tensile & seam slippage load cell tests</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <h3 className="text-2xl font-display font-bold text-[#191919]">
            REQUIRE SPECIFIC CERTIFICATE AUDIT REPORTS?
          </h3>
          <p className="text-xs text-[#777777]">
            Our compliance office issues buyer-specific certificate verification packs on request.
          </p>
          <div className="pt-2">
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#171717] text-[#C7F36B] font-mono text-xs font-bold uppercase"
            >
              <span>Request Environmental Audit Dossier</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
