import {
  ArrowRight,
  Check,
  CircleHelp,
  FileCode2,
  ImagePlus,
  Lock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

/* Shared bits ------------------------------------------------------ */

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-bold uppercase leading-[16.5px] tracking-[1.1px] text-ink-muted">
      {children}
    </p>
  );
}

function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-[6px] bg-brand px-4 py-2 text-[13px] font-bold leading-[19.5px] text-white">
      {children}
    </span>
  );
}

function GhostButton({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-[6px] border border-ink/[0.12] bg-white px-4 py-2 text-[13px] font-bold leading-[19.5px] text-ink">
      {children}
    </span>
  );
}

function Chip({
  children,
  tone = "violet",
}: {
  children: React.ReactNode;
  tone?: "violet" | "brand" | "muted";
}) {
  const cls =
    tone === "violet"
      ? "bg-violet/10 text-violet"
      : tone === "brand"
        ? "bg-brand/10 text-brand-text"
        : "bg-black/[0.04] text-ink-muted";
  return (
    <span className={`rounded-[4px] px-3 py-1 text-[12px] font-bold leading-4 ${cls}`}>
      {children}
    </span>
  );
}

/* 01 — Connect your org -------------------------------------------- */

const SCOPES = [
  { allowed: true, text: "Read objects, fields, flows and Apex" },
  { allowed: true, text: "Write a package only after you approve it" },
  { allowed: false, text: "Never deploys on its own" },
];

export function ConnectOrg() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <h3 className="text-[20px] font-bold leading-7 text-ink">
          Connect your Salesforce org
        </h3>
        <p className="text-[14px] leading-[22px] text-ink-muted">
          Every account starts here. Rolvo reads your org so the first task
          already knows your objects and naming.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="flex flex-col gap-1 rounded-[8px] border-2 border-brand bg-brand/[0.04] p-4">
          <div className="flex items-center justify-between">
            <p className="text-[14px] font-bold leading-5 text-ink">Production</p>
            <span className="grid size-5 place-items-center rounded-full bg-brand text-white">
              <Check size={12} strokeWidth={2.5} aria-hidden />
            </span>
          </div>
          <p className="text-[12px] leading-[18px] text-ink-muted">
            login.salesforce.com
          </p>
        </div>
        <div className="flex flex-col gap-1 rounded-[8px] border border-line bg-white p-4">
          <p className="text-[14px] font-bold leading-5 text-ink">Sandbox</p>
          <p className="text-[12px] leading-[18px] text-ink-muted">
            test.salesforce.com
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 rounded-[8px] border border-line bg-white p-4">
        <FieldLabel>What Rolvo can do in this org</FieldLabel>
        <ul className="flex flex-col gap-2">
          {SCOPES.map((s) => (
            <li key={s.text} className="flex items-start gap-3">
              <span
                className={`mt-[2px] grid size-[18px] shrink-0 place-items-center rounded-full ${
                  s.allowed
                    ? "bg-state-success/10 text-state-success"
                    : "bg-black/[0.05] text-ink-muted"
                }`}
              >
                {s.allowed ? (
                  <Check size={10} strokeWidth={2.5} aria-hidden />
                ) : (
                  <Lock size={9} strokeWidth={2.25} aria-hidden />
                )}
              </span>
              <span className="text-[13px] leading-5 text-ink-soft">{s.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <PrimaryButton>
          Authorise with Salesforce
          <ArrowRight size={14} strokeWidth={2} aria-hidden />
        </PrimaryButton>
        <span className="text-[12px] leading-[18px] text-ink-faint">
          Takes about a minute
        </span>
      </div>
    </div>
  );
}

/* 02 — Describe the task ------------------------------------------- */

export function DescribeTask() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <h3 className="text-[20px] font-bold leading-7 text-ink">
          Describe what you need
        </h3>
        <p className="text-[14px] leading-[22px] text-ink-muted">
          One field, plain language. No forms, no task types, no checklists.
        </p>
      </div>

      <div className="flex flex-col gap-3 rounded-[8px] border border-line bg-white p-4">
        <FieldLabel>Your request</FieldLabel>
        <p className="min-h-[76px] text-[15px] leading-[24px] text-ink">
          Renewal opportunities aren&rsquo;t rolling up to the parent account
          when the contract is amended mid-term. Fix the roll-up and add a
          validation so the close date can&rsquo;t predate the amendment.
        </p>
        <div className="flex flex-wrap items-center gap-2 border-t border-line pt-3">
          <span className="inline-flex items-center gap-2 rounded-[4px] border border-dashed border-ink/[0.16] px-3 py-1 text-[12px] font-medium leading-4 text-ink-muted">
            <ImagePlus size={13} strokeWidth={1.75} aria-hidden />
            Attach a screenshot
          </span>
          <Chip tone="muted">Optional</Chip>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <PrimaryButton>
          Continue
          <ArrowRight size={14} strokeWidth={2} aria-hidden />
        </PrimaryButton>
        <span className="text-[12px] leading-[18px] text-ink-faint">
          Rolvo drafts the brief next &mdash; nothing runs yet
        </span>
      </div>
    </div>
  );
}

