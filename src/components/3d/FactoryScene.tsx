import React, { Suspense, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Html } from '@react-three/drei';
import * as THREE from 'three';
import { FACTORY_ZONES, FACTORY_METRICS } from '../../data/factoryData';
import { FactoryZone } from '../../types';
import { Cpu, Activity, ShieldCheck, Box, ArrowRight, Gauge } from 'lucide-react';

// Animated cutting laser effect
const LaserSpreader: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const laserRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (laserRef.current) {
      const t = state.clock.getElapsedTime();
      laserRef.current.position.x = Math.sin(t * 2) * 0.9;
    }
  });

  return (
    <group position={position}>
      {/* Cutting Table Base */}
      <mesh position={[0, 0.3, 0]}>
        <boxGeometry args={[2.4, 0.6, 1.4]} />
        <meshStandardMaterial color="#22252a" roughness={0.4} />
      </mesh>
      {/* Fabric Layer */}
      <mesh position={[0, 0.62, 0]}>
        <boxGeometry args={[2.2, 0.04, 1.2]} />
        <meshStandardMaterial color="#C7F36B" roughness={0.9} />
      </mesh>
      {/* CNC Bridge */}
      <mesh ref={laserRef} position={[0, 0.85, 0]}>
        <boxGeometry args={[0.15, 0.4, 1.3]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Laser Light Beam */}
      <pointLight position={[0, 0.7, 0]} color="#ef4444" intensity={2} distance={1.5} />
    </group>
  );
};

// Synchronous Sewing Line with moving garment carriers
const SewingLine: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const carrierRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (carrierRef.current) {
      const t = state.clock.getElapsedTime();
      carrierRef.current.position.x = ((t * 0.8) % 2.4) - 1.2;
    }
  });

  return (
    <group position={position}>
      {/* Overhead Rail */}
      <mesh position={[0, 1.8, 0]}>
        <boxGeometry args={[2.6, 0.08, 0.08]} />
        <meshStandardMaterial color="#64748b" metalness={0.8} />
      </mesh>
      {/* Operator Benches */}
      {[-0.8, 0, 0.8].map((x, i) => (
        <group key={i} position={[x, 0.4, 0]}>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.5, 0.8, 0.8]} />
            <meshStandardMaterial color="#1e293b" roughness={0.6} />
          </mesh>
          {/* Machine Head */}
          <mesh position={[0, 0.48, 0]}>
            <boxGeometry args={[0.2, 0.16, 0.35]} />
            <meshStandardMaterial color="#e2e8f0" metalness={0.6} />
          </mesh>
        </group>
      ))}
      {/* Moving Carrier with Garment */}
      <group ref={carrierRef} position={[0, 1.4, 0]}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.015, 0.015, 0.7, 8]} />
          <meshStandardMaterial color="#94a3b8" />
        </mesh>
        <mesh position={[0, -0.4, 0]}>
          <boxGeometry args={[0.28, 0.45, 0.08]} />
          <meshStandardMaterial color="#EDE9E1" />
        </mesh>
      </group>
    </group>
  );
};

// High-Pressure Soft-Flow Dye Autoclaves
const DyeingFacility: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  return (
    <group position={position}>
      {[-0.6, 0.6].map((x, i) => (
        <group key={i} position={[x, 0.75, 0]}>
          {/* Main Vessel */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.45, 0.45, 1.4, 24]} />
            <meshStandardMaterial color="#334155" metalness={0.8} roughness={0.2} />
          </mesh>
          {/* Digital Controller Monitor */}
          <mesh position={[0, 0.4, 0.6]}>
            <boxGeometry args={[0.25, 0.3, 0.1]} />
            <meshStandardMaterial color="#0f172a" />
          </mesh>
          <pointLight position={[0, 0.4, 0.7]} color="#10b981" intensity={1} distance={1} />
        </group>
      ))}
    </group>
  );
};

// Spectrometry & Inspection Light Box Table
const QualityLab: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  return (
    <group position={position}>
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[1.8, 1.0, 1.2]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>
      {/* Glowing 5000K Color Check Light Surface */}
      <mesh position={[0, 1.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.6, 1.0]} />
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#ffffff" 
          emissiveIntensity={1.2} 
        />
      </mesh>
      {/* Spectrophotometer Sensor Arm */}
      <mesh position={[0, 1.35, 0]}>
        <boxGeometry args={[0.2, 0.3, 0.2]} />
        <meshStandardMaterial color="#6366f1" metalness={0.7} />
      </mesh>
      <pointLight position={[0, 1.3, 0]} color="#ffffff" intensity={2} distance={2} />
    </group>
  );
};

