import Eyebrow from "../Eyebrow";

const SKILLS = [
  {
    name: "Read-Only Access",
    line: "Inspect and query only. Never write, deploy or edit.",
  },
  {
    name: "Apex Best Practices",
    line: "Bulkification, governor limits, security, test patterns.",
  },
  {
    name: "LWC Best Practices",
    line: "Structure, reactivity, accessibility, performance.",
  },
  {
    name: "Deployment & Manifest Discipline",
    line: "Dated manifests, validation, and a back-out plan.",
  },
  {
    name: "CPQ → Revenue Cloud Migration",
    line: "Object mapping, sequence, data-quality checklist.",
  },
  {
    name: "Section 508 Accessibility",
    line: "An accessibility gate on any new or changed UI.",
  },
  {
    name: "Fishbone Analysis",
    line: "Structured root-cause analysis for support issues.",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-line bg-line/30 px-6 py-24 md:px-12"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col gap-14">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row">
          <div className="flex max-w-[672px] flex-col gap-4">
            <Eyebrow>Standards</Eyebrow>
            <h2 className="text-[32px] font-bold leading-[1.1] text-ink sm:text-[40px] lg:text-[48px] lg:leading-[48px]">
              Your standards, enforced on every task.
            </h2>
          </div>
          <div className="flex max-w-[448px] flex-col gap-4">
            <p className="text-[18px] leading-7 text-ink-soft">
              Skills are reusable knowledge your agents load before they start
              work — your Apex conventions, your deployment discipline, your
              accessibility gate. Seven ship with Rolvo. Write your own, attach
              them to any workspace, reuse them on every project.
            </p>
            <p className="text-[18px] font-bold leading-7 text-ink">
              You never buy a skill.
            </p>
          </div>
        </div>

        <ul className="grid gap-x-10 gap-y-0 sm:grid-cols-2">
          {SKILLS.map((skill) => (
            <li
              key={skill.name}
              className="flex flex-col gap-1 border-t border-line py-5"
            >
              <h3 className="text-[16px] font-bold leading-6 text-ink">
                {skill.name}
              </h3>
              <p className="text-[14px] leading-[22px] text-ink-muted">
                {skill.line}
              </p>
            </li>
          ))}
          <li className="flex flex-col gap-1 border-t border-line py-5">
            <h3 className="text-[16px] font-bold leading-6 text-brand-text">
              Write your own
            </h3>
            <p className="text-[14px] leading-[22px] text-ink-muted">
              Upload a file or start from a template. Reusable on any project.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
