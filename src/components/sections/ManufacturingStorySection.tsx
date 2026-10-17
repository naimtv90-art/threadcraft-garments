import React, { useState } from 'react';
import { MANUFACTURING_STORY } from '../../data/manufacturingStory';
import { ArrowRight, CheckCircle2, Cpu, Scissors, ShieldAlert, Sparkles, Box, Radio } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ManufacturingStorySection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStage = MANUFACTURING_STORY[activeStepIndex];

  return (
    <section className="py-24 bg-[#171717] text-white relative overflow-hidden border-t border-white/10">
      
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#C7F36B] tracking-widest uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-[#C7F36B] animate-pulse"></span>
            SCROLL-DRIVEN PRODUCTION CHRONICLE // 6 CERTIFIED STAGES
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white mb-4">
            FROM FIBER TO FINISHED GARMENT.
          </h2>
          <p className="text-sm text-neutral-400 max-w-xl leading-relaxed">
            Trace the complete lifecycle of international apparel manufacturing. Every batch is governed by molecular traceability, zero-defect quality inspection, and ethical environmental stewardship.
          </p>
        </div>

        {/* Desktop Stage Step Navigator (Pills) */}
        <div className="hidden lg:grid grid-cols-6 gap-2 mb-12 border-b border-white/10 pb-6">
          {MANUFACTURING_STORY.map((stage, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`text-left p-3 rounded-xl transition-all ${
                  isActive
                    ? 'bg-white/10 border-l-2 border-[#C7F36B]'
                    : 'hover:bg-white/5 opacity-60 hover:opacity-100'
                }`}
              >
                <span className={`block font-mono text-xs font-bold mb-1 ${isActive ? 'text-[#C7F36B]' : 'text-neutral-400'}`}>
                  STAGE {stage.step}
                </span>
                <span className="block text-xs font-bold text-white tracking-tight uppercase line-clamp-1">
                  {stage.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Story Showcase Stage Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-12 backdrop-blur-sm">
          
          {/* Left Column: Visual Presentation with Depth */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-white/15">
              <img
                src={activeStage.imageUrl}
                alt={activeStage.title}
                className="w-full h-full object-cover transition-all duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Floating Stage Number */}
              <div className="absolute top-6 left-6 px-4 py-2 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 font-mono text-2xl font-black text-[#C7F36B]">
                {activeStage.step}
              </div>

              {/* Floating Technical Metric Badge */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between p-4 rounded-xl bg-black/85 backdrop-blur-md border border-white/10 text-xs font-mono">
                <span className="text-neutral-400 uppercase">{activeStage.metrics.label}</span>
                <span className="text-[#C7F36B] font-bold text-sm">{activeStage.metrics.value}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Stage Narrative & Key Innovations */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-block px-3 py-1 rounded-md bg-[#C7F36B]/10 text-[#C7F36B] text-xs font-mono uppercase tracking-widest mb-3">
                {activeStage.tagline}
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight mb-4">
                {activeStage.title}
              </h3>

              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                {activeStage.description}
              </p>

              {/* Key Technological Innovations */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Key Technical Protocols:
                </h4>
                {activeStage.keyInnovations.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-[#C7F36B] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stepper Navigation Controls */}
            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <button
                onClick={() => setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : MANUFACTURING_STORY.length - 1))}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono uppercase transition-colors"
              >
                ← Previous Stage
              </button>

              <span className="text-xs font-mono text-neutral-400">
                {activeStepIndex + 1} / {MANUFACTURING_STORY.length}
              </span>

              <button
                onClick={() => setActiveStepIndex((prev) => (prev < MANUFACTURING_STORY.length - 1 ? prev + 1 : 0))}
                className="px-4 py-2 rounded-xl bg-[#C7F36B] text-black font-bold text-xs font-mono uppercase transition-colors"
              >
                Next Stage →
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
