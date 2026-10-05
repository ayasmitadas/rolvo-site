import Eyebrow from "../Eyebrow";

type Pillar = {
  id: string;
  icon: string;
  iconWidth: number;
  iconHeight: number;
  title: string;
  body: string;
};

const PILLARS: Pillar[] = [
  {
    id: "approval-gates",
    icon: "/assets/trust-approval-gates.svg",
    iconWidth: 16,
    iconHeight: 16,
    title: "Approval Gates",
    body: "Configurable checkpoints before any artifact reaches a sandbox.",
  },
  {
    id: "audit-trail",
    icon: "/assets/trust-audit-trail.svg",
    iconWidth: 16,
    iconHeight: 16,
    title: "Full Audit Trail",
    body: "Every decision, edit and handoff is logged and searchable.",
  },
  {
    id: "enterprise-security",
    icon: "/assets/trust-lock.svg",
    iconWidth: 14,
    iconHeight: 16,
    title: "Enterprise Security",
    body: "SSO, role-based access and data residency controls out of the box.",
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
          <Eyebrow>Trust &amp; governance</Eyebrow>

          <h2 className="max-w-[520px] text-[32px] font-bold leading-[1.08] text-ink sm:text-[40px] lg:text-[48px] lg:leading-[48px]">
            Built for review before release.
          </h2>

          <p className="max-w-[560px] pt-[15.25px] text-[18px] leading-[29.25px] text-ink-soft">
            Rolvo never deploys autonomously. Every output passes through human
            review points, approval gates and a full audit trail so your team
            stays in control.
          </p>

          <ul className="flex flex-col gap-6 pt-6">
            {PILLARS.map((pillar) => (
              <li key={pillar.id} className="flex items-start gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-[4px] border border-ink/[0.06] bg-white/70 text-brand shadow-[0_4px_24px_0_rgba(17,17,17,0.04)] backdrop-blur-[10px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={pillar.icon}
                    alt=""
                    width={pillar.iconWidth}
                    height={pillar.iconHeight}
                  />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[16px] font-bold leading-6 text-ink">
                    {pillar.title}
                  </h3>
                  <p className="max-w-[440px] text-[14px] leading-5 text-ink-muted">
                    {pillar.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
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
              alt="Layered approval checkpoints arranged around a central verified release."
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
