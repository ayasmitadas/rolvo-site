# Placeholder assets — Control & Governance section (Figma node 5:3103)

The sandbox cannot reach figma.com, so every asset below is a neutral
hand-authored placeholder. Each one needs to be replaced with the real export
from the Figma file `J0XK1xzauPMZy56g9jHnD1`.

| Placeholder file | Figma node id | Intended size | Description |
| --- | --- | --- | --- |
| `public/assets/trust-approval-gates.svg` | `5:3115` | 16 × 16 | Shield-with-check icon for the "The approval gate" pillar. |
| `public/assets/trust-read-only.svg` | *(none — new)* | 16 × 16 | Eye icon for the "Read-only when you say so" pillar. **No Figma node exists for this.** Added during the copy rewrite, when the section moved from an audit-trail claim to the Read-Only Access skill. Needs a designed icon. |
| `public/assets/trust-key.svg` | *(none — new)* | 16 × 16 | Key icon for the "Your model, your key" pillar. **No Figma node exists for this.** Added during the copy rewrite. Needs a designed icon. |
| `public/assets/trust-lock.svg` | `5:3135` | 14 × 16 | Padlock icon, now used for the "Directory controls and audit logs" (Enterprise) pillar. |
| `public/assets/trust-governance-visual.svg` | `5:3144` | 640 × 420 | Stand-in for the raster hero image. The real asset is a PNG, not an SVG — swap the file and the `src` extension together. Note the alt text now describes a single unit of work held at an approval checkpoint; if the final artwork shows something else, update the alt text with it. |

`public/assets/trust-audit-trail.svg` (node `5:3125`, clock-with-rewind-arrow)
is **no longer referenced**. The "Full Audit Trail" pillar it belonged to was
removed: the claim that every decision, edit and handoff is logged could not be
verified, and audit log export is an Enterprise-plan feature rather than a
general product capability. Leave the file in place or drop it — nothing imports
it.

All icons use `stroke="currentColor"`; colour comes from the `text-brand`
wrapper (icons) / `text-ink-faint` (large visual).
