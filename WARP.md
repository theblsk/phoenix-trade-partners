# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Project overview
- Stack: Next.js 15 (App Router) + React 19 + TypeScript, ESLint (flat config), Tailwind CSS v4 via PostCSS plugin
- Entry: src/app/page.tsx with global layout and metadata in src/app/layout.tsx
- Styling: Tailwind utilities imported in src/app/globals.css (using @tailwindcss/postcss); custom CSS variables and small utility classes
- Assets: public/ contains images (logo.webp, hero-bg.webp, etc.) referenced by components
- Path aliases: tsconfig.json maps @/* to ./src/*

Commands (Bun)
- Install dependencies
  - bun install
- Start dev server (http://localhost:3000)
  - bun run dev
- Production build
  - bun run build
- Start production server (after build)
  - bun run start
- Lint the codebase (ESLint flat config)
  - bun run lint
- Lint a single file or directory
  - bunx eslint src/app/components/Header.tsx
  - bunx eslint src/app
- Type-check (no emit)
  - bunx tsc --noEmit

Notes
- No test framework is configured in this repo. If tests are added later (e.g., Vitest/Jest/Playwright), add scripts to package.json and update this file with how to run a single test.
- ESLint uses next/core-web-vitals and next/typescript presets via FlatCompat (see eslint.config.mjs). Common build artifacts (.next, out) are ignored for linting.
- Tailwind v4 is wired through PostCSS only (postcss.config.mjs) and imported once in src/app/globals.css; there is no tailwind.config.* file by default.

High-level architecture
- App Router (Next.js 15)
  - src/app/layout.tsx defines global fonts (Cinzel and Crimson Text via next/font/google), metadata (title, description, Open Graph), and theme color
  - src/app/page.tsx composes the homepage using presentational components
- UI Components (presentational, no server actions)
  - src/app/components/Header.tsx: top nav and branding
  - src/app/components/Hero.tsx: hero section with layered background and calls to action
  - src/app/components/Services.tsx: three-card services grid
  - src/app/components/AboutValues.tsx: company focus and value props
  - src/app/components/Contact.tsx: contact CTA with mailto/tel and external links
  - src/app/components/SiteFooter.tsx: footer with dynamic year and basic links
- Styling and theming
  - src/app/globals.css defines CSS variables for colors and fonts; Tailwind utilities are available globally
  - Minor custom utilities (e.g., .grain, .text-balance) mirror the design language used in components
- Configuration
  - next.config.ts is minimal; defaults apply
  - tsconfig.json sets strict TypeScript options, bundler moduleResolution, and the @/* path alias to src/*
  - eslint.config.mjs enables Next.js recommended rules and ignores build artifacts
  - postcss.config.mjs enables @tailwindcss/postcss

How to work on common tasks
- Edit the homepage content/sections
  - Modify or extend components in src/app/components and recompose them in src/app/page.tsx
- Add a new route/page
  - Create a new folder under src/app/<route>/page.tsx (App Router conventions)
- Add images/assets
  - Place files in public/ and reference them via /filename.ext or next/image where appropriate
- Use path aliases
  - Import internal modules with @/..., which resolves to src/ (e.g., import Foo from "@/app/components/Foo")

Deployment
- The repository layout matches a standard Next.js deployment; README references Vercel as a typical target. If deploying to Vercel, use defaults unless custom build settings are required.

Sourced from this repo
- package.json scripts (dev, build, start, lint)
- README.md (dev server and editing entrypoint)
- next.config.ts, tsconfig.json, eslint.config.mjs, postcss.config.mjs, and files under src/app

