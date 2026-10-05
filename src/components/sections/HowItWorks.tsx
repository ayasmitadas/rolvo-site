import {
  ClipboardList,
  Code2,
  Network,
  Package,
  Rocket,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import Eyebrow from "../Eyebrow";

type Step = {
  n: string;
  icon: LucideIcon;
  title: string;
  body: string;
};

const STEPS: Step[] = [
  {
    n: "01",
    icon: ClipboardList,
    title: "Assign",
    body: "Describe the Salesforce requirement and target environment in the console.",
  },
  {
    n: "02",
    icon: Network,
    title: "Plan",
    body: "Rolvo's PM, BA and architecture specialists define and decompose the work.",
  },
  {
    n: "03",
    icon: Code2,
    title: "Build",
    body: "Implementation specialists produce metadata, configuration, and code.",
  },
  {
    n: "04",
    icon: ShieldCheck,
    title: "Review",
    body: "QA agents validate requirements, tests and package completeness.",
  },
  {
    n: "05",
    icon: Package,
    title: "Package",
    body: "Rolvo assembles a reviewable, compiled unit of work ready for inspection.",
  },
  {
    n: "06",
    icon: Rocket,
    title: "Deploy",
    body: "Send the approved package to the selected Salesforce environment.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      data-node-id="5:2668"
      className="relative overflow-hidden bg-paper pb-24 pt-14 lg:pb-32"
    >
      <div
        aria-hidden
        className="glow left-1/2 top-1/3 h-[360px] w-[800px] -translate-x-1/2 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse, rgba(124,92,255,0.18) 0%, rgba(124,92,255,0) 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-16 px-6 md:px-12 lg:gap-24">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="flex max-w-[768px] flex-col gap-[14.9px]">
            <Eyebrow>The delivery pipeline</Eyebrow>
            <h2 className="text-[40px] font-extrabold leading-[1.04] tracking-[-1.5px] text-ink sm:text-[56px] sm:tracking-[-2.2px] lg:text-[72px] lg:leading-[64.8px] lg:tracking-[-2.88px]">
              From requirement to deployable package.
            </h2>
          </div>
          <p className="brand-gradient-text max-w-[320px] text-[18px] font-bold italic leading-[28px] lg:text-right">
            One task. One verified package. One clear deployment path.
          </p>
        </div>

        <div className="relative">
          {/* connecting rail — desktop only */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[44px] hidden h-[2px] overflow-hidden rounded-full bg-line lg:block"
          >
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, var(--color-violet), var(--color-brand))",
              }}
            />
          </div>

          <ol className="relative grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-6 lg:gap-4">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <li key={step.n} className="flex flex-col items-start">
                  <span className="relative mb-5 grid size-[64px] lg:mb-8 lg:size-[80px] shrink-0 place-items-center rounded-full border border-ink/[0.06] bg-white/70 text-ink shadow-[0_4px_24px_0_rgba(17,17,17,0.04)] backdrop-blur-[10px]">
                    <Icon size={24} strokeWidth={1.75} aria-hidden />
                    <span className="absolute -right-3 -top-3 grid size-8 place-items-center rounded-full bg-brand text-[10px] font-bold leading-[15px] text-ink">
                      {step.n}
                    </span>
                  </span>
                  <h3 className="pb-3 text-[20px] font-bold leading-7 text-ink">
                    {step.title}
                  </h3>
                  <p className="max-w-[200px] text-[14px] leading-[22.75px] text-ink-muted">
                    {step.body}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
