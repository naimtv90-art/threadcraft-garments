import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { ManufacturingStatsSection } from '../components/sections/ManufacturingStatsSection';
import { ProductShowcaseSection } from '../components/sections/ProductShowcaseSection';
import { ManufacturingStorySection } from '../components/sections/ManufacturingStorySection';
import { FactoryScene } from '../components/3d/FactoryScene';
import { QualitySustainabilitySection } from '../components/sections/QualitySustainabilitySection';
import { GlobeScene } from '../components/3d/GlobeScene';
import { PartnershipSection } from '../components/sections/PartnershipSection';
import { QuoteFormSection } from '../components/sections/QuoteFormSection';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Section A: Immersive 3D Hero */}
      <HeroSection />

      {/* Section B: Manufacturing Statistics */}
      <ManufacturingStatsSection />

      {/* Section C: 3D Product Showcase */}
      <ProductShowcaseSection />

      {/* Section D: Scroll-Driven Manufacturing Story */}
      <ManufacturingStorySection />

      {/* Section E: 3D Factory Experience */}
      <section className="py-24 bg-[#171717] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FactoryScene />
        </div>
      </section>

      {/* Section F: Quality & Sustainability */}
      <QualitySustainabilitySection />

      {/* Section G: Global Reach & Interactive 3D Globe */}
      <section className="py-24 bg-[#171717] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlobeScene />
        </div>
      </section>

      {/* Section H: Client & Partnership Section */}
      <PartnershipSection />

      {/* Section I: High-Impact Contact CTA & Quote Form */}
      <QuoteFormSection />
    </div>
  );
};
