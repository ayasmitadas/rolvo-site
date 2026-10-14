"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import ScrollProgress from "./motion/ScrollProgress";

const LINKS = [
  { label: "How it works", href: "#how-it-works", id: "how-it-works" },
  { label: "Specialists", href: "#specialists", id: "specialists" },
  { label: "Governance", href: "#governance", id: "governance" },
  { label: "Pricing", href: "#pricing", id: "pricing" },
];

export default function SubNav() {
  const [stuck, setStuck] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      Boolean,
    ) as HTMLElement[];
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.2, 0.6] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-paper/95 backdrop-blur-[6px] transition-colors duration-300 ${
        stuck ? "border-line" : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-3 px-6 md:px-12">
        <div className="flex min-w-0 items-center gap-8">
          <Link href="#overview" aria-label="Rolvo home" className="btn-press">
            <Logo className="h-6 w-auto md:h-7" />
          </Link>
          <ul className="hidden items-center gap-7 md:flex">
            {LINKS.map((l) => {
              const on = active === l.id;
              return (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    aria-current={on ? "true" : undefined}
                    className={`relative whitespace-nowrap py-1 text-[14px] font-medium leading-[21px] transition-colors hover:text-ink ${
                      on ? "text-ink" : "text-ink-muted"
                    }`}
                  >
                    {l.label}
                    <span
                      aria-hidden
                      className={`absolute -bottom-0.5 left-0 h-[2px] rounded-full bg-brand transition-all duration-300 ${
                        on ? "w-full opacity-100" : "w-0 opacity-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="#contact"
            className="btn-press whitespace-nowrap rounded-[6px] bg-brand px-5 py-[10px] text-[14px] font-bold leading-[21px] text-white hover:opacity-95"
          >
            Contact us
          </Link>
          <MobileMenu links={LINKS} />
        </div>
      </nav>
      <ScrollProgress />
    </header>
  );
}
