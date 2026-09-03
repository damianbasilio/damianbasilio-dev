import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { locales, type Localized } from '@/lib/i18n';
import { site } from './site';
import { projects } from './projects';
import { competitions } from './competitions';

const problems: string[] = [];

function fail(where: string, message: string): void {
  problems.push(`${where}: ${message}`);
}

function checkLocalizedString(
  where: string,
  field: string,
  value: Localized<string> | undefined,
): void {
  if (!value) {
    fail(where, `missing localized field "${field}"`);
    return;
  }
  for (const locale of locales) {
    const text = value[locale];
    if (typeof text !== 'string' || text.trim() === '') {
      fail(where, `"${field}" is empty for locale "${locale}"`);
    }
  }
}

function checkLocalizedParagraphs(
  where: string,
  field: string,
  value: Localized<string[]>,
): void {
  for (const locale of locales) {
    const paragraphs = value[locale];
    if (!Array.isArray(paragraphs) || paragraphs.length === 0) {
      fail(where, `"${field}" is empty for locale "${locale}"`);
      continue;
    }
    paragraphs.forEach((paragraph, i) => {
      if (paragraph.trim() === '') {
        fail(where, `"${field}[${i}]" is blank for locale "${locale}"`);
      }
    });
  }
}

function checkHref(where: string, href: string): void {
  const ok =
    href.startsWith('/') ||
    href.startsWith('mailto:') ||
    href.startsWith('https://');
  if (!ok) {
    fail(where, `href "${href}" must be absolute https, mailto, or site-relative`);
  }
}

function checkImage(where: string, image: string): void {
  if (!image.startsWith('/images/')) {
    fail(where, `image "${image}" must start with /images/`);
    return;
  }
  if (!existsSync(join(process.cwd(), 'public', image))) {
    fail(where, `image "${image}" does not exist in /public`);
  }
}

function checkUnique(where: string, slugs: string[]): void {
  const seen = new Set<string>();
  for (const slug of slugs) {
    if (seen.has(slug)) fail(where, `duplicate slug "${slug}"`);
    seen.add(slug);
  }
}

let validated = false;

export function assertContentValid(): void {
  if (validated) return;
  validated = true;
  problems.length = 0;

  checkLocalizedString('site', 'greeting', site.greeting);
  checkLocalizedString('site', 'role', site.role);
  checkLocalizedString('site', 'tagline', site.tagline);
  checkLocalizedString('site', 'intro', site.intro);
  checkLocalizedString('site', 'aboutExtra', site.aboutExtra);
  checkLocalizedString('site', 'location', site.location);

  if (site.stack.length === 0) fail('site', 'stack is empty');

  for (const social of site.socials) {
    checkHref(`site.socials.${social.key}`, social.href);
  }

  for (const entry of site.timeline) {
    const where = `site.timeline.${entry.id}`;
    checkLocalizedString(where, 'title', entry.title);
    checkLocalizedString(where, 'body', entry.body);
  }

  for (const image of site.photoStrip) checkImage('site.photoStrip', image);
  checkImage('site.avatar', site.avatar);
  checkImage('site.portrait', site.portrait);

  checkUnique(
    'projects',
    projects.map((p) => p.slug),
  );
  for (const project of projects) {
    const where = `projects.${project.slug}`;
    checkLocalizedString(where, 'title', project.title);
    checkLocalizedString(where, 'summary', project.summary);
    checkLocalizedParagraphs(where, 'body', project.body);
    if (project.stack.length === 0) fail(where, 'stack is empty');
    for (const metric of project.metrics) {
      checkLocalizedString(`${where}.metrics`, 'label', metric.label);
    }
    for (const link of project.links) checkHref(where, link.href);
    for (const image of project.images) checkImage(where, image);
  }

  checkUnique(
    'competitions',
    competitions.map((c) => c.slug),
  );
  for (const competition of competitions) {
    const where = `competitions.${competition.slug}`;
    checkLocalizedString(where, 'summary', competition.summary);
    if (competition.location) {
      checkLocalizedString(where, 'location', competition.location);
    }
    if (competition.status === 'completed' && competition.placements.length === 0) {
      fail(where, 'completed competition has no placements');
    }
    if (competition.status === 'ongoing' && competition.placements.length > 0) {
      fail(where, 'ongoing competition should not have placements');
    }
    for (const placement of competition.placements) {
      checkLocalizedString(`${where}.placements`, 'label', placement.label);
      checkLocalizedString(`${where}.placements`, 'scope', placement.scope);
    }
    for (const link of competition.links ?? []) checkHref(where, link.href);
    for (const image of competition.images) checkImage(where, image);
  }

  if (problems.length > 0) {
    throw new Error(
      `Content validation failed with ${problems.length} problem(s):\n  - ` +
        problems.join('\n  - '),
    );
  }
}
