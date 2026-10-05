import Eyebrow from "../Eyebrow";

const ROWS = [
  ["Agent Type", "Autonomous agents", "Delivery specialists"],
  ["Primary Use", "Business tasks", "Salesforce development"],
  ["Output", "Actions & responses", "Deployable metadata"],
  ["Traceability", "Conversation logs", "Full audit trail"],
];

export default function Differentiation() {
  return (
    <section
      data-node-id="5:2620"
      className="border-b border-line bg-paper py-16 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-6 md:px-12 lg:grid-cols-12">
        <div className="flex min-w-0 flex-col gap-4 lg:col-span-4">
          <Eyebrow>Built for a different job</Eyebrow>
          <h2 className="text-[28px] font-bold leading-[1.15] text-ink sm:text-[36px] sm:leading-[40px]">
            Agentforce powers business agents. Rolvo delivers Salesforce change.
          </h2>
          <p className="pt-2 text-[16px] leading-[26px] text-ink-soft">
            Salesforce Agentforce is built for autonomous agents that run
            business tasks. Rolvo is built for delivery specialists that produce
            deployable Salesforce metadata — Apex, LWC, Flows and configurations
            — with full traceability.
          </p>
        </div>

        <div className="min-w-0 lg:col-span-8">
          <div className="overflow-hidden rounded-[8px] border border-ink/[0.06] bg-white/70 shadow-[0_4px_24px_0_rgba(17,17,17,0.04)] backdrop-blur-[10px]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead className="bg-black/[0.03]">
                  <tr>
                    <th
                      scope="col"
                      className="w-[24%] p-6 text-[11px] font-bold uppercase tracking-[1.1px] text-ink-muted"
                    >
                      Capability
                    </th>
                    <th
                      scope="col"
                      className="w-[38%] p-6 text-[11px] font-bold uppercase tracking-[1.1px] text-ink-muted"
                    >
                      Salesforce Agentforce
                    </th>
                    <th
                      scope="col"
                      className="w-[38%] p-6 text-[11px] font-bold uppercase tracking-[1.1px] text-brand-text"
                    >
                      Rolvo
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map(([capability, agentforce, rolvo], i) => (
                    <tr
                      key={capability}
                      className={i === 0 ? "" : "border-t border-line"}
                    >
                      <th
                        scope="row"
                        className="p-6 text-[16px] font-medium text-ink"
                      >
                        {capability}
                      </th>
                      <td className="p-6 text-[16px] text-ink-muted">
                        {agentforce}
                      </td>
                      <td className="p-6 text-[16px] font-medium text-ink">
                        {rolvo}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
