"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo_hallow.png";
import BookNow from "./buttons/BookNow";
import { useState } from "react";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative" style={{ background: "var(--color-navbar-bg)" }}>
      <div className="flex justify-between items-center px-4 py-3">
        <Link href="/" className="shrink-0">
          <Image
            src={logo}
            alt="Home"
            width={48}
            height={48}
            className="h-14 w-auto object-contain"
          />
        </Link>

        <div className="hidden lg:flex gap-6 xl:gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm xl:text-base font-bold text-[var(--color-brand-dark)] hover:text-[var(--color-brand-blue)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <BookNow />
        </div>

        <div className="flex lg:hidden items-center gap-3">
          <BookNow />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="p-2 text-[var(--color-brand-dark)]"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-gray-200 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 px-2 text-base font-bold text-[var(--color-brand-dark)] hover:text-[var(--color-brand-blue)] hover:bg-gray-50 rounded-lg transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
