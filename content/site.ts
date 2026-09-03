import type { SocialLink, TimelineEntry } from './types';
import type { Localized } from '@/lib/i18n';

export const site = {
  name: 'Damian Basilio',
  fullName: 'Damian Basilio Romero',
  email: 'damian.basilio@icloud.com',
  url: 'https://damianbasilio.dev',

  role: {
    en: 'Backend developer & Cybersecurity Engineering student',
    es: 'Desarrollador backend y estudiante de Ingeniería en Ciberseguridad',
  } satisfies Localized<string>,

  greeting: {
    en: "Hi, I'm Damian.",
    es: 'Hola, soy Damian.',
  } satisfies Localized<string>,

  tagline: {
    en: "I build backends and I'm learning how to break them.",
    es: 'Construyo backends y estoy aprendiendo a romperlos.',
  } satisfies Localized<string>,

  intro: {
    en: "I'm a Cybersecurity Engineering student at FCC BUAP in Puebla. I spend most of my time on backends — distributed scrapers, real-time pipelines, APIs that have to stay up — and the rest of it learning how those same systems fall over. I compete with 52Sec in hackathons and CTFs.",
    es: 'Soy estudiante de Ingeniería en Ciberseguridad en la FCC BUAP, en Puebla. Paso la mayor parte del tiempo en backends — scrapers distribuidos, pipelines en tiempo real, APIs que no se pueden caer — y el resto aprendiendo cómo se rompen esos mismos sistemas. Compito con 52Sec en hackathons y CTFs.',
  } satisfies Localized<string>,

  location: {
    en: 'Puebla, Mexico',
    es: 'Puebla, México',
  } satisfies Localized<string>,

  socials: [
    {
      key: 'email',
      label: 'Email',
      href: 'mailto:damian.basilio@icloud.com',
      handle: 'damian.basilio@icloud.com',
    },
    {
      key: 'linkedin',
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/damianbasilio',
      handle: '/in/damianbasilio',
    },
    {
      key: 'github',
      label: 'GitHub',
      href: 'https://github.com/damianbasilio',
      handle: '@damianbasilio',
    },
    {
      key: 'instagram',
      label: 'Instagram',
      href: 'https://instagram.com/db.rom',
      handle: '@db.rom',
    },
  ] satisfies SocialLink[],

  stack: [
    'Python',
    'TypeScript',
    'Swift',
    'FastAPI',
    'Flask',
    'PostgreSQL',
    'Apache Kafka',
    'Docker',
    'Meilisearch',
    'Cloudflare',
    'Linux',
    'React Native',
    'React',
    'Tailwind CSS',
  ],

  timeline: [
    {
      id: 'buap',
      period: '2023 — present',
      org: 'FCC BUAP',
      title: {
        en: 'Cybersecurity Engineering',
        es: 'Ingeniería en Ciberseguridad',
      },
      body: {
        en: 'Studying at the Facultad de Ciencias de la Computación in Puebla, focused on network and infrastructure security.',
        es: 'Estudio en la Facultad de Ciencias de la Computación en Puebla, enfocado en seguridad de redes e infraestructura.',
      },
    },
    {
      id: '52sec',
      period: '2024 — present',
      org: '52Sec',
      title: {
        en: 'Competitive hackathon team',
        es: 'Equipo competitivo de hackathons',
      },
      body: {
        en: 'Competing nationally and internationally in hackathons and CTFs with a team out of Puebla.',
        es: 'Compito a nivel nacional e internacional en hackathons y CTFs con un equipo de Puebla.',
      },
    },
    {
      id: 'hpe-madrid',
      period: '2026',
      org: 'HPE CDS Tech Challenge',
      title: {
        en: '1st nationally, 3rd globally in Madrid',
        es: '1º nacional, 3º global en Madrid',
      },
      body: {
        en: 'Built a real-time digital twin of a five-fleet emergency services platform, then took it to the global final in Madrid.',
        es: 'Construimos un gemelo digital en tiempo real de una plataforma de emergencias con cinco flotas, y lo llevamos a la final global en Madrid.',
      },
    },
    {
      id: 'checalo',
      period: '2025 — present',
      org: 'Chécalo',
      title: {
        en: 'Building a price-comparison platform',
        es: 'Construyendo una plataforma de comparación de precios',
      },
      body: {
        en: 'A distributed scraping and matching pipeline tracking roughly 1.8 million supermarket products across Mexico.',
        es: 'Un pipeline distribuido de scraping y matching que rastrea cerca de 1.8 millones de productos de supermercado en México.',
      },
    },
  ] satisfies TimelineEntry[],

  /** Tilted photo strip on the home page. Files live in /public/images/strip/. */
  photoStrip: [
    '/images/strip/strip-01.jpg',
    '/images/strip/strip-02.jpg',
    '/images/strip/strip-03.jpg',
    '/images/strip/strip-04.jpg',
    '/images/strip/strip-05.jpg',
  ],

  avatar: '/images/profile/avatar.jpg',
  portrait: '/images/profile/portrait.jpg',
};
