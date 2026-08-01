"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { NavLink } from "@/types/content";

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home-section" },
  { label: "About Us", href: "#about-section" },
  { label: "Gallery", href: "#gallery-section" },
  { label: "Product", href: "#product-section" },
  { label: "Team", href: "#team-section" },
  { label: "Contact", href: "#contact-section" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-[99] h-[70px] w-full bg-transparent">
      <div className="container mx-auto flex h-full items-center justify-between px-6">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo-elispor.png"
            alt="Elispor"
            width={90}
            height={54}
            priority
            className="h-10 w-auto md:h-11"
          />
        </Link>

        <nav className="hidden items-center gap-0 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-5 font-sans text-[15px] font-normal text-white transition-opacity hover:opacity-80"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="text-white md:hidden"
        >
          {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="flex flex-col bg-ink/95 px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="py-3 font-sans text-[15px] font-normal text-white transition-opacity hover:opacity-80"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
