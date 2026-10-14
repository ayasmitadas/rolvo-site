"use client";

import { useEffect, useRef, useState } from "react";
import Eyebrow from "../Eyebrow";
import Reveal from "../motion/Reveal";

type Stage = {
  n: string;
  key: string;
  heading: string[];
  body: string;
  badge: string;
  actor: string;
};

const STAGES: Stage[] = [
  {
    n: "01",
    key: "Assign",
    heading: ["Start with the work", "you need done."],
    body: "Describe your Salesforce requirement and target environment. Rolvo works from your org context, not a blank page.",
    badge: "YOU",
    actor: "Your requirement · Your org",
  },
  {
    n: "02",
    key: "Plan",
    heading: ["Get the brief right.", "Then build."],
    body: "Piper, Bria and Arden break the request into scoped work, acceptance criteria and a solution architecture.",
    badge: "B",
    actor: "Bria + Arden + Piper",
  },
  {
    n: "03",
    key: "Build",
    heading: ["Specialists turn", "intent into implementation."],
    body: "Devon produces the Apex, LWC, Flow metadata and configuration your task needs, following the standards you attach.",
    badge: "D",
    actor: "Devon · Developer",
  },
  {
    n: "04",
    key: "Review",
    heading: ["Quality is a stage.", "Not an afterthought."],
    body: "Quinn validates the requirements, tests and package completeness. The results come back with the work.",
    badge: "Q",
    actor: "Quinn · QA & Test",
  },
  {
    n: "05",
    key: "Package",
    heading: ["Everything a reviewer", "needs, together."],
    body: "Inspect the artifacts, tests and decisions in one versioned package. Export to Dev Hub or VS Code and keep working in your tools.",
    badge: "R",
    actor: "Structured output · Full traceability",
  },
  {
    n: "06",
    key: "Deploy",
    heading: ["Deployed to your org.", "Tracked in Git."],
    body: "Rolvo deploys the completed work to your selected Salesforce environment. Code changes and deployment logs are kept in Git, so you can see what changed and follow each delivery.",
    badge: "R",
    actor: "Changes + logs · Saved in Git",
  },
];

/* What the explorer shows at each stage. */
const PANES: { rows: [string, string][]; note?: string }[] = [
  {
    rows: [
      ["Target org", "UAT Sandbox"],
      ["Delivery type", "Salesforce Flow"],
      ["Org context", "ATTACHED"],
    ],
  },
  {
    rows: [
      ["Scoped stories", "3"],
      ["Acceptance criteria", "7"],
      ["Architecture", "RECORD-TRIGGERED"],
    ],
  },
  {
    rows: [
      ["Flow metadata", "RenewalNotification"],
      ["Apex service", "RenewalService.cls"],
      ["Standards", "FROM YOUR REPO"],
    ],
  },
  {
    rows: [
      ["Scenarios passed", "4 of 4"],
      ["Requirements met", "7 of 7"],
      ["Package", "COMPLETE"],
    ],
  },
  {
    rows: [
      ["Artifacts", "3 files"],
      ["Version", "v1 · diffable"],
      ["Export", "DEV HUB / VS CODE"],
    ],
  },
  {
    rows: [
      ["Environment", "UAT Sandbox"],
      ["Commit", "a9f2c41"],
      ["Deployment log", "SAVED IN GIT"],
    ],
    note: "Illustrative demo · No live org connected.",
  },
];

