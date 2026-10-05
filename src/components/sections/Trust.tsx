import {
  Building2,
  CircleCheckBig,
  Eye,
  KeyRound,
  type LucideIcon,
} from "lucide-react";
import Eyebrow from "../Eyebrow";

type Pillar = {
  id: string;
  icon: LucideIcon;
  title: string;
  body: string;
  tag?: string;
};

const PILLARS: Pillar[] = [
  {
    id: "approval-gate",
    icon: CircleCheckBig,
    title: "The approval gate",
    body: "Nothing reaches production until a person approves it. The agents prepare the work and hand it back. You decide whether it ships.",
  },
  {
    id: "read-only-skill",
    icon: Eye,
    title: "Read-only when you say so",
    body: "Attach the Read-Only Access skill and an agent can inspect and query your org — nothing more. It cannot write, deploy or edit. Not a promise we make. A constraint you attach.",
  },
  {
    id: "your-model",
    icon: KeyRound,
    title: "Your model, your key",
    body: "Rolvo runs on the language model you connect, under your own API key. Your provider bills you for what you use. We never bill you for tokens.",
  },
  {
    id: "directory-controls",
    icon: Building2,
    title: "Directory controls and audit logs",
    body: "Single sign-on, SCIM provisioning for joiners and leavers, and audit log export. Available on the Enterprise plan.",
    tag: "Enterprise",
  },
];

export default function Trust() {
  return (
    <section
      id="trust"
      data-node-id="5:3103"
      className="relative overflow-hidden border-t border-line bg-paper px-6 py-24 md:px-12"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-4">
          <Eyebrow>Control &amp; governance</Eyebrow>

          <h2 className="max-w-[520px] text-[32px] font-bold leading-[1.08] text-ink sm:text-[40px] lg:text-[48px] lg:leading-[48px]">
            Review before release, not after.
          </h2>

          <p className="max-w-[560px] pt-[15.25px] text-[18px] leading-[29.25px] text-ink-soft">
            Rolvo does not deploy on its own. You hold two separate levers: what
            an agent is allowed to do, and whether its work ships at all.
          </p>

          <ul className="flex flex-col gap-6 pt-6">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <li key={pillar.id} className="flex items-start gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-[4px] border border-ink/[0.06] bg-white/70 text-brand shadow-[0_4px_24px_0_rgba(17,17,17,0.04)] backdrop-blur-[10px]">
                    <Icon size={16} strokeWidth={1.75} aria-hidden />
                  </span>
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-[16px] font-bold leading-6 text-ink">
                        {pillar.title}
                      </h3>
                      {pillar.tag ? (
                        <span className="rounded-full border border-violet/30 bg-violet/10 px-2 py-[1px] text-[10px] font-bold uppercase leading-[15px] tracking-[0.8px] text-violet">
                          {pillar.tag}
                        </span>
                      ) : null}
                    </div>
                    <p className="max-w-[440px] text-[14px] leading-5 text-ink-muted">
                      {pillar.body}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>

          <p className="max-w-[560px] pt-6 text-[16px] leading-[26px] text-ink-soft">
            Most governance arrives late. A log you read after something has
            already gone wrong tells you who to blame, not what to stop. Rolvo
            puts the controls in front of the work instead: a skill fixes what an
            agent may touch before it starts, a person signs off before anything
            is deployed, and the package in between is there to be read line by
            line. Smaller plans carry fewer governance features on purpose — the
            directory-level controls large IT teams need sit on Enterprise.
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="glow -inset-8 opacity-50"
            style={{
              background:
                "radial-gradient(ellipse, rgba(124,92,255,0.18) 0%, rgba(124,92,255,0) 70%)",
              filter: "blur(50px)",
            }}
          />
          <figure className="relative m-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/trust-governance-visual.svg"
              alt="A unit of work held at an approval checkpoint before release."
              width={640}
              height={420}
              className="aspect-[640/420] w-full rounded-[12px] border border-line bg-white object-cover text-ink-faint shadow-[0_20px_60px_0_rgba(17,17,17,0.08)]"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
