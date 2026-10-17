import { StatisticItem } from '../types';

export const MANUFACTURING_STATS: StatisticItem[] = [
  {
    id: 'stat-years',
    value: 25,
    suffix: '+',
    label: 'Years of Precision',
    subtext: 'Continuous apparel manufacturing excellence serving global fashion houses since 1999.'
  },
  {
    id: 'stat-capacity',
    value: 500,
    suffix: 'K+',
    label: 'Monthly Capacity',
    subtext: 'Units of premium cut-and-sewn knitwear and woven outerwear produced monthly.'
  },
  {
    id: 'stat-markets',
    value: 30,
    suffix: '+',
    label: 'Global Export Markets',
    subtext: 'Active retail distribution across North America, Europe, Japan, and Oceania.'
  },
  {
    id: 'stat-otd',
    value: 98,
    suffix: '%',
    label: 'On-Time Delivery Rate',
    subtext: 'Rigorous ERP scheduling with synchronized raw material supply and air/sea logistics.'
  }
];

export const CERTIFICATIONS = [
  { name: 'GOTS', standard: 'Global Organic Textile Standard', code: 'CU 849201' },
  { name: 'OEKO-TEX®', standard: 'Standard 100 Class I (Infants)', code: 'SHKO 048210' },
  { name: 'ISO 9001:2015', standard: 'Quality Management Systems', code: 'QMS-2024-88' },
  { name: 'ISO 14001', standard: 'Environmental Management', code: 'EMS-99120' },
  { name: 'WRAP', standard: 'Worldwide Responsible Accredited Production (Gold)', code: 'W-98124' },
  { name: 'HIGG INDEX', standard: 'Higg FEM / FSLM Verified', score: '88.4 Score' }
];
