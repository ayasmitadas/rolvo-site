# Rolvo — marketing site

One-page marketing site for Rolvo, a Selectiva product, built from the Figma
design `J0XK1xzauPMZy56g9jHnD1` (frame "Version 1", node `5:2515`).

Next.js 16 (App Router) · Tailwind CSS v4 · TypeScript · DM Sans (self-hosted via
`@fontsource-variable/dm-sans`).

## Running locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Deploying to Vercel

No GitHub account or connector is required. From this folder:

```bash
npm install
npx vercel          # preview deploy — prompts you to sign in the first time
npx vercel --prod   # production deploy
```

Vercel detects Next.js automatically — no build settings, environment variables or
overrides are needed. Re-run `npx vercel --prod` to publish later changes.

A git repository with the initial commit is already included, so you can
`git remote add origin <url>` and push whenever you want to. Connecting that repo
in Vercel afterwards adds auto-redeploy on push without losing the deployment.

## Structure

```
src/app/globals.css          design tokens (@theme) — colours, fonts
src/app/layout.tsx           root layout, metadata
src/app/page.tsx             section composition, in design order
src/components/              SubNav, SiteFooter, Logo, Eyebrow
src/components/sections/     one component per Figma section
public/assets/               icons — all placeholders, see ASSETS.md
docs/assets-*.md             per-section asset provenance
```

Each component carries the `data-node-id` of the Figma node it implements, so any
element on the page can be traced back to the design.

## Before this goes public

Three things are deliberately unresolved and need a decision — see the project's
critique document for the reasoning:

1. **Assets are placeholders.** Every icon is a stand-in. `ASSETS.md` lists what to
   export and where it goes.
2. **Several figures are unverified.** The Product Proof stats (`100%`
   audit-trail traceability, `<5min` requirement-to-package), the console readouts
   (`96%` coverage, `A+` lint score) and the Pricing figures are not sourced. The
   pricing section says so itself — "Plans pending final client confirmation" —
   while stating firm monthly prices beside it.
3. **Known contrast failures.** The brand orange `#ff5a00` is used for white-on-
   orange buttons and some small text, which does not reach WCAG AA. The token
   `--color-brand-text` (`#c43a00`) exists as the accessible counterpart but was
   not substituted, because the brief was to build the design as drawn and flag
   divergences rather than silently correct them.
