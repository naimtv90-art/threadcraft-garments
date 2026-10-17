import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES } from '../../data/garments';
import { Product, ProductCategory } from '../../types';
import { ProductViewerModal } from '../3d/ProductViewerModal';
import { ArrowUpRight, Box, Sparkles, Filter, Layers, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProductShowcaseSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [inspectingProduct, setInspectingProduct] = useState<Product | null>(null);

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section className="py-24 bg-[#F5F3EE] text-[#191919] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#191919] tracking-widest uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#191919]"></span>
              SILHOUETTES & SOURCING // OEM / ODM CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-[#191919]">
              ENGINEERED APPAREL ARCHIVE
            </h2>
          </div>

          <p className="text-sm text-[#777777] max-w-md leading-relaxed">
            Every garment silhouette is calibrated for commercial mass-manufacturing, structural longevity, and minimal environmental impact. Explore in full 3D interactive fidelity.
          </p>
        </div>

        {/* Category Filter Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as ProductCategory)}
              className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-[#171717] text-[#C7F36B] font-semibold shadow-md'
                  : 'bg-white border border-black/5 text-[#777777] hover:text-black hover:border-black/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group rounded-3xl bg-white border border-black/5 hover:border-black/20 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Image / 3D Canvas Trigger */}
                <div className="relative aspect-[4/3] bg-[#EFECE6] overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-[#171717]/85 backdrop-blur-md text-[#C7F36B] text-[10px] font-mono uppercase tracking-widest">
                      {product.gsm} GSM
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-black text-[10px] font-mono uppercase font-semibold">
                      MOQ: {product.moq.split('/')[0]}
                    </span>
                  </div>

                  {/* Center "Inspect in 3D" Trigger Button on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-xs">
                    <button
                      onClick={() => setInspectingProduct(product)}
                      className="px-5 py-2.5 rounded-full bg-[#C7F36B] text-black font-bold text-xs uppercase font-mono shadow-2xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform"
                    >
                      <Box className="w-4 h-4" />
                      <span>Inspect in 3D</span>
                    </button>
                  </div>

                  {/* Bottom Category Info Tag */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                    <span className="uppercase tracking-wider">{product.categoryLabel}</span>
                    <span className="text-neutral-300">Lead: {product.leadTime}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    {product.tags.slice(0, 2).map((t, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EFECE6] text-[#777777]">
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-display font-bold text-xl text-[#191919] tracking-tight mb-2 group-hover:text-black">
                    {product.name}
                  </h3>

                  <p className="text-xs text-[#777777] line-clamp-2 leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {/* Color Swatch Dots */}
                  <div className="flex items-center gap-1.5 pt-2 border-t border-black/5">
                    <span className="text-[11px] font-mono text-[#777777] mr-2">Colorways:</span>
                    {product.colors.map((c) => (
                      <span
                        key={c.name}
                        className="w-3.5 h-3.5 rounded-full border border-black/10"
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between gap-3">
                <button
                  onClick={() => setInspectingProduct(product)}
                  className="flex-1 py-2.5 rounded-xl bg-black/5 hover:bg-black/10 text-black font-semibold text-xs font-mono uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                >
                  <Box className="w-3.5 h-3.5" />
                  <span>3D View</span>
                </button>

                <Link
                  to={`/quote?product=${product.slug}`}
                  className="py-2.5 px-4 rounded-xl bg-[#171717] hover:bg-black text-[#C7F36B] font-semibold text-xs font-mono uppercase tracking-wider transition-colors flex items-center gap-1"
                >
                  <span>Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* 3D Inspection Modal */}
      <ProductViewerModal
        product={inspectingProduct}
        onClose={() => setInspectingProduct(null)}
      />
    </section>
  );
};
