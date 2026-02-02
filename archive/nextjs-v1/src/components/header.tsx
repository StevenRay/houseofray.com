"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { name: "Work", href: "/work" },
  { name: "Video", href: "/video" },
  { name: "Gallery", href: "/gallery" },
  { name: "Press", href: "/press" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur-sm border-b border-mauve-light">
      <nav
        className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-serif text-2xl tracking-tight text-purple hover:text-purple-light transition-colors"
        >
          Nycole Ray
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`text-sm tracking-wide transition-colors hover:text-gold ${
                  pathname === item.href
                    ? "text-purple font-medium"
                    : "text-purple-light"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-purple-light hover:text-purple transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-mauve-light bg-cream">
          <ul className="px-6 py-4 space-y-4">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`block text-base transition-colors hover:text-gold ${
                    pathname === item.href
                      ? "text-purple font-medium"
                      : "text-purple-light"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
