# Asset replacement list

Every SVG in `public/assets/` is a **temporary placeholder**. The build environment
could not download the real exports from Figma — `figma.com` is blocked by the
sandbox egress policy — so each icon was authored as a neutral stand-in at the
dimensions the design specifies.

To finish the build: export each asset from the Figma file
(`J0XK1xzauPMZy56g9jHnD1`) as **SVG**, and overwrite the file of the same name in
`public/assets/`. Keep the filenames exactly as they are — the components
reference them by path. Nothing in the code needs changing.

Per-section detail, including the Figma node id behind each placeholder, is in
`docs/assets-*.md`.

## Logo — highest priority

| File | Figma node | Notes |
| --- | --- | --- |
| *(none yet)* | `7:4210` | The Rolvo mark + wordmark. Currently rendered as a text stand-in by `src/components/Logo.tsx` — an orange rounded square with an "R" plus the word "Rolvo". Replace that component's contents with the two exported SVGs (`fa5a4.svg` mark, `ab046.svg` wordmark) at 103×36. The footer uses the same component and needs it at 129.68×54, so give `Logo` a size prop at that point. |

## Hero and pipeline

| File | Size | Used by |
| --- | --- | --- |
| `icon-requirement.svg` | 9×12 | Hero console — "Requirement / Parsed" card |
| `icon-code.svg` | 15×12 | Hero console — "Devon / Flow Built" card |
| `icon-package.svg` | 11×12 | Hero console — "Package / Compiled" card |
| `icon-arrow-right.svg` | 13×14 | Hero — "Book a deep dive" link |
| `step-assign.svg` … `step-deploy.svg` (6) | 24×24 | How It Works — the six pipeline steps |

## Specialists

`agent-piper.svg`, `agent-arden.svg`, `agent-bria.svg`, `agent-devon.svg`,
`agent-quinn.svg`, `agent-mira.svg`, `agent-nova.svg` — all 32×32, one per
specialist card.

## Remaining sections

| File | Size | Section |
| --- | --- | --- |
| `proof-check.svg` | 10.5×12 | Product Proof — list bullets |
| `playbook-cpq.svg`, `playbook-dunning.svg` | 30×30 | Playbooks — card icons |
| `playbook-arrow.svg` | 14×16 | Playbooks — "Run Playbook" links |
| `market-cpq.svg`, `market-service.svg`, `market-analytics.svg`, `market-integration.svg` | 12–20×16 | Marketplace — listing tiles |
| `trust-approval-gates.svg`, `trust-audit-trail.svg` | 16×16 | Trust — pillar icons |
| `trust-lock.svg` | 14×16 | Trust — pillar icon |
| `trust-governance-visual.svg` | 640×420 | Trust — the large right-hand visual |
| `selectiva-handoff.svg` | 45×36 | Selectiva — card icon |
| `selectiva-chip.svg`, `selectiva-badge.svg` | 36×36 | Selectiva — card icons |
| `pricing-check.svg` | 13×14 | Pricing — feature ticks |
| `footer-linkedin.svg`, `footer-twitter.svg`, `footer-youtube.svg` | ~20×20 | Footer — social links |

One note on `selectiva-badge.svg` (node `5:3177`): that node renders in Figma as a
dashed circle containing a question mark, which looks like an unresolved glyph
rather than finished artwork. Worth checking what was intended before exporting —
and if it is meant to be a compliance badge, it needs sign-off first.
