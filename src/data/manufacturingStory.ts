import { ManufacturingStage } from '../types';

export const MANUFACTURING_STORY: ManufacturingStage[] = [
  {
    step: '01',
    title: 'RAW MATERIAL SOURCING',
    tagline: 'GOTS & BCI Verified Sustainable Fibers',
    description: 'We partner directly with certified regenerative agricultural farms. Every kilogram of extra-long staple organic cotton, traceable merino wool, and recycled sea-waste polyester is verified with DNA molecular markers before entering spinning mills.',
    keyInnovations: [
      'Molecular tracer technology for 100% origin verification',
      'Zero synthetic pesticides or hazardous defoliants',
      'Soil health regeneration tracking via satellite telemetry',
      'Fair trade farmer cooperative purchasing agreements'
    ],
    metrics: { label: 'Traceability Index', value: '100% DNA Verified' },
    imageUrl: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80'
  },
  {
    step: '02',
    title: 'FABRIC DEVELOPMENT & SPINNING',
    tagline: 'High-Gauge Knitting & Shuttle Loom Precision',
    description: 'Custom yarn spinning from 16s to 120/2s counts. In-house circular knitting machines and shuttle looms develop bespoke textures: French terry, double pique, micro-ripstop, and dense technical interlock.',
    keyInnovations: [
      'High-gauge German circular knitting (up to 34-gauge)',
      'Closed-loop water recycling in pre-treatment wash',
      'Zero-torque twist yarn spinning preventing skewing',
      'Proprietary bio-silicon softening enzymes'
    ],
    metrics: { label: 'Fabric Library', value: '450+ Custom Weaves' },
    imageUrl: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80'
  },
  {
    step: '03',
    title: 'DIGITAL PATTERN & 3D CLO LAB',
    tagline: 'Virtual Prototyping & Zero-Waste Marker Making',
    description: 'Digital 3D fit visualization in CLO 3D eliminates 70% of physical sample waste. AI-driven nesting algorithms optimize marker utilization to exceed 92% fabric efficiency.',
    keyInnovations: [
      'CLO 3D virtual avatar fit validation',
      'AI pattern nesting reducing cutting scrap by 14%',
      'Gerber AccuMark digital grading software',
      'Rapid 48-hour digital fit sample turnarounds'
    ],
    metrics: { label: 'Fabric Yield Efficiency', value: '92.4% Average' },
    imageUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    step: '04',
    title: 'PRECISION CUTTING & AUTOMATED SEWING',
    tagline: 'Ultrasonic CNC Cutters & Ergonomic Lines',
    description: 'Automated multi-ply Gerber vacuum cutters achieve sub-millimeter precision. Dedicated lean production lines equipped with automated Juki and Brother lockstitch and flatlock machines.',
    keyInnovations: [
      'Ultrasonic automated CNC blade cutting tables',
      'Laser seam alignment sensors with real-time tension control',
      'Bonded waterproof seam sealing stations',
      'Operator ergonomic workstations with air-float assists'
    ],
    metrics: { label: 'Sewing Accuracy', value: '±0.5 mm Tolerance' },
    imageUrl: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    step: '05',
    title: 'MULTI-POINT QUALITY INSPECTION',
    tagline: 'AQL 1.5 Strict Inspection & Spectrometry',
    description: 'Comprehensive 4-point fabric inspection, spectrophotometer color matching, bursting strength tests, and metal detection ensure zero-defect shipment integrity.',
    keyInnovations: [
      'Datacolor® 800 spectrophotometer computerized color pass/fail',
      'Martindale abrasion & pilling resistance testers',
      'Continuous conveyor metal and needle detectors',
      'Dual-pass dimensional stability wash testing'
    ],
    metrics: { label: 'Defect Rate', value: '< 0.38% (AQL 1.5 Standard)' },
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80'
  },
  {
    step: '06',
    title: 'FINISHING, RFID & GLOBAL EXPORT',
    tagline: 'Eco-Pressing, Automated Boxing & Bonded Logistics',
    description: 'Tunnel steaming, robotic RFID tagging for retail floor readiness, and climate-controlled container packing. Direct bonded air and sea freight logistics reaching 30+ international ports.',
    keyInnovations: [
      'Tunnel steam finishers restoring natural fiber bloom',
      'Automated high-speed garment bagging with bio-polymers',
      'Integrated EPC Gen 2 RFID item-level encoding',
      'Direct customs EDI integration for rapid port departure'
    ],
    metrics: { label: 'On-Time Export Delivery', value: '98.6% Historical' },
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80'
  }
];
