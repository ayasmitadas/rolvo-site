import { Check } from "lucide-react";
import Eyebrow from "../Eyebrow";

const PROOF_POINTS = [
  "Versioned packages, with diff history.",
  "Tests written and run, not promised.",
  "Export to Dev Hub or VS Code.",
];

const AGENTS: { name: string; tone: "violet" | "brand" }[] = [
  { name: "Piper", tone: "violet" },
  { name: "Arden", tone: "violet" },
  { name: "Devon", tone: "brand" },
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
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-16 px-6 md:px-12 lg:gap-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ── Copy column ─────────────────────────────────────── */}
          <div className="flex flex-col gap-4">
            <Eyebrow>Product proof</Eyebrow>
            <h2 className="text-[32px] font-bold leading-[1.1] text-ink sm:text-[40px] lg:text-[48px] lg:leading-[48px]">
              See the work — not just the conversation.
            </h2>
            <p className="max-w-[560px] pt-[15.25px] text-[18px] leading-[29.25px] text-ink-soft">
              Rolvo surfaces the output alongside the reasoning. Every task
              returns a structured package — artifacts, tests, and the
              decisions behind them — that you can hand to a reviewer and read
              line by line.
            </p>
            <ul className="flex flex-col gap-4 pt-4">
              {PROOF_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-4">
                  <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                    <Check size={12} strokeWidth={1.75} aria-hidden />
                  </span>
                  <span className="text-[16px] leading-6 text-ink-soft">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Console mock ────────────────────────────────────── */}
          <div className="relative">
            <div
              aria-hidden
              className="glow -inset-8 opacity-60"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(124,92,255,0.18) 0%, rgba(124,92,255,0) 70%)",
                filter: "blur(50px)",
              }}
            />
            <figure className="relative m-0 overflow-hidden rounded-[12px] border border-ink/[0.06] bg-white/70 shadow-[0_4px_24px_0_rgba(17,17,17,0.04)] backdrop-blur-[10px]">
              <figcaption className="sr-only">
                Example output from the Rolvo console: a task with its assigned
                agents, and illustrative coverage and lint score values.
              </figcaption>

              <div className="flex h-8 items-center gap-2 border-b border-black/[0.05] bg-black/[0.03] px-4">
                <span aria-hidden className="flex items-center gap-2">
                  <span className="size-[10px] rounded-full bg-[rgba(248,113,113,0.6)]" />
                  <span className="size-[10px] rounded-full bg-[rgba(250,204,21,0.6)]" />
                  <span className="size-[10px] rounded-full bg-[rgba(74,222,128,0.6)]" />
                </span>
                <span className="ml-2 text-[11px] font-bold uppercase leading-[16.5px] tracking-[1.1px] text-ink-muted">
                  Example output
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 p-6">
                <div className="col-span-2 flex flex-col gap-2 rounded-[8px] border border-line bg-white p-[17px]">
                  <h3 className="text-[11px] uppercase leading-[16.5px] tracking-[1.1px] text-ink-muted">
                    Assigned agents
                  </h3>
                  <ul className="flex flex-wrap items-start gap-2">
                    {AGENTS.map((agent) => (
                      <li
                        key={agent.name}
                        className={`rounded-[4px] px-3 py-1 text-[12px] font-bold leading-4 ${
                          agent.tone === "violet"
                            ? "bg-violet/10 text-violet"
                            : "bg-brand/10 text-brand-text"
                        }`}
                      >
                        {agent.name}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-2 rounded-[8px] border border-line bg-white p-[17px]">
                  <h3 className="text-[11px] uppercase leading-[16.5px] tracking-[1.1px] text-ink-muted">
                    Coverage
                  </h3>
                  <p className="text-[24px] font-bold leading-8 text-ink">96%</p>
                </div>

                <div className="flex flex-col gap-2 rounded-[8px] border border-line bg-white p-[17px]">
                  <h3 className="text-[11px] uppercase leading-[16.5px] tracking-[1.1px] text-ink-muted">
                    Lint score
                  </h3>
                  <p className="text-[24px] font-bold leading-8 text-ink">A+</p>
                </div>
              </div>
            </figure>
          </div>
        </div>

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
