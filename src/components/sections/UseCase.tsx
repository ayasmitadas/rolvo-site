import Eyebrow from "../Eyebrow";

const OVERVIEW: { term: string; value: string }[] = [
  { term: "Status", value: "In Progress" },
  { term: "Created", value: "Today" },
  { term: "Owner", value: "You" },
];

const AGENTS: { name: string; tone: "violet" | "brand" }[] = [
  { name: "Piper", tone: "violet" },
  { name: "Arden", tone: "violet" },
  { name: "Devon", tone: "brand" },
];

const PROGRESS = 67;

const CARD =
  "flex flex-col rounded-[8px] border border-ink/[0.06] bg-white/70 p-[25px] shadow-[0_4px_24px_0_rgba(17,17,17,0.04)] backdrop-blur-[10px]";

const CARD_LABEL =
  "text-[11px] font-bold uppercase leading-[16.5px] tracking-[1.1px] text-ink-muted";

export default function UseCase() {
  return (
    <section
      id="example"
      data-node-id="5:2964"
      className="border-t border-line bg-line/30 px-6 py-24 md:px-12"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Eyebrow>Example output</Eyebrow>
          <h2 className="max-w-[900px] text-[32px] font-bold leading-[1.1] text-ink sm:text-[40px] lg:text-[48px] lg:leading-[48px]">
            Build an account renewal notification Flow.
          </h2>
        </div>

        <ul className="grid gap-8 pt-8 md:grid-cols-2 lg:grid-cols-3">
          <li className={`${CARD} gap-4`}>
            <h3 className={CARD_LABEL}>Project overview</h3>
            <dl className="flex flex-col gap-3">
              {OVERVIEW.map((row) => (
                <div
                  key={row.term}
                  className="flex items-start justify-between gap-4"
                >
                  <dt className="text-[14px] leading-5 text-ink-muted">
                    {row.term}
                  </dt>
                  <dd className="m-0 text-[14px] font-medium leading-5 text-ink">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </li>

          <li className={`${CARD} gap-4`}>
            <h3 className={CARD_LABEL}>Assigned agents</h3>
            <ul className="flex flex-wrap items-start gap-2">
              {AGENTS.map((agent) => (
                <li
                  key={agent.name}
                  className={`rounded-[4px] px-3 py-1 text-[12px] font-bold leading-4 ${
                    agent.tone === "violet"
                      ? "bg-violet/10 text-violet"
                      : "bg-brand/10 text-brand"
                  }`}
                >
                  {agent.name}
                </li>
              ))}
            </ul>
          </li>

          <li className={`${CARD} gap-2`}>
            <h3 className={`${CARD_LABEL} pb-2`}>Task status</h3>
            <div
              role="progressbar"
              aria-label="Task progress"
              aria-valuenow={PROGRESS}
              aria-valuemin={0}
              aria-valuemax={100}
              className="h-2 w-full overflow-hidden rounded-full bg-line"
            >
              <div
                className="h-full"
                style={{
                  width: `${PROGRESS}%`,
                  backgroundImage:
                    "linear-gradient(90deg, var(--color-violet), var(--color-brand))",
                }}
              />
            </div>
            <p className="text-[12px] leading-4 text-ink-muted">
              Building Flow logic...
            </p>
          </li>
        </ul>

        <div
          className={`${CARD} gap-6 p-[25px] lg:p-[33px]`}
          data-node-id="5:3007"
        >
          <h3 className={CARD_LABEL}>Requirements</h3>
          <p className="text-[16px] leading-[26px] text-ink-soft">
            Create a Salesforce Flow that triggers when an Opportunity stage
            changes to &ldquo;Renewal&rdquo;. The flow should send an email
            notification to the Account Owner and create a follow-up Task due in
            7 days.
          </p>
        </div>
      </div>
    </section>
  );
}