// Continuous Steam Tunnel Packout
const SteamPacking: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  return (
    <group position={position}>
      {/* Veit Steam Tunnel Box */}
      <mesh position={[0, 0.9, 0]}>
        <boxGeometry args={[2.0, 1.2, 1.0]} />
        <meshStandardMaterial color="#2d3748" metalness={0.5} roughness={0.4} />
      </mesh>
      {/* Conveyor Belt Outfeed */}
      <mesh position={[1.4, 0.4, 0]}>
        <boxGeometry args={[1.0, 0.1, 0.8]} />
        <meshStandardMaterial color="#111827" />
      </mesh>
      {/* Steam Vent indicator */}
      <pointLight position={[0, 1.6, 0]} color="#C7F36B" intensity={1.5} distance={1.8} />
    </group>
  );
};

// Clickable 3D Beacon Node
const ZoneHotspotBeacon: React.FC<{
  zone: FactoryZone;
  isActive: boolean;
  onClick: () => void;
}> = ({ zone, isActive, onClick }) => {
  const beaconRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (beaconRef.current) {
      const t = state.clock.getElapsedTime();
      beaconRef.current.position.y = zone.hotspot.y + 1.2 + Math.sin(t * 3) * 0.08;
    }
  });

  return (
    <group position={[zone.hotspot.x, zone.hotspot.y, zone.hotspot.z]}>
      {/* Floating Animated Beacon Marker */}
      <mesh
        ref={beaconRef}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        <cylinderGeometry args={[0.18, 0, 0.35, 6]} />
        <meshStandardMaterial
          color={isActive ? '#C7F36B' : '#ffffff'}
          emissive={isActive ? '#C7F36B' : '#ffffff'}
          emissiveIntensity={isActive ? 1.5 : 0.6}
        />
      </mesh>

      {/* Pulsing ring on floor */}
      <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.3, 0.38, 24]} />
        <meshStandardMaterial
          color={isActive ? '#C7F36B' : '#ffffff'}
          opacity={isActive ? 0.8 : 0.3}
          transparent
        />
      </mesh>

      {/* 3D Label */}
      <Html position={[0, 1.8, 0]} center distanceFactor={12}>
        <button
          onClick={onClick}
          className={`px-2.5 py-1 rounded-md text-[10px] font-mono whitespace-nowrap transition-all uppercase tracking-wider ${
            isActive
              ? 'bg-[#C7F36B] text-black font-bold shadow-lg scale-110'
              : 'bg-black/80 backdrop-blur-md text-white/90 border border-white/20 hover:border-white/50'
          }`}
        >
          {zone.code}: {zone.name.split(' ')[0]}
        </button>
      </Html>
    </group>
  );
};

