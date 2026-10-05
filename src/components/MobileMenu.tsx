"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type NavLink = { label: string; href: string };

export default function MobileMenu({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // close on Escape, and lock background scroll while open
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        className="grid size-10 place-items-center rounded-[6px] border border-ink/[0.08] bg-white/70 text-ink transition-colors hover:bg-white"
      >
        {open ? (
          <X size={20} strokeWidth={1.75} aria-hidden />
        ) : (
          <Menu size={20} strokeWidth={1.75} aria-hidden />
        )}
      </button>

      {open ? (
        <div className="fixed inset-x-0 bottom-0 top-[57px] z-40 bg-ink/20 backdrop-blur-[2px]">
          <div
            ref={panelRef}
            id="mobile-nav"
            className="border-b border-line bg-paper px-6 pb-8 pt-2 shadow-[0_12px_32px_rgba(17,17,17,0.08)]"
          >
            <nav aria-label="Main">
              <ul className="flex flex-col">
                {links.map((l) => (
                  <li key={l.label} className="border-b border-line last:border-0">
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block py-4 text-[18px] font-bold text-ink"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-6 block rounded-[6px] border border-ink px-6 py-3 text-center text-[15px] font-bold text-ink"
            >
              Book a demo
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
