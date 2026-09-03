import type { Competition } from './types';

/** Newest first. `anchor: true` renders the entry at full width. */
export const competitions: Competition[] = [
  {
    slug: 'hpe-cds-tech-challenge-25-26',
    event: 'HPE CDS Tech Challenge 25/26',
    organizer: 'Hewlett Packard Enterprise',
    location: {
      en: 'Puebla, MX → Madrid, Spain',
      es: 'Puebla, MX → Madrid, España',
    },
    date: '2026',
    status: 'completed',
    anchor: true,
    placements: [
      {
        medal: 'gold',
        label: { en: '1st place', es: '1er lugar' },
        scope: { en: 'National stage', es: 'Etapa nacional' },
      },
      {
        medal: 'bronze',
        label: { en: '3rd place', es: '3er lugar' },
        scope: { en: 'Global final — Madrid', es: 'Final global — Madrid' },
      },
    ],
    summary: {
      en: 'Won the national stage with a digital twin of a police vehicle, then scaled it into a five-fleet emergency services platform for Aruba and placed third globally in Madrid.',
      es: 'Ganamos la etapa nacional con un gemelo digital de una patrulla, luego lo escalamos a una plataforma de emergencias con cinco flotas para Aruba y quedamos en tercer lugar global en Madrid.',
    },
    stack: ['Python', 'Flask', 'Apache Kafka', 'Docker'],
    links: [
      { label: 'HPE_Final', href: 'https://github.com/damianbasilio/HPE_Final' },
    ],
    images: ['/images/competitions/hpe-cds-25-26-01.jpg'],
  },
  {
    slug: 'cybersecurity-global-buap-ctf',
    event: 'Cybersecurity Global BUAP CTF',
    organizer: 'BUAP',
    location: { en: 'Puebla, Mexico', es: 'Puebla, México' },
    date: '2026',
    status: 'completed',
    anchor: false,
    placements: [
      {
        medal: 'silver',
        label: { en: '2nd place', es: '2º lugar' },
        scope: { en: 'Overall', es: 'General' },
      },
    ],
    summary: {
      en: 'Capture the flag competition run at BUAP. Second place overall.',
      es: 'Competencia capture the flag organizada en la BUAP. Segundo lugar general.',
    },
    images: [],
  },
  {
    slug: 'hackmty',
    event: 'HackMTY',
    location: { en: 'Monterrey, Mexico', es: 'Monterrey, México' },
    date: '2026',
    status: 'ongoing',
    anchor: false,
    placements: [],
    summary: {
      en: "One of Latin America's largest student hackathons. Currently competing.",
      es: 'Uno de los hackathons estudiantiles más grandes de Latinoamérica. Actualmente compitiendo.',
    },
    images: [],
  },
  {
    slug: 'hackmex-ipn-ctf',
    event: 'HackMex IPN CTF',
    organizer: 'IPN',
    location: { en: 'Mexico', es: 'México' },
    date: '2026',
    status: 'ongoing',
    anchor: false,
    placements: [],
    summary: {
      en: 'Capture the flag competition hosted by IPN. Currently competing.',
      es: 'Competencia capture the flag organizada por el IPN. Actualmente compitiendo.',
    },
    images: [],
  },
  {
    slug: 'tiendas-3b-hackathon-26',
    event: 'Tiendas 3B Hackathon 26',
    organizer: 'Tiendas 3B',
    location: { en: 'Mexico', es: 'México' },
    date: '2026',
    status: 'ongoing',
    anchor: false,
    placements: [],
    summary: {
      en: 'Retail-focused hackathon run by Tiendas 3B. Currently competing.',
      es: 'Hackathon enfocado en retail organizado por Tiendas 3B. Actualmente compitiendo.',
    },
    images: [],
  },
  {
    slug: 'reto-agro-cebada-26',
    event: 'Reto Agro-Cebada 26',
    location: { en: 'Mexico', es: 'México' },
    date: '2026',
    status: 'ongoing',
    anchor: false,
    placements: [],
    summary: {
      en: 'Agritech challenge focused on the barley supply chain. Currently competing.',
      es: 'Reto de agrotecnología enfocado en la cadena de suministro de cebada. Actualmente compitiendo.',
    },
    images: [],
  },
];
