import React, { Suspense, useState, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import { EXPORT_DESTINATIONS, GLOBAL_EXPORT_SUMMARY } from '../../data/globalReachData';
import { ExportDestination } from '../../types';
import { Navigation } from 'lucide-react';

const GLOBE_RADIUS = 2.4;

// Convert Lat/Lng to 3D Vector on sphere
function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

// Origin Manufacturing Hub: Lat 23.8°N, Lng 90.4°E
const ORIGIN_COORDS = { lat: 23.8, lng: 90.4, name: 'THREADCRAFT HQ & CENTRAL PRODUCTION' };

// Animated Glowing Arc from Origin to Destination
const FlightArc: React.FC<{
  start: THREE.Vector3;
  end: THREE.Vector3;
  isActive: boolean;
}> = ({ start, end, isActive }) => {
  const points = useMemo(() => {
    const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
    const distance = start.distanceTo(end);
    mid.normalize().multiplyScalar(GLOBE_RADIUS + distance * 0.28);

    const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
    return curve.getPoints(40);
  }, [start, end]);

  const geometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [points]);

  return (
    <line>
      <bufferGeometry attach="geometry" {...geometry} />
      <lineBasicMaterial
        attach="material"
        color={isActive ? '#C7F36B' : '#64748b'}
        linewidth={isActive ? 2 : 1}
        transparent
        opacity={isActive ? 0.95 : 0.4}
      />
    </line>
  );
};

// Clickable Destination Pin
const DestinationPin: React.FC<{
  dest: ExportDestination;
  position: THREE.Vector3;
  isActive: boolean;
  onClick: () => void;
}> = ({ dest, position, isActive, onClick }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current && isActive) {
      const t = state.clock.getElapsedTime();
      meshRef.current.scale.setScalar(1 + Math.sin(t * 4) * 0.2);
    }
  });

  return (
    <group position={position}>
      {/* Interactive Pin Marker */}
      <mesh
        ref={meshRef}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial
          color={isActive ? '#C7F36B' : '#ffffff'}
          emissive={isActive ? '#C7F36B' : '#ffffff'}
          emissiveIntensity={isActive ? 2.0 : 0.8}
        />
      </mesh>

      {/* Target Ring */}
      {isActive && (
        <mesh>
          <ringGeometry args={[0.1, 0.14, 24]} />
          <meshBasicMaterial color="#C7F36B" side={THREE.DoubleSide} />
        </mesh>
      )}

      {/* City Marker Tag */}
      <Html distanceFactor={10} position={[0, 0.18, 0]}>
        <button
          onClick={onClick}
          className={`px-2 py-0.5 rounded text-[9px] font-mono whitespace-nowrap transition-all uppercase tracking-wider ${
            isActive
              ? 'bg-[#C7F36B] text-black font-bold shadow-md scale-110'
              : 'bg-black/75 backdrop-blur-sm text-white/80 border border-white/20 hover:border-[#C7F36B]'
          }`}
        >
          {dest.city}
        </button>
      </Html>
    </group>
  );
};

// Rotating Globe Component (Renders inside Canvas so useFrame is valid)
const RotatingGlobeMesh: React.FC<{
  originVec: THREE.Vector3;
  destVectors: { dest: ExportDestination; vec: THREE.Vector3 }[];
  selectedDest: ExportDestination;
  onSelectDest: (d: ExportDestination) => void;
}> = ({ originVec, destVectors, selectedDest, onSelectDest }) => {
  const globeGroupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (globeGroupRef.current) {
      globeGroupRef.current.rotation.y += 0.0012;
    }
  });

  return (
    <group ref={globeGroupRef}>
      {/* Globe Core Sphere */}
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS, 48, 48]} />
        <meshStandardMaterial
          color="#1e242c"
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>

      {/* Wireframe Grid Layer */}
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS * 1.002, 36, 18]} />
        <meshStandardMaterial
          color="#334155"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* Atmospheric Glow Rim */}
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS * 1.05, 32, 32]} />
        <meshStandardMaterial
          color="#C7F36B"
          transparent
          opacity={0.06}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Origin Manufacturing Hub Pin */}
      <group position={originVec}>
        <mesh>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshBasicMaterial color="#ef4444" />
        </mesh>
        <Html distanceFactor={10} position={[0, 0.22, 0]}>
          <div className="px-2 py-0.5 rounded bg-red-600/90 text-white text-[9px] font-mono uppercase font-bold whitespace-nowrap shadow-lg">
            CENTRAL MILLS & EXPORT HUB
          </div>
        </Html>
      </group>

      {/* Arcs and Destination Pins */}
      {destVectors.map(({ dest, vec }) => {
        const isSelected = selectedDest.id === dest.id;
        return (
          <group key={dest.id}>
            <FlightArc start={originVec} end={vec} isActive={isSelected} />
            <DestinationPin
              dest={dest}
              position={vec}
              isActive={isSelected}
              onClick={() => onSelectDest(dest)}
            />
          </group>
        );
      })}
    </group>
  );
};

