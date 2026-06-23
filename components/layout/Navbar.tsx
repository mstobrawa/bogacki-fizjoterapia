"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "./Container";

const navItems = [
  { href: "/", label: "Strona główna" },
  { href: "/oferta", label: "Oferta" },
  { href: "/o-mnie", label: "O mnie" },
  { href: "/ciekawostki", label: "Ciekawostki" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-(--color-border) bg-white/95 backdrop-blur-2xl">
      <Container className="flex h-24 items-center justify-between">
        <Link
          href="/"
          className="group flex items-center text-(--color-primary)"
          aria-label="Bogacki Fizjoterapia - strona główna"
        >
          <Image
            src="/logo-hori.png"
            alt="Bogacki Fizjoterapia"
            width={260}
            height={78}
            priority
            className="h-16 w-auto object-contain sm:h-18"
          />
        </Link>

        <nav
          className="hidden items-center gap-1 rounded-full border border-(--color-border) bg-white p-1 shadow-sm lg:flex"
          aria-label="Główna nawigacja"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`rounded-full px-4 py-2.5 text-sm font-medium transition duration-300 ease-(--ease-premium) ${
                isActive(item.href)
                  ? "bg-(--color-primary) text-(--color-on-primary)! shadow-sm"
                  : "text-(--color-primary) hover:bg-(--color-surface) hover:text-(--color-primary-hover)"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-(--color-primary) bg-white text-(--color-primary) shadow-sm transition hover:border-(--color-accent) lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={`grid overflow-hidden border-t border-(--color-border) bg-white shadow-[0_22px_70px_rgba(13,27,42,0.16)] backdrop-blur-2xl transition-all duration-500 ease-(--ease-premium) lg:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <nav className="min-h-0" aria-label="Nawigacja mobilna">
          <Container className="flex flex-col gap-2 py-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-2xl px-4 py-4 text-base font-semibold transition ${
                  isActive(item.href)
                    ? "bg-(--color-primary) text-(--color-on-primary)!"
                    : "text-(--color-primary) hover:bg-(--color-surface)"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </Container>
        </nav>
      </div>
    </header>
  );
}
