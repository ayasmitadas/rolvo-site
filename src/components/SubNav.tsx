import Link from "next/link";
import Logo from "./Logo";

const LINKS = [
  { label: "Overview", href: "#overview", active: true },
  { label: "How It Works", href: "#how-it-works", active: false },
  { label: "Specialists", href: "#specialists", active: false },
  { label: "Pricing", href: "#pricing", active: false },
];

export default function SubNav() {
  return (
    <header
      data-node-id="5:2516"
      className="sticky top-0 z-50 w-full border-b border-line bg-paper/95 backdrop-blur-[12px]"
    >
      <nav className="mx-auto flex h-[56px] max-w-[1440px] items-center justify-between px-6 md:px-12">
        <div className="flex items-center gap-6 md:gap-8">
          <Link href="#overview" aria-label="Rolvo home">
            <Logo />
          </Link>
          <ul className="hidden items-center gap-6 md:flex">
            {LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className={`text-[13px] font-medium leading-[19.5px] transition-colors hover:text-ink ${
                    l.active ? "text-black" : "text-ink-muted"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href="#launch"
          className="rounded-[6px] bg-brand-text px-5 py-2 text-[13px] font-bold leading-[19.5px] text-white transition-opacity hover:opacity-90"
        >
          Get started free
        </Link>
      </nav>
    </header>
  );
}
