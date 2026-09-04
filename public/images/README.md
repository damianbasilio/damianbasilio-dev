# Images

Everything here is WebP, produced by the image optimizer so sizes stay small.
Filenames must stay exactly as listed: `content/` references them by path and
the build fails if one is missing.

| Path | What it is | Size |
|---|---|---|
| `profile/avatar.webp` | Square headshot, used in the hero ring and on About | 512px |
| `strip/strip-01.webp` … `strip-05.webp` | Home page photo strip | 700px square |
| `projects/checalo-01.webp` | checalo.mx | 1440px, 16:9 |
| `projects/hpe-cds-01.webp` | hpe.52sec.org | 1440px, 16:9 |
| `competitions/hpe-cds-25-26-01.webp` | HPE CDS Tech Challenge | 1400px |

## Adding more

1. Run the optimizer to produce a WebP at the right size.
2. Add its path to the entry's `images` array in `content/projects.ts` or
   `content/competitions.ts`.
3. Rebuild. A wrong path fails the build and names it.

Entries with an empty `images` array render a generated gradient instead, which
is intentional. Nothing here should go past ~150 KB.
