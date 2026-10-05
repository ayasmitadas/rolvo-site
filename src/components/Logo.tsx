import Image from "next/image";

/**
 * INTERIM ASSET — this is the supplied logo as a transparent PNG.
 * The vector original ("Artboard 2.svg") did not come through, so replace
 * public/assets/rolvo-logo.png with the SVG when it arrives. A mono and a
 * reversed version are still needed for dark surfaces. See ASSETS.md.
 *
 * Size it with Tailwind height classes plus w-auto, e.g. `h-6 md:h-7`.
 */
export default function Logo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/assets/rolvo-logo.png"
      alt="Rolvo"
      width={732}
      height={160}
      priority
      className={className}
    />
  );
}
