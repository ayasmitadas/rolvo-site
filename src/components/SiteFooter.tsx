import Link from "next/link";
import Logo from "./Logo";

type Column = {
  nodeId: string;
  title: string;
  links: { label: string; href: string }[];
};

const COLUMNS: Column[] = [
  {
    nodeId: "5:3297",
    title: "Product",
    links: [
      { label: "Overview", href: "#overview" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Specialists", href: "#specialists" },
      { label: "Skills", href: "#skills" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    nodeId: "5:3309",
    title: "Company",
    links: [
      { label: "About Selectiva", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    nodeId: "5:3321",
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "System Status", href: "#" },
    ],
  },
  {
    nodeId: "5:3333",
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
];

const SOCIALS = [
  {
    nodeId: "5:3345",
    label: "Rolvo on LinkedIn",
    src: "/assets/footer-linkedin.svg",
    width: 18,
    height: 20,
  },
  {
    nodeId: "5:3348",
    label: "Rolvo on Twitter",
    src: "/assets/footer-twitter.svg",
    width: 20,
    height: 20,
  },
  {
    nodeId: "5:3351",
    label: "Rolvo on YouTube",
    src: "/assets/footer-youtube.svg",
    width: 23,
    height: 20,
  },
];

const UTILITY = [
  { label: "Privacy", href: "#" },
  { label: "Cookies", href: "#" },
  { label: "Sitemap", href: "#" },
];

export default function SiteFooter() {
  return (
    <footer
      data-node-id="5:3286"
      className="border-t border-line bg-line/30 px-6 pb-12 pt-20 md:px-12 lg:pt-24"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col gap-16 lg:gap-20">
        <div
          data-node-id="5:3288"
          className="grid gap-12 sm:grid-cols-2 lg:grid-cols-6"
        >
          <div
            data-node-id="5:3289"
            className="flex flex-col gap-8 sm:col-span-2"
          >
            <Link href="#overview" aria-label="Rolvo home">
              <Logo className="h-9 w-auto" />
            </Link>
            <p className="max-w-[320px] text-[14px] leading-5 text-ink-muted">
              © 2026 Selectiva Inc. All rights reserved. Rolvo is a Selectiva
              product.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <nav
              key={col.title}
              data-node-id={col.nodeId}
              aria-label={col.title}
              className="flex flex-col gap-6"
            >
              <h3 className="text-[12px] font-bold uppercase leading-4 tracking-[1.2px] text-ink">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-4">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[14px] leading-5 text-ink-soft transition-colors hover:text-ink"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div
          data-node-id="5:3343"
          className="flex flex-col gap-8 border-t border-line pt-12 sm:flex-row sm:items-center sm:justify-between"
        >
          <ul className="flex items-center gap-8">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <Link
                  href="#"
                  aria-label={s.label}
                  data-node-id={s.nodeId}
                  className="inline-flex text-ink-faint transition-colors hover:text-ink"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.src}
                    alt=""
                    width={s.width}
                    height={s.height}
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>

          <nav aria-label="Legal and utility">
            <ul className="flex flex-wrap items-center gap-8">
              {UTILITY.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[11px] font-bold uppercase leading-[16.5px] tracking-[1.1px] text-ink-faint transition-colors hover:text-ink"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
