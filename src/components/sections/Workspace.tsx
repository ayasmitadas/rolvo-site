import Link from "next/link";
import {
  ArrowUpRight,
  ArrowLeftRight,
  CheckCheck,
  Braces,
  LayoutList,
  Target,
  type LucideIcon,
} from "lucide-react";
import Eyebrow from "../Eyebrow";
import Reveal from "../motion/Reveal";

const CAPABILITIES: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: ArrowUpRight,
    title: "Task & story creation",
    body: "Create work on the board and assign it to specialists. Run delivery agents in CI against a connected org.",
  },
  {
    icon: Target,
    title: "Project & org memory",
    body: "Persistent context about your org and past work, shared across linked projects.",
  },
  {
    icon: Braces,
    title: "Skills & task Q&A",
    body: "Author reusable knowledge, then ask questions about implementation inline or in CI.",
  },
  {
    icon: CheckCheck,
    title: "Evals & quality scoring",
    body: "Grade delivered work against acceptance criteria and the live org.",
  },
  {
    icon: LayoutList,
    title: "Deliverables & dashboard",
    body: "Markdown, PDF or Word output, shared docs, and delivered work grouped into sprint windows.",
  },
  {
    icon: ArrowLeftRight,
    title: "Your tools. Your model.",
    body: "Slack, Notion and Jira access. Connect a major model with your own subscription or key.",
  },
];

export default function Workspace() {
  return (
    <section id="workspace" className="border-b border-line bg-paper py-20 lg:py-28">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-6 md:px-12 lg:gap-16">
        <Reveal className="flex max-w-[768px] flex-col gap-4">
          <Eyebrow>The complete workspace</Eyebrow>
          <h2 className="text-[32px] font-extrabold leading-[1.06] tracking-[-0.8px] text-ink sm:text-[42px] lg:text-[52px] lg:leading-[53px] lg:tracking-[-1.3px]">
            More than the run. The context around it.
          </h2>
        </Reveal>

        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal as="li" key={c.title} delay={(i % 3) * 80}>
                <div className="card-hover flex h-full flex-col gap-3 rounded-[8px] border border-line bg-card p-6">
                  <span className="grid size-8 place-items-center rounded-[4px] bg-brand-soft text-brand-text">
                    <Icon size={15} strokeWidth={1.75} aria-hidden />
                  </span>
                  <h3 className="text-[16px] font-bold leading-6 text-ink">{c.title}</h3>
                  <p className="text-[14px] leading-[22.75px] text-ink-muted">{c.body}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <Reveal delay={120}>
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 text-[15px] font-bold leading-6 text-ink"
          >
            Explore options for teams and enterprise delivery
            <ArrowUpRight size={15} strokeWidth={2} aria-hidden className="arrow-slide text-brand" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
