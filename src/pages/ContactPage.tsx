import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: 'General Sourcing Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  const offices = [
    {
      city: 'CENTRAL EXPORT CAMPUS',
      country: 'Bangladesh / Sri Lanka Hub',
      address: 'Plot 42-48, Sector 7, Export Processing Zone (EPZ)',
      email: 'sourcing@threadcraft-mfg.com',
      phone: '+1 (800) 492-8170',
      hours: 'Mon - Sat: 08:00 - 18:00 (GMT+6)'
    },
    {
      city: 'NEW YORK LIAISON OFFICE',
      country: 'United States',
      address: '540 Broadway, 8th Floor, SoHo Fashion District, New York, NY 10012',
      email: 'usa-desk@threadcraft-mfg.com',
      phone: '+1 (212) 890-4100',
      hours: 'Mon - Fri: 09:00 - 17:30 (EST)'
    },
    {
      city: 'LONDON SOURCING DESK',
      country: 'United Kingdom & Europe',
      address: '22 Hanover Square, Mayfair, London W1S 1JA',
      email: 'europe@threadcraft-mfg.com',
      phone: '+44 20 7946 0912',
      hours: 'Mon - Fri: 09:00 - 17:30 (GMT)'
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-[#F5F3EE] text-[#191919]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#191919] tracking-widest uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-[#191919]"></span>
            COMMUNICATION & SOURCING DESK
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-[#191919] mb-4">
            CONNECT WITH OUR MERCHANDISING TEAM.
          </h1>
          <p className="text-base text-[#777777] leading-relaxed">
            Direct communication channels for international retail brands, buying houses, technical designers, and supply chain directors.
          </p>
        </div>

        {/* 3 Regional Office Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {offices.map((off, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm space-y-4">
              <span className="text-[10px] font-mono text-[#777777] uppercase tracking-widest block">
                LOCATION 0{idx + 1}
              </span>
              <h3 className="font-display font-bold text-xl text-[#191919]">
                {off.city}
              </h3>
              <p className="text-xs font-semibold text-neutral-600">
                {off.country}
              </p>

              <div className="space-y-2.5 pt-4 border-t border-black/5 text-xs text-[#777777]">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-black flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{off.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-black flex-shrink-0" />
                  <span className="font-mono text-black">{off.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-black flex-shrink-0" />
                  <span className="font-mono">{off.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-black flex-shrink-0" />
                  <span>{off.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form & Sample Dispatch Notice */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          <div className="lg:col-span-7 bg-white border border-black/5 rounded-3xl p-8 sm:p-10 shadow-sm">
            <h2 className="text-2xl font-display font-bold text-[#191919] mb-2">
              SEND DIRECT SOURCING MESSAGE
            </h2>
            <p className="text-xs text-[#777777] mb-8">
              Guaranteed response within 12 business hours from our Lead Merchandiser.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-black mx-auto" />
                <h3 className="font-display font-bold text-xl text-black">MESSAGE TRANSMITTED</h3>
                <p className="text-xs text-[#777777] max-w-sm mx-auto">
                  Thank you, {formData.name}. Our merchandising team has logged your inquiry and will reply shortly to {formData.email}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-black text-white text-xs font-mono uppercase"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono uppercase text-[#777777] block mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F3EE] border border-black/10 focus:outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="font-mono uppercase text-[#777777] block mb-1">Corporate Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@fashionbrand.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F3EE] border border-black/10 focus:outline-none focus:border-black"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono uppercase text-[#777777] block mb-1">Company / Brand Name</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Atelier New York"
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F3EE] border border-black/10 focus:outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="font-mono uppercase text-[#777777] block mb-1">Inquiry Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F3EE] border border-black/10 focus:outline-none focus:border-black"
                    >
                      <option>General Sourcing Inquiry</option>
                      <option>Physical Fabric Swatch Book Request</option>
                      <option>Factory Tour & Audit Visit</option>
                      <option>Custom Dye Lab Dip Formulation</option>
                      <option>Contract Manufacturing Terms</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-mono uppercase text-[#777777] block mb-1">Message & Inquiries *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your collection targets, fabric preferences, or upcoming production timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F3EE] border border-black/10 focus:outline-none focus:border-black"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#171717] hover:bg-black text-[#C7F36B] font-mono text-xs uppercase font-bold tracking-wider transition-colors shadow-md"
                >
                  Send Inquiry Message
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#171717] text-white border border-white/10 space-y-4">
              <span className="text-xs font-mono text-[#C7F36B] uppercase tracking-widest block">
                COMPLIMENTARY DISPATCH
              </span>
              <h3 className="text-2xl font-display font-bold">
                PHYSICAL FABRIC SWATCH BOOKLET
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Qualified international apparel brands and retail sourcing managers receive our complimentary 80-page textile swatch box, featuring actual swatches of 280 GSM combed cotton, diagonal French terry, and selvedge denim.
              </p>
              <div className="pt-2">
                <span className="text-[11px] font-mono text-neutral-400 block mb-2">
                  Dispatched via DHL Express Worldwide (3-Day Delivery)
                </span>
                <button
                  onClick={() => alert('Please select "Physical Fabric Swatch Book Request" in the contact form to initiate dispatch verification.')}
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono uppercase text-white transition-colors"
                >
                  Request Swatch Kit
                </button>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-black/5 text-xs text-[#777777] space-y-2">
              <span className="font-bold text-black uppercase block">URGENT CONTRACT MATTERS</span>
              <p>For active procurement contracts or bonded customs inquiries, our 24/7 client desk is reachable at:</p>
              <p className="font-mono text-black font-semibold">+1 (800) 492-8170 // desk@threadcraft-mfg.com</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
