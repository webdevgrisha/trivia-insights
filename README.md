# TriviaStats (React + TypeScript + Vite)

Small SPA for stats/visualizations using React 19 + Vite 7.  
**Live:** https://webdevgrisha.github.io/trivia-insights/

## Stack

- **React 19**, **TypeScript**, **Vite** (HMR, fast builds)
- **React Router 7** – routing
- **SWR** – data fetching with cache and revalidation
- **Recharts** – charts (pie/bar/etc.)
- **CSS Modules** – scoped component styles
- **classnames** – conditional class names
- ESLint + **typescript-eslint** – type-aware rules

## Why these libs

- **SWR:** cache, request deduplication, focus revalidate; simple `useSWR(key, fetcher)`.
- **CSS Modules:** no global class collisions; import `*.module.css`.
- **Recharts:** declarative charts, responsive, custom tooltips/legends.

## Quick Start

```bash
npm i             # install dependencies
npm run dev       # start dev server
npm run lint      # lint
npm run build     # type-check + production build
npm run preview   # preview built app
npm run deploy    # build + deploy to GitHub Pages
```