export const GlobeScene: React.FC = () => {
  const [selectedDest, setSelectedDest] = useState<ExportDestination>(EXPORT_DESTINATIONS[0]);

  const originVec = useMemo(() => {
    return latLngToVector3(ORIGIN_COORDS.lat, ORIGIN_COORDS.lng, GLOBE_RADIUS);
  }, []);

  const destVectors = useMemo(() => {
    return EXPORT_DESTINATIONS.map((d) => ({
      dest: d,
      vec: latLngToVector3(d.lat, d.lng, GLOBE_RADIUS),
    }));
  }, []);

  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-[#171717] border border-white/10 shadow-2xl">
      
      {/* Top Banner Header */}
      <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 bg-black/40 backdrop-blur-md">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#C7F36B] tracking-widest uppercase mb-1">
            <span className="w-2 h-2 rounded-full bg-[#C7F36B] animate-pulse"></span>
            GLOBAL LOGISTICS // DIRECT BONDED EXPORT NETWORK
          </div>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
            GLOBAL REACH & DISTRIBUTION HUBS
          </h3>
        </div>

        {/* Trade stats */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
          <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white">
            <span className="text-neutral-400 block text-[10px]">MARKETS</span>
            <span className="text-[#C7F36B] font-bold">{GLOBAL_EXPORT_SUMMARY.totalCountries} Countries</span>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white">
            <span className="text-neutral-400 block text-[10px]">VOLUME</span>
            <span className="text-[#C7F36B] font-bold">{GLOBAL_EXPORT_SUMMARY.annualShipments}</span>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white">
            <span className="text-neutral-400 block text-[10px]">CLEARANCE</span>
            <span className="text-[#C7F36B] font-bold">{GLOBAL_EXPORT_SUMMARY.customsClearanceRate}</span>
          </div>
        </div>
      </div>

      {/* 3D Globe Canvas Area */}
      <div className="relative w-full h-[520px] lg:h-[620px] cursor-grab active:cursor-grabbing">
        <Canvas
          camera={{ position: [0, 1.2, 5.8], fov: 45 }}
          gl={{ antialias: true, alpha: false }}
        >
          <color attach="background" args={['#111316']} />
          <ambientLight intensity={0.5} />
          
          <directionalLight position={[6, 8, 6]} intensity={1.5} />
          <directionalLight position={[-6, -4, -6]} intensity={0.3} color="#38bdf8" />

          <Suspense fallback={null}>
            <RotatingGlobeMesh
              originVec={originVec}
              destVectors={destVectors}
              selectedDest={selectedDest}
              onSelectDest={setSelectedDest}
            />
          </Suspense>

          <OrbitControls
            enablePan={false}
            enableZoom={true}
            minDistance={3.8}
            maxDistance={8.5}
            rotateSpeed={0.5}
            dampingFactor={0.05}
          />
        </Canvas>

        {/* Region & Destination Selectors (Floating Top Left) */}
        <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-1.5 max-w-sm pointer-events-auto">
          {EXPORT_DESTINATIONS.map((d) => (
            <button
              key={d.id}
              onClick={() => setSelectedDest(d)}
              className={`px-2.5 py-1 rounded-md text-xs font-mono transition-all uppercase ${
                selectedDest.id === d.id
                  ? 'bg-[#C7F36B] text-black font-bold shadow-lg'
                  : 'bg-black/60 backdrop-blur-md text-white/80 border border-white/10 hover:border-white/40'
              }`}
            >
              {d.city}
            </button>
          ))}
        </div>

        {/* Selected Hub Telemetry Card (Bottom Floating Overlay) */}
        <div className="absolute bottom-4 inset-x-4 max-w-xl mx-auto z-10 bg-black/85 backdrop-blur-xl border border-white/15 rounded-2xl p-5 text-white shadow-2xl">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#C7F36B]">
                <Navigation className="w-3.5 h-3.5" />
                <span>EXPORT DESTINATION // {selectedDest.region.toUpperCase()}</span>
              </div>
              <h4 className="text-xl md:text-2xl font-bold font-display text-white mt-0.5">
                {selectedDest.city}, {selectedDest.country}
              </h4>
            </div>

            <div className="text-right">
              <span className="text-[10px] font-mono text-neutral-400 block uppercase">Transit Time</span>
              <span className="text-xs md:text-sm font-bold text-[#C7F36B] font-mono">{selectedDest.transitDays}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 py-3 border-y border-white/10 text-xs">
            <div>
              <span className="text-[10px] font-mono text-neutral-400 block uppercase">Monthly Volume</span>
              <span className="font-semibold text-white font-mono">{selectedDest.volume}</span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-neutral-400 block uppercase">Primary Seaport / Airport</span>
              <span className="font-semibold text-white truncate block">{selectedDest.majorPorts}</span>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] font-mono text-neutral-400 mr-1">TOP SILHOUETTES:</span>
            {selectedDest.categories.map((c, i) => (
              <span key={i} className="px-2 py-0.5 rounded text-[11px] bg-white/10 text-neutral-200">
                {c}
              </span>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
