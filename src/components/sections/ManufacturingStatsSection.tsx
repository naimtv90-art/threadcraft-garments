import React, { useEffect, useState, useRef } from 'react';
import { MANUFACTURING_STATS, CERTIFICATIONS } from '../../data/companyStats';
import { ShieldCheck, Award, Info } from 'lucide-react';

export const ManufacturingStatsSection: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    'stat-years': 0,
    'stat-capacity': 0,
    'stat-markets': 0,
    'stat-otd': 0,
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate counters up to target values
          MANUFACTURING_STATS.forEach((stat) => {
            const duration = 1800; // ms
            const steps = 40;
            const stepTime = duration / steps;
            const increment = stat.value / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.value) {
                current = stat.value;
                clearInterval(timer);
              }
              setCounts((prev) => ({
                ...prev,
                [stat.id]: Math.round(current),
              }));
            }, stepTime);
          });
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-24 bg-[#171717] text-white relative overflow-hidden border-y border-white/10">
      
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#C7F36B] tracking-widest uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#C7F36B]"></span>
              SCALE & RELIABILITY // B2B EXPORT METRICS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white">
              MANUFACTURING AT SCALE
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
            <Info className="w-3.5 h-3.5 text-[#C7F36B]" />
            <span>Demonstration baseline figures — easily configurable for verified client figures</span>
          </div>
        </div>

        {/* 4 Large Animated Statistical Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {MANUFACTURING_STATS.map((stat) => (
            <div
              key={stat.id}
              className="group p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#C7F36B]/50 transition-all duration-300 hover:-translate-y-1 relative"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#C7F36B] tracking-tight mb-3 font-mono flex items-baseline">
                <span>{counts[stat.id] || stat.value}</span>
                <span className="text-3xl lg:text-4xl text-white ml-0.5">{stat.suffix}</span>
              </div>
              <h3 className="text-base font-semibold text-white tracking-wide uppercase font-mono mb-2">
                {stat.label}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* International Standards & Accreditations Ribbon */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              AUDITED INTERNATIONAL FACTORY STANDARDS:
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {CERTIFICATIONS.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-neutral-200"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C7F36B]" />
                  <span className="font-semibold text-white">{cert.name}</span>
                  <span className="text-neutral-400 hidden sm:inline">• {cert.standard}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
