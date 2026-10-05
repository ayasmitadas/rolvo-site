# Placeholder assets — Pricing Teaser Section (5:3185) & Footer (5:3286)

This sandbox cannot download figma.com assets (egress blocked), so every icon
below is a neutral hand-authored stand-in at the exact size the design
specifies. All use `stroke="currentColor"` so they inherit the colour of their
wrapper. Replace each with the real exported SVG from the Figma file.

| Placeholder file | Figma node id (real asset) | Intended size | Description |
| --- | --- | --- | --- |
| `public/assets/pricing-check.svg` | `5:3209` (also reused at 5:3214, 5:3219, 5:3240, 5:3245, 5:3250, 5:3271, 5:3276, 5:3281 — one shared `b6027.svg`) | 12.25 × 14 px (authored 13 × 14) | Checkmark bullet in front of each plan feature; rendered in `text-brand` orange. |
| `public/assets/footer-linkedin.svg` | `5:3346` | 17.5 × 20 px (authored 18 × 20) | LinkedIn social link icon in the footer utility bar. |
| `public/assets/footer-twitter.svg` | `5:3349` | 20 × 20 px | Twitter/X social link icon in the footer utility bar. |
| `public/assets/footer-youtube.svg` | `5:3352` | 22.5 × 20 px (authored 23 × 20) | YouTube social link icon in the footer utility bar. |

## Not placeholdered here

- Footer Rolvo logo/wordmark — Figma node `7:4833` (groups `7:4834` + `7:4837`,
  129.684 × 54). Rendered with the existing `src/components/Logo.tsx`
  component rather than a new asset, per project convention. `Logo.tsx` is
  itself a placeholder and is tracked in its own file header.
