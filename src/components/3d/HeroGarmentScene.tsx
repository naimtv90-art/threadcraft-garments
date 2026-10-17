import React, { Suspense, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, ContactShadows } from '@react-three/drei';
import { GarmentMesh } from './GarmentMesh';
import { Layers, Sparkles, Sliders, ShieldCheck, Compass } from 'lucide-react';

interface HeroGarmentSceneProps {
  className?: string;
}

export const HeroGarmentScene: React.FC<HeroGarmentSceneProps> = ({ className = '' }) => {
  const [selectedSilhouette, setSelectedSilhouette] = useState<'tshirt' | 'hoodie' | 'jacket'>('tshirt');
  const [selectedColor, setSelectedColor] = useState<string>('#EDE9E1');
  const [wireframe, setWireframe] = useState<boolean>(false);
  const [activeLabel, setActiveLabel] = useState<string>('Fabric');

  const colorways = [
    { name: 'Bone White', hex: '#EDE9E1', label: 'Raw Unbleached' },
    { name: 'Obsidian Black', hex: '#161616', label: 'Reactive Pitch' },
    { name: 'Electric Lime', hex: '#C7F36B', label: 'Fluo Accent' },
    { name: 'Slate Industrial', hex: '#4B5563', label: 'Dyed Mineral' }
  ];

  const technicalTags = [
    { id: 'Fabric', label: 'FABRIC: 280 GSM BIO-COMBED COTTON' },
    { id: 'Precision', label: 'PRECISION: ±0.5MM SEAM TOLERANCE' },
    { id: 'Quality', label: 'QUALITY: AQL 1.5 ZERO-DEFECT AUDIT' },
    { id: 'Innovation', label: 'INNOVATION: ZERO-TORQUE KNIT WEAVE' }
  ];

  return (
    <div className={`relative w-full h-full min-h-[550px] lg:min-h-[700px] flex items-center justify-center select-none ${className}`}>
      
      {/* 3D Canvas */}
      <div className="absolute inset-0 cursor-grab active:cursor-grabbing">
        <Canvas
          shadows
          camera={{ position: [0, 0.4, 4.2], fov: 42 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          dpr={[1, 2]}
        >
          {/* Studio Fashion Lighting Setup */}
          <ambientLight intensity={0.65} />
          
          {/* Key Light (soft warm daylight) */}
          <directionalLight
            position={[4, 5, 5]}
            intensity={1.2}
            castShadow
            shadow-mapSize={[1024, 1024]}
            shadow-bias={-0.0001}
          />
          
          {/* Fill Light (cool contrast fill) */}
          <directionalLight position={[-4, 2, 3]} intensity={0.5} color="#e2e8f0" />
          
          {/* Rim Light (Electric Lime rim highlight for high-fashion edge glow) */}
          <spotLight
            position={[0, 6, -4]}
            intensity={1.8}
            angle={0.6}
            penumbra={0.9}
            color="#C7F36B"
          />

          {/* Under-Glow Bounce Light */}
          <pointLight position={[0, -2, 2]} intensity={0.3} color="#ffffff" />

          <Suspense fallback={null}>
            <Float speed={1.5} rotationIntensity={0.25} floatIntensity={0.3}>
              <GarmentMesh
                type={selectedSilhouette}
                color={selectedColor}
                wireframe={wireframe}
                fabricType={selectedSilhouette === 'jacket' ? 'ripstop' : selectedSilhouette === 'hoodie' ? 'fleece' : 'jersey'}
              />
            </Float>

            {/* Soft contact ground shadow */}
            <ContactShadows
              position={[0, -1.9, 0]}
              opacity={0.45}
              scale={6}
              blur={2.4}
              far={4}
            />
          </Suspense>

          {/* Damped, controlled orbit drag */}
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.7}
            rotateSpeed={0.6}
            dampingFactor={0.05}
          />
        </Canvas>
      </div>

      {/* Floating Technical HUD Overlays */}
      <div className="absolute top-6 left-6 z-10 flex flex-col gap-2 pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-charcoal-dark/90 backdrop-blur-md border border-white/10 text-white text-xs font-mono tracking-widest shadow-xl">
          <span className="w-2 h-2 rounded-full bg-[#C7F36B] animate-pulse"></span>
          <span>INTERACTIVE 3D VIEWER // REAL-TIME PHYSICS</span>
        </div>
        <div className="text-[11px] font-mono text-ink-secondary hidden sm:block">
          HOLD & DRAG TO ROTATE 360° • SWITCH FABRICS & COLORWAYS
        </div>
      </div>

      {/* Floating Technical Markers in 3D Space */}
      <div className="absolute top-1/4 right-8 lg:right-16 z-10 flex flex-col gap-3 pointer-events-auto">
        {technicalTags.map((tag) => (
          <button
            key={tag.id}
            onClick={() => setActiveLabel(tag.id)}
            className={`group flex items-center gap-3 px-3 py-1.5 rounded-md text-[11px] font-mono tracking-wider transition-all duration-300 ${
              activeLabel === tag.id
                ? 'bg-charcoal-dark text-[#C7F36B] border border-[#C7F36B]/50 shadow-lg translate-x-[-4px]'
                : 'bg-white/80 backdrop-blur-md text-ink-primary border border-black/5 hover:border-black/20 hover:bg-white'
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full transition-colors ${activeLabel === tag.id ? 'bg-[#C7F36B]' : 'bg-ink-secondary/40'}`}></span>
            <span>{tag.label}</span>
          </button>
        ))}
      </div>

      {/* Interactive Control Dock (Bottom Center) */}
      <div className="absolute bottom-6 inset-x-4 max-w-xl mx-auto z-20 flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-charcoal-dark/90 backdrop-blur-xl border border-white/10 text-white shadow-2xl">
        
        {/* Silhouette Selector */}
        <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl">
          {(['tshirt', 'hoodie', 'jacket'] as const).map((sil) => (
            <button
              key={sil}
              onClick={() => setSelectedSilhouette(sil)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium uppercase tracking-wider transition-all ${
                selectedSilhouette === sil
                  ? 'bg-white text-black font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {sil === 'tshirt' ? 'Tee' : sil}
            </button>
          ))}
        </div>

        {/* Colorway Swatches */}
        <div className="flex items-center gap-2 px-2">
          {colorways.map((c) => (
            <button
              key={c.name}
              onClick={() => setSelectedColor(c.hex)}
              title={c.name}
              className={`w-6 h-6 rounded-full border-2 transition-transform ${
                selectedColor === c.hex ? 'border-[#C7F36B] scale-125' : 'border-neutral-600 hover:scale-110'
              }`}
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>

        {/* Wireframe / Spec View Toggle */}
        <button
          onClick={() => setWireframe(!wireframe)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
            wireframe
              ? 'bg-[#C7F36B] text-black font-semibold'
              : 'bg-white/10 text-neutral-300 hover:bg-white/20'
          }`}
          title="Toggle CAD Wireframe Mesh"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>{wireframe ? 'CAD: ON' : 'CAD MESH'}</span>
        </button>

      </div>

    </div>
  );
};
