# THREADCRAFT — Premium 3D Garments Manufacturing Website Theme

An international-grade, production-ready **3D Garments Manufacturing & Apparel Export Theme** designed for global fashion houses, apparel sourcing managers, retail buyers, and textile exporters.

Built with a luxury industrial-fashion aesthetic, high-performance WebGL 3D scenes, parametric textile shaders, digital twin factory simulation, and interactive global logistics.

---

## ✦ Key Features & 3D Architecture

### 1. Immersive 3D Hero Section
- **Real-Time 3D Garment Silhouette**: Parametric 3D meshes for **Heavyweight T-Shirt**, **French Terry Hoodie**, and **Technical Bomber Jacket**.
- **PBR Textile Shaders**: Procedural micro-weave normal bump maps generating authentic fabric sheen (Single Jersey, French Terry Loopback, Ripstop Nylon Grid, Japanese Twill).
- **Cloth Physics Wave**: Dynamic subtle wind flutter and breathing drape simulation using Three.js `useFrame`.
- **Interactive Controls**:
  - Live Silhouette Switcher (Tee, Hoodie, Jacket)
  - Colorway Swatch Picker (Reactive Pitch `#161616`, Raw Bone `#EDE9E1`, Electric Lime `#C7F36B`, Mineral Slate `#4B5563`)
  - CAD Wireframe / Topology inspector toggle
  - Floating technical HUD markers (*Fabric, Precision, Quality, Innovation*).

### 2. Animated Manufacturing Statistics
- Viewport-activated counter animations (`25+ Years`, `500K+ Monthly Capacity`, `30+ Global Markets`, `98% On-Time Delivery`).
- Configurable sample content clearly identified for easy replacement with verified client figures.
- Accredited international standards ribbon (GOTS, OEKO-TEX Standard 100 Class 1, ISO 9001:2015, WRAP Gold, HIGG Index).

### 3. Interactive 3D Product Showcase
- Curated archive covering 6 core apparel categories:
  - **T-Shirts** (280 GSM Compact Combed Cotton)
  - **Hoodies & Sweats** (460 GSM Diagonal French Terry)
  - **Jackets & Outerwear** (3-Layer DWR Laminated Technical Bomber)
  - **Artisanal Denim** (14.5 oz Japanese Toyoda Shuttle Loom Selvedge)
  - **Polos & Knits** (220 GSM Double Mercerized Pique)
  - **Activewear** (Seamless Zonal Compression)
- Interactive **"Inspect in 3D"** modal with 360° orbit rotation, CAD mesh inspection, colorway preview, and instant **Download Tech Pack** generator.

### 4. Scroll-Driven Manufacturing Story ("Fiber to Finished Garment")
- 6-stage production chronicle:
  - `01 — Raw Material Sourcing` (DNA verified organic cotton)
  - `02 — Fabric Development & Spinning` (High-gauge circular knitting)
  - `03 — Digital Pattern & 3D CLO Lab` (Virtual avatar fit, AI marker nesting)
  - `04 — Precision Cutting & Automated Sewing` (Gerber CNC ultrasonic cutters, Juki lines)
  - `05 — Multi-Point Quality Inspection` (Datacolor spectrophotometry, AQL 1.5)
  - `06 — Finishing, RFID & Global Export` (Veit steam tunnel, bonded logistics)

### 5. 3D Factory Experience (Digital Twin)
- Interactive 3D industrial manufacturing floorplan with animated CNC laser spreading bridges, moving overhead garment carriers, dye autoclaves, spectrometry light tables, and steam packout tunnels.
- Clickable 3D hotspot beacons with live machine models, daily outputs, and automation metrics.

### 6. Quality & Sustainability
- Split-screen editorial layout highlighting:
  - **ZLD Effluent Treatment Plant** (94.2% water recycling)
  - **Solar Rooftop Energy** (2.4 MW capacity)
  - **Living Wages & Worker Welfare** (above-standard benchmarks, on-site healthcare)
  - **Zero-Waste Cutting Scrap Upcycling**

