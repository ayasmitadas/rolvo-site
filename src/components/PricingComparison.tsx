import { Check } from "lucide-react";
import { ENTERPRISE, PREMIUM, PREMIUM_FROM, STANDARD } from "@/lib/features";

const PLANS = ["Free", "Pro", "Business", "Enterprise"] as const;
type PlanIndex = 0 | 1 | 2 | 3;

type Cell = boolean | string;
type Row = { label: string; cells: [Cell, Cell, Cell, Cell] };
type Group = { title: string; note?: string; rows: Row[] };

/** Premium availability is not confirmed; until it is, show it as an add-on. */
const premiumCells = (): [Cell, Cell, Cell, Cell] => {
  if (PREMIUM_FROM === null) return [false, "Add-on", "Add-on", "Add-on"];
  const from: PlanIndex =
    PREMIUM_FROM === "pro" ? 1 : PREMIUM_FROM === "business" ? 2 : 3;
  return [0, 1, 2, 3].map((i) => i >= from) as [Cell, Cell, Cell, Cell];
};

const GROUPS: Group[] = [
  {
    title: "What you run",
    rows: [
      { label: "Completed tasks per month", cells: ["25", "250", "1,500", "Unlimited"] },
      { label: "Active projects", cells: ["1", "Unlimited", "Unlimited", "Unlimited"] },
      { label: "Connected Salesforce orgs", cells: ["1", "1", "Multiple", "Multiple"] },
      { label: "Team seats and roles", cells: [false, false, true, true] },
      { label: "Support", cells: ["Community", "Email", "Priority", "Dedicated, with SLA"] },
    ],
  },
  {
    title: "The base product",
    note: "Included on every plan, including Free.",
    rows: STANDARD.map((f) => ({
      label: f.name,
      cells: [true, true, true, true] as [Cell, Cell, Cell, Cell],
    })),
  },
  {
    title: "Higher tier",
    note: "Plan availability is being finalised.",
    rows: PREMIUM.map((f) => ({ label: f.name, cells: premiumCells() })),
  },
  {
    title: "Governance",
    rows: [
      { label: "Approval before every deployment", cells: [true, true, true, true] },
      { label: "Read-only agent constraints", cells: [true, true, true, true] },
      { label: "SSO, SCIM and audit log export", cells: [false, false, false, true] },
    ],
  },
  {
    title: "Enterprise services",
    note: `${ENTERPRISE.length} offerings including SAP, NetSuite, Snowflake and Databricks.`,
    rows: [
      {
        label: "Integrations and data conversion",
        cells: [false, false, false, "Per engagement"],
      },
    ],
  },
];

function CellValue({ value }: { value: Cell }) {
  if (value === true) {
    return (
      <>
        <span
          aria-hidden
          className="mx-auto grid size-[20px] place-items-center rounded-[5px] bg-brand-text text-white"
        >
          <Check size={13} strokeWidth={3} />
        </span>
        <span className="sr-only">Included</span>
      </>
    );
  }
  if (value === false) {
    return (
      <>
        <span
          aria-hidden
          className="mx-auto block size-[20px] rounded-[5px] border border-line bg-white"
        />
        <span className="sr-only">Not included</span>
      </>
    );
  }
  return <span className="text-[13px] text-ink">{value}</span>;
}

/** Collapse a row into one readable line for narrow screens. */
function summarise(cells: [Cell, Cell, Cell, Cell]): string {
  if (cells.every((c) => c === true)) return "All plans";
  if (cells.every((c) => c === false)) return "Not available";

  if (cells.every((c) => typeof c === "boolean")) {
    const included = cells
      .map((c, i) => (c === true ? PLANS[i] : null))
      .filter(Boolean) as string[];
    return included.length === 1 ? included[0] : `${included[0]} and above`;
  }

  return cells
    .map((c, i) => {
      if (c === false) return null;
      if (c === true) return PLANS[i];
      return `${PLANS[i]} ${c}`;
    })
    .filter(Boolean)
    .join(" · ");
}

export default function PricingComparison() {
  return (
    <div className="w-full max-w-[1100px]">
      <h3 className="pb-6 text-center text-[20px] font-bold leading-7 text-ink">
        Compare plans
      </h3>

      {/* wide screens: the full matrix */}
      <div className="hidden overflow-hidden rounded-[10px] border border-line bg-white md:block">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">
            Feature availability across the Free, Pro, Business and Enterprise plans.
          </caption>
          <thead>
            <tr className="border-b border-line">
              <th
                scope="col"
                className="w-[34%] p-4 text-[12px] font-bold uppercase tracking-[1px] text-ink-muted"
              >
                Feature
              </th>
              {PLANS.map((p) => (
                <th key={p} scope="col" className="p-4 text-center text-[13px] font-bold text-ink">
                  {p}
                </th>
              ))}
            </tr>
          </thead>

          {GROUPS.map((group) => (
            <tbody key={group.title}>
              <tr className="border-b border-line bg-line/30">
                <th
                  scope="colgroup"
                  colSpan={5}
                  className="px-4 py-3 text-left text-[12px] font-bold uppercase tracking-[1px] text-ink"
                >
                  {group.title}
                  {group.note ? (
                    <span className="ml-2 font-medium normal-case tracking-normal text-ink-muted">
                      {group.note}
                    </span>
                  ) : null}
                </th>
              </tr>
              {group.rows.map((row) => (
                <tr key={row.label} className="border-b border-line last:border-0">
                  <th scope="row" className="p-4 text-[14px] font-medium text-ink-soft">
                    {row.label}
                  </th>
                  {row.cells.map((c, i) => (
                    <td key={PLANS[i]} className="p-4 text-center">
                      <CellValue value={c} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          ))}
        </table>
      </div>

      {/* narrow screens: one line per feature */}
      <div className="flex flex-col gap-8 md:hidden">
        {GROUPS.map((group) => (
          <div key={group.title} className="flex flex-col">
            <h4 className="text-[12px] font-bold uppercase tracking-[1px] text-ink">
              {group.title}
            </h4>
            {group.note ? (
              <p className="pt-1 text-[13px] leading-5 text-ink-muted">{group.note}</p>
            ) : null}
            <ul className="pt-3">
              {group.rows.map((row) => (
                <li key={row.label} className="flex flex-col gap-0.5 border-t border-line py-3">
                  <span className="text-[14px] font-medium text-ink">{row.label}</span>
                  <span className="text-[13px] leading-5 text-ink-muted">
                    {summarise(row.cells)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
