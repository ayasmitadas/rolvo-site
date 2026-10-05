# Assets

Most icons now come from [Lucide](https://lucide.dev) as React components, so
there is nothing to export for them. They inherit colour from their parent, scale
cleanly, and stay consistent across the site. To change one, edit the import in
the relevant component — there is no file to replace.

Three things still need real artwork.

## 1. The Rolvo logo — real artwork, but raster

`public/assets/rolvo-logo.png` is the supplied horizontal lockup: gradient orange
mark plus black wordmark, transparent background, 732×160 at 4.568:1.
`src/components/Logo.tsx` renders it through `next/image` and is sized with
Tailwind height classes (`h-6 md:h-7` in the header, `h-9` in the footer).

Two things still outstanding:

- **The vector.** "Artboard 2.svg" was attached but only a flattened preview
  reached the build, so this is the PNG. Drop the SVG in over the same path
  (renaming the reference in `Logo.tsx`) when it is available — sharper at any
  size, smaller, and the only way the gradient stays crisp when scaled up.
- **A reversed or mono version.** The wordmark is near-black, so this lockup
  cannot sit on a dark surface. Nothing on the page needs that today, but a
  dark hero section or an email signature would.

## 2. Footer social icons

`footer-linkedin.svg`, `footer-twitter.svg`, `footer-youtube.svg` are my
placeholders. Lucide removed brand icons, and brand marks should come from each
platform's own brand assets rather than being redrawn — so these should be
replaced with the official SVGs from LinkedIn, X and YouTube.

## 3. The Trust section illustration

`trust-governance-visual.svg` is a 640×420 placeholder standing in for Figma node
`5:3144`. It is the one piece of real artwork on the page. When the real export
goes in, check the `alt` text in `Trust.tsx` still describes what it shows.

## Obsolete files

Everything else in `public/assets/` is left over from the hand-authored icon set
and is no longer referenced by any component: the `agent-*`, `step-*`, `icon-*`,
`trust-*` (except the visual above), `selectiva-*`, `market-*`, `playbook-*`,
`pricing-check` and `proof-check` files.

They are harmless and cost nothing. They are deliberately **not** deleted,
because GitHub's web uploader can add and replace files but cannot remove them —
deleting them would mean doing it by hand in GitHub. Clear them out whenever the
project moves to a normal git workflow.
