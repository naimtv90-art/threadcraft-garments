import React, { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES } from '../data/garments';
import { ProductCategory, Product } from '../types';
import { ProductViewerModal } from '../components/3d/ProductViewerModal';
import { Box, Search, ArrowUpRight } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

export const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = (searchParams.get('category') as ProductCategory) || 'all';

  const [activeCategory, setActiveCategory] = useState<ProductCategory>(initialCat);
  const [searchQuery, setSearchQuery] = useState('');
  const [inspectingProduct, setInspectingProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p: Product) => {
      const matchCat = activeCategory === 'all' || p.category === activeCategory;
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="pt-28 pb-20 bg-[#F5F3EE] text-[#191919]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[#191919] tracking-widest uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-[#191919]"></span>
            WHOLESALE CATALOG // 3D INTERACTIVE ARCHIVE
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-[#191919] mb-4">
            GARMENT SILHOUETTES.
          </h1>
          <p className="text-sm sm:text-base text-[#777777] leading-relaxed">
            Engineered silhouettes ready for private labeling, customized dye treatments, embroidery, screen printing, and international volume dispatch.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-black/10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id as ProductCategory);
                  setSearchParams({ category: cat.id });
                }}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#171717] text-[#C7F36B] font-bold shadow-sm'
                    : 'bg-white border border-black/5 text-[#777777] hover:text-black hover:border-black/20'
                }`}
              >
                {cat.label} ({cat.id === 'all' ? PRODUCTS.length : PRODUCTS.filter((p: Product) => p.category === cat.id).length})
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by fabric, GSM, name..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white border border-black/10 text-xs text-[#191919] focus:outline-none focus:border-black"
            />
          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center text-neutral-500 font-mono text-sm">
            No silhouettes found matching your criteria. Try adjusting your search query.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product: Product) => (
              <div
                key={product.id}
                className="group rounded-3xl bg-white border border-black/5 hover:border-black/20 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Product Image & 3D Inspect Trigger */}
                  <div className="relative aspect-[4/3] bg-[#EFECE6] overflow-hidden">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-md bg-[#171717]/85 backdrop-blur-md text-[#C7F36B] text-[10px] font-mono uppercase tracking-widest">
                        {product.gsm} GSM
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-black text-[10px] font-mono uppercase font-semibold">
                        MOQ: {product.moq.split('/')[0]}
                      </span>
                    </div>

                    {/* Inspect in 3D Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-xs">
                      <button
                        onClick={() => setInspectingProduct(product)}
                        className="px-5 py-2.5 rounded-full bg-[#C7F36B] text-black font-bold text-xs uppercase font-mono shadow-2xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform"
                      >
                        <Box className="w-4 h-4" />
                        <span>Inspect in 3D</span>
                      </button>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                      <span className="uppercase tracking-wider">{product.categoryLabel}</span>
                      <span className="text-neutral-300">Lead: {product.leadTime}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      {product.tags.slice(0, 2).map((t: string, idx: number) => (
                        <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EFECE6] text-[#777777]">
                          {t}
                        </span>
                      ))}
                    </div>

                    <Link to={`/products/${product.slug}`} className="block">
                      <h3 className="font-display font-bold text-xl text-[#191919] tracking-tight mb-2 group-hover:text-black">
                        {product.name}
                      </h3>
                    </Link>

                    <p className="text-xs text-[#777777] line-clamp-2 leading-relaxed mb-4">
                      {product.description}
                    </p>

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

                {/* Actions */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setInspectingProduct(product)}
                    className="flex-1 py-2.5 rounded-xl bg-black/5 hover:bg-black/10 text-black font-semibold text-xs font-mono uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Box className="w-3.5 h-3.5" />
                    <span>3D Inspect</span>
                  </button>

                  <Link
                    to={`/products/${product.slug}`}
                    className="py-2.5 px-4 rounded-xl bg-[#171717] hover:bg-black text-[#C7F36B] font-semibold text-xs font-mono uppercase tracking-wider transition-colors flex items-center gap-1"
                  >
                    <span>Tech Pack</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Modal */}
      <ProductViewerModal
        product={inspectingProduct}
        onClose={() => setInspectingProduct(null)}
      />
    </div>
  );
};
