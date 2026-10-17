import React from 'react';
import { ShieldCheck, Droplets, Leaf, Recycle, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const QualitySustainabilitySection: React.FC = () => {
  const pillars = [
    {
      icon: Leaf,
      title: 'REGENERATIVE RAW MATERIALS',
      description: '100% of our organic cotton is GOTS-certified. We utilize zero toxic pesticides and support regenerative soil rotation practices in partner farming cooperatives.',
      stat: '100% GOTS Organic Cotton'
    },
    {
      icon: Droplets,
      title: 'CLOSED-LOOP EFFLUENT TREATMENT',
      description: 'Our biological ZLD (Zero Liquid Discharge) wet-processing facility purifies and recycles up to 94% of process water back into dyeing cycles without waterway contamination.',
      stat: '94% Water Recycled'
    },
    {
      icon: Recycle,
      title: 'CIRCULAR WASTE REDUCTION',
      description: 'Cutting scrap fabric is mechanically shredded and re-spun into 30% recycled post-industrial yarn. All polybags are 100% biodegradable cornstarch compostables.',
      stat: 'Zero Landfill Scrap Goal'
    },
    {
      icon: ShieldCheck,
      title: 'AQL 1.5 ACCREDITED TESTING',
      description: 'In-house ISO 17025 accredited laboratory conducts spectrophotometer color matching, bursting strength tests, and wash stability verification on every production lot.',
      stat: 'AQL 1.5 Inspection Standard'
    }
  ];

  return (
    <section className="py-24 bg-[#F5F3EE] text-[#191919] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Screen Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bold Editorial Typography & Mission */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#191919] tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#191919]"></span>
              RESPONSIBLE MANUFACTURING PROTOCOLS
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[#191919] leading-[1.08]">
              BUILT ON PRECISION. DESIGNED FOR RESPONSIBILITY.
            </h2>

            <p className="text-sm text-[#777777] leading-relaxed">
              Modern apparel manufacturing cannot compromise between quality and planetary boundaries. At THREADCRAFT, every seam, dye formulation, and packaging element is engineered with end-of-life circularity and worker wellness at the forefront.
            </p>

            {/* Editorial Highlight Image */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-black/5 mt-8">
              <img
                src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80"
                alt="Sustainable fabric inspection"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-mono flex items-center justify-between">
                <span>LABORATORY PURIFIED EFFLUENT</span>
                <span className="text-[#C7F36B] font-bold">ZDHC MRSL 3.0</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/sustainability"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#191919] hover:text-black border-b border-black pb-1 transition-colors"
              >
                <span>Read Full Sustainability Whitepaper</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Sustainability Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white border border-black/5 hover:border-black/20 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#171717] text-[#C7F36B] flex items-center justify-center mb-6 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="font-display font-bold text-lg text-[#191919] tracking-tight mb-2">
                      {p.title}
                    </h3>

                    <p className="text-xs text-[#777777] leading-relaxed mb-6">
                      {p.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/5">
                    <span className="text-xs font-mono font-bold text-[#191919]">
                      {p.stat}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