### 7. Interactive 3D Logistics Globe
- 3D interactive Earth sphere with ballistic flight route arcs connecting central production mills to major global retail hubs:
  - New York, Los Angeles, London, Paris, Berlin, Tokyo, Sydney, Dubai.
  - Interactive destination telemetry card showing transit days, monthly volumes, and priority seaports/airports.

### 8. B2B Client Partnerships & RFQ Quote Form
- Clear engagement tiers: Full OEM Production, Collaborative ODM Design, Fast-Track Capsule Contracts.
- Functional Quote Request Form with corporate email validation, silhouette selection, volume tier selection, and celebration confetti trigger.

### 9. Multi-Page Full Navigation
- Complete client-side routing with React Router:
  - `/` — Homepage (all 3D sections)
  - `/about` — About Us, Heritage Timeline & Ethical Human Capital
  - `/capabilities` — Machinery Fleet, Circular Knitting Gauges & Lead Time Table
  - `/products` — Full Searchable & Filterable Silhouettes Archive
  - `/products/:id` — Individual Product Detail Page with embedded 3D viewer & downloadable tech pack
  - `/sustainability` — Environmental Whitepaper & Laboratory Standards
  - `/factory` — Dedicated 3D Factory Floorplan Twin
  - `/contact` — Regional Offices (USA, UK, Asia HQ) & Swatch Booklet Dispatch
  - `/quote` — Dedicated Formal RFQ Builder & Timeline Calculator

---

## ✦ Technology Stack

- **Framework**: React 18 + Vite 5 + TypeScript
- **Styling**: Tailwind CSS 3 (Warm Off-white `#F5F3EE`, Charcoal `#171717`, Electric Lime `#C7F36B`)
- **3D Graphics**: Three.js + React Three Fiber (`@react-three/fiber`) + Drei (`@react-three/drei`)
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Typography**: Google Fonts (*Syne*, *Plus Jakarta Sans*, *JetBrains Mono*)

---

## ✦ Local Development & Production Build

### Install Dependencies
\`\`\`bash
npm install
\`\`\`

### Start Development Server
\`\`\`bash
npm run dev
\`\`\`
Server runs at \`http://localhost:5173/\`.

### Production Build
\`\`\`bash
npm run build
\`\`\`
Outputs optimized production bundle to \`dist/\`.

---

## ✦ Customization Guide

### 1. Brand Identity & Colors
Update color tokens in \`tailwind.config.js\`:
\`\`\`javascript
colors: {
  background: '#F5F3EE',       // Primary warm off-white
  'charcoal-dark': '#171717',  // Deep charcoal
  lime: {
    accent: '#C7F36B',         // High-visibility electric lime accent
  },
  ink: {
    primary: '#191919',        // Editorial text
  }
}
\`\`\`

### 2. Products & Specifications
Add or modify garment silhouettes in \`src/data/garments.ts\`. Each product supports:
- \`modelType\`: \`'tshirt' | 'hoodie' | 'jacket' | 'polo' | 'denim' | 'activewear'\`
- \`gsm\`, \`moq\`, \`leadTime\`, \`colors\`, \`specs\`, \`features\`.

### 3. Replacing 3D Models with Custom GLB Files
To load external \`.glb\` or \`.gltf\` CAD 3D models (e.g. from CLO 3D or Browzwear):
1. Place your model in \`public/models/garments/your-garment.glb\`.
2. In \`src/components/3d/GarmentMesh.tsx\`, use Drei's \`useGLTF\`:
\`\`\`tsx
import { useGLTF } from '@react-three/drei';

export const ExternalGarment = () => {
  const { scene } = useGLTF('/models/garments/your-garment.glb');
  return <primitive object={scene} />;
};
\`\`\`

### 4. Factory Hotspots & Export Destinations
- Factory zones: Edit \`src/data/factoryData.ts\`
- Export shipping destinations: Edit \`src/data/globalReachData.ts\`
- Statistics & certifications: Edit \`src/data/companyStats.ts\`

---

© 2026 THREADCRAFT Apparel Manufacturing Ltd. All sample statistics are baseline demonstration figures.
