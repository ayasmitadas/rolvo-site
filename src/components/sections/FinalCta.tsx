import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../motion/Reveal";

export default function FinalCta() {
  return (
    <section
      id="contact"
      className="on-dark grid-texture relative overflow-hidden py-24 lg:py-32"
    >
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-6 md:px-12">
        <Reveal className="flex flex-col gap-4">
          <p className="text-[11px] font-bold uppercase leading-[16.5px] tracking-[1.1px] text-brand">
            Built by Selectiva · Salesforce implementers
          </p>
          <h2 className="max-w-[820px] text-[36px] font-extrabold leading-[1.04] tracking-[-1px] text-ink sm:text-[48px] lg:text-[64px] lg:leading-[64px] lg:tracking-[-1.9px]">
            Your next Salesforce task. Delivered.
          </h2>
          <p className="max-w-[560px] text-[18px] leading-[29.25px] text-ink-soft">
            Delivery practice turned into software. Your code stays yours, and
            your conventions lead the work.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <Link
            href="#contact"
            className="group btn-press inline-flex items-center gap-2 rounded-[6px] bg-brand px-7 py-[14px] text-[15px] font-bold leading-[22.5px] text-white hover:opacity-95"
          >
            Contact us
            <ArrowUpRight size={15} strokeWidth={2} aria-hidden className="arrow-slide" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
