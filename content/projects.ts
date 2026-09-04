import type { Project } from './types';

export const projects: Project[] = [
  {
    slug: 'checalo',
    featured: true,
    year: '2025 to now',
    status: 'closed-source',
    title: { en: 'Chécalo', es: 'Chécalo' },
    summary: {
      en: "A mobile app that tracks live prices across Mexico's big supermarket chains, so you can see where a full basket costs less before you leave the house.",
      es: 'Una app móvil que sigue precios en vivo de las grandes cadenas de supermercados en México, para ver dónde sale más barata la despensa antes de salir de casa.',
    },
    body: {
      en: [
        'Chécalo keeps about 1.8 million products up to date from live chain data. Scraping them is the easy part. The hard part is deciding that a 1.5L bottle written three different ways in three different catalogs is the same bottle.',
        'The backend is a distributed scraping pipeline feeding a matching layer that reconciles products across chains. Search runs on Meilisearch, Cloudflare handles the edge, and the app itself is React Native.',
        'It works end to end. Ads and subscriptions are designed but not shipped yet. It is a commercial product, so the code stays private.',
      ],
      es: [
        'Chécalo mantiene al día cerca de 1.8 millones de productos con datos en vivo de cada cadena. Hacer el scraping es lo fácil. Lo difícil es decidir que una botella de 1.5L escrita de tres formas distintas en tres catálogos distintos es la misma botella.',
        'El backend es un pipeline distribuido de scraping que alimenta una capa de matching entre cadenas. La búsqueda corre en Meilisearch, Cloudflare maneja el borde, y la app es React Native.',
        'Funciona de extremo a extremo. Los anuncios y las suscripciones están diseñados pero aún no salen. Es un producto comercial, así que el código se queda privado.',
      ],
    },
    metrics: [
      {
        value: '~1.8M',
        label: { en: 'products indexed', es: 'productos indexados' },
      },
      {
        value: 'Live',
        label: { en: 'price updates', es: 'precios actualizados' },
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
      en: "A live digital twin of Aruba's police, ambulance, fire, civil protection and drone fleets, built for the HPE CDS Tech Challenge.",
      es: 'Un gemelo digital en vivo de las flotas de policía, ambulancias, bomberos, protección civil y drones de Aruba, hecho para el HPE CDS Tech Challenge.',
    },
    body: {
      en: [
        'It started small. One police vehicle streaming telemetry at 10 Hz, an LLM reading tactical scenarios in plain language, and real routing over Madrid. That version won the national stage.',
        'For the global final we grew it into a five fleet platform. Telemetry, island events and weather all move over Kafka. The dispatch dashboard updates live with OSRM routing and ETAs that shift as conditions do, and you can replay any past incident window.',
        'Built with 52Sec. Third in the world.',
      ],
      es: [
        'Empezó en chico. Una patrulla transmitiendo telemetría a 10 Hz, un LLM leyendo escenarios tácticos en lenguaje normal, y ruteo real sobre Madrid. Esa versión ganó la etapa nacional.',
        'Para la final global lo hicimos crecer a una plataforma de cinco flotas. Telemetría, eventos de la isla y clima viajan sobre Kafka. El dashboard de despacho se actualiza en vivo con ruteo OSRM y ETAs que cambian con las condiciones, y puedes repetir cualquier ventana de incidentes pasada.',
        'Hecho con 52Sec. Tercer lugar del mundo.',
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
