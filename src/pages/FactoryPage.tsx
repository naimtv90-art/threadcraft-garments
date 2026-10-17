import React from 'react';
import { FactoryScene } from '../components/3d/FactoryScene';
import { FACTORY_ZONES, FACTORY_METRICS } from '../data/factoryData';
import { ArrowRight, ShieldCheck, Cpu, HardHat, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FactoryPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-[#171717] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[#C7F36B] tracking-widest uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-[#C7F36B] animate-pulse"></span>
            DIGITAL TWIN // 450,000 SQ.FT INDUSTRIAL CAMPUS
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-white mb-4">
            3D FACTORY FLOORPLAN.
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Explore our state-of-the-art intelligent manufacturing facility in real-time 3D. Click on any section beacon to view machinery telemetry, daily capacity, and automation parameters.
          </p>
        </div>

        {/* 3D Factory Experience */}
        <div className="mb-20">
          <FactoryScene />
        </div>

        {/* Detailed Zone Directory */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-xs font-mono text-[#C7F36B] uppercase tracking-widest block mb-1">
              FACILITY INFRASTRUCTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold">
              PRODUCTION ZONE SPECIFICATIONS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACTORY_ZONES.map((zone) => (
              <div
                key={zone.id}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#C7F36B]/50 transition-colors"
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded bg-[#C7F36B]/15 text-[#C7F36B] text-[10px] font-mono font-bold">
                    {zone.code}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400">
                    {zone.automationLevel}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-2">
                  {zone.name}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  {zone.description}
                </p>

                <div className="pt-3 border-t border-white/10 text-xs font-mono space-y-1">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Machinery:</span>
                    <span className="text-neutral-200 text-right truncate max-w-[180px]">{zone.machinery}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Daily Capacity:</span>
                    <span className="text-[#C7F36B] font-bold">{zone.dailyCapacity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Book On-Site Factory Tour Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#212121] border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#C7F36B]">
              <HardHat className="w-4 h-4" />
              <span>BUYER VERIFICATION VISITS</span>
            </div>
            <h3 className="text-2xl font-display font-bold text-white">
              SCHEDULE AN IN-PERSON FACTORY AUDIT
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              We welcome prospective international buyers, sourcing directors, and compliance audit teams to inspect our floor lines, meet technicians, and verify quality systems on-site.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl bg-[#C7F36B] hover:bg-[#b8e858] text-black font-mono text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Buyer Delegation Tour</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
