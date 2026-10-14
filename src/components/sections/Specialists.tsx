"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Eyebrow from "../Eyebrow";
import Reveal from "../motion/Reveal";

const AGENTS = [
  {
    n: "01",
    discipline: "Business analysis",
    name: "Bria",
    role: "Salesforce BA Agent",
    body: "From a fuzzy requirement to crisp acceptance criteria. Bria makes sure the team is building the right thing.",
  },
  {
    n: "02",
    discipline: "Architecture",
    name: "Arden",
    role: "Architect Agent",
    body: "Data model, org strategy and scalable solution design. Arden gives the implementation a solid foundation.",
  },
  {
    n: "03",
    discipline: "Development",
    name: "Devon",
    role: "Developer Agent",
    body: "Apex, LWC and Flows, committed to your repo. Devon builds to the conventions your team already uses.",
  },
  {
    n: "04",
    discipline: "Quality",
    name: "Quinn",
    role: "QA / Test Agent",
    body: "Tests written, UAT run and the sprint signed off. Quinn checks the delivered work against your requirements.",
  },
  {
    n: "05",
    discipline: "Delivery",
    name: "Piper",
    role: "Project Manager Agent",
    body: "Sprint run, backlog groomed and team moving. Piper keeps the work organized across the delivery pipeline.",
  },
];

export default function Specialists() {
  const [open, setOpen] = useState(0);

  return (
    <section id="specialists" className="border-b border-line bg-paper py-20 lg:py-28">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-6 md:px-12 lg:gap-16">
        <Reveal className="flex max-w-[768px] flex-col gap-4">
          <Eyebrow>Meet your specialists</Eyebrow>
          <h2 className="text-[32px] font-extrabold leading-[1.06] tracking-[-0.8px] text-ink sm:text-[42px] lg:text-[52px] lg:leading-[53px] lg:tracking-[-1.3px]">
            Five disciplines. One delivery team.
          </h2>
          <p className="text-[18px] leading-[29.25px] text-ink-soft">
            Each agent is tuned to one Salesforce discipline. Select a
            specialist to see where they fit. Personal includes one agent. Pro,
            Business and Enterprise include all agents.
          </p>
        </Reveal>

        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {AGENTS.map((a, i) => {
            const on = i === open;
            return (
              <Reveal as="li" key={a.name} delay={i * 70}>
                <button
                  type="button"
                  onMouseEnter={() => setOpen(i)}
                  onFocus={() => setOpen(i)}
                  onClick={() => setOpen(i)}
                  aria-pressed={on}
                  className={`card-hover flex h-full w-full flex-col items-start gap-3 rounded-[12px] border p-6 text-left ${
                    on ? "border-brand-edge bg-card" : "border-line bg-card"
                  }`}
                >
                  <span className="flex w-full items-center justify-between gap-2">
                    <span
                      className={`text-[11px] font-bold uppercase leading-[16.5px] tracking-[1.1px] ${
                        on ? "text-brand-text" : "text-ink-muted"
                      }`}
                    >
                      {a.n} / {a.discipline}
                    </span>
                    <ArrowUpRight
                      size={14}
                      strokeWidth={2}
                      aria-hidden
                      className={`transition-transform duration-200 ${
                        on ? "translate-x-0.5 -translate-y-0.5 text-brand" : "text-ink-faint"
                      }`}
                    />
                  </span>
                  <span className="text-[24px] font-bold leading-8 text-ink">{a.name}</span>
                  <span className="text-[11px] font-bold uppercase leading-[16.5px] tracking-[1.1px] text-ink-muted">
                    {a.role}
                  </span>
                  <span className="text-[14px] leading-[22.75px] text-ink-soft">{a.body}</span>
                </button>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
