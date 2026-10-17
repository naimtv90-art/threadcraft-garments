import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { createFabricTextures } from './fabricTextures';

interface GarmentMeshProps {
  type?: 'tshirt' | 'hoodie' | 'jacket' | 'polo' | 'denim' | 'activewear';
  color?: string;
  wireframe?: boolean;
  fabricType?: 'jersey' | 'fleece' | 'ripstop' | 'denim';
  enableWave?: boolean;
}

export const GarmentMesh: React.FC<GarmentMeshProps> = ({
  type = 'tshirt',
  color = '#EDE9E1',
  wireframe = false,
  fabricType = 'jersey',
  enableWave = true
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const waveMeshRef = useRef<THREE.Group>(null);

  // Generate procedural texture for realistic fabric sheen
  const normalMap = useMemo(() => {
    return createFabricTextures(fabricType);
  }, [fabricType]);

  // Subtle natural fabric cloth simulation wave
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Gentle floating breathing animation
      groupRef.current.position.y = Math.sin(t * 1.5) * 0.08;
      groupRef.current.rotation.y += 0.004; // Gentle continuous display rotation
    }

    if (enableWave && waveMeshRef.current) {
      // Gentle subtle fabric ripple
      waveMeshRef.current.rotation.z = Math.sin(t * 2) * 0.015;
    }
  });

  const materialProps = useMemo(() => {
    return {
      color: new THREE.Color(color),
      roughness: fabricType === 'ripstop' ? 0.35 : 0.85,
      metalness: fabricType === 'ripstop' ? 0.15 : 0.05,
      normalMap: normalMap || undefined,
      normalScale: new THREE.Vector2(0.4, 0.4),
      wireframe: wireframe,
      side: THREE.DoubleSide,
    };
  }, [color, fabricType, normalMap, wireframe]);

  const darkAccentMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#1f1f1f'),
      roughness: 0.6,
      wireframe: wireframe,
    });
  }, [wireframe]);

  const limeAccentMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#C7F36B'),
      emissive: new THREE.Color('#C7F36B'),
      emissiveIntensity: 0.2,
      roughness: 0.3,
      wireframe: wireframe,
    });
  }, [wireframe]);

  return (
    <group ref={groupRef} dispose={null}>
      {/* ========================================================
          1. T-SHIRT SILHOUETTE
      ======================================================== */}
      {type === 'tshirt' && (
        <group ref={waveMeshRef} scale={[1.35, 1.35, 1.35]} position={[0, -0.2, 0]}>
          {/* Main Torso */}
          <mesh castShadow receiveShadow position={[0, 0, 0]}>
            <cylinderGeometry args={[0.9, 0.98, 2.0, 32, 16, true]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>

          {/* Upper Chest & Shoulders Slope */}
          <mesh castShadow receiveShadow position={[0, 1.05, 0]}>
            <cylinderGeometry args={[0.55, 0.9, 0.35, 32, 8, true]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>

          {/* Ribbed Collar */}
          <mesh castShadow position={[0, 1.22, 0]}>
            <torusGeometry args={[0.52, 0.07, 16, 40]} />
            <meshStandardMaterial 
              color={color} 
              roughness={0.9} 
              wireframe={wireframe} 
            />
          </mesh>

          {/* Inner Back Neck Label Tag (Subtle Brand Touch) */}
          <mesh position={[0, 1.15, -0.48]}>
            <planeGeometry args={[0.25, 0.12]} />
            <primitive object={limeAccentMaterial} />
          </mesh>

          {/* Left Sleeve */}
          <group position={[-1.02, 0.85, 0]} rotation={[0, 0, 0.62]}>
            <mesh castShadow receiveShadow position={[0, -0.35, 0]}>
              <cylinderGeometry args={[0.38, 0.34, 0.85, 24, 8, true]} />
              <meshStandardMaterial {...materialProps} />
            </mesh>
            {/* Left Sleeve Cuff Hem */}
            <mesh position={[0, -0.78, 0]}>
              <torusGeometry args={[0.34, 0.03, 12, 28]} />
              <meshStandardMaterial color={color} roughness={0.9} wireframe={wireframe} />
            </mesh>
          </group>

          {/* Right Sleeve */}
          <group position={[1.02, 0.85, 0]} rotation={[0, 0, -0.62]}>
            <mesh castShadow receiveShadow position={[0, -0.35, 0]}>
              <cylinderGeometry args={[0.38, 0.34, 0.85, 24, 8, true]} />
              <meshStandardMaterial {...materialProps} />
            </mesh>
            {/* Right Sleeve Cuff Hem */}
            <mesh position={[0, -0.78, 0]}>
              <torusGeometry args={[0.34, 0.03, 12, 28]} />
              <meshStandardMaterial color={color} roughness={0.9} wireframe={wireframe} />
            </mesh>
          </group>

          {/* Bottom Hem Band */}
          <mesh position={[0, -1.0, 0]}>
            <torusGeometry args={[0.98, 0.04, 16, 40]} />
            <meshStandardMaterial color={color} roughness={0.9} wireframe={wireframe} />
          </mesh>

          {/* Front Engineered Stitch Line / Brand Detail */}
          <mesh position={[0, 0.1, 0.92]}>
            <planeGeometry args={[0.015, 1.6]} />
            <primitive object={darkAccentMaterial} />
          </mesh>
        </group>
      )}

      {/* ========================================================
          2. HOODIE SILHOUETTE
      ======================================================== */}
      {type === 'hoodie' && (
        <group scale={[1.25, 1.25, 1.25]} position={[0, -0.25, 0]}>
          {/* Main Torso */}
          <mesh castShadow receiveShadow position={[0, 0, 0]}>
            <cylinderGeometry args={[1.05, 1.12, 2.1, 32, 16, true]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>

          {/* 3-Panel Ergonomic Hood */}
          <group position={[0, 1.35, -0.15]}>
            <mesh castShadow receiveShadow>
              <sphereGeometry args={[0.78, 32, 24, 0, Math.PI * 2, 0, Math.PI * 0.75]} />
              <meshStandardMaterial {...materialProps} />
            </mesh>
            {/* Hood Opening Rim */}
            <mesh position={[0, 0.1, 0.35]} rotation={[0.4, 0, 0]}>
              <torusGeometry args={[0.62, 0.06, 16, 32]} />
              <meshStandardMaterial color={color} roughness={0.9} wireframe={wireframe} />
            </mesh>
          </group>

          {/* Drawstrings */}
          <mesh position={[-0.18, 0.8, 0.88]} rotation={[0.05, 0, -0.05]}>
            <cylinderGeometry args={[0.02, 0.02, 0.6, 12]} />
            <primitive object={darkAccentMaterial} />
          </mesh>
          <mesh position={[0.18, 0.8, 0.88]} rotation={[0.05, 0, 0.05]}>
            <cylinderGeometry args={[0.02, 0.02, 0.6, 12]} />
            <primitive object={darkAccentMaterial} />
          </mesh>

          {/* Drawstring Metal Aglets */}
          <mesh position={[-0.2, 0.48, 0.9]}>
            <cylinderGeometry args={[0.03, 0.03, 0.08, 12]} />
            <primitive object={limeAccentMaterial} />
          </mesh>
          <mesh position={[0.2, 0.48, 0.9]}>
            <cylinderGeometry args={[0.03, 0.03, 0.08, 12]} />
            <primitive object={limeAccentMaterial} />
          </mesh>

          {/* Kangaroo Pocket */}
          <mesh castShadow position={[0, -0.3, 1.05]} rotation={[-0.05, 0, 0]}>
            <boxGeometry args={[1.15, 0.72, 0.18]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>

          {/* Long Left Sleeve */}
          <group position={[-1.15, 0.8, 0]} rotation={[0, 0, 0.45]}>
            <mesh castShadow receiveShadow position={[0, -0.65, 0]}>
              <cylinderGeometry args={[0.42, 0.32, 1.45, 24, 10, true]} />
              <meshStandardMaterial {...materialProps} />
            </mesh>
            {/* Thick Ribbed Cuff */}
            <mesh position={[0, -1.42, 0]}>
              <cylinderGeometry args={[0.31, 0.28, 0.25, 24]} />
              <meshStandardMaterial color={color} roughness={0.95} wireframe={wireframe} />
            </mesh>
          </group>

          {/* Long Right Sleeve */}
          <group position={[1.15, 0.8, 0]} rotation={[0, 0, -0.45]}>
            <mesh castShadow receiveShadow position={[0, -0.65, 0]}>
              <cylinderGeometry args={[0.42, 0.32, 1.45, 24, 10, true]} />
              <meshStandardMaterial {...materialProps} />
            </mesh>
            {/* Thick Ribbed Cuff */}
            <mesh position={[0, -1.42, 0]}>
              <cylinderGeometry args={[0.31, 0.28, 0.25, 24]} />
              <meshStandardMaterial color={color} roughness={0.95} wireframe={wireframe} />
            </mesh>
          </group>

          {/* Heavy Waistband Ribbing */}
          <mesh position={[0, -1.15, 0]}>
            <cylinderGeometry args={[1.08, 1.05, 0.3, 32]} />
            <meshStandardMaterial color={color} roughness={0.95} wireframe={wireframe} />
          </mesh>
        </group>
      )}

      {/* ========================================================
          3. BOMBER / TECHNICAL JACKET SILHOUETTE
      ======================================================== */}
      {type === 'jacket' && (
        <group scale={[1.28, 1.28, 1.28]} position={[0, -0.2, 0]}>
          {/* Main Padded Torso */}
          <mesh castShadow receiveShadow position={[0, 0, 0]}>
            <cylinderGeometry args={[1.05, 1.02, 2.05, 32, 16, true]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>

          {/* Standup Baseball Collar */}
          <mesh position={[0, 1.15, 0]}>
            <cylinderGeometry args={[0.55, 0.65, 0.25, 28]} />
            <primitive object={darkAccentMaterial} />
          </mesh>

          {/* Center Front Waterproof AquaGuard Zipper */}
          <mesh position={[0, 0, 1.04]}>
            <boxGeometry args={[0.06, 2.05, 0.02]} />
            <primitive object={darkAccentMaterial} />
          </mesh>
          {/* Zipper Pull Tab */}
          <mesh position={[0, 0.6, 1.07]}>
            <boxGeometry args={[0.08, 0.16, 0.04]} />
            <primitive object={limeAccentMaterial} />
          </mesh>

          {/* Arm Utility Pocket (Signature MA-1 detail) */}
          <group position={[-1.28, 0.3, 0]} rotation={[0, 0, 0.35]}>
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[0.32, 0.45, 0.15]} />
              <primitive object={darkAccentMaterial} />
            </mesh>
            {/* Fluo Lime Flight Ribbon */}
            <mesh position={[0.1, -0.35, 0.05]} rotation={[0, 0, 0.1]}>
              <planeGeometry args={[0.1, 0.5]} />
              <primitive object={limeAccentMaterial} />
            </mesh>
          </group>

          {/* Left Sleeve */}
          <group position={[-1.12, 0.75, 0]} rotation={[0, 0, 0.42]}>
            <mesh castShadow receiveShadow position={[0, -0.6, 0]}>
              <cylinderGeometry args={[0.42, 0.35, 1.4, 24, 8, true]} />
              <meshStandardMaterial {...materialProps} />
            </mesh>
            <mesh position={[0, -1.35, 0]}>
              <cylinderGeometry args={[0.32, 0.3, 0.22, 24]} />
              <primitive object={darkAccentMaterial} />
            </mesh>
          </group>

          {/* Right Sleeve */}
          <group position={[1.12, 0.75, 0]} rotation={[0, 0, -0.42]}>
            <mesh castShadow receiveShadow position={[0, -0.6, 0]}>
              <cylinderGeometry args={[0.42, 0.35, 1.4, 24, 8, true]} />
              <meshStandardMaterial {...materialProps} />
            </mesh>
            <mesh position={[0, -1.35, 0]}>
              <cylinderGeometry args={[0.32, 0.3, 0.22, 24]} />
              <primitive object={darkAccentMaterial} />
            </mesh>
          </group>

          {/* Ribbed Hem */}
          <mesh position={[0, -1.08, 0]}>
            <cylinderGeometry args={[0.98, 0.94, 0.24, 32]} />
            <primitive object={darkAccentMaterial} />
          </mesh>
        </group>
      )}

      {/* ========================================================
          4. POLO SHIRT SILHOUETTE
      ======================================================== */}
      {type === 'polo' && (
        <group scale={[1.3, 1.3, 1.3]} position={[0, -0.2, 0]}>
          <mesh castShadow receiveShadow position={[0, 0, 0]}>
            <cylinderGeometry args={[0.92, 0.96, 2.0, 32, 16, true]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>

          {/* Knit Lapel Collar */}
          <group position={[0, 1.1, 0]}>
            <mesh position={[0, 0.05, 0]}>
              <cylinderGeometry args={[0.54, 0.62, 0.18, 28, 4, true]} />
              <meshStandardMaterial {...materialProps} />
            </mesh>
            {/* Left & Right Folded Collar Wings */}
            <mesh position={[-0.32, -0.05, 0.42]} rotation={[0.4, -0.3, -0.2]}>
              <boxGeometry args={[0.42, 0.28, 0.05]} />
              <meshStandardMaterial {...materialProps} />
            </mesh>
            <mesh position={[0.32, -0.05, 0.42]} rotation={[0.4, 0.3, 0.2]}>
              <boxGeometry args={[0.42, 0.28, 0.05]} />
              <meshStandardMaterial {...materialProps} />
            </mesh>
          </group>

          {/* 3-Button Placket */}
          <mesh position={[0, 0.65, 0.94]}>
            <boxGeometry args={[0.18, 0.65, 0.02]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>
          {/* Mother of pearl buttons */}
          {[-0.18, 0, 0.18].map((yOffset, i) => (
            <mesh key={i} position={[0, 0.65 + yOffset, 0.96]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.025, 0.025, 0.015, 16]} />
              <meshStandardMaterial color="#f8f8f8" roughness={0.2} metalness={0.4} />
            </mesh>
          ))}

          {/* Short Sleeves with Ribbed Cuff Bands */}
          <group position={[-1.0, 0.85, 0]} rotation={[0, 0, 0.55]}>
            <mesh position={[0, -0.3, 0]}>
              <cylinderGeometry args={[0.36, 0.32, 0.75, 24, 6, true]} />
              <meshStandardMaterial {...materialProps} />
            </mesh>
            <mesh position={[0, -0.7, 0]}>
              <cylinderGeometry args={[0.31, 0.31, 0.12, 24]} />
              <primitive object={darkAccentMaterial} />
            </mesh>
          </group>

          <group position={[1.0, 0.85, 0]} rotation={[0, 0, -0.55]}>
            <mesh position={[0, -0.3, 0]}>
              <cylinderGeometry args={[0.36, 0.32, 0.75, 24, 6, true]} />
              <meshStandardMaterial {...materialProps} />
            </mesh>
            <mesh position={[0, -0.7, 0]}>
              <cylinderGeometry args={[0.31, 0.31, 0.12, 24]} />
              <primitive object={darkAccentMaterial} />
            </mesh>
          </group>
        </group>
      )}

      {/* ========================================================
          5. RAW SELVEDGE DENIM SILHOUETTE
      ======================================================== */}
      {type === 'denim' && (
        <group scale={[1.2, 1.2, 1.2]} position={[0, 0.3, 0]}>
          {/* Waistband */}
          <mesh castShadow position={[0, 0.45, 0]}>
            <cylinderGeometry args={[0.85, 0.86, 0.25, 32, 4, true]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>
          {/* Waistband Button & Copper Rivets */}
          <mesh position={[0, 0.45, 0.87]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.045, 0.045, 0.02, 16]} />
            <meshStandardMaterial color="#c27d38" metalness={0.8} roughness={0.3} />
          </mesh>

          {/* Upper Yoke & Hips */}
          <mesh castShadow receiveShadow position={[0, 0.1, 0]}>
            <cylinderGeometry args={[0.86, 0.92, 0.55, 32, 8, true]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>

          {/* Left Leg */}
          <group position={[-0.42, -0.95, 0]}>
            <mesh castShadow receiveShadow position={[0, 0, 0]}>
              <cylinderGeometry args={[0.42, 0.28, 1.7, 24, 16, true]} />
              <meshStandardMaterial {...materialProps} />
            </mesh>
            {/* Red-Line Selvedge Cuff Turn-up */}
            <mesh position={[0, -0.8, 0]}>
              <cylinderGeometry args={[0.285, 0.285, 0.18, 24]} />
              <meshStandardMaterial color="#eae5d8" roughness={0.9} />
            </mesh>
            <mesh position={[-0.28, -0.8, 0]}>
              <boxGeometry args={[0.02, 0.18, 0.02]} />
              <meshStandardMaterial color="#dc2626" />
            </mesh>
          </group>

          {/* Right Leg */}
          <group position={[0.42, -0.95, 0]}>
            <mesh castShadow receiveShadow position={[0, 0, 0]}>
              <cylinderGeometry args={[0.42, 0.28, 1.7, 24, 16, true]} />
              <meshStandardMaterial {...materialProps} />
            </mesh>
            {/* Red-Line Selvedge Cuff Turn-up */}
            <mesh position={[0, -0.8, 0]}>
              <cylinderGeometry args={[0.285, 0.285, 0.18, 24]} />
              <meshStandardMaterial color="#eae5d8" roughness={0.9} />
            </mesh>
            <mesh position={[0.28, -0.8, 0]}>
              <boxGeometry args={[0.02, 0.18, 0.02]} />
              <meshStandardMaterial color="#dc2626" />
            </mesh>
          </group>
        </group>
      )}

      {/* ========================================================
          6. ACTIVEWEAR / SEAMLESS COMPRESSION SILHOUETTE
      ======================================================== */}
      {type === 'activewear' && (
        <group scale={[1.3, 1.3, 1.3]} position={[0, -0.2, 0]}>
          <mesh castShadow receiveShadow position={[0, 0, 0]}>
            <cylinderGeometry args={[0.82, 0.78, 2.0, 32, 16, true]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>
          {/* Ergonomic Contour Lines (Lime Accents) */}
          <mesh position={[0, 0.2, 0.81]}>
            <planeGeometry args={[0.03, 1.4]} />
            <primitive object={limeAccentMaterial} />
          </mesh>
          <mesh position={[-0.45, 0.1, 0.65]} rotation={[0, 0.5, 0.2]}>
            <planeGeometry args={[0.02, 1.2]} />
            <primitive object={limeAccentMaterial} />
          </mesh>
          <mesh position={[0.45, 0.1, 0.65]} rotation={[0, -0.5, -0.2]}>
            <planeGeometry args={[0.02, 1.2]} />
            <primitive object={limeAccentMaterial} />
          </mesh>

          {/* Raglan Compression Sleeves */}
          <group position={[-0.92, 0.8, 0]} rotation={[0, 0, 0.55]}>
            <mesh position={[0, -0.4, 0]}>
              <cylinderGeometry args={[0.32, 0.25, 1.1, 24, 8, true]} />
              <meshStandardMaterial {...materialProps} />
            </mesh>
          </group>
          <group position={[0.92, 0.8, 0]} rotation={[0, 0, -0.55]}>
            <mesh position={[0, -0.4, 0]}>
              <cylinderGeometry args={[0.32, 0.25, 1.1, 24, 8, true]} />
              <meshStandardMaterial {...materialProps} />
            </mesh>
          </group>
        </group>
      )}
    </group>
  );
};
