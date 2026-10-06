import Link from "next/link";
import Eyebrow from "../Eyebrow";
import { ENTERPRISE, PREMIUM, STANDARD, type Feature } from "@/lib/features";

function Grid({
  items,
  tint,
}: {
  items: Feature[];
  tint: "violet" | "brand";
}) {
  return (
    <ul className="grid gap-x-8 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((f) => {
        const Icon = f.icon;
        return (
          <li
            key={f.id}
            className="flex items-start gap-3 border-t border-line py-5"
          >
            <span
              className={`mt-[2px] shrink-0 ${
                tint === "violet" ? "text-violet" : "text-brand-text"
              }`}
            >
              <Icon size={18} strokeWidth={1.75} aria-hidden />
            </span>
            <span className="flex flex-col gap-1">
              <h3 className="text-[16px] font-bold leading-6 text-ink">
                {f.name}
              </h3>
              <p className="text-[14px] leading-[22px] text-ink-muted">
                {f.line}
              </p>
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function GroupHeading({
  label,
  note,
}: {
  label: string;
  note: string;
}) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <h3 className="text-[20px] font-bold leading-7 text-ink">{label}</h3>
      <p className="text-[14px] leading-6 text-ink-muted">{note}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section
      id="features"
      className="border-t border-line bg-paper py-24"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-14 px-6 md:px-12">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row">
          <div className="flex max-w-[672px] flex-col gap-4">
            <Eyebrow>Everything in Rolvo</Eyebrow>
            <h2 className="text-[32px] font-bold leading-[1.1] text-ink sm:text-[40px] lg:text-[48px] lg:leading-[48px]">
              Ten capabilities in the base product. Four more when you need
              them.
            </h2>
          </div>
          <p className="max-w-[448px] text-[18px] leading-7 text-ink-soft">
            Every paid plan includes the full base product. You scale on how
            much work you run, not on which features you are allowed to touch.
          </p>
        </div>

        {/* Standard */}
        <div className="flex flex-col gap-4">
          <GroupHeading
            label="In every plan"
            note="The base product — ten features, including Free."
          />
          <Grid items={STANDARD} tint="violet" />
        </div>

        {/* Premium */}
        <div className="flex flex-col gap-4">
          <GroupHeading
            label="Higher tier"
            note="Four add-on capabilities for teams running at scale."
          />
          <Grid items={PREMIUM} tint="brand" />
        </div>

        {/* Enterprise services */}
        <div className="flex flex-col gap-4">
          <GroupHeading
            label="Enterprise services"
            note="Delivered by Selectiva's team and scoped per engagement."
          />
          <Grid items={ENTERPRISE} tint="brand" />
        </div>

        <p className="text-[16px] leading-[26px] text-ink-soft">
          See what each plan includes in{" "}
          <Link
            href="#pricing"
            className="font-bold text-brand-text underline underline-offset-4"
          >
            pricing
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