/* 03 — Confirm the brief ------------------------------------------- */

const BRIEF = [
  "Trace the roll-up summary on Account.Renewal_ARR__c and the amendment path on Opportunity.",
  "Correct the roll-up so mid-term amendments re-parent to the originating account.",
  "Add a validation rule blocking CloseDate earlier than Amendment_Date__c.",
  "Write Apex tests covering amendment, renewal and the blocked case.",
];

export function ConfirmBrief() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <h3 className="text-[20px] font-bold leading-7 text-ink">
          Rolvo drafts the brief. You decide.
        </h3>
        <p className="text-[14px] leading-[22px] text-ink-muted">
          Written from what Rolvo already knows about your org &mdash; your
          objects, your naming, your past tasks.
        </p>
      </div>

      <div className="flex flex-col gap-3 rounded-[8px] border border-violet/30 bg-violet/[0.04] p-4">
        <div className="flex items-center gap-2">
          <Sparkles size={14} strokeWidth={1.75} className="text-violet" aria-hidden />
          <FieldLabel>Drafted brief</FieldLabel>
        </div>
        <ol className="flex flex-col gap-2">
          {BRIEF.map((line, i) => (
            <li key={line} className="flex gap-3">
              <span className="mt-[1px] font-mono text-[11px] leading-5 text-violet">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[13px] leading-5 text-ink-soft">{line}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="flex flex-col gap-3 rounded-[8px] border border-line bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2">
          <FieldLabel>Specialist assigned</FieldLabel>
          <div className="flex flex-wrap items-center gap-2">
            <Chip>Arden &middot; Architecture</Chip>
            <Chip>Piper &middot; Build</Chip>
            <span className="text-[12px] leading-[18px] text-ink-faint">
              chosen automatically
            </span>
          </div>
        </div>
        <GhostButton>Change</GhostButton>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <PrimaryButton>
          Run task
          <ArrowRight size={14} strokeWidth={2} aria-hidden />
        </PrimaryButton>
        <GhostButton>Edit the brief</GhostButton>
      </div>
    </div>
  );
}

/* 04 — Watch it run ------------------------------------------------ */

const LOG: { state: "done" | "running"; text: string; meta: string }[] = [
  { state: "done", text: "Read Account, Opportunity and 3 related objects", meta: "0:04" },
  { state: "done", text: "Found the roll-up breaking on re-parented amendments", meta: "0:19" },
  { state: "done", text: "Drafted the validation rule", meta: "0:41" },
  { state: "running", text: "Writing Apex tests", meta: "now" },
];

export function WatchRun() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-[20px] font-bold leading-7 text-ink">
            Watch it work
          </h3>
          <p className="text-[14px] leading-[22px] text-ink-muted">
            A readable log, not a progress bar.
          </p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-2 rounded-[4px] bg-state-running/10 px-3 py-1 text-[12px] font-bold leading-4 text-state-running">
          <span className="size-[6px] rounded-full bg-state-running" aria-hidden />
          Running
        </span>
      </div>

      <ol className="flex flex-col gap-0 rounded-[8px] border border-line bg-white">
        {LOG.map((l, i) => (
          <li
            key={l.text}
            className={`flex items-center gap-3 px-4 py-3 ${
              i > 0 ? "border-t border-line" : ""
            }`}
          >
            <span
              className={`grid size-[18px] shrink-0 place-items-center rounded-full ${
                l.state === "done"
                  ? "bg-state-success/10 text-state-success"
                  : "bg-state-running/10 text-state-running"
              }`}
            >
              {l.state === "done" ? (
                <Check size={10} strokeWidth={2.5} aria-hidden />
              ) : (
                <span className="size-[6px] animate-pulse rounded-full bg-state-running" />
              )}
            </span>
            <span className="flex-1 text-[13px] leading-5 text-ink-soft">
              {l.text}
            </span>
            <span className="font-mono text-[11px] leading-4 text-ink-faint">
              {l.meta}
            </span>
          </li>
        ))}
      </ol>

      <div className="flex flex-col gap-3 rounded-[8px] border-2 border-state-warning/40 bg-state-warning/[0.06] p-4">
        <div className="flex items-center gap-2">
          <CircleHelp size={14} strokeWidth={2} className="text-state-warning" aria-hidden />
          <FieldLabel>Waiting on you</FieldLabel>
        </div>
        <p className="text-[14px] leading-[22px] text-ink">
          Two amendment record types are in use. Should the validation apply to
          both, or only to Mid-Term?
        </p>
        <div className="flex flex-wrap gap-2">
          <GhostButton>Both</GhostButton>
          <GhostButton>Mid-Term only</GhostButton>
        </div>
      </div>
    </div>
  );
}

