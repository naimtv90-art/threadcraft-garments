import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { QuoteInquiry } from '../../types';
import { Send, CheckCircle2, ShieldCheck, Sparkles, ArrowRight, Clock, HelpCircle } from 'lucide-react';

export const QuoteFormSection: React.FC<{ initialProduct?: string }> = ({ initialProduct }) => {
  const [formData, setFormData] = useState<QuoteInquiry>({
    fullName: '',
    companyName: '',
    businessEmail: '',
    phone: '',
    productCategory: initialProduct || 'Premium Heavyweight T-Shirts (280 GSM)',
    estimatedQuantity: '1,000 - 5,000 pcs',
    targetDeliveryDate: '',
    targetGsm: '280 GSM',
    fabricPreference: 'GOTS Organic Combed Cotton',
    projectDetails: '',
    sustainabilityTarget: 'OEKO-TEX Class 1'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Form validation
    if (!formData.fullName.trim() || !formData.companyName.trim() || !formData.businessEmail.trim()) {
      setErrorMessage('Please complete all required fields (Full Name, Company Name, Business Email).');
      return;
    }

    if (!formData.businessEmail.includes('@') || !formData.businessEmail.includes('.')) {
      setErrorMessage('Please provide a valid corporate business email.');
      return;
    }

    setIsSubmitting(true);

    // Simulate backend processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Trigger celebratory confetti effect
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#C7F36B', '#ffffff', '#171717']
        });
      } catch (e) {
        // Fallback gracefully
      }
    }, 1200);
  };

  return (
    <section id="quote-section" className="py-24 bg-[#171717] text-white relative overflow-hidden border-t border-white/10">
      
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-35 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: High-Impact Headline & Value Props */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#C7F36B] tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#C7F36B] animate-pulse"></span>
              PRODUCTION INQUIRIES & TECH PACK REVIEW
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.08]">
              YOUR NEXT COLLECTION STARTS HERE.
            </h2>

            <p className="text-sm text-neutral-300 leading-relaxed">
              Tell us what you are building. Our technical apparel engineering team reviews incoming tech packs and generates detailed BOM costing breakdowns, fabric swatches, and timeline projections within 24 business hours.
            </p>

            {/* Turnaround assurance badge */}
            <div className="space-y-3 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3 text-xs font-mono text-neutral-300">
                <Clock className="w-4 h-4 text-[#C7F36B]" />
                <span>24-Hour Technical BOM & Quotation Turnaround</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-neutral-300">
                <ShieldCheck className="w-4 h-4 text-[#C7F36B]" />
                <span>Bilateral NDA signed prior to tech pack upload</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-neutral-300">
                <Sparkles className="w-4 h-4 text-[#C7F36B]" />
                <span>Complimentary physical fabric swatch booklet dispatched</span>
              </div>
            </div>

            {/* Direct Contact Alternatives */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-neutral-400 space-y-2">
              <span className="text-white font-mono uppercase block font-semibold">Prefer Direct Communication?</span>
              <p>Email: <strong className="text-[#C7F36B]">sourcing@threadcraft-mfg.com</strong></p>
              <p>WhatsApp / B2B Line: <strong className="text-white">+1 (800) 492-8170</strong></p>
            </div>
          </div>

          {/* Right Column: Functional Inquiry Form */}
          <div className="lg:col-span-7 bg-[#212121] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
            
            {isSuccess ? (
              <div className="py-12 px-4 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#C7F36B]/20 border border-[#C7F36B] text-[#C7F36B] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white tracking-tight">
                  RFQ SPECIFICATIONS RECEIVED
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-[#C7F36B] font-semibold">{formData.fullName}</span> from <span className="text-white font-semibold">{formData.companyName}</span>. Your inquiry for <span className="text-white">{formData.productCategory}</span> has been assigned to our Senior Merchandising Lead.
                </p>
                <div className="pt-4">
                  <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-xs font-mono text-neutral-400 max-w-sm mx-auto">
                    A formal acknowledgment and preliminary timeline have been dispatched to <strong className="text-white">{formData.businessEmail}</strong>.
                  </div>
                </div>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        fullName: '',
                        companyName: '',
                        businessEmail: '',
                        phone: '',
                        productCategory: 'Premium Heavyweight T-Shirts (280 GSM)',
                        estimatedQuantity: '1,000 - 5,000 pcs',
                        targetDeliveryDate: '',
                        targetGsm: '280 GSM',
                        fabricPreference: 'GOTS Organic Combed Cotton',
                        projectDetails: '',
                        sustainabilityTarget: 'OEKO-TEX Class 1'
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono uppercase text-white transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="border-b border-white/10 pb-4">
                  <h3 className="text-xl font-display font-bold text-white">
                    REQUEST A MANUFACTURING QUOTE
                  </h3>
                  <span className="text-xs font-mono text-neutral-400">
                    B2B Wholesale & Contract Garment Manufacturing
                  </span>
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-900/40 border border-red-500/50 text-red-200 text-xs">
                    {errorMessage}
                  </div>
                )}

                {/* Row 1: Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono uppercase text-neutral-400 block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Marcus Vance"
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#C7F36B] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase text-neutral-400 block mb-1.5">
                      Brand / Company Name *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. Vance Studios Ltd."
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#C7F36B] transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono uppercase text-neutral-400 block mb-1.5">
                      Corporate Work Email *
                    </label>
                    <input
                      type="email"
                      name="businessEmail"
                      required
                      value={formData.businessEmail}
                      onChange={handleChange}
                      placeholder="procurement@brand.com"
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#C7F36B] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase text-neutral-400 block mb-1.5">
                      Phone / WhatsApp (Optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#C7F36B] transition-colors"
                    />
                  </div>
                </div>

                {/* Row 3: Product Category & Quantity */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono uppercase text-neutral-400 block mb-1.5">
                      Primary Silhouette *
                    </label>
                    <select
                      name="productCategory"
                      value={formData.productCategory}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-[#C7F36B] transition-colors"
                    >
                      <option value="Heavyweight T-Shirts (240 - 320 GSM)">Heavyweight T-Shirts (240 - 320 GSM)</option>
                      <option value="Diagonal French Terry Hoodies (420 - 500 GSM)">Diagonal French Terry Hoodies (420 - 500 GSM)</option>
                      <option value="Technical Outerwear & Bomber Jackets">Technical Outerwear & Bomber Jackets</option>
                      <option value="Japanese Selvedge Denim (14.5 oz)">Japanese Selvedge Denim (14.5 oz)</option>
                      <option value="Mercerized Pique Golf Polos">Mercerized Pique Golf Polos</option>
                      <option value="Seamless Compression Activewear">Seamless Compression Activewear</option>
                      <option value="Custom Bespoke Fabric Development">Custom Bespoke Fabric Development</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase text-neutral-400 block mb-1.5">
                      Estimated Initial Quantity *
                    </label>
                    <select
                      name="estimatedQuantity"
                      value={formData.estimatedQuantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-[#C7F36B] transition-colors"
                    >
                      <option value="250 - 500 pcs (Capsule Trial)">250 - 500 pcs (Capsule Trial)</option>
                      <option value="500 - 1,500 pcs">500 - 1,500 pcs</option>
                      <option value="1,500 - 5,000 pcs">1,500 - 5,000 pcs</option>
                      <option value="5,000 - 20,000 pcs">5,000 - 20,000 pcs</option>
                      <option value="20,000+ pcs (Enterprise Volume)">20,000+ pcs (Enterprise Volume)</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Fabric / GSM Target */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono uppercase text-neutral-400 block mb-1.5">
                      Preferred Fabric Composition
                    </label>
                    <input
                      type="text"
                      name="fabricPreference"
                      value={formData.fabricPreference}
                      onChange={handleChange}
                      placeholder="e.g. 100% GOTS Cotton or Recycled Poly"
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#C7F36B] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase text-neutral-400 block mb-1.5">
                      Target Delivery Window
                    </label>
                    <input
                      type="text"
                      name="targetDeliveryDate"
                      value={formData.targetDeliveryDate}
                      onChange={handleChange}
                      placeholder="e.g. Q3 2026 / Fall Collection"
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#C7F36B] transition-colors"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="text-xs font-mono uppercase text-neutral-400 block mb-1.5">
                    Project Specifications & Tech Pack Details
                  </label>
                  <textarea
                    rows={3}
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    placeholder="Specify target fits, dye treatments (reactive, garment wash, ozone), print/embroidery requirements, and any FOB/DDP shipping preferences..."
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#C7F36B] transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#C7F36B] hover:bg-[#b8e858] text-black font-bold font-mono text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>GENERATING SPECIFICATION ENVELOPE...</span>
                    </span>
                  ) : (
                    <>
                      <span>REQUEST A MANUFACTURING QUOTE</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="text-center text-[10px] font-mono text-neutral-500">
                  Protected by 256-Bit SSL Encryption. Your specifications are never shared with third parties.
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
