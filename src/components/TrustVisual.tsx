import { Check, Eye, KeyRound, Lock } from "lucide-react";

const ARTIFACTS = [
  { name: "RenewalNotification.flow-meta.xml", kind: "Flow" },
  { name: "RenewalService.cls", kind: "Apex" },
  { name: "RenewalServiceTest.cls", kind: "Test · 94%" },
];

/**
 * The approval checkpoint, drawn as product UI rather than illustration.
 * Everything here is a token-driven DOM node, so it stays sharp at any size
 * and follows the brand automatically.
 */
export default function TrustVisual() {
  return (
    <figure className="relative m-0 overflow-hidden rounded-[12px] border border-line bg-white shadow-[0_20px_60px_0_rgba(17,17,17,0.08)]">
      {/* title bar */}
      <div className="flex h-9 items-center gap-2 border-b border-black/[0.05] bg-black/[0.03] px-4">
        <span aria-hidden className="flex gap-2">
          <span className="size-[10px] rounded-full bg-[rgba(248,113,113,0.6)]" />
          <span className="size-[10px] rounded-full bg-[rgba(250,204,21,0.6)]" />
          <span className="size-[10px] rounded-full bg-[rgba(74,222,128,0.6)]" />
        </span>
        <span className="ml-2 text-[10px] font-bold uppercase leading-[15px] tracking-[1px] text-ink-muted">
          Task #4471 · Awaiting approval
        </span>
      </div>

      <div className="flex flex-col gap-5 p-6">
        {/* constraints the customer attached */}
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-violet/10 px-3 py-1 text-[12px] font-bold text-violet">
            <Eye size={13} strokeWidth={2} aria-hidden />
            Read-only skill attached
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-violet/10 px-3 py-1 text-[12px] font-bold text-violet">
            <KeyRound size={13} strokeWidth={2} aria-hidden />
            Your key
          </span>
        </div>

        {/* the package */}
        <div className="rounded-[8px] border border-line">
          <p className="border-b border-line px-4 py-2 text-[11px] font-bold uppercase tracking-[1px] text-ink-muted">
            Package contents
          </p>
          <ul>
            {ARTIFACTS.map((a) => (
              <li
                key={a.name}
                className="flex items-center justify-between gap-3 border-b border-line px-4 py-2.5 last:border-0"
              >
                <span className="truncate font-mono text-[12px] text-ink">
                  {a.name}
                </span>
                <span className="shrink-0 text-[11px] text-ink-faint">
                  {a.kind}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* the gate */}
        <div className="rounded-[8px] border border-dashed border-brand/50 bg-brand/[0.04] p-4">
          <p className="flex items-center gap-2 text-[13px] font-bold text-ink">
            <Lock size={14} strokeWidth={2} aria-hidden className="text-brand" />
            Held — nothing deploys until a person approves
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-[6px] bg-brand px-3 py-1.5 text-[12px] font-bold text-ink">
              <Check size={13} strokeWidth={2.5} aria-hidden />
              Approve &amp; deploy
            </span>
            <span className="rounded-[6px] border border-line bg-white px-3 py-1.5 text-[12px] font-bold text-ink">
              Request changes
            </span>
            <span className="ml-auto text-[11px] text-ink-faint">
              Target: Sandbox
            </span>
          </div>
        </div>
      </div>

      <figcaption className="sr-only">
        A completed task held at an approval checkpoint: the attached read-only
        constraint, the package contents, and the approve-or-request-changes
        decision that gates deployment.
      </figcaption>
    </figure>
  );
}
