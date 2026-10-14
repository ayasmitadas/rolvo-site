import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Eyebrow from "../Eyebrow";
import Reveal from "../motion/Reveal";

/* The Agentforce comparison table was removed at the client's request.
   Its data still lives in git history if it comes back. */

export default function Differentiation() {
  return (
    <section className="border-b border-line bg-paper py-20 lg:py-28">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-6 md:px-12">
        <Reveal className="flex max-w-[768px] flex-col gap-4">
          <Eyebrow>Built for a different job</Eyebrow>
          <h2 className="text-[32px] font-extrabold leading-[1.06] tracking-[-0.8px] text-ink sm:text-[42px] lg:text-[52px] lg:leading-[53px] lg:tracking-[-1.3px]">
            Your Salesforce delivery team. Now in software.
          </h2>
        </Reveal>
        <Reveal delay={90} className="flex max-w-[640px] flex-col items-start gap-6">
          <p className="text-[18px] leading-[29.25px] text-ink-soft">
            Agentforce runs business tasks. Rolvo delivers Salesforce change:
            Apex, LWC, Flows and configuration, with a full audit trail and a
            reviewed package at the end.
          </p>
          <Link
            href="#how-it-works"
            className="group btn-press inline-flex items-center gap-2 rounded-[6px] border border-ghost px-7 py-[13px] text-[15px] font-bold leading-[22.5px] text-ink hover:bg-raise"
          >
            Explore the product
            <ArrowUpRight size={15} strokeWidth={2} aria-hidden className="arrow-slide" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
