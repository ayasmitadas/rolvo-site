import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

const LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Specialists", href: "#specialists" },
  { label: "Governance", href: "#governance" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact us", href: "#contact" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-line bg-card">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-6 py-14 md:px-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-3">
            <Logo className="h-7 w-auto" />
            <p className="text-[14px] leading-5 text-ink-muted">
              Rolvo is a Selectiva product.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-7 gap-y-3">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[14px] leading-5 text-ink-muted transition-colors hover:text-ink"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://rolvo.ai"
                  className="group inline-flex items-center gap-1 text-[14px] font-bold leading-5 text-ink"
                >
                  Visit Rolvo
                  <ArrowUpRight size={13} strokeWidth={2} aria-hidden className="arrow-slide text-brand" />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <p className="text-[12px] leading-4 text-ink-muted">
            © 2026 Selectiva Inc.
          </p>
          <Link
            href="#overview"
            className="group btn-press inline-flex items-center gap-2 text-[12px] font-bold uppercase leading-4 tracking-[1.2px] text-ink-muted hover:text-ink"
          >
            Back to top
            <ArrowUp size={13} strokeWidth={2} aria-hidden className="transition-transform group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
