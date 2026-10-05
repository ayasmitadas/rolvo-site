import Link from "next/link";
import {
  ArrowRight,
  Code2,
  FileText,
  Package,
  type LucideIcon,
} from "lucide-react";

type Step = {
  icon: LucideIcon;
  tint: "violet" | "brand";
  label: string;
  value: string;
};

const PIPELINE: Step[] = [
  { icon: FileText, tint: "violet", label: "Requirement", value: "Parsed" },
  { icon: Code2, tint: "violet", label: "Devon", value: "Flow Built" },
  { icon: Package, tint: "brand", label: "Package", value: "Compiled" },
];

const CODE = [
  { text: 'flow "Renewal_Notification" {', accent: true, indent: false },
  { text: "trigger: Opportunity.StageChange", accent: false, indent: true },
  { text: 'condition: Stage == "Renewal"', accent: false, indent: true },
  { text: "action: sendEmail(AccountOwner)", accent: false, indent: true },
  { text: "}", accent: true, indent: false },
];

export default function Hero() {
  return (
    <section
      id="overview"
      data-node-id="5:2539"
      className="relative overflow-hidden bg-paper"
    >
      {/* ambient glows */}
      <div
        aria-hidden
        className="glow -left-[10%] -top-[10%] h-[600px] w-[600px] opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(124,92,255,0.18) 0%, rgba(124,92,255,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="glow -bottom-[20%] right-[5%] h-[500px] w-[500px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,90,0,0.16) 0%, rgba(255,90,0,0) 70%)",
        }}
      />

      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center gap-12 px-6 py-16 md:px-12 lg:flex-row lg:gap-16 lg:py-24">
        {/* ── left column ───────────────────────────────── */}
        <div className="flex w-full flex-col items-start gap-[30.7px] lg:w-auto lg:flex-1">
          <span
            data-node-id="5:2547"
            className="inline-flex items-center gap-2 rounded-full border border-ink/[0.06] bg-white/70 px-[13px] py-[5px] shadow-[0_4px_24px_0_rgba(17,17,17,0.04)] backdrop-blur-[10px]"
          >
            <span className="size-[6px] rounded-full bg-violet" aria-hidden />
            <span className="text-[11px] font-bold uppercase leading-[16.5px] tracking-[1.1px] text-violet">
              Rolvo · a Selectiva product
            </span>
          </span>

          <h1
            data-node-id="5:2550"
            className="text-[44px] font-extrabold leading-[1.04] tracking-[-1.6px] text-ink sm:text-[56px] sm:tracking-[-2.2px] lg:text-[72px] lg:leading-[64.8px] lg:tracking-[-2.88px]"
          >
            Every Salesforce task comes back{" "}
            {/* each line carries its own violet→orange ramp, as in the design */}
            <span className="brand-gradient-text block">deployment-</span>
            <span className="brand-gradient-text block">ready.</span>
          </h1>

          <p
            data-node-id="5:2553"
            className="max-w-[576px] text-[17px] font-medium leading-[28px] text-ink-soft sm:text-[20px] sm:leading-[32.5px]"
          >
            Assign the work. Five specialists plan, build, test and package it.
            You bring your own model — we never charge for tokens.
          </p>

          <p className="text-[16px] font-bold leading-[26px] text-ink">
            A delivery team that ships. Not a chatbot that advises.
          </p>

          <div className="flex w-full flex-col items-stretch gap-3 pt-[9.3px] sm:w-auto sm:flex-row sm:gap-4">
            <Link
              href="#launch"
              className="group inline-flex items-center justify-center gap-2 rounded-[6px] bg-brand px-8 py-4 text-[16px] font-bold leading-6 text-ink shadow-[0_10px_15px_rgba(255,90,0,0.25)] transition-opacity hover:opacity-90"
            >
              Get started free
              <ArrowRight
                size={16}
                strokeWidth={2}
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              href="#contact"
              className="rounded-[6px] border border-ink/[0.06] bg-white/70 px-[33px] py-[17px] text-center text-[16px] font-bold leading-6 text-ink shadow-[0_4px_24px_0_rgba(17,17,17,0.04)] backdrop-blur-[10px] transition-colors hover:bg-white"
            >
              Book a demo
            </Link>
          </div>
        </div>

        {/* ── right column: console ─────────────────────── */}
        <div className="relative w-full lg:w-[638px] lg:shrink-0">
          <div
            aria-hidden
            className="glow -inset-10 opacity-70"
            style={{
              background:
                "radial-gradient(circle, rgba(124,92,255,0.18) 0%, rgba(124,92,255,0) 70%)",
              filter: "blur(50px)",
            }}
          />
          <div
            data-node-id="5:2566"
            className="relative overflow-hidden rounded-[12px] border border-ink/[0.06] bg-white/70 shadow-[0_4px_24px_0_rgba(17,17,17,0.04)] backdrop-blur-[10px]"
          >
            {/* title bar */}
            <div className="flex h-8 items-center gap-2 border-b border-black/[0.05] bg-black/[0.03] px-4">
              <span className="size-[10px] rounded-full bg-[rgba(248,113,113,0.6)]" />
              <span className="size-[10px] rounded-full bg-[rgba(250,204,21,0.6)]" />
              <span className="size-[10px] rounded-full bg-[rgba(74,222,128,0.6)]" />
              <span className="ml-2 truncate text-[10px] font-bold uppercase leading-[15px] tracking-[1px] text-ink-muted">
                Rolvo Console — Output Explorer
              </span>
            </div>

            <div className="flex flex-col gap-4 p-6">
              <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                <span className="text-[12px] font-bold uppercase leading-4 tracking-[1.2px] text-ink-muted">
                  Task #4471 · Renewal Flow
                </span>
                <span className="shrink-0 rounded-[4px] bg-brand/10 px-2 py-1 text-[10px] font-bold uppercase leading-[15px] text-brand-text">
                  Deployment ready
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {PIPELINE.map((step) => (
                  <div
                    key={step.label}
                    className="rounded-[8px] border border-line bg-white p-[17px]"
                  >
                    <span
                      className={`grid size-8 place-items-center rounded-full ${
                        step.tint === "violet" ? "bg-violet/10 text-violet" : "bg-brand/10 text-brand-text"
                      }`}
                    >
                      <step.icon size={16} strokeWidth={1.75} aria-hidden />
                    </span>
                    <p className="pt-3 text-[11px] leading-[16.5px] text-ink-muted">
                      {step.label}
                    </p>
                    <p className="text-[14px] font-bold leading-5 text-ink">
                      {step.value}
                    </p>
                  </div>
                ))}
              </div>

              <pre className="overflow-x-auto rounded-[8px] border border-line bg-ink px-[17px] py-4 font-mono text-[11px] leading-[17.88px]">
                {CODE.map((line) => (
                  <div
                    key={line.text}
                    className={`${line.indent ? "pl-4" : ""} ${
                      line.accent ? "text-violet" : "text-ink-faint"
                    }`}
                  >
                    {line.text}
                  </div>
                ))}
              </pre>

              <div
                className="h-[6px] w-full overflow-hidden rounded-full bg-line"
                role="progressbar"
                aria-valuenow={92}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Task completion"
              >
                <div
                  className="h-full w-[92%]"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, var(--color-violet), var(--color-brand))",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
