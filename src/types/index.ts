export type ProductCategory = 
  | 'all' 
  | 'tshirts' 
  | 'polo' 
  | 'hoodies' 
  | 'denim' 
  | 'jackets' 
  | 'activewear';

export interface ProductColor {
  name: string;
  hex: string;
  label: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  categoryLabel: string;
  subtitle: string;
  description: string;
  longDescription: string;
  material: string;
  gsm: number;
  moq: string; // Minimum Order Quantity
  leadTime: string;
  colors: ProductColor[];
  specs: ProductSpec[];
  features: string[];
  tags: string[];
  isPopular?: boolean;
  isSustainable?: boolean;
  modelType: 'tshirt' | 'hoodie' | 'jacket' | 'polo' | 'denim' | 'activewear';
  imageUrl: string;
}

export interface ManufacturingStage {
  step: string;
  title: string;
  tagline: string;
  description: string;
  keyInnovations: string[];
  metrics: { label: string; value: string };
  imageUrl: string;
}

export interface FactoryZone {
  id: string;
  name: string;
  code: string;
  category: string;
  description: string;
  dailyCapacity: string;
  machinery: string;
  automationLevel: string;
  hotspot: { x: number; y: number; z: number };
  highlights: string[];
}

export interface ExportDestination {
  id: string;
  city: string;
  country: string;
  region: 'Americas' | 'Europe' | 'Asia-Pacific' | 'Middle East';
  lat: number;
  lng: number;
  volume: string;
  transitDays: string;
  majorPorts: string;
  categories: string[];
}

export interface StatisticItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  subtext: string;
}

export interface QuoteInquiry {
  fullName: string;
  companyName: string;
  businessEmail: string;
  phone?: string;
  productCategory: string;
  estimatedQuantity: string;
  targetDeliveryDate?: string;
  targetGsm?: string;
  fabricPreference?: string;
  projectDetails: string;
  sustainabilityTarget?: string;
}
