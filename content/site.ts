import type { SocialLink, TimelineEntry } from './types';
import type { Localized } from '@/lib/i18n';

export const site = {
  name: 'Damian Basilio',
  fullName: 'Damian Basilio Romero',
  email: 'damian.basilio@icloud.com',
  url: 'https://damianbasilio.dev',

  role: {
    en: 'Backend developer and Cybersecurity Engineering student',
    es: 'Desarrollador backend y estudiante de Ingeniería en Ciberseguridad',
  } satisfies Localized<string>,

  greeting: {
    en: "Hi, I'm Damian.",
    es: 'Hola, soy Damian.',
  } satisfies Localized<string>,

  aboutHeadline: {
    en: "I'm Damian. I build backends, and I keep trying to break them.",
    es: 'Soy Damian. Construyo backends, y no dejo de intentar romperlos.',
  } satisfies Localized<string>,

  footerBio: {
    en: "I'm Damian, a backend developer and Cybersecurity Engineering student in Puebla. Thanks for stopping by.",
    es: 'Soy Damian, desarrollador backend y estudiante de Ingeniería en Ciberseguridad en Puebla. Gracias por pasar.',
  } satisfies Localized<string>,

  tagline: {
    en: "I build backends and I'm learning how to break them.",
    es: 'Construyo backends y estoy aprendiendo a romperlos.',
  } satisfies Localized<string>,

  heroTagline: {
    en: 'I build backends and learn to break them.',
    es: 'Construyo backends y aprendo a romperlos.',
  } satisfies Localized<string>,

  heroIntro: {
    en: 'Cybersecurity Engineering student at FCC BUAP in Puebla. Mostly backend work: distributed scrapers, real time pipelines, APIs that cannot go down.',
    es: 'Estudiante de Ingeniería en Ciberseguridad en la FCC BUAP, Puebla. Sobre todo backend: scrapers distribuidos, pipelines en tiempo real, APIs que no se pueden caer.',
  } satisfies Localized<string>,

  intro: {
    en: "I study Cybersecurity Engineering at FCC BUAP in Puebla. Most of my time goes into backend work: distributed scrapers, real time pipelines, APIs that cannot go down. The rest goes into figuring out how those same systems fall apart, which usually turns out to be the more interesting half. I compete with 52Sec in hackathons and CTFs.",
    es: 'Estudio Ingeniería en Ciberseguridad en la FCC BUAP, en Puebla. La mayor parte de mi tiempo se va en backend: scrapers distribuidos, pipelines en tiempo real, APIs que no se pueden caer. El resto se va en entender cómo se rompen esos mismos sistemas, que casi siempre resulta ser la mitad más interesante. Compito con 52Sec en hackathons y CTFs.',
  } satisfies Localized<string>,

  aboutExtra: {
    en: "What I like most is the point where building something and securing it stop being two separate jobs. I would rather ship a system I know well enough to attack than one that only holds up when nothing goes wrong.",
    es: 'Lo que más me gusta es el punto donde construir algo y asegurarlo dejan de ser dos trabajos distintos. Prefiero lanzar un sistema que conozco lo suficiente para atacarlo, y no uno que solo aguanta cuando nada sale mal.',
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
      period: '2023 to now',
      org: 'FCC BUAP',
      title: {
        en: 'Cybersecurity Engineering',
        es: 'Ingeniería en Ciberseguridad',
      },
      body: {
        en: 'I study at the Facultad de Ciencias de la Computación in Puebla. Most of what I chase there is network and infrastructure security.',
        es: 'Estudio en la Facultad de Ciencias de la Computación en Puebla. Lo que más persigo ahí es la seguridad de redes e infraestructura.',
      },
    },
    {
      id: '52sec',
      period: '2024 to now',
      org: '52Sec',
      title: {
        en: 'Competitive hackathon team',
        es: 'Equipo competitivo de hackathons',
      },
      body: {
        en: 'A team out of Puebla. We enter hackathons and CTFs together, at home and abroad.',
        es: 'Un equipo de Puebla. Entramos juntos a hackathons y CTFs, aquí y fuera del país.',
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
        en: 'We built a live digital twin of a five fleet emergency service, then took it to the global final in Madrid.',
        es: 'Construimos un gemelo digital en vivo de un servicio de emergencias con cinco flotas, y lo llevamos a la final global en Madrid.',
      },
    },
    {
      id: 'checalo',
      period: '2025 to now',
      org: 'Chécalo',
      title: {
        en: 'Building a price-comparison platform',
        es: 'Construyendo una plataforma de comparación de precios',
      },
      body: {
        en: 'A scraping and matching pipeline that keeps track of about 1.8 million supermarket products across Mexico.',
        es: 'Un pipeline de scraping y matching que sigue unos 1.8 millones de productos de supermercado en México.',
      },
    },
  ] satisfies TimelineEntry[],

  /** Tilted photo strip on the home page. Files live in /public/images/strip/. */
  photoStrip: [
    '/images/strip/strip-02.webp',
    // strip-01 sits second so the card to its left covers its left edge.
    '/images/strip/strip-01.webp',
    // The solo shot stays dead centre.
    '/images/strip/strip-03.webp',
    '/images/strip/strip-04.webp',
    '/images/strip/strip-05.webp',
  ],

  avatar: '/images/profile/avatar.webp',
  portrait: '/images/profile/avatar.webp',
};