export const FactoryScene: React.FC = () => {
  const [activeZone, setActiveZone] = useState<FactoryZone>(FACTORY_ZONES[1]); // Default to sewing line
  const controlsRef = useRef<any>(null);

  const handleSelectZone = (zone: FactoryZone) => {
    setActiveZone(zone);
    if (controlsRef.current) {
      // Smoothly focus camera towards the selected hotspot
      controlsRef.current.target.set(zone.hotspot.x * 0.7, 0.6, zone.hotspot.z * 0.7);
    }
  };

  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-[#171717] border border-white/10 shadow-2xl">
      
      {/* Header Info Bar */}
      <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 bg-black/40 backdrop-blur-md">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#C7F36B] tracking-widest uppercase mb-1">
            <span className="w-2 h-2 rounded-full bg-[#C7F36B] animate-pulse"></span>
            DIGITAL TWIN // 450,000 SQ.FT INDUSTRIAL PRODUCTION FLOOR
          </div>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
            INTELLIGENT APPAREL MANUFACTURING FACILITY
          </h3>
        </div>
        
        {/* Key Metrics Chips */}
        <div className="flex flex-wrap items-center gap-2">
          {FACTORY_METRICS.map((m, idx) => (
            <div key={idx} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono">
              <span className="text-neutral-400 block text-[10px] uppercase">{m.label}</span>
              <span className="text-white font-semibold">{m.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main 3D Canvas Container */}
      <div className="relative w-full h-[520px] lg:h-[620px] cursor-grab active:cursor-grabbing">
        <Canvas
          shadows
          camera={{ position: [6.5, 7.5, 7.5], fov: 42 }}
          gl={{ antialias: true, alpha: false }}
        >
          <color attach="background" args={['#141619']} />
          <ambientLight intensity={0.6} />
          
          {/* Industrial High-Bay Factory Floodlights */}
          <directionalLight position={[10, 15, 8]} intensity={1.4} castShadow shadow-mapSize={[1024, 1024]} />
          <directionalLight position={[-10, 12, -8]} intensity={0.6} color="#94a3b8" />
          
          {/* Subtle Electric Lime Accent Lighting */}
          <pointLight position={[0, 5, 0]} color="#C7F36B" intensity={1.5} distance={15} />

          <Suspense fallback={null}>
            {/* Factory Grid Floor */}
            <mesh position={[0, -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
              <planeGeometry args={[22, 16]} />
              <meshStandardMaterial color="#1a1d21" roughness={0.8} />
            </mesh>

            {/* Industrial Safety Walkway Lines (Yellow/Lime painted stripes) */}
            <gridHelper args={[22, 22, '#2a3038', '#1f242c']} position={[0, 0.01, 0]} />

            {/* 3D Stations */}
            <LaserSpreader position={[-3.2, 0, -2.0]} />
            <SewingLine position={[0, 0, 0]} />
            <DyeingFacility position={[3.2, 0, -1.8]} />
            <QualityLab position={[-2.8, 0, 2.2]} />
            <SteamPacking position={[2.5, 0, 2.0]} />

            {/* Hotspot Beacons */}
            {FACTORY_ZONES.map((zone) => (
              <ZoneHotspotBeacon
                key={zone.id}
                zone={zone}
                isActive={activeZone.id === zone.id}
                onClick={() => handleSelectZone(zone)}
              />
            ))}
          </Suspense>

          <OrbitControls
            ref={controlsRef}
            enablePan={true}
            enableZoom={true}
            minDistance={4}
            maxDistance={18}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 2.2}
            dampingFactor={0.05}
          />
        </Canvas>

        {/* Hotspot Quick-Navigation Tabs (Floating Top Left) */}
        <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-1.5 max-w-md pointer-events-auto">
          {FACTORY_ZONES.map((z) => (
            <button
              key={z.id}
              onClick={() => handleSelectZone(z)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-2 ${
                activeZone.id === z.id
                  ? 'bg-[#C7F36B] text-black font-bold shadow-lg'
                  : 'bg-black/60 backdrop-blur-md text-white/80 border border-white/10 hover:bg-white/15'
              }`}
            >
              <span>{z.code}</span>
              <span className="hidden sm:inline">{z.name.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Interactive Zone Telemetry Card (Floating Bottom Overlay) */}
        <div className="absolute bottom-4 inset-x-4 max-w-2xl mx-auto z-10 bg-black/85 backdrop-blur-xl border border-white/15 rounded-2xl p-5 text-white shadow-2xl">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#C7F36B]">
                <Activity className="w-3.5 h-3.5" />
                <span>{activeZone.code} // {activeZone.category.toUpperCase()}</span>
                <span className="px-1.5 py-0.5 rounded text-[10px] bg-white/10 text-white font-mono">
                  {activeZone.automationLevel}
                </span>
              </div>
              <h4 className="text-lg md:text-xl font-bold font-display tracking-tight text-white mt-0.5">
                {activeZone.name}
              </h4>
            </div>

            <div className="text-right">
              <span className="text-[10px] font-mono text-neutral-400 uppercase block">Daily Output</span>
              <span className="text-sm font-bold text-[#C7F36B] font-mono">{activeZone.dailyCapacity}</span>
            </div>
          </div>

          <p className="text-xs md:text-sm text-neutral-300 leading-relaxed mb-4">
            {activeZone.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3 border-t border-white/10 text-xs">
            {activeZone.highlights.slice(0, 2).map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-neutral-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7F36B] flex-shrink-0"></span>
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
