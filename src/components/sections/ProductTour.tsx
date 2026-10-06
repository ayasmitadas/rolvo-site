import Eyebrow from "../Eyebrow";
import ConsoleFrame from "../product/ConsoleFrame";
import {
  ConfirmBrief,
  ConnectOrg,
  DescribeTask,
  PlanLimits,
  RunOutput,
  WatchRun,
} from "../product/Screens";

/**
 * The screen picker is CSS-only — radio inputs drive `:checked ~` rules in
 * globals.css. No JavaScript, so every screen is in the HTML and the section
 * works in a static export, offline, and before hydration.
 */
const SCREENS = [
  {
    tab: "Connect",
    label: "Rolvo — connect org",
    caption: "Connect the org before anything else.",
    node: <ConnectOrg />,
  },
  {
    tab: "Describe",
    label: "Rolvo — new task",
    caption: "One field. Say it in your own words.",
    node: <DescribeTask />,
  },
  {
    tab: "Confirm",
    label: "Rolvo — review brief",
    caption: "Rolvo writes the brief. You approve it.",
    node: <ConfirmBrief />,
  },
  {
    tab: "Run",
    label: "Rolvo — task #1284",
    caption: "A log you can read, and a run that can ask.",
    node: <WatchRun />,
  },
  {
    tab: "Output",
    label: "Rolvo — package #1284",
    caption: "The finished package, held for your review.",
    node: <RunOutput />,
  },
  {
    tab: "Limits",
    label: "Rolvo — plan usage",
    caption: "Your count, always in view.",
    node: <PlanLimits />,
  },
];

export default function ProductTour() {
  return (
    <section
      id="product"
      className="relative overflow-hidden border-b border-line bg-paper py-20 lg:py-28"
    >
      <div
        aria-hidden
        className="glow left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,90,0,0.14) 0%, rgba(255,90,0,0) 70%)",
          filter: "blur(70px)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-6 md:px-12 lg:gap-14">
        <div className="flex max-w-[768px] flex-col gap-4">
          <Eyebrow tone="brand">Inside the console</Eyebrow>
          <h2 className="text-[32px] font-bold leading-[1.1] text-ink sm:text-[40px] lg:text-[48px] lg:leading-[48px]">
            Six screens. That is the whole product.
          </h2>
          <p className="text-[18px] leading-[29.25px] text-ink-soft">
            From an empty account to a reviewed package, this is every screen
            you pass through — in order, with nothing left out.
          </p>
        </div>

        <div className="tour">
          {SCREENS.map((s, i) => (
            <input
              key={s.tab}
              type="radio"
              name="rolvo-tour"
              id={`tour-${i}`}
              defaultChecked={i === 0}
              className="tour-input"
              aria-label={s.tab}
            />
          ))}

          <div className="tour-body grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-2 lg:col-span-4 lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0 lg:pb-0">
              {SCREENS.map((s, i) => (
                <label
                  key={s.tab}
                  htmlFor={`tour-${i}`}
                  data-i={i}
                  className="tour-tab flex shrink-0 cursor-pointer items-center gap-3 rounded-[8px] border border-transparent px-4 py-3 text-left transition-colors hover:bg-white/60 lg:w-full"
                >
                  <span className="tour-n font-mono text-[11px] leading-4 text-ink-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <span className="tour-name text-[15px] font-bold leading-[22px] text-ink-muted">
                      {s.tab}
                    </span>
                    <span className="hidden text-[12px] leading-[18px] text-ink-faint lg:block">
                      {s.caption}
                    </span>
                  </span>
                </label>
              ))}
            </div>

            <div className="min-w-0 lg:col-span-8">
              {SCREENS.map((s, i) => (
                <div key={s.tab} data-i={i} className="tour-panel">
                  <ConsoleFrame label={s.label}>{s.node}</ConsoleFrame>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
