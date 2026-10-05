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
    id: "handoff",
    icon: "/assets/selectiva-handoff.svg",
    iconWidth: 45,
    iconHeight: 36,
    title: "Seamless Handoff",
    body: "Move from AI-assisted delivery to Selectiva's expert services without losing context or metadata history.",
  },
  {
    id: "expert-led",
    icon: "/assets/selectiva-chip.svg",
    iconWidth: 36,
    iconHeight: 36,
    title: "Expert-Led AI",
    body: "Our specialist agents are built on Selectiva's proprietary Salesforce delivery methodology and playbooks.",
  },
  {
    id: "enterprise-trust",
    icon: "/assets/selectiva-badge.svg",
    iconWidth: 36,
    iconHeight: 36,
    title: "Enterprise Trust",
    body: "Backed by a global delivery center with certified Salesforce experts supervising every automated unit of work.",
  },
];

export default function Selectiva() {
  return (
    <section
      id="selectiva"
      data-node-id="5:3145"
      className="relative overflow-hidden border-t border-line bg-line/30 px-6 py-24 md:px-12"
    >
      {/* oversized R watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 hidden select-none text-[640px] font-black leading-none text-violet/5 opacity-60 lg:block"
      >
        R
      </span>

      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center gap-[15px]">
        <Eyebrow>Built by Selectiva</Eyebrow>

        <h2 className="max-w-[960px] text-center text-[32px] font-extrabold leading-[1.06] tracking-[-1.2px] text-ink sm:text-[48px] sm:tracking-[-1.9px] lg:text-[72px] lg:leading-[64.8px] lg:tracking-[-2.88px]">
          One platform. More possibilities.
        </h2>

        <p className="max-w-[672px] pt-8 text-center text-[18px] leading-[29.25px] text-ink-soft lg:pt-[48.25px]">
          Rolvo brings Selectiva&apos;s Salesforce delivery experience into a
          coordinated system of specialist AI agents. We combine decades of
          implementation expertise with the speed of AI.
        </p>

        <ul className="grid w-full max-w-[1024px] gap-8 pt-10 sm:grid-cols-2 lg:grid-cols-3 lg:pt-[49px]">
          {PILLARS.map((pillar) => (
            <li
              key={pillar.id}
              className="flex flex-col items-center gap-3 rounded-[12px] border border-ink/[0.06] bg-white/70 px-8 pb-10 pt-9 text-center shadow-[0_4px_24px_0_rgba(17,17,17,0.04)] backdrop-blur-[10px] sm:px-[41px] sm:pb-[41px] sm:pt-[36.5px]"
            >
              <span className="flex h-11 items-center justify-center text-brand">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={pillar.icon}
                  alt=""
                  width={pillar.iconWidth}
                  height={pillar.iconHeight}
                />
              </span>
              <h3 className="text-[20px] font-bold leading-7 text-ink">
                {pillar.title}
              </h3>
              <p className="text-[16px] leading-6 text-ink-soft">
                {pillar.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
