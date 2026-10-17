import * as THREE from 'three';

// Generate procedural realistic PBR fabric textures using HTML Canvas
export function createFabricTextures(type: 'jersey' | 'fleece' | 'ripstop' | 'denim' = 'jersey'): THREE.CanvasTexture | undefined {
  if (typeof document === 'undefined') return undefined;

  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  if (!ctx) return undefined;

  // Base background
  ctx.fillStyle = '#8080ff'; // Neutral normal map base
  ctx.fillRect(0, 0, 512, 512);

  const imgData = ctx.getImageData(0, 0, 512, 512);
  const data = imgData.data;

  if (type === 'jersey') {
    // Interlocking knit V-stitches
    for (let y = 0; y < 512; y++) {
      for (let x = 0; x < 512; x++) {
        const u = x % 8;
        const v = y % 12;
        const wave = Math.sin((u / 8) * Math.PI) * Math.cos((v / 12) * Math.PI * 2);
        const noise = (Math.random() - 0.5) * 15;
        
        const idx = (y * 512 + x) * 4;
        data[idx] = Math.min(255, Math.max(0, 128 + wave * 40 + noise));
        data[idx + 1] = Math.min(255, Math.max(0, 128 + Math.cos((v / 12) * Math.PI) * 40 + noise));
        data[idx + 2] = 255;
        data[idx + 3] = 255;
      }
    }
  } else if (type === 'ripstop') {
    // Reinforced crosshatch grid
    for (let y = 0; y < 512; y++) {
      for (let x = 0; x < 512; x++) {
        const isGrid = (x % 32 < 2) || (y % 32 < 2);
        const noise = (Math.random() - 0.5) * 20;
        const idx = (y * 512 + x) * 4;
        const val = isGrid ? 200 : 128;
        data[idx] = Math.min(255, Math.max(0, val + noise));
        data[idx + 1] = Math.min(255, Math.max(0, val + noise));
        data[idx + 2] = 240;
        data[idx + 3] = 255;
      }
    }
  } else if (type === 'denim') {
    // 3x1 diagonal twill weave lines
    for (let y = 0; y < 512; y++) {
      for (let x = 0; x < 512; x++) {
        const twill = Math.sin((x * 0.5 + y) * 0.8) * 30;
        const noise = (Math.random() - 0.5) * 25;
        const idx = (y * 512 + x) * 4;
        data[idx] = Math.min(255, Math.max(0, 128 + twill + noise));
        data[idx + 1] = Math.min(255, Math.max(0, 128 - twill + noise));
        data[idx + 2] = 250;
        data[idx + 3] = 255;
      }
    }
  } else {
    // French terry / fleece loops
    for (let y = 0; y < 512; y++) {
      for (let x = 0; x < 512; x++) {
        const loop = Math.sin(x * 0.3) * Math.cos(y * 0.3) * 35;
        const noise = (Math.random() - 0.5) * 30;
        const idx = (y * 512 + x) * 4;
        data[idx] = Math.min(255, Math.max(0, 128 + loop + noise));
        data[idx + 1] = Math.min(255, Math.max(0, 128 + loop + noise));
        data[idx + 2] = 245;
        data[idx + 3] = 255;
      }
    }
  }

  ctx.putImageData(imgData, 0, 0);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(12, 12);

  return texture;
}
