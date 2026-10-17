import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-01',
    name: 'AERO-TECH HEAVYWEIGHT TEE',
    slug: 'aerotech-heavyweight-tee',
    category: 'tshirts',
    categoryLabel: 'Premium T-Shirts',
    subtitle: '280 GSM Compact Combed Cotton with Dual-Ribbed Collar',
    description: 'Ultra-dense single jersey knitted from extra-long staple combed cotton. Engineered zero-torque structure maintains dimensional stability after high-temp commercial laundering.',
    longDescription: 'Crafted on advanced high-gauge circular knitting machines, the Aero-Tech Heavyweight Tee is THREADCRAFT’s flagship knit silhouette. Featuring twin-needle reinforced shoulder taping, anti-pilling bio-silicon finish, and pre-shrunk reactive dyeing conforming to ZDHC Level 3 protocols.',
    material: '100% GOTS Certified Organic Combed Cotton',
    gsm: 280,
    moq: '500 pcs / colorway',
    leadTime: '21 - 28 Days',
    colors: [
      { name: 'Bone White', hex: '#EDE9E1', label: 'Raw Unbleached' },
      { name: 'Obsidian Black', hex: '#161616', label: 'Reactive Pitch' },
      { name: 'Electric Lime', hex: '#C7F36B', label: 'Fluo Accent' },
      { name: 'Industrial Slate', hex: '#4B5563', label: 'Dyed Mineral' }
    ],
    specs: [
      { label: 'Knit Structure', value: 'Single Jersey, 24-Gauge' },
      { label: 'Yarn Count', value: '16s Ne Combed Ring-Spun' },
      { label: 'Color Fastness', value: 'Grade 4.5 ISO 105-C06' },
      { label: 'Shrinkage Tolerance', value: '< 2.5% Length & Width' },
      { label: 'Finishing', value: 'Enzymatic Bio-Polish' }
    ],
    features: [
      'Twin-needle bound rib neckband that never sags',
      'Drop-shoulder relaxed editorial fit',
      'Seamless tubular body or blind-stitched side seams',
      'RFID microchip heat-sealed for tracking'
    ],
    tags: ['Best Seller', 'GOTS Certified', 'Heavyweight', 'Zero-Torque'],
    isPopular: true,
    isSustainable: true,
    modelType: 'tshirt',
    imageUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'prod-02',
    name: 'STRATA MODULAR HOODIE',
    slug: 'strata-modular-hoodie',
    category: 'hoodies',
    categoryLabel: 'Engineered Hoodies',
    subtitle: '460 GSM Diagonal French Terry with Double-Walled Hood',
    description: 'Heavyweight loopback diagonal French terry designed for luxury streetwear brands. Sculpted hood contour with hidden earphone routing and bar-tacked kangaroo pocket.',
    longDescription: 'Developed to meet the rigorous demands of global luxury outerwear labels, the Strata Modular Hoodie combines heavyweight comfort with architectural tailoring. Low-shrinkage loopback knitting paired with 1x1 heavy spandex ribbing at hem and cuffs ensure longevity.',
    material: '80% Organic Cotton / 20% Recycled Polyester',
    gsm: 460,
    moq: '300 pcs / colorway',
    leadTime: '28 - 35 Days',
    colors: [
      { name: 'Charcoal Asphalt', hex: '#262626', label: 'Garment Washed' },
      { name: 'Sand Taupe', hex: '#D2C3B2', label: 'Earthy Heather' },
      { name: 'Moss Cyber', hex: '#3B4A37', label: 'Deep Botanical' }
    ],
    specs: [
      { label: 'Fleece Type', value: '3-End Diagonal French Terry' },
      { label: 'Hood Design', value: 'Double-Layered 3-Panel Ergonomic' },
      { label: 'Drawcord', value: 'Waxed Cotton with Metal Aglets' },
      { label: 'Ribbing', value: '450 GSM Cotton/Elastane 95/5' }
    ],
    features: [
      'Articulated raglan shoulder seams for natural drape',
      'Concealed YKK zippered stash pocket in side seam',
      'Overlocked coverstitch throughout stress points',
      'Anti-shrink garment wash treatment applied'
    ],
    tags: ['Streetwear Luxury', 'Heavy Fleece', 'Pre-Washed'],
    isPopular: true,
    isSustainable: true,
    modelType: 'hoodie',
    imageUrl: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'prod-03',
    name: 'VORTEX TECHNICAL BOMBER',
    slug: 'vortex-technical-bomber',
    category: 'jackets',
    categoryLabel: 'Technical Outerwear',
    subtitle: 'Water-Repellent DWR 3-Layer Laminated Ripstop Nylon',
    description: 'Engineered outer shell with windproof microporous membrane (15,000mm hydrostatic head). Ultrasonic welded seam construction with magnetic storm flap.',
    longDescription: 'The Vortex Technical Bomber balances modern technical performance with minimalist urban aesthetics. Features laser-cut vents underarm, seam-sealed taped construction, and PrimaLoft® Eco thermal insulation for lightweight warmth down to -5°C.',
    material: '100% Recycled Nylon Ripstop with TPU Film',
    gsm: 210,
    moq: '250 pcs / style',
    leadTime: '35 - 45 Days',
    colors: [
      { name: 'Matte Stealth', hex: '#1C1D21', label: 'Deep Carbon' },
      { name: 'Olive Utility', hex: '#4A5340', label: 'Field Tactical' },
      { name: 'Titanium Ice', hex: '#9AA0A6', label: 'Reflective Sheen' }
    ],
    specs: [
      { label: 'Waterproof Rating', value: '15,000 mm H2O' },
      { label: 'Breathability', value: '12,000 g/m²/24h' },
      { label: 'Seam Technology', value: 'Ultrasonic Taped Seams' },
      { label: 'Zippers', value: 'YKK Aquaguard Matte Black' }
    ],
    features: [
      'Waterproof internal media pocket with cord outlet',
      'Fidlock® magnetic collar fastening system',
      'Articulated elbow darting for unrestricted movement',
      'Reflective 3M Scotchlite branding placement'
    ],
    tags: ['Technical', 'Weatherproof', 'Ultrasonic Seams'],
    isPopular: true,
    isSustainable: true,
    modelType: 'jacket',
    imageUrl: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'prod-04',
    name: 'RAW SELVEDGE TAPERED DENIM',
    slug: 'raw-selvedge-tapered-denim',
    category: 'denim',
    categoryLabel: 'Artisanal Denim',
    subtitle: '14.5 oz Japanese Shuttle Loom Woven Red-Line Selvedge',
    description: 'Slow-crafted on vintage Toyoda automatic shuttle looms. Pure indigo rope-dyed yarn that develops high-contrast whiskers and honeycomb fades over wear.',
    longDescription: 'Produced in our specialized zero-discharge denim laundering facility, this garment utilizes ozone wash and laser distressing to eliminate toxic chemicals and reduce water consumption by 85% compared to conventional stonewash methods.',
    material: '98% BCI Cotton / 2% Roica Recycled Stretch',
    gsm: 410,
    moq: '400 pcs / wash',
    leadTime: '30 - 40 Days',
    colors: [
      { name: 'Raw Deep Indigo', hex: '#1B263B', label: 'Zero Wash Untreated' },
      { name: 'Ozone Mid-Vintage', hex: '#415A77', label: 'Eco-Laser Washed' },
      { name: 'Overdyed Mineral', hex: '#2B2D42', label: 'Sulphur Black Wash' }
    ],
    specs: [
      { label: 'Loom Type', value: 'Narrow Width Vintage Shuttle Loom' },
      { label: 'Dyeing Method', value: '16-Dip Rope Dyed Indigo' },
      { label: 'Hardware', value: 'Solid Copper Rivets & Donut Buttons' },
      { label: 'Pocket Bags', value: '8 oz Heavy Herringbone Twill' }
    ],
    features: [
      'Authentic red-line selvedge visible on cuff turn-up',
      'Chain-stitched hem using vintage Union Special 43200G',
      'Reinforced rear pocket hidden rivets',
      'Vegetable-tanned full-grain leather waistband patch'
    ],
    tags: ['Selvedge', 'Ozone Washed', 'Rope-Dyed'],
    isPopular: false,
    isSustainable: true,
    modelType: 'denim',
    imageUrl: 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'prod-05',
    name: 'KINETIC SEAMLESS POLO',
    slug: 'kinetic-seamless-polo',
    category: 'polo',
    categoryLabel: 'Performance Polos',
    subtitle: '220 GSM Mercerized Pique with Bonded Micro-Placket',
    description: 'Luxury executive polo with silky luster and high wrinkle recovery. Clean cut-and-sewn collar with hidden stays that prevent curling after repeated wash cycles.',
    longDescription: 'Engineered for luxury golf, yachting, and premium business-casual apparel lines. Utilizes double-mercerization (yarn and fabric stage) to produce deep, vibrant color saturation and a cool-to-touch hand feel.',
    material: '100% Extra-Long Staple Supima® Cotton',
    gsm: 220,
    moq: '350 pcs / colorway',
    leadTime: '24 - 30 Days',
    colors: [
      { name: 'Crisp Chalk', hex: '#F8F9FA', label: 'Double Mercerized' },
      { name: 'Midnight Navy', hex: '#10172A', label: 'Deep Nautical' },
      { name: 'Forest Cyber', hex: '#19382C', label: 'Rich Emerald' }
    ],
    specs: [
      { label: 'Weave', value: 'Double Pique Knit' },
      { label: 'Buttons', value: 'Genuine Australian Mother-of-Pearl' },
      { label: 'Placket', value: 'Ultrasonic Bonded 3-Button' },
      { label: 'Yarn', value: '60/2 Ne Compact Combed Supima' }
    ],
    features: [
      'Self-fabric knit collar with anti-curl inner interfacing',
      'Side split hem reinforced with grosgrain ribbon',
      'Natural mechanical stretch without synthetic elastane',
      'Oeko-Tex Standard 100 Class 1 verified non-toxic'
    ],
    tags: ['Supima', 'Mercerized', 'Luxury Knit'],
    isPopular: false,
    isSustainable: true,
    modelType: 'polo',
    imageUrl: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'prod-06',
    name: 'HYPER-COMPRESSION ACTIVE TIGHTS & TOP',
    slug: 'hyper-compression-activewear',
    category: 'activewear',
    categoryLabel: 'Athletic & Performance',
    subtitle: 'Seamless Circular Knit with Graduated Muscle Compression',
    description: 'High-tenacity nylon-elastane blend with SilverPlus® antibacterial moisture-wicking technology. 4-way stretch with zero chafing flatlock seam construction.',
    longDescription: 'Manufactured on Santoni seamless body-mapping knitting machines. Features gradient zonal compression to reduce muscle vibration during high-impact training while facilitating rapid heat dissipation through micro-mesh cooling zones.',
    material: '74% Recycled Polyamide / 26% Lycra® Sport',
    gsm: 240,
    moq: '400 sets / style',
    leadTime: '25 - 32 Days',
    colors: [
      { name: 'Void Black', hex: '#0D0D0E', label: 'Matte Sheen' },
      { name: 'Cobalt Surge', hex: '#1E40AF', label: 'Vibrant Dynamic' },
      { name: 'Sage Stone', hex: '#6B7280', label: 'Neutral Mineral' }
    ],
    specs: [
      { label: 'Machine Type', value: 'Santoni SM8-TOP2 Seamless' },
      { label: 'Compression Level', value: '18-22 mmHg Graduated' },
      { label: 'Stretch Ratio', value: '280% Elongation Recovery' },
      { label: 'Anti-Odor', value: 'Silver-Ion Micro Encapsulation' }
    ],
    features: [
      'Body-mapped jacquard ventilation under chest and spine',
      'Squat-proof opaque interlocking knit structure',
      'Flat-locked ergonomic seam lines preventing abrasion',
      'Laser-cut raw edge ankle cuffs'
    ],
    tags: ['Activewear', 'Seamless Knit', 'Compression'],
    isPopular: true,
    isSustainable: true,
    modelType: 'activewear',
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80'
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'All Silhouettes', count: 6 },
  { id: 'tshirts', label: 'T-Shirts', count: 1 },
  { id: 'hoodies', label: 'Hoodies & Sweats', count: 1 },
  { id: 'jackets', label: 'Jackets & Outerwear', count: 1 },
  { id: 'denim', label: 'Artisanal Denim', count: 1 },
  { id: 'polo', label: 'Polos & Knits', count: 1 },
  { id: 'activewear', label: 'Activewear & Seamless', count: 1 },
];
