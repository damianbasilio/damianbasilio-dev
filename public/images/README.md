# Images

Replace every placeholder here with a real photo. Filenames must stay exactly
as listed — `content/` references them by path and the build fails if one is
missing.

| Path | What it is | Target size | Aspect |
|---|---|---|---|
| `profile/avatar.jpg` | Square headshot, used in the hero and nav | 400×400 | 1:1 |
| `profile/portrait.jpg` | Larger portrait for the About page | 800×1000 | 4:5 |
| `strip/strip-01.jpg` … `strip-05.jpg` | Home page photo strip — hackathons, team, Madrid | 600×750 | 4:5 |
| `projects/checalo-01.jpg` | Chécalo screenshot or mockup | 1600×900 | 16:9 |
| `projects/hpe-cds-01.jpg` | Digital twin dashboard screenshot | 1600×900 | 16:9 |
| `competitions/hpe-cds-25-26-01.jpg` | Madrid / team photo | 1600×900 | 16:9 |

## Adding more

1. Drop the file in the right folder.
2. Add its path to the entry's `images` array in `content/projects.ts` or
   `content/competitions.ts`.
3. Rebuild. If the path is wrong, the build fails and names it.

Entries with an empty `images` array render a generated gradient instead — that
is intentional, not a bug. Compress images before committing; nothing here
should exceed ~300 KB.
