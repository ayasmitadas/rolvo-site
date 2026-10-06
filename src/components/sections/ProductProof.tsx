import { FileDiff, FlaskConical, Upload, type LucideIcon } from "lucide-react";
import Eyebrow from "../Eyebrow";

const PROOF_POINTS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: FileDiff,
    title: "Versioned packages",
    body: "Every run produces a package with its diff history, so you can see exactly what changed and when.",
  },
  {
    icon: FlaskConical,
    title: "Tests written and run",
    body: "Not promised, not described — written, executed, and returned with the results in the package.",
  },
  {
    icon: Upload,
    title: "Yours to take anywhere",
    body: "Export to Dev Hub or VS Code and carry on in the tooling your team already uses.",
  },
];

const STATS = [
  { value: "6", label: "Delivery stages, every task" },
  { value: "5", label: "Specialists, one per discipline" },
  { value: "7", label: "Preset skills. Write your own, free." },
  { value: "0", label: "Autonomous deployments" },
];

export default function ProductProof() {
  return (
    <section
      id="product-proof"
      data-node-id="5:2884"
      className="relative overflow-hidden border-t border-line bg-paper py-24"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-16 px-6 md:px-12 lg:gap-24">
        <div className="flex max-w-[768px] flex-col gap-4">
          <Eyebrow>Product proof</Eyebrow>
          <h2 className="text-[32px] font-bold leading-[1.1] text-ink sm:text-[40px] lg:text-[48px] lg:leading-[48px]">
            See the work — not just the conversation.
          </h2>
          <p className="text-[18px] leading-[29.25px] text-ink-soft">
            Rolvo surfaces the output alongside the reasoning. Every task
            returns a structured package — artifacts, tests, and the decisions
            behind them — that you can hand to a reviewer and read line by line.
          </p>
        </div>

        <ul className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {PROOF_POINTS.map((p) => {
            const Icon = p.icon;
            return (
              <li
                key={p.title}
                className="flex flex-col gap-3 rounded-[12px] border border-ink/[0.06] bg-white/70 p-6 shadow-[0_4px_24px_0_rgba(17,17,17,0.04)] backdrop-blur-[10px]"
              >
                <span className="grid size-10 place-items-center rounded-full bg-brand/10 text-brand-text">
                  <Icon size={18} strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="text-[18px] font-bold leading-6 text-ink">
                  {p.title}
                </h3>
                <p className="text-[14px] leading-[22.75px] text-ink-muted">
                  {p.body}
                </p>
              </li>
            );
          })}
        </ul>

        {/* ── Stat strip ────────────────────────────────────────── */}
        <ul className="grid gap-8 border-t border-line pt-16 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <li key={stat.label} className="flex flex-col items-center gap-2 text-center lg:items-start lg:text-left">
              <p className="brand-gradient-text text-[36px] font-bold leading-[1.05] sm:text-[40px] lg:text-[48px] lg:leading-[48px]">
                {stat.value}
              </p>
              <p className="text-[14px] leading-5 text-ink-muted">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
