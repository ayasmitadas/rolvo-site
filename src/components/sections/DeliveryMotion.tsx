import { ArrowUpRight, ChevronDown } from "lucide-react";
import Eyebrow from "../Eyebrow";
import Reveal from "../motion/Reveal";
import CountUp from "../motion/CountUp";

const STATS = [
  { n: 5, label: "Specialists, one per discipline" },
  { n: 6, label: "Delivery stages, every task" },
  { n: 7, label: "Preset skills. Add your own." },
];

export default function DeliveryMotion() {
  return (
    <section id="delivery" className="border-b border-line bg-paper py-20 lg:py-28">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-6 md:px-12 lg:gap-16">
        <Reveal className="flex flex-col gap-4">
          <Eyebrow>Rolvo / Delivery in motion</Eyebrow>
          <h2 className="max-w-[768px] text-[32px] font-extrabold leading-[1.06] tracking-[-0.8px] text-ink sm:text-[42px] lg:text-[52px] lg:leading-[53px] lg:tracking-[-1.3px]">
            Five specialists. One direction.
          </h2>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
            <span className="text-[11px] font-bold uppercase leading-[16.5px] tracking-[1.1px] text-ink-muted">
              From requirement to release
            </span>
            <span className="group inline-flex items-center gap-2 text-[16px] font-bold leading-6 text-ink">
              Work, moving forward.
              <ArrowUpRight size={15} strokeWidth={2} aria-hidden className="arrow-slide text-brand" />
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-[12px] border border-line bg-card px-6 py-5">
            <span className="text-[11px] font-bold uppercase leading-[16.5px] tracking-[1.1px] text-ink-muted">
              One task → one verified package
            </span>
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase leading-[16.5px] tracking-[1.1px] text-brand-text">
              Scroll to discover
              <ChevronDown size={13} strokeWidth={2.25} aria-hidden className="scroll-cue" />
            </span>
          </div>
        </Reveal>

        <ul className="grid gap-8 border-t border-line pt-12 sm:grid-cols-3">
          {STATS.map((s, i) => (
            <Reveal as="li" key={s.label} delay={i * 90} className="flex flex-col gap-2">
              <p className="brand-gradient-text text-[48px] font-extrabold leading-[1.02] tabular-nums lg:text-[64px]">
                <CountUp to={s.n} />
              </p>
              <p className="text-[14px] leading-5 text-ink-muted">{s.label}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
