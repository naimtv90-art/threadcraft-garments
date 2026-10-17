import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck, Mail, MapPin, Phone, Globe, Award, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#171717] text-white border-t border-white/10 relative overflow-hidden">
      
      {/* Decorative Grid Accent */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />

      {/* Main Footer Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          
          {/* Col 1 & 2: Brand & Statement */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#C7F36B] text-black font-display font-extrabold flex items-center justify-center text-lg">
                ✦
              </span>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                THREADCRAFT
              </span>
            </Link>

            <p className="text-sm text-neutral-400 leading-relaxed max-w-md">
              THREADCRAFT is a forward-thinking garments manufacturing and apparel export enterprise. We bridge sustainable organic raw material engineering, 3D digital fit visualization, and high-capacity synchronous production for the world's most demanding fashion brands.
            </p>

            <div className="pt-2">
              <div className="flex items-center gap-3 text-xs font-mono text-[#C7F36B]">
                <ShieldCheck className="w-4 h-4" />
                <span>GOTS • OEKO-TEX 100 • ISO 9001 • WRAP GOLD COMPLIANT</span>
              </div>
            </div>

            {/* Newsletter / Tech Pack dispatch */}
            <div className="pt-4 max-w-md">
              <span className="text-xs font-mono text-neutral-300 block mb-2 uppercase">
                Subscribe to Quarterly Textile Innovation Reports
              </span>
              <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed to THREADCRAFT Textile Innovation Reports.'); }} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter procurement email..."
                  className="flex-1 bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#C7F36B]"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-[#C7F36B] hover:bg-[#b8e858] text-black font-bold text-xs uppercase font-mono transition-colors"
                >
                  Join
                </button>
              </form>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#C7F36B] mb-5">
              EXPLORE
            </h4>
            <ul className="space-y-3 text-xs font-mono">
              <li>
                <Link to="/" className="text-neutral-400 hover:text-white transition-colors">
                  Home // 3D Hero
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-400 hover:text-white transition-colors">
                  About THREADCRAFT
                </Link>
              </li>
              <li>
                <Link to="/capabilities" className="text-neutral-400 hover:text-white transition-colors">
                  Manufacturing Capabilities
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-neutral-400 hover:text-white transition-colors">
                  Product Gallery
                </Link>
              </li>
              <li>
                <Link to="/factory" className="text-neutral-400 hover:text-white transition-colors">
                  3D Factory Digital Twin
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-neutral-400 hover:text-white transition-colors">
                  Quality & Sustainability
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-neutral-400 hover:text-[#C7F36B] transition-colors font-bold">
                  Request a Quote →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Apparel Categories */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#C7F36B] mb-5">
              SILHOUETTES
            </h4>
            <ul className="space-y-3 text-xs font-mono">
              <li>
                <Link to="/products?category=tshirts" className="text-neutral-400 hover:text-white transition-colors">
                  Heavyweight T-Shirts
                </Link>
              </li>
              <li>
                <Link to="/products?category=hoodies" className="text-neutral-400 hover:text-white transition-colors">
                  French Terry Hoodies
                </Link>
              </li>
              <li>
                <Link to="/products?category=jackets" className="text-neutral-400 hover:text-white transition-colors">
                  Technical Bombers & Outerwear
                </Link>
              </li>
              <li>
                <Link to="/products?category=denim" className="text-neutral-400 hover:text-white transition-colors">
                  Selvedge Denim
                </Link>
              </li>
              <li>
                <Link to="/products?category=polo" className="text-neutral-400 hover:text-white transition-colors">
                  Mercerized Pique Polos
                </Link>
              </li>
              <li>
                <Link to="/products?category=activewear" className="text-neutral-400 hover:text-white transition-colors">
                  Seamless Compression
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Global Export & Contact */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#C7F36B] mb-5">
              GLOBAL EXPORT HQ
            </h4>
            <div className="space-y-4 text-xs text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C7F36B] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Threadcraft Industrial Park, Sector 7, Export Processing Zone, Dhaka / Colombo
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C7F36B] flex-shrink-0" />
                <span className="font-mono">sourcing@threadcraft-mfg.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C7F36B] flex-shrink-0" />
                <span className="font-mono">+1 (800) 492-8170 (B2B Desk)</span>
              </div>
              <div className="pt-2">
                <Link
                  to="/quote"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-[#C7F36B] font-mono text-xs font-semibold transition-all"
                >
                  <span>OEM/ODM Inquiries</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div>
            © {new Date().getFullYear()} THREADCRAFT Apparel Manufacturing Ltd. All demonstration metrics are sample figures.
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert('THREADCRAFT Privacy Policy: Compliant with GDPR, CCPA, and global client non-disclosure agreements.'); }} className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert('THREADCRAFT Terms of Production: Standard international Incoterms (FOB, CIF, DDP) apply to all apparel export purchase orders.'); }} className="hover:text-white transition-colors">
              Terms & Incoterms
            </a>
            <a href="#compliance" onClick={(e) => { e.preventDefault(); alert('Social Compliance: Zero child labor, living wage verification, and Sedex SMETA 4-Pillar audits available on buyer request.'); }} className="hover:text-white transition-colors">
              Social Audit Disclosures
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
