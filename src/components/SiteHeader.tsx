"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { NavLink } from "@/types/content";

const NAV_LINKS: NavLink[] = [
  { label: "Beranda", href: "#home-section" },
  { label: "Tentang Kami", href: "#about-section" },
  { label: "Galeri", href: "#gallery-section" },
  { label: "Produk", href: "#product-section" },
  { label: "Tim", href: "#team-section" },
  { label: "Kontak", href: "#contact-section" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = isScrolled || isMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 z-[99] h-[70px] w-full transition-colors duration-300 ${
        solid ? "bg-background/95 shadow-sm backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-full items-center justify-between px-6">
        <Link
          href="/"
          className={`shrink-0 font-script text-[26px] italic transition-colors duration-300 md:text-[28px] ${
            solid ? "text-ink" : "text-white"
          }`}
        >
          Nativecode
        </Link>

        <nav className="hidden items-center gap-0 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`group relative px-5 py-1 font-sans text-[15px] font-normal transition-colors duration-300 hover:opacity-90 ${
                solid ? "text-ink" : "text-white"
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-5 right-5 h-px scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 ${
                  solid ? "bg-ink" : "bg-white"
                }`}
              />
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isMenuOpen}
          className={`transition-colors duration-300 md:hidden ${
            solid ? "text-ink" : "text-white"
          }`}
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
