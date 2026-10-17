import { ExportDestination } from '../types';

export const EXPORT_DESTINATIONS: ExportDestination[] = [
  {
    id: 'dest-us-ny',
    city: 'New York',
    country: 'United States',
    region: 'Americas',
    lat: 40.7128,
    lng: -74.0060,
    volume: '180,000 units/mo',
    transitDays: '14 - 18 Days (Sea) / 3 Days (Air)',
    majorPorts: 'Port of NY & NJ / JFK Intl Cargo',
    categories: ['Heavyweight Hoodies', 'Organic Tees', 'Selvedge Denim']
  },
  {
    id: 'dest-us-la',
    city: 'Los Angeles',
    country: 'United States',
    region: 'Americas',
    lat: 34.0522,
    lng: -118.2437,
    volume: '120,000 units/mo',
    transitDays: '16 - 20 Days (Sea) / 3 Days (Air)',
    majorPorts: 'Port of Long Beach / LAX',
    categories: ['Technical Outerwear', 'Activewear', 'Pique Polos']
  },
  {
    id: 'dest-uk-lon',
    city: 'London',
    country: 'United Kingdom',
    region: 'Europe',
    lat: 51.5074,
    lng: -0.1278,
    volume: '95,000 units/mo',
    transitDays: '18 - 22 Days (Sea) / 2 Days (Air)',
    majorPorts: 'Port of Southampton / London Gateway',
    categories: ['Tailored Knits', 'Luxury Outerwear', 'GOTS Basics']
  },
  {
    id: 'dest-fr-par',
    city: 'Paris',
    country: 'France',
    region: 'Europe',
    lat: 48.8566,
    lng: 2.3522,
    volume: '75,000 units/mo',
    transitDays: '20 - 24 Days (Sea) / 2 Days (Air)',
    majorPorts: 'Le Havre / Paris CDG',
    categories: ['Supima Polos', 'Artisanal Selvedge', 'Fleece']
  },
  {
    id: 'dest-de-ber',
    city: 'Berlin',
    country: 'Germany',
    region: 'Europe',
    lat: 52.5200,
    lng: 13.4050,
    volume: '85,000 units/mo',
    transitDays: '19 - 23 Days (Sea) / 2 Days (Air)',
    majorPorts: 'Hamburg Port / Frankfurt Air Hub',
    categories: ['Technical Bombers', 'Recycled Activewear', 'Zero-Waste Knits']
  },
  {
    id: 'dest-jp-tok',
    city: 'Tokyo',
    country: 'Japan',
    region: 'Asia-Pacific',
    lat: 35.6762,
    lng: 139.6503,
    volume: '65,000 units/mo',
    transitDays: '10 - 14 Days (Sea) / 2 Days (Air)',
    majorPorts: 'Port of Yokohama / Tokyo Haneda',
    categories: ['Shuttle Loom Selvedge', 'Super-Heavyweight Tees']
  },
  {
    id: 'dest-au-syd',
    city: 'Sydney',
    country: 'Australia',
    region: 'Asia-Pacific',
    lat: -33.8688,
    lng: 151.2093,
    volume: '50,000 units/mo',
    transitDays: '12 - 16 Days (Sea) / 3 Days (Air)',
    majorPorts: 'Port Botany / Sydney Kingsford',
    categories: ['Breathable Activewear', 'Organic Cotton Knits']
  },
  {
    id: 'dest-ae-dxb',
    city: 'Dubai',
    country: 'United Arab Emirates',
    region: 'Middle East',
    lat: 25.2048,
    lng: 55.2708,
    volume: '40,000 units/mo',
    transitDays: '6 - 9 Days (Sea) / 1 Day (Air)',
    majorPorts: 'Jebel Ali Port / Dubai Cargo Village',
    categories: ['Luxury Pique Polos', 'Corporate Casuals']
  }
];

export const GLOBAL_EXPORT_SUMMARY = {
  totalCountries: 32,
  annualShipments: '6.2M+ Garments',
  bondedFreightForwarders: 14,
  customsClearanceRate: '99.8%',
  majorTradeAgreements: ['EU GSP+', 'US GSP', 'RCEP', 'UK DCTS']
};
