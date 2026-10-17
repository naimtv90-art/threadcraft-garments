import { FactoryZone } from '../types';

export const FACTORY_ZONES: FactoryZone[] = [
  {
    id: 'zone-cut',
    name: 'AUTOMATED CNC CUTTING & SPREADING',
    code: 'SEC-01',
    category: 'Pre-Production',
    description: 'Equipped with computerized high-ply fabric spreaders and Gerber Paragon CNC ultrasonic cutters operating in temperature and humidity stabilized cleanrooms.',
    dailyCapacity: '25,000 Panels / Day',
    machinery: 'Gerber Paragon® Multi-Ply + Eastman Auto-Spreaders',
    automationLevel: '95% Automated',
    hotspot: { x: -3.2, y: 0.6, z: -2.0 },
    highlights: [
      'Sub-millimeter cutting accuracy preventing grain skewing',
      'Optical pattern matching for plaids, stripes, and motifs',
      'Vacuum compression bed maintaining ply stability',
      'Direct CAD file spooling from pattern lab'
    ]
  },
  {
    id: 'zone-sew',
    name: 'LEAN SYNCHRONOUS SEWING LINES',
    code: 'SEC-02',
    category: 'Assembly',
    description: '36 modular synchronous assembly lines utilizing programmable Juki direct-drive lockstitch, Pegasus 5-thread overlock, and Yamato flatlock machinery.',
    dailyCapacity: '18,500 Finished Units / Day',
    machinery: 'Juki DDL-9000C + Pegasus EX Series + Yamato Flatlock',
    automationLevel: '78% Semi-Automated',
    hotspot: { x: 0, y: 0.6, z: 0 },
    highlights: [
      'Digital thread tension feedback sensors on all units',
      'Overhead computerized unit production garment conveyors (UPS)',
      'Real-time line balancing via RFID workstation dashboards',
      'In-line 100% seam visual inspection at terminal stations'
    ]
  },
  {
    id: 'zone-dye',
    name: 'ECO-DYEING & WASHING LABORATORY',
    code: 'SEC-03',
    category: 'Wet Processing',
    description: 'State-of-the-art low liquor ratio (1:4) soft-flow dyeing vessels, Tonello ozone wash drums, and Jeanologia laser finishing booths for sustainable vintage washes.',
    dailyCapacity: '12,000 kg Fabric / Day',
    machinery: 'Thies iMaster® Soft Flow + Tonello Ozone + Jeanologia Laser',
    automationLevel: '90% Automated',
    hotspot: { x: 3.2, y: 0.6, z: -1.8 },
    highlights: [
      'Zero liquid discharge (ZLD) closed-loop biological effluent plant',
      'ZDHC Gateway MRSL Level 3 compliant eco-certified dyestuffs',
      'Water consumption reduced by 68% vs conventional dye houses',
      'Automated robotic liquid dye and chemical dispensing'
    ]
  },
  {
    id: 'zone-qa',
    name: 'PHYSICAL TESTING & SPECTROMETRY LAB',
    code: 'SEC-04',
    category: 'Quality Control',
    description: 'ISO 17025 accredited laboratory conducting continuous physical, chemical, and dimensional compliance verifications.',
    dailyCapacity: '350 Test Batches / Day',
    machinery: 'Datacolor 800 Spectrophotometer + Martindale Abrasion + Tensile Tester',
    automationLevel: '85% Automated',
    hotspot: { x: -2.8, y: 0.6, z: 2.2 },
    highlights: [
      'Computerized delta-E color tolerance monitoring (< 0.6 tolerance)',
      'Automated continuous conveyor metal and broken needle detectors',
      'AATCC and ISO commercial wash durability standard testing',
      'Real-time cloud QA inspection certificates generated per lot'
    ]
  },
  {
    id: 'zone-pack',
    name: 'STEAM TUNNEL FINISHING & RFID PACKING',
    code: 'SEC-05',
    category: 'Logistics & Dispatch',
    description: 'Veit steam tunnel finishers paired with automated folding, polybagging, and item-level EPC Gen 2 RFID encoding for instant retail distribution.',
    dailyCapacity: '22,000 Packed Cartons / Day',
    machinery: 'Veit 8326 Continuous Steam Tunnel + Beck Automated Bagging',
    automationLevel: '92% Automated',
    hotspot: { x: 2.5, y: 0.6, z: 2.0 },
    highlights: [
      'High-velocity moisture conditioning restoring cotton loft',
      'FSC certified biodegradable polybags and recycled cartons',
      'RFID chip verification tunnel scanning 600 items in 3 seconds',
      'Direct customs barcoding with automated pallet wrap'
    ]
  }
];

export const FACTORY_METRICS = [
  { label: 'Facility Footprint', value: '450,000 sq.ft' },
  { label: 'Solar Rooftop Energy', value: '2.4 MW Capacity' },
  { label: 'Certified Operators', value: '2,800+ Personnel' },
  { label: 'Water Recycled', value: '94.2% Closed Loop' },
];
