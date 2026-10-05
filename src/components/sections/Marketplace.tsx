import Eyebrow from "../Eyebrow";

type Listing = {
  id: string;
  icon: string;
  width: number;
  height: number;
  title: string;
  body: string;
};

const LISTINGS: Listing[] = [
  {
    id: "cpq",
    icon: "market-cpq",
    width: 18,
    height: 16,
    title: "CPQ Specialist",
    body: "Configured quoting & pricing rules",
  },
  {
    id: "service",
    icon: "market-service",
    width: 20,
    height: 16,
    title: "Service Cloud Agent",
    body: "Case routing & omnichannel flows",
  },
  {
    id: "analytics",
    icon: "market-analytics",
    width: 16,
    height: 16,
    title: "Analytics Builder",
    body: "Dashboards & Einstein insights",
  },
  {
    id: "integration",
    icon: "market-integration",
    width: 12,
    height: 16,
    title: "Integration Engineer",
    body: "MuleSoft & external APIs",
  },
];

export default function Marketplace() {
  return (
    <section
      id="marketplace"
      data-node-id="5:3045"
      className="bg-line/30 px-6 py-24 md:px-12"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12 lg:gap-16">
        <div className="flex max-w-[672px] flex-col gap-4">
          <Eyebrow>Marketplace</Eyebrow>
          <h2 className="text-[32px] font-bold leading-[1.1] text-ink sm:text-[40px] lg:text-[48px] lg:leading-[48px]">
            Add the specialist your project needs.
          </h2>
          <p className="text-[16px] leading-[24px] text-ink-soft">
            Browse community-built specialists and drop them straight into your
            delivery pipeline.
          </p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LISTINGS.map((l) => (
            <li
              key={l.id}
              className="flex flex-col items-start rounded-[12px] border border-ink/[0.06] bg-white/70 p-[25px] shadow-[0_4px_24px_0_rgba(17,17,17,0.04)] backdrop-blur-[10px]"
            >
              <span className="mb-4 grid size-12 shrink-0 place-items-center rounded-[4px] bg-violet/10 text-violet">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/assets/${l.icon}.svg`}
                  alt=""
                  width={l.width}
                  height={l.height}
                />
              </span>
              <h3 className="pb-1 text-[16px] font-bold leading-[24px] text-ink">
                {l.title}
              </h3>
              <p className="pb-6 text-[12px] leading-[16px] text-ink-muted">
                {l.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
