import type { Project } from './types';

export const projects: Project[] = [
  {
    slug: 'checalo',
    featured: true,
    year: '2025 — present',
    status: 'closed-source',
    title: { en: 'Chécalo', es: 'Chécalo' },
    summary: {
      en: "A mobile app that tracks live pricing across Mexico's major supermarket chains, so a full basket can be priced before you leave the house.",
      es: 'Una app móvil que rastrea precios en vivo de las principales cadenas de supermercados en México, para comparar una despensa completa antes de salir de casa.',
    },
    body: {
      en: [
        'Chécalo indexes roughly 1.8 million products and keeps them refreshed from live chain data. The hard part is not the scraping — it is deciding that a 1.5L bottle listed three different ways in three different catalogs is the same product.',
        'The backend is a distributed scraping pipeline feeding a cross-chain matching layer, with search served by Meilisearch and the edge handled by Cloudflare. The client is React Native.',
        'The backend is complete end to end. Monetization through ads and subscriptions is designed but not yet shipped. It is a commercial product, so the source stays closed.',
      ],
      es: [
        'Chécalo indexa cerca de 1.8 millones de productos y los mantiene actualizados con datos en vivo de cada cadena. Lo difícil no es el scraping — es decidir que una botella de 1.5L listada de tres formas distintas en tres catálogos distintos es el mismo producto.',
        'El backend es un pipeline distribuido de scraping que alimenta una capa de matching entre cadenas, con búsqueda servida por Meilisearch y el borde manejado por Cloudflare. El cliente es React Native.',
        'El backend está completo de extremo a extremo. La monetización con anuncios y suscripciones está diseñada pero aún no lanzada. Es un producto comercial, así que el código permanece cerrado.',
      ],
    },
    metrics: [
      {
        value: '~1.8M',
        label: { en: 'products indexed', es: 'productos indexados' },
      },
      {
        value: 'Live',
        label: { en: 'chain data refresh', es: 'datos de cadenas en vivo' },
      },
    ],
    stack: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'Meilisearch',
      'React Native',
      'Cloudflare',
    ],
    links: [{ label: 'checalo.mx', href: 'https://checalo.mx' }],
    images: ['/images/projects/checalo-01.jpg'],
  },
  {
    slug: 'hpe-cds-digital-twin',
    featured: false,
    year: '2026',
    status: 'open-source',
    title: {
      en: 'HPE CDS Digital Twin',
      es: 'Gemelo Digital HPE CDS',
    },
    summary: {
      en: "A real-time digital twin of Aruba's police, ambulance, fire, civil protection and drone fleets, built for the HPE CDS Tech Challenge.",
      es: 'Un gemelo digital en tiempo real de las flotas de policía, ambulancias, bomberos, protección civil y drones de Aruba, construido para el HPE CDS Tech Challenge.',
    },
    body: {
      en: [
        'It started as a digital twin of a single police vehicle streaming telemetry at 10 Hz, with tactical scenarios analyzed by an LLM in natural language and real routing over Madrid. That version won the national stage.',
        'For the global final it scaled into a five-fleet emergency services platform: telemetry, island events and weather all streamed over Kafka, a live dispatch dashboard with dynamic ETAs and OSRM routing, and historical replay of any past incident window.',
        'Built with 52Sec. Third globally out of every competing team.',
      ],
      es: [
        'Empezó como un gemelo digital de una sola patrulla transmitiendo telemetría a 10 Hz, con escenarios tácticos analizados por un LLM en lenguaje natural y ruteo real sobre Madrid. Esa versión ganó la etapa nacional.',
        'Para la final global creció a una plataforma de servicios de emergencia con cinco flotas: telemetría, eventos de la isla y clima transmitidos sobre Kafka, un dashboard de despacho en vivo con ETAs dinámicos y ruteo OSRM, y replay histórico de cualquier ventana de incidentes.',
        'Construido con 52Sec. Tercer lugar global entre todos los equipos participantes.',
      ],
    },
    metrics: [
      { value: '10 Hz', label: { en: 'telemetry rate', es: 'tasa de telemetría' } },
      { value: '5', label: { en: 'fleets simulated', es: 'flotas simuladas' } },
    ],
    stack: ['Python', 'Flask', 'Apache Kafka', 'Docker', 'MapLibre', 'OSRM'],
    links: [
      {
        label: 'HPE_Final',
        href: 'https://github.com/damianbasilio/HPE_Final',
      },
      {
        label: 'gemelodigitalhpe_52sec',
        href: 'https://github.com/damianbasilio/gemelodigitalhpe_52sec',
      },
    ],
    images: ['/images/projects/hpe-cds-01.jpg'],
  },
];
