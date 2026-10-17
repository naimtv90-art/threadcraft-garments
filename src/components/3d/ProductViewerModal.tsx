import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, ContactShadows } from '@react-three/drei';
import { Product } from '../../types';
import { GarmentMesh } from './GarmentMesh';
import { X, Layers, CheckCircle2, ShieldAlert, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductViewerModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductViewerModal: React.FC<ProductViewerModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const [activeColor, setActiveColor] = useState<string>(product.colors[0]?.hex || '#EDE9E1');
  const [wireframe, setWireframe] = useState<boolean>(false);
  const [fabricType, setFabricType] = useState<'jersey' | 'fleece' | 'ripstop' | 'denim'>(
    product.category === 'jackets' ? 'ripstop' :
    product.category === 'hoodies' ? 'fleece' :
    product.category === 'denim' ? 'denim' : 'jersey'
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-xl animate-fadeIn">
      <div 
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#171717] border border-white/15 rounded-3xl text-white shadow-2xl flex flex-col lg:flex-row overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-30 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Close 3D viewer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: 3D Canvas Showcase */}
        <div className="relative w-full lg:w-3/5 h-[380px] lg:h-auto min-h-[420px] bg-gradient-to-b from-[#1d2127] to-[#121417] flex items-center justify-center cursor-grab active:cursor-grabbing border-b lg:border-b-0 lg:border-r border-white/10">
          <Canvas
            shadows
            camera={{ position: [0, 0.2, 4.0], fov: 45 }}
            gl={{ antialias: true, alpha: true }}
          >
            <ambientLight intensity={0.7} />
            <directionalLight position={[5, 6, 5]} intensity={1.3} castShadow />
            <directionalLight position={[-5, 2, 3]} intensity={0.5} color="#94a3b8" />
            <spotLight position={[0, 5, -4]} intensity={1.8} color="#C7F36B" />

            <Suspense fallback={null}>
              <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
                <GarmentMesh
                  type={product.modelType}
                  color={activeColor}
                  wireframe={wireframe}
                  fabricType={fabricType}
                />
              </Float>
              <ContactShadows position={[0, -1.8, 0]} opacity={0.4} scale={5} blur={2.2} />
            </Suspense>

            <OrbitControls
              enablePan={false}
              enableZoom={true}
              minDistance={2.5}
              maxDistance={6.0}
              rotateSpeed={0.6}
            />
          </Canvas>

          {/* Floating Instructions */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[#C7F36B] text-[10px] font-mono uppercase tracking-widest border border-white/10">
              REAL-TIME 3D INSPECTOR
            </span>
          </div>

          <div className="absolute bottom-4 inset-x-4 flex items-center justify-between pointer-events-auto">
            {/* CAD Wireframe Toggle */}
            <button
              onClick={() => setWireframe(!wireframe)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                wireframe ? 'bg-[#C7F36B] text-black font-semibold' : 'bg-white/10 text-neutral-300 hover:bg-white/20'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{wireframe ? 'CAD: ON' : 'VIEW CAD'}</span>
            </button>

            <span className="text-[11px] font-mono text-neutral-400 hidden sm:block">
              CLICK & DRAG TO ROTATE 360°
            </span>
          </div>
        </div>

        {/* Right Side: Product Technical Sheet & Inquiries */}
        <div className="w-full lg:w-2/5 p-6 lg:p-8 flex flex-col justify-between overflow-y-auto bg-[#171717]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#C7F36B] tracking-wider uppercase mb-1">
              <span>{product.categoryLabel}</span>
              <span>//</span>
              <span>{product.gsm} GSM</span>
            </div>

            <h3 className="text-2xl font-display font-bold text-white tracking-tight mb-2">
              {product.name}
            </h3>

            <p className="text-xs text-neutral-300 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Colorway Selection */}
            <div className="mb-6">
              <label className="text-xs font-mono text-neutral-400 uppercase block mb-2">
                Factory Colorway Variations:
              </label>
              <div className="flex items-center gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setActiveColor(c.hex)}
                    title={`${c.name} (${c.label})`}
                    className={`w-7 h-7 rounded-full border-2 transition-transform ${
                      activeColor === c.hex ? 'border-[#C7F36B] scale-125' : 'border-neutral-600 hover:scale-110'
                    }`}
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="space-y-2 mb-6">
              <h4 className="text-xs font-mono text-[#C7F36B] uppercase tracking-wider">
                Manufacturing Specifications:
              </h4>
              <div className="divide-y divide-white/10 rounded-xl bg-white/5 p-3 text-xs">
                <div className="flex justify-between py-1.5">
                  <span className="text-neutral-400">Material Composition</span>
                  <span className="text-white font-medium text-right">{product.material}</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-neutral-400">Minimum Order (MOQ)</span>
                  <span className="text-white font-medium font-mono">{product.moq}</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-neutral-400">Production Lead Time</span>
                  <span className="text-white font-medium font-mono">{product.leadTime}</span>
                </div>
                {product.specs.slice(0, 2).map((s, idx) => (
                  <div key={idx} className="flex justify-between py-1.5">
                    <span className="text-neutral-400">{s.label}</span>
                    <span className="text-white font-medium">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-6 space-y-1.5">
              {product.features.slice(0, 3).map((f, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C7F36B] flex-shrink-0 mt-0.5" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
            <Link
              to={`/quote?product=${product.slug}`}
              onClick={onClose}
              className="flex-1 py-3 px-4 rounded-xl bg-[#C7F36B] hover:bg-[#b8e858] text-black font-semibold text-xs uppercase tracking-wider text-center transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <span>Request Tech Pack & Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to={`/products/${product.slug}`}
              onClick={onClose}
              className="py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs uppercase tracking-wider text-center transition-all"
            >
              Full Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