export default function Pipeline() {
  const [active, setActive] = useState(0);
  const stageRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const els = stageRefs.current.filter(Boolean) as HTMLLIElement[];
    if (!els.length) return;

    // Whichever stage is nearest the upper third of the viewport wins.
    let frame = 0;
    const pick = () => {
      frame = 0;
      const line = window.innerHeight * 0.38;
      let best = 0;
      let bestDist = Infinity;
      els.forEach((el, i) => {
        const r = el.getBoundingClientRect();
        const d = Math.abs(r.top + r.height / 2 - line);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      setActive(best);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(pick);
    };
    pick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const stage = STAGES[active];
  const pane = PANES[active];

  return (
    <section
      id="how-it-works"
      className="on-dark grid-texture relative overflow-hidden py-20 lg:py-28"
    >
      <div className="relative mx-auto w-full max-w-[1440px] px-6 md:px-12">
        <Reveal className="flex max-w-[768px] flex-col gap-4">
          <Eyebrow>The delivery pipeline</Eyebrow>
          <h2 className="text-[32px] font-extrabold leading-[1.06] tracking-[-0.8px] text-ink sm:text-[42px] lg:text-[52px] lg:leading-[53px] lg:tracking-[-1.3px]">
            A requirement goes in. A real package comes out.
          </h2>
          <p className="text-[18px] leading-[29.25px] text-ink-soft">
            Follow one renewal Flow through the six delivery stages. Scroll to
            advance, or select a stage in the preview.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          {/* ── stages ─────────────────────────────────────── */}
          <ol className="relative flex flex-col gap-10 lg:col-span-6 lg:gap-24">
            {/* rail */}
            <div
              aria-hidden
              className="absolute bottom-0 left-[15px] top-2 hidden w-[2px] overflow-hidden rounded-full bg-line lg:block"
            >
              <div
                className="stage-rail-fill h-full w-full bg-brand"
                style={{ transform: `scaleY(${(active + 1) / STAGES.length})` }}
              />
            </div>

            {STAGES.map((s, i) => {
              const on = i === active;
              return (
                <li
                  key={s.key}
                  ref={(el) => {
                    stageRefs.current[i] = el;
                  }}
                  className="relative lg:pl-14"
                >
                  <span
                    aria-hidden
                    className={`absolute left-0 top-1 hidden size-8 place-items-center rounded-full border text-[11px] font-bold transition-colors duration-300 lg:grid ${
                      on
                        ? "border-brand bg-brand text-white"
                        : "border-line bg-paper text-ink-muted"
                    }`}
                  >
                    {s.n}
                  </span>

                  <p
                    className={`text-[13px] font-bold uppercase leading-[19.5px] tracking-[1.3px] transition-colors duration-300 ${
                      on ? "text-brand" : "text-ink-muted"
                    }`}
                  >
                    {s.n} / {s.key}
                  </p>
                  <h3
                    className={`pt-3 text-[24px] font-bold leading-[1.2] transition-colors duration-300 sm:text-[28px] ${
                      on ? "text-ink" : "text-ink-soft"
                    }`}
                  >
                    {s.heading[0]}
                    <br />
                    {s.heading[1]}
                  </h3>
                  <p className="max-w-[460px] pt-3 text-[15px] leading-[24px] text-ink-soft">
                    {s.body}
                  </p>
                  <p className="flex items-center gap-2 pt-4">
                    <span
                      className={`grid size-6 place-items-center rounded-[4px] text-[11px] font-bold transition-colors duration-300 ${
                        on ? "bg-brand text-white" : "bg-white/10 text-ink-soft"
                      }`}
                      aria-hidden
                    >
                      {s.badge}
                    </span>
                    <span className="text-[12px] leading-[18px] text-ink-muted">
                      {s.actor}
                    </span>
                  </p>
                </li>
              );
            })}
          </ol>

          {/* ── explorer ───────────────────────────────────── */}
          <div className="lg:col-span-6">
            <div className="lg:sticky lg:top-[104px]">
              <div className="overflow-hidden rounded-[12px] border border-line bg-card shadow-panel">
                <div className="flex h-9 items-center gap-2 border-b border-line bg-raise px-4">
                  <span className="size-[10px] rounded-full bg-line-strong" aria-hidden />
                  <span className="size-[10px] rounded-full bg-line-strong" aria-hidden />
                  <span className="size-[10px] rounded-full bg-line-strong" aria-hidden />
                  <span className="ml-3 truncate text-[10px] font-bold uppercase leading-[15px] tracking-[1px] text-ink-muted">
                    Rolvo / Delivery Explorer
                  </span>
                  <span className="ml-auto shrink-0 text-[10px] font-bold uppercase leading-[15px] tracking-[1px] text-ink-muted">
                    Illustrative demo
                  </span>
                </div>

                <div className="flex flex-col gap-4 p-6">
                  <div>
                    <p className="text-[10px] font-bold uppercase leading-[15px] tracking-[1px] text-ink-muted">
                      Task #4471 · New requirement
                    </p>
                    <h4 className="pt-2 text-[18px] font-bold leading-[26px] text-ink">
                      Build a renewal notification Flow.
                    </h4>
                    <p className="pt-2 text-[13px] leading-[20px] text-ink-soft">
                      When an Opportunity enters Renewal, email the Account
                      Owner and create a follow-up Task due in 7 days.
                    </p>
                  </div>

                  <dl key={active} className="stage-pane flex flex-col gap-2">
                    {pane.rows.map(([k, v]) => (
                      <div
                        key={k}
                        className="flex items-center justify-between gap-3 rounded-[8px] border border-line bg-raise px-4 py-3"
                      >
                        <dt className="text-[12px] leading-[18px] text-ink-muted">{k}</dt>
                        <dd className="text-[12px] font-bold leading-[18px] text-ink">{v}</dd>
                      </div>
                    ))}
                  </dl>

                  {pane.note ? (
                    <p className="text-[11px] leading-[16px] text-ink-muted">{pane.note}</p>
                  ) : null}

                  {/* stage selector */}
                  <div className="flex flex-wrap gap-2 border-t border-line pt-4">
                    {STAGES.map((s, i) => (
                      <button
                        key={s.key}
                        type="button"
                        onClick={() => {
                          setActive(i);
                          stageRefs.current[i]?.scrollIntoView({
                            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                              ? "auto"
                              : "smooth",
                            block: "center",
                          });
                        }}
                        aria-current={i === active}
                        className={`btn-press rounded-[4px] px-3 py-1 text-[11px] font-bold uppercase leading-4 tracking-[1px] ${
                          i === active
                            ? "bg-brand text-white"
                            : "bg-white/10 text-ink-soft hover:bg-white/15"
                        }`}
                      >
                        {s.key}
                      </button>
                    ))}
                  </div>

                  <p className="text-[10px] font-bold uppercase leading-[15px] tracking-[1px] text-brand">
                    {stage.n} / 06 · {stage.key}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
