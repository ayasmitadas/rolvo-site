import Link from "next/link";
import Eyebrow from "../Eyebrow";

type Plan = {
  id: string;
  nodeId: string;
  name: string;
  blurb: string;
  price: string;
  period?: string;
  features: string[];
  cta: { label: string; href: string };
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    id: "individual",
    nodeId: "5:3194",
    name: "Individual Builder",
    blurb: "For solo developers and admins.",
    price: "$99",
    period: "/mo",
    features: ["3 core specialists", "50 tasks / month", "Basic audit trail"],
    cta: { label: "Get Started", href: "#launch" },
  },
  {
    id: "team",
    nodeId: "5:3224",
    name: "Delivery Team",
    blurb: "For small delivery teams.",
    price: "$399",
    period: "/mo",
    features: [
      "All specialists + marketplace",
      "Unlimited tasks",
      "Full audit & approvals",
    ],
    cta: { label: "Get Started", href: "#launch" },
    featured: true,
  },
  {
    id: "enterprise",
    nodeId: "5:3257",
    name: "Enterprise",
    blurb: "For large organizations.",
    price: "Custom",
    features: ["Everything in Team", "Custom specialists", "Dedicated support"],
    cta: { label: "Contact Sales", href: "#contact" },
  },
];

function FeatureList({ features }: { features: string[] }) {
  return (
    <ul className="mb-10 flex flex-col gap-3">
      {features.map((f) => (
        <li key={f} className="flex items-center gap-3">
          <span aria-hidden className="shrink-0 text-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/pricing-check.svg"
              alt=""
              width={13}
              height={14}
            />
          </span>
          <span className="text-[14px] leading-5 text-ink">{f}</span>
        </li>
      ))}
    </ul>
  );
}

function Price({ price, period }: { price: string; period?: string }) {
  return (
    <p className="mb-8 flex items-baseline gap-1">
      <span className="text-[32px] font-bold leading-10 text-ink sm:text-[36px]">
        {price}
      </span>
      {period ? (
        <span className="text-[16px] leading-6 text-ink-faint">{period}</span>
      ) : null}
    </p>
  );
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      data-node-id="5:3185"
      className="bg-paper px-6 py-24 md:px-12"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-16 lg:gap-20">
        <div
          data-node-id="5:3187"
          className="flex max-w-[768px] flex-col items-center gap-4 text-center"
        >
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="text-[36px] font-extrabold leading-[1.1] tracking-[-0.04em] text-ink sm:text-[48px] lg:text-[72px] lg:leading-[64.8px]">
            Simple, transparent pricing.
          </h2>
          <p className="text-[16px] leading-6 text-ink-soft">
            Plans pending final client confirmation. Get early access today.
          </p>
        </div>

        <ul
          data-node-id="5:3193"
          className="grid w-full max-w-[1024px] gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PLANS.map((plan) =>
            plan.featured ? (
              <li
                key={plan.id}
                data-node-id={plan.nodeId}
                className="relative rounded-[8px] bg-gradient-to-br from-violet to-brand p-[2px] shadow-[0_20px_30px_0_rgba(124,92,255,0.2)]"
              >
                <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-violet to-brand px-3 py-1 text-[10px] font-bold uppercase leading-[15px] tracking-[1px] text-white">
                  Most popular
                </span>
                <div className="flex h-full flex-col rounded-[8px] bg-white p-8">
                  <h3 className="mb-2 text-[20px] font-bold leading-7 text-ink">
                    {plan.name}
                  </h3>
                  <p className="mb-6 text-[14px] leading-5 text-ink-muted">
                    {plan.blurb}
                  </p>
                  <Price price={plan.price} period={plan.period} />
                  <FeatureList features={plan.features} />
                  <Link
                    href={plan.cta.href}
                    className="mt-auto rounded-[6px] bg-gradient-to-r from-violet to-brand py-3 text-center text-[16px] font-bold leading-6 text-white transition-opacity hover:opacity-90"
                  >
                    {plan.cta.label}
                  </Link>
                </div>
              </li>
            ) : (
              <li
                key={plan.id}
                data-node-id={plan.nodeId}
                className="flex flex-col rounded-[8px] border border-ink/[0.06] bg-white/70 p-[33px] shadow-[0_4px_24px_0_rgba(17,17,17,0.04)] backdrop-blur-[10px]"
              >
                <h3 className="mb-2 text-[20px] font-bold leading-7 text-ink">
                  {plan.name}
                </h3>
                <p className="mb-6 text-[14px] leading-5 text-ink-muted">
                  {plan.blurb}
                </p>
                <Price price={plan.price} period={plan.period} />
                <FeatureList features={plan.features} />
                <Link
                  href={plan.cta.href}
                  className="mt-auto rounded-[6px] border border-ink py-[13px] text-center text-[16px] font-bold leading-6 text-ink transition-colors hover:bg-ink hover:text-white"
                >
                  {plan.cta.label}
                </Link>
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}
