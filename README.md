# Orlando Gordon — Portfolio

A single-page developer portfolio built with **Vite + React + TypeScript + Tailwind CSS v4**. The design is a dark "terminal" aesthetic with an interactive hero (mono-glyph canvas field), a custom cursor, and scroll-reveal animations throughout.

> Rebuilt from a [Claude Design](https://claude.ai/design) mockup ("Orlando Portfolio Site Design"). The previous version was a static HTML5 UP "Editorial" template — see git history.

## Stack

- **Vite 6** — dev server & build
- **React 19** + **TypeScript** (strict)
- **Tailwind CSS v4** — CSS-first tokens via `@theme` in `src/index.css`
- Fonts: Archivo (display), JetBrains Mono (labels), Hanken Grotesk (body) — loaded from Google Fonts in `index.html`

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build locally
npm run lint     # eslint
```

## Deployment

It's a static site — build and serve the `dist/` folder on any static host:

- **Build command:** `npm run build`
- **Publish directory:** `dist`

No SPA redirect rules are needed (navigation is in-page anchor links, not client-side routing).

## Project structure

```
src/
  App.tsx                 # composes all sections; sets the runtime accent var
  config.ts               # accent / reduceMotion / customCursor toggles
  index.css               # Tailwind import + design tokens, keyframes, utilities
  assets/                 # imported images (headshot, project screenshots)
  data/                   # typed content — edit these to update the site
    profile.ts            #   name, taglines, contact links, about info table
    projects.ts           #   the "Selected Work" cards
    skills.ts             #   the skills grid
    experience.ts         #   the experience timeline
    types.ts
  hooks/                  # useInView, useReducedMotion, useScrolled,
                          # useActiveSection, useHeroField (canvas)
  lib/color.ts            # hex -> "r,g,b" helper
  components/             # Nav, Hero, About, Work (ProjectCard), Skills,
                          # Experience, Contact, Footer, CustomCursor,
                          # Section, SectionHeader, Reveal
public/                   # favicons, site.webmanifest, Resume.pdf (served at /)
```

## Editing content

Most updates are data-only — no JSX changes needed:

- **Projects** → `src/data/projects.ts`
- **Skills** → `src/data/skills.ts`
- **Experience** → `src/data/experience.ts`
- **Name / taglines / contact links / about info** → `src/data/profile.ts`

### Open content TODOs

- **Project live links** — `Pocket Watcher` and `Sharp Shooter` have placeholder `liveUrl: "#"` (their cards hide the "Live" link until set). Wander NA is wired to its real URL.
- **Project screenshots** — Pocket Watcher and Sharp Shooter use the hatch-pattern placeholder; drop real images in `src/assets/` and set `image:` in `projects.ts`. Wander NA uses `src/assets/wander-na.png`.
- **Experience** — the three timeline rows in `experience.ts` are placeholder copy from the design; replace with real roles/dates (cross-reference `public/Resume.pdf`).

## Configuration

`src/config.ts` mirrors the design's component props:

| Option         | Default     | Effect                                                        |
| -------------- | ----------- | ------------------------------------------------------------- |
| `accent`       | `#34E0A0`   | Drives the `--accent` CSS var — every accent color updates.   |
| `reduceMotion` | `false`     | Forces reduced motion (also honors OS `prefers-reduced-motion`). |
| `customCursor` | `true`      | Custom ring+dot cursor on fine-pointer devices.               |
