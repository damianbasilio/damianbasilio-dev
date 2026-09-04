import type { Localized } from '@/lib/i18n';

export type ContentLink = {
  label: string;
  href: string;
};

export type Metric = {
  label: Localized<string>;
  value: string;
};

export type SocialLink = {
  key: 'email' | 'linkedin' | 'github' | 'instagram';
  label: string;
  href: string;
  handle: string;
};

export type TimelineEntry = {
  id: string;
  period: string;
  title: Localized<string>;
  org: string;
  body: Localized<string>;
};

/** Which part of an image to keep when it is cropped to fit a card. */
export type Focus = 'top' | 'center' | 'bottom';

export type Project = {
  slug: string;
  featured: boolean;
  year: string;
  title: Localized<string>;
  summary: Localized<string>;
  body: Localized<string[]>;
  metrics: Metric[];
  stack: string[];
  links: ContentLink[];
  status: 'closed-source' | 'open-source';
  images: string[];
  focus?: Focus;
};

export type Medal = 'gold' | 'silver' | 'bronze';

export type Placement = {
  medal: Medal | null;
  label: Localized<string>;
  scope: Localized<string>;
};

export type Competition = {
  slug: string;
  event: string;
  organizer?: string;
  location?: Localized<string>;
  date: string;
  status: 'completed' | 'ongoing';
  anchor: boolean;
  placements: Placement[];
  summary: Localized<string>;
  stack?: string[];
  links?: ContentLink[];
  images: string[];
  focus?: Focus;
};
