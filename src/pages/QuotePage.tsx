import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { QuoteFormSection } from '../components/sections/QuoteFormSection';
import { ShieldCheck, Clock, Award, FileText, ArrowRight } from 'lucide-react';

export const QuotePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedProduct = searchParams.get('product') || undefined;

  return (
    <div className="pt-28 pb-20 bg-[#171717] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow & Headline */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[#C7F36B] tracking-widest uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-[#C7F36B] animate-pulse"></span>
            FORMAL REQUEST FOR QUOTATION (RFQ)
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-white mb-4">
            START YOUR PRODUCTION RUN.
          </h1>
          <p className="text-base text-neutral-300 leading-relaxed">
            Submit your apparel specifications, target quantities, and tech pack parameters. Receive comprehensive factory BOM costing and preliminary production schedules within 24 hours.
          </p>
        </div>

        {/* Embedded Functional Quote Form */}
        <div className="mb-16">
          <QuoteFormSection initialProduct={preselectedProduct} />
        </div>

        {/* What Happens Next - Step by Step Timeline */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#212121] border border-white/10 mb-12">
          <span className="text-xs font-mono text-[#C7F36B] uppercase tracking-widest block mb-2">
            ONBOARDING PROTOCOL
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-8">
            WHAT HAPPENS AFTER YOU SUBMIT YOUR RFQ:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
              <span className="text-2xl font-mono font-bold text-[#C7F36B] block mb-2">01</span>
              <h4 className="font-display font-bold text-sm text-white mb-1">TECH PACK AUDIT</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Our CAD pattern makers inspect grading tables, stitch allowances, and BOM material consumption.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
              <span className="text-2xl font-mono font-bold text-[#C7F36B] block mb-2">02</span>
              <h4 className="font-display font-bold text-sm text-white mb-1">BOM COST MATRIX</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Detailed itemized breakdown for yarn, knitting, dye formulations, trim, labor, and FOB/DDP freight.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
              <span className="text-2xl font-mono font-bold text-[#C7F36B] block mb-2">03</span>
              <h4 className="font-display font-bold text-sm text-white mb-1">PROTO SAMPLE DISPATCH</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                First physical fit sample produced and air-shipped to your design studio for review and approval.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
              <span className="text-2xl font-mono font-bold text-[#C7F36B] block mb-2">04</span>
              <h4 className="font-display font-bold text-sm text-white mb-1">SYNCHRONOUS BULK</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Bulk production scheduling on designated lean synchronous assembly lines with real-time QA dashboards.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
