"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Eyebrow from "../Eyebrow";
import Reveal from "../motion/Reveal";

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
  "relative flex h-full w-full flex-col rounded-[10px] bg-card p-8 shadow-card";

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section
      id="pricing"
      data-node-id="5:3185"
      className="bg-paper py-24"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-12 px-6 md:px-12 lg:gap-16">
        <Reveal className="flex max-w-[768px] flex-col items-center gap-4 text-center">
          <Eyebrow>Simple, predictable pricing</Eyebrow>
          <h2 className="text-[32px] font-extrabold leading-[1.06] tracking-[-0.8px] text-ink sm:text-[42px] lg:text-[52px] lg:leading-[53px] lg:tracking-[-1.3px]">
            Bring your own model. We never charge for tokens.
          </h2>
          <p className="max-w-[640px] text-[18px] leading-[29.25px] text-ink-soft">
            Connect Claude, OpenAI or Google with your own subscription or key.
            Choose the task capacity and team access that fit your work.
          </p>
        </Reveal>

        {/* bring your own model */}
        <Reveal delay={80} className="w-full max-w-[1200px]">
          <div className="flex flex-col items-center gap-5 rounded-[12px] border border-line bg-card px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex flex-col gap-1">
              <p className="text-[11px] font-bold uppercase leading-[16.5px] tracking-[1.1px] text-ink-muted">
                Bring your own model
              </p>
              <p className="text-[16px] leading-6 text-ink">
                Your existing model subscription or key. Your choice.
              </p>
            </div>
            <ul className="flex flex-wrap items-center justify-center gap-2">
              {["OpenAI", "Claude", "Google"].map((m) => (
                <li
                  key={m}
                  className="card-hover rounded-[6px] border border-line bg-paper px-4 py-2 text-[14px] font-bold leading-5 text-ink"
                >
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

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
              yearly ? "text-ink-muted hover:text-ink" : "bg-card text-ink shadow-card"
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setYearly(true)}
            aria-pressed={yearly}
            className={`flex items-center gap-2 rounded-full px-5 py-2 text-[14px] font-bold transition-colors ${
              yearly ? "bg-card text-ink shadow-card" : "text-ink-muted hover:text-ink"
            }`}
          >
            Yearly
            <span className="text-brand">
              2 months free
            </span>
          </button>
        </div>

        <ul className="grid w-full max-w-[1200px] gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan) => (
            <li key={plan.id} className="flex card-hover">
              <div
                className={`${CARD} ${
                  plan.featured
                    ? "border-2 border-brand shadow-panel"
                    : "border border-line"
                }`}
              >
                {plan.featured ? (
                  <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-brand px-3 py-1 text-[10px] font-bold uppercase leading-[15px] tracking-[0.5px] text-white">
                    Most popular
                  </span>
                ) : null}
                <PlanBody plan={plan} yearly={yearly} />
              </div>
            </li>
          ))}
        </ul>

        <p className="max-w-[640px] text-center text-[14px] leading-[22px] text-ink-muted">
          Every plan includes all five specialists, the full skill library and
          the ten base-product features. You scale on how much work you run.
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

      <p className="mt-4 inline-flex w-fit items-center rounded-full bg-brand-soft px-3 py-1 text-[13px] font-bold leading-5 text-brand">
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
              ? "bg-brand text-white"
              : "border border-line bg-card text-ink shadow-card"
          }`}
        >
          {plan.cta.label}
        </Link>
      </div>
    </>
  );
}