/* 05 — The output -------------------------------------------------- */

const FILES = [
  { name: "RenewalRollupHandler.cls", meta: "Apex · modified" },
  { name: "Opportunity.CloseDate_After_Amendment.validationRule", meta: "new" },
  { name: "RenewalRollupHandlerTest.cls", meta: "Apex test · new" },
];

export function RunOutput() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-[20px] font-bold leading-7 text-ink">
            The package, in full
          </h3>
          <p className="text-[14px] leading-[22px] text-ink-muted">
            What was done, what it touched, and what you can read line by line.
          </p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-2 rounded-[4px] bg-state-success/10 px-3 py-1 text-[12px] font-bold leading-4 text-state-success">
          <Check size={11} strokeWidth={2.5} aria-hidden />
          Complete
        </span>
      </div>

      <ul className="flex flex-col rounded-[8px] border border-line bg-white">
        {FILES.map((f, i) => (
          <li
            key={f.name}
            className={`flex items-center gap-3 px-4 py-3 ${
              i > 0 ? "border-t border-line" : ""
            }`}
          >
            <FileCode2
              size={15}
              strokeWidth={1.75}
              className="shrink-0 text-ink-faint"
              aria-hidden
            />
            <span className="min-w-0 flex-1 truncate font-mono text-[12px] leading-5 text-ink">
              {f.name}
            </span>
            <span className="hidden shrink-0 text-[11px] leading-4 text-ink-faint sm:block">
              {f.meta}
            </span>
          </li>
        ))}
      </ul>

      <div className="flex items-start gap-3 rounded-[8px] border border-line bg-white p-4">
        <ShieldCheck
          size={16}
          strokeWidth={1.75}
          className="mt-[2px] shrink-0 text-brand-text"
          aria-hidden
        />
        <p className="text-[13px] leading-5 text-ink-soft">
          Nothing reaches your org until you say so. The package sits here, with
          its full audit trail, for as long as you need to review it.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <PrimaryButton>Review and approve</PrimaryButton>
        <GhostButton>Download package</GhostButton>
      </div>
    </div>
  );
}

/* 06 — Plan limits ------------------------------------------------- */

const LOCKED = [
  { name: "Parallel runs", plan: "Business" },
  { name: "Audit log export", plan: "Enterprise" },
];

export function PlanLimits() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <h3 className="text-[20px] font-bold leading-7 text-ink">
          Always know where you stand
        </h3>
        <p className="text-[14px] leading-[22px] text-ink-muted">
          The count is in front of you before a run, not on the invoice after
          it.
        </p>
      </div>

      <div className="flex flex-col gap-3 rounded-[8px] border border-line bg-white p-4">
        <div className="flex items-end justify-between gap-4">
          <FieldLabel>Tasks this month</FieldLabel>
          <p className="text-[13px] font-bold leading-5 text-ink">
            24 <span className="font-medium text-ink-faint">of 25</span>
          </p>
        </div>
        <div
          className="h-[6px] w-full overflow-hidden rounded-full bg-line"
          role="img"
          aria-label="24 of 25 tasks used"
        >
          <div
            className="h-full w-[96%] rounded-full"
            style={{
              backgroundImage:
                "linear-gradient(90deg, var(--color-violet), var(--color-brand))",
            }}
          />
        </div>
        <p className="text-[12px] leading-[18px] text-ink-muted">
          A run that stops to ask you a question still counts as one task.
        </p>
      </div>

      <div className="flex flex-col gap-3 rounded-[8px] border-2 border-brand/40 bg-brand/[0.04] p-4">
        <p className="text-[15px] font-bold leading-6 text-ink">
          One task left on Pro
        </p>
        <p className="text-[13px] leading-5 text-ink-soft">
          Business raises the cap and adds seats for your team.
        </p>
        <div>
          <PrimaryButton>
            See Business
            <ArrowRight size={14} strokeWidth={2} aria-hidden />
          </PrimaryButton>
        </div>
      </div>

      <ul className="flex flex-col gap-2">
        {LOCKED.map((f) => (
          <li
            key={f.name}
            className="flex items-center gap-3 rounded-[8px] border border-dashed border-ink/[0.14] bg-white/60 px-4 py-3"
          >
            <Lock size={13} strokeWidth={1.75} className="shrink-0 text-ink-faint" aria-hidden />
            <span className="flex-1 text-[13px] leading-5 text-ink-muted">
              {f.name}
            </span>
            <Chip tone="brand">{f.plan}</Chip>
          </li>
        ))}
      </ul>
      <p className="text-[12px] leading-[18px] text-ink-faint">
        Features above your plan stay visible, never hidden.
      </p>
    </div>
  );
}
