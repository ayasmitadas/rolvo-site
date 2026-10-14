import Link from "next/link";
import { ArrowUpRight, FileCode2, GitCommitHorizontal } from "lucide-react";
import Eyebrow from "../Eyebrow";
import Reveal from "../motion/Reveal";

const FILES = [
  { name: "RenewalNotification.flow-meta.xml", kind: "Flow" },
  { name: "RenewalService.cls", kind: "Apex" },
  { name: "RenewalServiceTest.cls", kind: "Test" },
];

export default function Governance() {
  return (
    <section
      id="governance"
      className="on-dark grid-texture relative overflow-hidden py-20 lg:py-28"
    >
      <div className="relative mx-auto grid w-full max-w-[1440px] gap-12 px-6 md:px-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal className="flex flex-col gap-4">
          <Eyebrow>Control &amp; governance</Eyebrow>
          <h2 className="text-[32px] font-extrabold leading-[1.06] tracking-[-0.8px] text-ink sm:text-[42px] lg:text-[52px] lg:leading-[53px] lg:tracking-[-1.3px]">
            Work moves forward. History stays in Git.
          </h2>
          <p className="max-w-[560px] text-[18px] leading-[29.25px] text-ink-soft">
            Rolvo deploys to your selected Salesforce environment and keeps code
            changes and deployment logs in Git. Follow each delivery, inspect
            the changes and revisit the history in your repository.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="overflow-hidden rounded-[12px] border border-line bg-card shadow-panel">
            <div className="flex h-9 items-center gap-2 border-b border-line bg-raise px-4">
              <span className="size-[10px] rounded-full bg-line-strong" aria-hidden />
              <span className="size-[10px] rounded-full bg-line-strong" aria-hidden />
              <span className="size-[10px] rounded-full bg-line-strong" aria-hidden />
              <span className="ml-3 truncate text-[10px] font-bold uppercase leading-[15px] tracking-[1px] text-ink-muted">
                Sample deployment record
              </span>
            </div>

            <div className="flex flex-col gap-4 p-6">
              <h3 className="text-[16px] font-bold leading-6 text-ink">
                Renewal notification package
              </h3>

              <ul className="flex flex-col rounded-[8px] border border-line bg-raise">
                {FILES.map((f, i) => (
                  <li
                    key={f.name}
                    className={`flex items-center gap-3 px-4 py-3 ${i > 0 ? "border-t border-line" : ""}`}
                  >
                    <FileCode2 size={14} strokeWidth={1.75} aria-hidden className="shrink-0 text-ink-muted" />
                    <span className="min-w-0 flex-1 truncate font-mono text-[12px] leading-5 text-ink">
                      {f.name}
                    </span>
                    <span className="shrink-0 rounded-[4px] bg-white/10 px-2 py-[2px] text-[11px] font-bold uppercase leading-[16.5px] tracking-[1px] text-ink-soft">
                      {f.kind}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex items-start gap-3 rounded-[8px] border border-brand-edge bg-raise p-4">
                <GitCommitHorizontal size={15} strokeWidth={1.75} aria-hidden className="mt-[2px] shrink-0 text-brand" />
                <div>
                  <p className="text-[10px] font-bold uppercase leading-[15px] tracking-[1px] text-brand">
                    Recorded in Git
                  </p>
                  <p className="pt-1 text-[13px] leading-[20px] text-ink-soft">
                    Code changes and deployment logs, together.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="#contact"
                  className="group btn-press inline-flex items-center gap-2 rounded-[6px] bg-brand px-5 py-[11px] text-[14px] font-bold leading-[21px] text-white hover:opacity-95"
                >
                  Inspect sample package
                  <ArrowUpRight size={14} strokeWidth={2} aria-hidden className="arrow-slide" />
                </Link>
                <Link
                  href="#contact"
                  className="btn-press rounded-[6px] border border-ghost px-5 py-[11px] text-[14px] font-bold leading-[21px] text-ink hover:bg-raise"
                >
                  Request changes
                </Link>
              </div>

              <p className="text-[11px] leading-[16px] text-ink-muted">
                Illustrative demo · No live org connected.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
