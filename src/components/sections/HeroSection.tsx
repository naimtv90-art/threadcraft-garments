import React from 'react';
import { HeroGarmentScene } from '../3d/HeroGarmentScene';
import { ArrowDown, ArrowUpRight, Sparkles, ShieldCheck, Factory, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[#F5F3EE] text-[#191919] pt-28 pb-16 flex flex-col justify-between overflow-hidden">
      
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none" />

      {/* Main Hero Body Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bold Editorial Typography & Messaging */}
          <div className="lg:col-span-6 z-20 space-y-6 pt-4 lg:pt-0">
            
            {/* Top Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-black/10 text-[#191919] text-xs font-mono tracking-widest uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#191919]"></span>
              <span>GLOBAL APPAREL EXPORT AUTHORITY // EST. 1999</span>
            </div>

            {/* Oversized Editorial Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight text-[#191919] leading-[1.02]">
              ENGINEERING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#191919] via-[#444444] to-[#191919]">
                THE FUTURE
              </span> <br />
              OF APPAREL.
            </h1>

            {/* Supporting Subtext */}
            <p className="text-base sm:text-lg text-[#777777] max-w-lg leading-relaxed font-normal">
              Precision manufacturing. Responsible production. Apparel without limits. We partner with the world's most demanding fashion brands to engineer high-yield, zero-defect garments at global scale.
            </p>

            {/* Dual Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                to="/capabilities"
                className="btn-magnetic px-7 py-4 rounded-2xl bg-[#171717] hover:bg-black text-[#C7F36B] font-display font-bold text-xs uppercase tracking-widest text-center shadow-xl flex items-center justify-center gap-2 group"
              >
                <span>Explore Capabilities</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                to="/quote"
                className="px-7 py-4 rounded-2xl bg-white border border-black/15 hover:border-black/30 text-[#191919] font-display font-bold text-xs uppercase tracking-widest text-center shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Start a Partnership</span>
              </Link>
            </div>

            {/* Micro Credential Badges */}
            <div className="pt-6 border-t border-black/10 flex flex-wrap items-center gap-6 text-xs font-mono text-[#777777]">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#191919]">500K+</span>
                <span>Monthly Output</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#191919]">98.6%</span>
                <span>On-Time Export</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#191919]">30+</span>
                <span>Countries</span>
              </div>
            </div>

          </div>

          {/* Right Column: Immersive 3D Garment Scene */}
          <div className="lg:col-span-6 relative w-full h-[500px] sm:h-[600px] lg:h-[720px] flex items-center justify-center">
            <HeroGarmentScene />
          </div>

        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 flex items-center justify-between text-xs font-mono text-[#777777]">
        <div className="flex items-center gap-2">
          <ArrowDown className="w-4 h-4 animate-bounce text-[#191919]" />
          <span>SCROLL TO EXPLORE MANUFACTURING ECOSYSTEM</span>
        </div>
        <div className="hidden sm:block">
          INTERACTIVE 3D WEBGL ENGINE // THREE.JS & R3F
        </div>
      </div>

    </section>
  );
};
