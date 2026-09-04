import type { Competition } from './types';

/** Newest first. `anchor: true` renders the entry at full width. */
export const competitions: Competition[] = [
  {
    slug: 'hpe-cds-tech-challenge-25-26',
    event: 'HPE CDS Tech Challenge 25/26',
    organizer: 'Hewlett Packard Enterprise',
    location: {
      en: 'Puebla, MX to Madrid, Spain',
      es: 'Puebla, MX a Madrid, España',
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
        scope: { en: 'Global final, Madrid', es: 'Final global, Madrid' },
      },
    ],
    summary: {
      en: 'We won the national stage with a digital twin of one police vehicle, then grew it into a five fleet emergency platform for Aruba and finished third in the world in Madrid.',
      es: 'Ganamos la etapa nacional con el gemelo digital de una patrulla, luego lo convertimos en una plataforma de emergencias de cinco flotas para Aruba y quedamos terceros del mundo en Madrid.',
    },
    stack: ['Python', 'Flask', 'Apache Kafka', 'Docker'],
    links: [
      { label: 'HPE_Final', href: 'https://github.com/damianbasilio/HPE_Final' },
    ],
    images: ['/images/competitions/hpe-cds-25-26-01.webp'],
    focus: 'top',
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
      en: 'A capture the flag run at BUAP. We finished second.',
      es: 'Un capture the flag organizado en la BUAP. Quedamos en segundo.',
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
      en: "One of the biggest student hackathons in Latin America. Still going.",
      es: 'Uno de los hackathons estudiantiles más grandes de Latinoamérica. Todavía en curso.',
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
      en: 'A capture the flag hosted by IPN. Still going.',
      es: 'Un capture the flag organizado por el IPN. Todavía en curso.',
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
      en: 'A retail hackathon run by Tiendas 3B. Still going.',
      es: 'Un hackathon de retail organizado por Tiendas 3B. Todavía en curso.',
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
      en: 'An agritech challenge around the barley supply chain. Still going.',
      es: 'Un reto de agrotecnología sobre la cadena de suministro de cebada. Todavía en curso.',
    },
    images: [],
  },
];
