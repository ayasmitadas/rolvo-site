import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import Reveal from "../motion/Reveal";

export default function Hero() {
  return (
    <section id="overview" className="on-dark grid-texture relative overflow-hidden">
      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-24 md:px-12 lg:py-32">
        <Reveal className="flex flex-col gap-6">
          <p className="text-[11px] font-bold uppercase leading-[16.5px] tracking-[1.1px] text-brand">
            A Selectiva product · Built for Salesforce
          </p>

          <h1 className="max-w-[900px] text-[44px] font-extrabold leading-[1.04] tracking-[-1.4px] text-ink sm:text-[58px] sm:tracking-[-1.9px] lg:text-[75px] lg:leading-[71px] lg:tracking-[-2.25px]">
            Salesforce work.
            <br />
            Specialist agents.
            <br />
            <span className="text-brand">Ready to ship.</span>
          </h1>

          <p className="max-w-[620px] text-[18px] leading-[29.25px] text-ink-soft">
            Assign the work. Five specialists plan, build, test and package it.
            Every task comes back deployment-ready. Changes and deployment logs
            are kept in Git.
          </p>
        </Reveal>

        <Reveal delay={120} className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
          <Link
            href="#contact"
            className="group btn-press inline-flex items-center justify-center gap-2 rounded-[6px] bg-brand px-7 py-[14px] text-[15px] font-bold leading-[22.5px] text-white hover:opacity-95"
          >
            Contact us
            <ArrowUpRight size={15} strokeWidth={2} aria-hidden className="arrow-slide" />
          </Link>
          <Link
            href="#delivery"
            className="group btn-press inline-flex items-center justify-center gap-2 rounded-[6px] border border-ghost px-7 py-[14px] text-[15px] font-bold leading-[22.5px] text-ink hover:bg-raise"
          >
            See the delivery
            <ArrowDown size={15} strokeWidth={2} aria-hidden className="arrow-slide-y" />
          </Link>
        </Reveal>

        <Reveal delay={200}>
          <p className="border-t border-line pt-6 text-[11px] font-bold uppercase leading-[16.5px] tracking-[1.1px] text-ink-muted">
            Your model. Your key. No token charges from Rolvo.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
