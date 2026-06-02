# Sporos — AI Foundry

Forge, deploy, and operate AI agents from natural language. Next.js 15 · TypeScript · TailwindCSS · shadcn-style UI · Lucide · Framer Motion · TanStack Query.

## Quick start

```bash
npm install
npm run dev
# open http://localhost:3000
```

The app runs immediately with **deterministic local data**, so every screen is fully explorable before the backend is connected.

## Connecting the Hermes (FastAPI) backend

Copy `.env.example` to `.env` and point it at your running backend:

```bash
HERMES_API_URL=http://localhost:8000
NEXT_PUBLIC_API_BASE=/hermes
```

Requests are proxied through `/hermes/*` (see `next.config.mjs`) to avoid CORS. When Hermes is reachable, the app uses **live** data automatically; if a request fails at the network level it falls back to local data, while real HTTP errors (4xx/5xx) surface as toasts and error boundaries.

## Wiring the real OpenAPI spec

The Hermes contract lives in exactly **two files** — update these and the whole app re-points:

- `src/lib/api/types.ts` — request/response interfaces (regenerate with `npx openapi-typescript hermes.json -o src/lib/api/types.ts`, or hand-edit)
- `src/lib/api/routes.ts` — endpoint path table

Everything else (hooks, pages, components) consumes only those two modules.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint |

## Structure

```
src/
  app/
    (marketing)/        landing page (hero, features, foundry viz, CTA)
    (app)/              authed console shell (sidebar)
      dashboard/        overview, stats, activity, deployments, quick actions
      agents/new/       Agent Builder (config · memory · tools · live preview)
      skills/new/       Skill Builder (dynamic params · generated code)
      deployments/      Deployment Center (deploy · env · history)
      gateways/new/     Gateway Builder (provider · connection)
      mcp/              MCP Recommendation Center (search · ranked results)
      templates/        Templates Explorer (browse · categories · preview)
      settings/         Preferences · appearance · API · workspace
    fonts/              self-hosted Space Grotesk + JetBrains Mono
  components/
    ui/                 shadcn-style primitives
    layout/             nav, sidebar, footer, logo
    landing/            marketing sections
    shared/             providers, error boundary, spore field, skeletons
  lib/
    api/                types · routes · client · local data
    hooks/              TanStack Query hooks (the data layer)
    validation/         zod schemas
```

## Design

A "molten foundry" aesthetic: obsidian background, ember (amber) primary accent, electric-cyan "plasma" for live states, a drifting spore particle field, glassmorphism panels, and JetBrains Mono as the terminal voice. Dark-mode first, fully responsive, with `prefers-reduced-motion` respected.
