import Eyebrow from "../Eyebrow";

type Playbook = {
  id: string;
  icon: string;
  title: string;
  body: string;
};

const PLAYBOOKS: Playbook[] = [
  {
    id: "cpq",
    icon: "playbook-cpq",
    title: "CPQ to Revenue Cloud migration",
    body: "Map products, pricing rules and contracts across systems with a guided migration sequence.",
  },
  {
    id: "dunning",
    icon: "playbook-dunning",
    title: "Dunning automation",
    body: "Automate invoice retries, customer notifications and escalation workflows end to end.",
  },
];

export default function Playbooks() {
  return (
    <section
      id="playbooks"
      data-node-id="5:3012"
      className="bg-paper px-6 py-24 md:px-12"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-14 lg:gap-20">
        <div className="flex max-w-[768px] flex-col items-center gap-[14.8px] text-center">
          <Eyebrow>Playbooks</Eyebrow>
          <h2 className="text-[32px] font-extrabold leading-[1.08] tracking-[-1.2px] text-ink sm:text-[48px] sm:tracking-[-1.9px] lg:text-[72px] lg:leading-[64.8px] lg:tracking-[-2.88px]">
            Start with a proven playbook, then customize.
          </h2>
        </div>

        <ul className="grid w-full gap-8 md:grid-cols-2">
          {PLAYBOOKS.map((p) => (
            <li
              key={p.id}
              className="flex flex-col items-start gap-4 rounded-[12px] border border-ink/[0.06] bg-white/70 p-8 shadow-[0_4px_24px_0_rgba(17,17,17,0.04)] backdrop-blur-[10px] lg:p-[41px]"
            >
              <span className="text-brand">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/assets/${p.icon}.svg`}
                  alt=""
                  width={30}
                  height={30}
                />
              </span>
              <h3 className="pt-2 text-[20px] font-bold leading-[28px] text-ink sm:text-[24px] sm:leading-[32px]">
                {p.title}
              </h3>
              <p className="text-[16px] leading-[24px] text-ink-soft">
                {p.body}
              </p>
              <a
                href="#playbooks"
                className="mt-[15.5px] inline-flex items-center gap-2 text-[16px] font-bold leading-[24px] text-violet hover:underline"
              >
                Run Playbook
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/playbook-arrow.svg"
                  alt=""
                  width={14}
                  height={16}
                  aria-hidden
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
