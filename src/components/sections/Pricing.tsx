"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Eyebrow from "../Eyebrow";

type Plan = {
  id: string;
  name: string;
  blurb: string;
  monthly: string;
  yearly: string;
  suffixMonthly: string;
  suffixYearly: string;
  allowance: string;
  features: string[];
  cta: { label: string; href: string };
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    id: "free",
    name: "Free",
    blurb: "See it work.",
    monthly: "$0",
    yearly: "$0",
    suffixMonthly: "/mo",
    suffixYearly: "/yr",
    allowance: "25 tasks / month",
    features: [
      "All five specialists",
      "1 active project",
      "Your own model, no token charges",
      "Community support",
    ],
    cta: { label: "Get started free", href: "#launch" },
  },
  {
    id: "pro",
    name: "Pro",
    blurb: "For one builder who ships.",
    monthly: "$29",
    yearly: "$290",
    suffixMonthly: "/mo",
    suffixYearly: "/yr",
    allowance: "250 tasks / month",
    features: ["Everything in Free", "Unlimited projects", "Email support"],
    cta: { label: "Book a demo", href: "#contact" },
    featured: true,
  },
  {
    id: "business",
    name: "Business",
    blurb: "For a team sharing the load.",
    monthly: "$99",
    yearly: "$990",
    suffixMonthly: "/mo",
    suffixYearly: "/yr",
    allowance: "1,500 tasks / month",
    features: [
      "Everything in Pro",
      "Team seats and roles",
      "Priority agent runs",
      "Multiple Salesforce orgs",
    ],
    cta: { label: "Book a demo", href: "#contact" },
  },
  {
    id: "enterprise",
    name: "Enterprise",
    blurb: "For orgs with governance to satisfy.",
    monthly: "Custom",
    yearly: "Custom",
    suffixMonthly: "",
    suffixYearly: "",
    allowance: "Unlimited tasks",
    features: [
      "Everything in Business",
      "SSO, SCIM and audit log export",
      "Dedicated support and custom SLAs",
    ],
    cta: { label: "Book a demo", href: "#contact" },
  },
];

const CARD =
  "relative flex h-full w-full flex-col rounded-[10px] bg-white p-8 shadow-[0_4px_24px_0_rgba(17,17,17,0.04)]";

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section
      id="pricing"
      data-node-id="5:3185"
      className="bg-paper py-24"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-12 px-6 md:px-12 lg:gap-16">
        <div className="flex max-w-[768px] flex-col items-center gap-4 text-center">
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="text-[32px] font-bold leading-[1.08] tracking-[-0.02em] text-ink sm:text-[44px] lg:text-[56px]">
            Bring your own model. We never charge for tokens.
          </h2>
          <p className="max-w-[640px] text-[16px] leading-[26px] text-ink-soft">
            Connect any major model — Claude, OpenAI, Google — with your own
            subscription or key. You are billed for the work the specialists
            deliver, metered in completed tasks, and never for tokens consumed.
            Agent pricing that scales with usage makes budgets unforecastable.
            This does not.
          </p>
        </div>

        {/* billing toggle */}
        <div
          className="flex items-center gap-1 rounded-full border border-line bg-line/50 p-1"
          role="group"
          aria-label="Billing period"
        >
          <button
            type="button"
            onClick={() => setYearly(false)}
            aria-pressed={!yearly}
            className={`rounded-full px-5 py-2 text-[14px] font-bold transition-colors ${
              yearly ? "text-ink-muted hover:text-ink" : "bg-white text-ink shadow-[0_1px_3px_rgba(17,17,17,0.12)]"
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setYearly(true)}
            aria-pressed={yearly}
            className={`flex items-center gap-2 rounded-full px-5 py-2 text-[14px] font-bold transition-colors ${
              yearly ? "bg-white text-ink shadow-[0_1px_3px_rgba(17,17,17,0.12)]" : "text-ink-muted hover:text-ink"
            }`}
          >
            Yearly
            <span className="text-violet">
              2 months free
            </span>
          </button>
        </div>

        <ul className="grid w-full max-w-[1200px] gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan) => (
            <li key={plan.id} className="flex">
              <div
                className={`${CARD} ${
                  plan.featured
                    ? "border-2 border-violet shadow-[0_20px_30px_0_rgba(124,92,255,0.18)]"
                    : "border border-line"
                }`}
              >
                {plan.featured ? (
                  <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-violet px-3 py-1 text-[10px] font-bold uppercase leading-[15px] tracking-[0.5px] text-white">
                    Most popular
                  </span>
                ) : null}
                <PlanBody plan={plan} yearly={yearly} />
              </div>
            </li>
          ))}
        </ul>

        <p className="max-w-[640px] text-center text-[14px] leading-[22px] text-ink-muted">
          Every plan includes all five specialists and the full skill library.
          Plans differ on how much work you run, not on who does it.
        </p>
      </div>
    </section>
  );
}

function PlanBody({ plan, yearly }: { plan: Plan; yearly: boolean }) {
  const price = yearly ? plan.yearly : plan.monthly;
  const suffix = yearly ? plan.suffixYearly : plan.suffixMonthly;

  return (
    <>
      <h3 className="text-[20px] font-bold leading-7 text-ink">{plan.name}</h3>
      <p className="pt-1 text-[14px] leading-5 text-ink-muted">{plan.blurb}</p>

      <p className="flex items-baseline gap-1 pt-6">
        <span className="text-[32px] font-bold leading-none text-ink sm:text-[36px]">
          {price}
        </span>
        {suffix ? (
          <span className="text-[14px] text-ink-faint">{suffix}</span>
        ) : null}
      </p>

      <p className="mt-4 inline-flex w-fit items-center rounded-full bg-violet/10 px-3 py-1 text-[13px] font-bold leading-5 text-violet">
        {plan.allowance}
      </p>

      <ul className="flex flex-col gap-2 pt-6">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <Check
              size={14}
              strokeWidth={1.75}
              aria-hidden
              className="mt-[5px] shrink-0 text-brand-text"
            />
            <span className="text-[14px] leading-[22px] text-ink-soft">{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <Link
          href={plan.cta.href}
          className={`block rounded-[6px] px-6 py-3 text-center text-[15px] font-bold leading-6 transition-opacity hover:opacity-90 ${
            plan.featured
              ? "bg-violet text-white"
              : "border border-line bg-white text-ink shadow-[0_1px_2px_rgba(17,17,17,0.06)]"
          }`}
        >
          {plan.cta.label}
        </Link>
      </div>
    </>
  );
}
