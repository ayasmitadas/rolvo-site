/**
 * PLACEHOLDER — the real Rolvo mark and wordmark are SVGs in the Figma file
 * (node 7:4210, assets fa5a4.svg + ab046.svg). This sandbox is blocked from
 * downloading figma.com assets, so this renders a stand-in at the correct
 * 103×36 footprint. Replace with the exported SVGs — see ASSETS.md.
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-[8px] ${className}`}
      data-node-id="7:4210"
      data-placeholder="logo"
    >
      <span
        aria-hidden
        className="grid h-[28px] w-[28px] place-items-center rounded-[7px] bg-brand text-[16px] font-extrabold leading-none text-white"
      >
        R
      </span>
      <span className="text-[20px] font-extrabold tracking-[-0.5px] text-ink">
        Rolvo
      </span>
    </span>
  );
}
