import {
  Boxes,
  Code2,
  FileSearch,
  KanbanSquare,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import Eyebrow from "../Eyebrow";

type Specialist = {
  id: string;
  icon: LucideIcon;
  name: string;
  role: string;
  line: string;
};

const SPECIALISTS: Specialist[] = [
  {
    id: "bria",
    icon: FileSearch,
    name: "Bria",
    role: "Salesforce BA Agent",
    line: "Fuzzy requirement to crisp acceptance criteria.",
  },
  {
    id: "arden",
    icon: Boxes,
    name: "Arden",
    role: "Salesforce Architect Agent",
    line: "Data model, org strategy, scalable solution.",
  },
  {
    id: "devon",
    icon: Code2,
    name: "Devon",
    role: "Salesforce Developer Agent",
    line: "Apex, LWC and Flows — committed to your repo.",
  },
  {
    id: "quinn",
    icon: ShieldCheck,
    name: "Quinn",
    role: "Salesforce QA / Test Agent",
    line: "Tests written, UAT run, sprint signed off.",
  },
  {
    id: "piper",
    icon: KanbanSquare,
    name: "Piper",
    role: "Salesforce PM Agent",
    line: "Sprint run, backlog groomed, team moving.",
  },
];

export default function SpecialistRoster() {
  return (
    <section
      id="specialists"
      data-node-id="5:2754"
      className="relative overflow-hidden bg-line/30 px-6 py-24 md:px-12"
    >
      {/* oversized R watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-28 -left-36 hidden select-none rotate-12 text-[640px] font-black leading-none text-violet/5 lg:block"
      >
        R
      </span>

      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-16">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row">
          <div className="flex max-w-[672px] flex-col gap-[15.5px]">
            <Eyebrow>Specialist roster</Eyebrow>
            <h2 className="text-[32px] font-bold leading-[1.1] text-ink sm:text-[40px] lg:text-[48px] lg:leading-[48px]">
              One specialist per discipline. Not one assistant pretending to
              cover all five.
            </h2>
          </div>
          <p className="max-w-[448px] text-[18px] leading-7 text-ink-soft">
            Each specialist is tuned to one Salesforce discipline and works to
            the standards you attach. Staff the ones your project needs. Every
            plan includes all five.
          </p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {SPECIALISTS.map((s) => {
            const Icon = s.icon;
            return (
              <li
                key={s.id}
                className="flex flex-col rounded-[12px] border border-ink/[0.06] bg-white/70 p-7 shadow-[0_4px_24px_0_rgba(17,17,17,0.04)] backdrop-blur-[10px]"
              >
                <span className="mb-6 grid size-14 place-items-center rounded-[8px] bg-violet/10 text-violet">
                  <Icon size={28} strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="text-[20px] font-bold leading-7 text-ink">
                  {s.name}
                </h3>
                <p className="pb-4 text-[13px] leading-5 text-ink-muted">
                  {s.role}
                </p>
                <p className="mt-auto text-[14px] leading-[22px] text-ink-soft">
                  {s.line}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
