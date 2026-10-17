import React from 'react';
import { Cpu, Scissors, Droplets, CheckCircle, ArrowRight, ShieldCheck, Box, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CapabilitiesPage: React.FC = () => {
  const machinerySectors = [
    {
      title: 'KNITTING & WEAVING FLEET',
      icon: Box,
      specs: [
        { label: 'Circular Knitting Machinery', detail: '42 Mayer & Cie® high-gauge German units (18G to 34G)' },
        { label: 'Shuttle Looms', detail: '16 vintage Toyoda automatic narrow-width shuttle looms for selvedge' },
        { label: 'Fabric Textures', detail: 'Single jersey, French terry, interlock, waffle, pique, rib knit' },
        { label: 'Monthly Output', detail: '380,000 kg custom knitted & woven fabric' }
      ]
    },
    {
      title: 'CNC CUTTING & CAD GRADING',
      icon: Scissors,
      specs: [
        { label: 'Automated Spreaders', detail: 'Eastman computerized tension-free fabric spreaders' },
        { label: 'CNC Cutters', detail: 'Gerber Paragon® multi-ply vacuum cutting tables (sub-millimeter tolerance)' },
        { label: '3D Simulation', detail: 'CLO 3D virtual avatar fit verification eliminating physical sample waste' },
        { label: 'Marker Efficiency', detail: 'AI-assisted nesting algorithms achieving 92.4% average yield' }
      ]
    },
    {
      title: 'LEAN SYNCHRONOUS ASSEMBLY',
      icon: Cpu,
      specs: [
        { label: 'Sewing Lines', detail: '36 modular synchronous lines with overhead unit production conveyors (UPS)' },
        { label: 'Lockstitch & Overlock', detail: 'Juki DDL-9000C direct-drive & Pegasus EX 5-thread overlock' },
        { label: 'Specialty Seams', detail: 'Yamato flatlock chafe-free seams, ultrasonic welded bonding' },
        { label: 'Assembly Capacity', detail: '500,000+ completed garments per calendar month' }
      ]
    },
    {
      title: 'ECO-DYEING & FINISHING',
      icon: Droplets,
      specs: [
        { label: 'Dyeing Autoclaves', detail: 'Thies iMaster® soft-flow low liquor ratio (1:4) vessels' },
        { label: 'Ozone Laundering', detail: 'Tonello ozone wash drums reducing chemical consumption by 85%' },
        { label: 'Laser Distressing', detail: 'Jeanologia laser marking for sustainable denim whiskering' },
        { label: 'Effluent Recirculation', detail: 'Zero Liquid Discharge (ZLD) plant recovering 94% water' }
      ]
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-[#F5F3EE] text-[#191919]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#191919] tracking-widest uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-[#191919]"></span>
            TECHNICAL SPECIFICATIONS // MACHINERY ASSETS
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-[#191919] mb-6">
            MANUFACTURING CAPABILITIES.
          </h1>
          <p className="text-base sm:text-lg text-[#777777] leading-relaxed">
            Our 450,000 sq.ft production footprint integrates automated German knitting machines, ultrasonic CNC cutting tables, modular lean sewing stations, and sustainable wet-processing laboratories.
          </p>
        </div>

        {/* 4 Technical Fleet Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {machinerySectors.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div key={idx} className="p-8 sm:p-10 rounded-3xl bg-white border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#171717] text-[#C7F36B] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#191919] tracking-tight">
                    {sec.title}
                  </h3>
                </div>

                <div className="space-y-4 divide-y divide-black/5">
                  {sec.specs.map((s, i) => (
                    <div key={i} className="pt-3 first:pt-0">
                      <span className="text-[11px] font-mono uppercase text-[#777777] block mb-0.5">
                        {s.label}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-[#191919] block">
                        {s.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Production Metrics & Lead Times Table */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#171717] text-white border border-white/10 mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-[#C7F36B] uppercase tracking-widest block mb-1">
                PRODUCTION PLANNING
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold">
                LEAD TIMES & MINIMUM ORDER QUANTITIES
              </h2>
            </div>
            <span className="text-xs font-mono text-neutral-400">
              AVERAGE INDUSTRIAL DISPATCH WINDOWS
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-white/10 text-neutral-400 uppercase">
                  <th className="pb-3">Silhouettes</th>
                  <th className="pb-3">Standard MOQ</th>
                  <th className="pb-3">Sample Turnaround</th>
                  <th className="pb-3">Bulk Production</th>
                  <th className="pb-3">Key Finishes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-neutral-200">
                <tr>
                  <td className="py-4 font-bold text-white">Heavyweight T-Shirts</td>
                  <td className="py-4">500 pcs / color</td>
                  <td className="py-4">5 - 7 Days</td>
                  <td className="py-4">21 - 28 Days</td>
                  <td className="py-4">Enzyme bio-polish, reactive dyed</td>
                </tr>
                <tr>
                  <td className="py-4 font-bold text-white">French Terry Hoodies</td>
                  <td className="py-4">300 pcs / color</td>
                  <td className="py-4">7 - 10 Days</td>
                  <td className="py-4">28 - 35 Days</td>
                  <td className="py-4">Anti-shrink wash, custom drawcords</td>
                </tr>
                <tr>
                  <td className="py-4 font-bold text-white">Technical Outerwear</td>
                  <td className="py-4">250 pcs / style</td>
                  <td className="py-4">10 - 14 Days</td>
                  <td className="py-4">35 - 45 Days</td>
                  <td className="py-4">DWR laminated, seam-sealed taped</td>
                </tr>
                <tr>
                  <td className="py-4 font-bold text-white">Shuttle Loom Selvedge</td>
                  <td className="py-4">400 pcs / wash</td>
                  <td className="py-4">10 - 12 Days</td>
                  <td className="py-4">30 - 40 Days</td>
                  <td className="py-4">Ozone wash, laser distress, raw indigo</td>
                </tr>
                <tr>
                  <td className="py-4 font-bold text-white">Seamless Compression</td>
                  <td className="py-4">400 sets / style</td>
                  <td className="py-4">7 - 9 Days</td>
                  <td className="py-4">25 - 32 Days</td>
                  <td className="py-4">Zonal body mapping, flatlocked seams</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <h3 className="text-2xl font-display font-bold text-[#191919]">
            HAVE A BESPOKE FABRIC OR SILHOUETTE IN MIND?
          </h3>
          <p className="text-xs text-[#777777]">
            Send our textile engineers your physical swatch or digital spec pack for technical assessment.
          </p>
          <div className="pt-2">
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#171717] text-[#C7F36B] font-mono text-xs font-bold uppercase shadow-lg"
            >
              <span>Submit Tech Pack For Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
