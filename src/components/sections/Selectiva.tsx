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
    id: "delivery-practice",
    icon: "/assets/selectiva-chip.svg",
    iconWidth: 36,
    iconHeight: 36,
    title: "Delivery practice, written down",
    body: "Rolvo's six stages follow the way a delivery team actually works: read the request, design it, build it, test it, package it, approve it. The method came off real projects.",
  },
  {
    id: "code-stays-yours",
    icon: "/assets/selectiva-private.svg",
    iconWidth: 36,
    iconHeight: 36,
    title: "Your code stays yours",
    body: "Selectiva supplies the product and nothing more. We do not see your org, your metadata or the code the agents write. Your work is never routed to us for review.",
  },
  {
    id: "your-conventions",
    icon: "/assets/selectiva-skill-file.svg",
    iconWidth: 36,
    iconHeight: 36,
    title: "Your conventions win",
    body: "Seven skill presets ship with Rolvo. Replace any of them with your own — your coding standards, your deployment rules, your naming. Writing your own costs nothing.",
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
          Built by implementers. Your code stays yours.
        </h2>

        <p className="max-w-[672px] pt-8 text-center text-[18px] leading-[29.25px] text-ink-soft lg:pt-[48.25px]">
          Selectiva is a Salesforce partner. We have delivered implementations
          for real organizations, and Rolvo is that delivery practice turned into
          software. We supply the product. We do not work inside your org.
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
