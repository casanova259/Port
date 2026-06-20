# Portfolio

A Next.js (App Router + TypeScript + Tailwind v4) portfolio scaffold inspired by a
terminal/status-dashboard aesthetic.

## Stack & design notes

- **Display font:** Silkscreen (pixel, used sparingly for section headings/name)
- **Body/data font:** Geist Mono
- **Theme:** near-black background, zinc borders, warm amber accent (`--accent`)
- **Layout:** centered column framed by full-height vertical borders, with a
  diagonal-hatch divider (`.hatch` in `globals.css`) between each section —
  a recurring "schematic" motif.

Both fonts are self-hosted (via the `geist` and `@fontsource/silkscreen`
packages), so no calls to Google Fonts are made at build time.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where to edit content

All placeholder copy lives in `lib/data.ts` — name, role, taglines, about
bullets, social links, experience, education, and the closing quote.

## Sections & "live" data — decide as you go

These currently render static placeholder data. Each is isolated in its own
component so it's easy to swap in a real data source later:

- **`components/Header.tsx`** — `profile.status` and `profile.views` are
  static. Could be wired to a presence service / analytics provider.
- **`components/Activity.tsx`** + **`lib/activity.ts`** — renders a
  GitHub-style contribution grid from deterministic sample data. Swap
  `getActivityLevels()` for a real GitHub contributions fetch (e.g. via the
  GitHub GraphQL API with a server action or route handler) when ready.
- **`components/Connect.tsx`** — update `links` in `lib/data.ts` with your
  real profiles; add a Spotify "now playing" card here if wanted.

## Structure

```
app/
  layout.tsx      fonts + global shell
  globals.css     theme tokens + decorative utilities (.hatch, .dot-grid, ...)
  page.tsx        assembles all sections
components/
  Header.tsx       hero: avatar, name, typing tagline, status
  Panel.tsx        shared section wrapper (border + pixel-font heading)
  Divider.tsx      diagonal-hatch section divider
  About.tsx
  Connect.tsx
  Activity.tsx     contribution heatmap (placeholder data)
  Experience.tsx   timeline
  Education.tsx    timeline
  Quote.tsx
  TypingTagline.tsx  client component, cycles through profile.taglines
lib/
  data.ts          all placeholder content -- edit this first
  activity.ts       placeholder heatmap data generator
