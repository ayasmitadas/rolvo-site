import Eyebrow from "../Eyebrow";

const SPECIALISTS = [
  {
    id: "piper",
    name: "Piper",
    role: "Project Manager",
    points: ["Plans scope & milestones", "Delivery coordination"],
  },
  {
    id: "arden",
    name: "Arden",
    role: "Solution Architect",
    points: ["Defines technical direction", "Metadata architecture"],
  },
  {
    id: "bria",
    name: "Bria",
    role: "Business Analyst",
    points: ["Requirement structuring", "User story mapping"],
  },
  {
    id: "devon",
    name: "Devon",
    role: "Developer",
    points: ["Apex, LWC & Flow", "Meta-data configuration"],
  },
  {
    id: "quinn",
    name: "Quinn",
    role: "Quality Assurance",
    points: ["Test coverage validation", "Release readiness"],
  },
  {
    id: "mira",
    name: "Mira",
    role: "CPQ Specialist",
    points: ["Quote-to-Cash logic", "Revenue Cloud migrations"],
  },
  {
    id: "nova",
    name: "Nova",
    role: "Marketplace Specialist",
    points: ["Community expertise", "External integrations"],
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
              The right specialist for every stage of delivery.
            </h2>
          </div>
          <p className="max-w-[448px] text-[18px] leading-7 text-ink-soft">
            Each specialist is tuned to a specific Salesforce discipline.
            Combine them to form a coordinated delivery team.
          </p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SPECIALISTS.map((s) => (
            <li
              key={s.id}
              className="flex flex-col rounded-[12px] border border-ink/[0.06] bg-white/70 p-[33px] shadow-[0_4px_24px_0_rgba(17,17,17,0.04)] backdrop-blur-[10px]"
            >
              <span className="mb-6 grid size-16 place-items-center rounded-[8px] bg-violet/10 text-violet">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/assets/agent-${s.id}.svg`}
                  alt=""
                  width={32}
                  height={32}
                />
              </span>
              <h3 className="text-[20px] font-bold leading-7 text-ink">
                {s.name}
              </h3>
              <p className="mb-6 text-[14px] leading-5 text-ink-muted">
                {s.role}
              </p>
              <ul className="flex flex-col gap-3">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span
                      aria-hidden
                      className="size-[6px] shrink-0 rounded-full bg-brand"
                    />
                    <span className="text-[12px] leading-4 text-ink-soft">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
