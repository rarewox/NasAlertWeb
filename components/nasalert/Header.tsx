"use client";

import Image from "next/image";
import { useState } from "react";
import { navLinks } from "@/lib/nasalertContent";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-road-200/80 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="inline-flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nigeria-500"
          aria-label="NasAlert home"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-nigeria-200">
            <Image src="/images/nasalert/app-logo.png" alt="NasAlert logo" width={32} height={32} className="h-8 w-8 object-cover" priority />
          </span>
          <span className="text-xl font-bold text-road-900">NasAlert</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-road-700 transition-colors hover:text-nigeria-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nigeria-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://nas-alert.vercel.app/signup"
            className="hidden rounded-md bg-nigeria-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-nigeria-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nigeria-500 lg:inline-flex"
          >
            Get Started
          </a>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-road-300 bg-white text-road-800 transition hover:border-nigeria-400 hover:text-nigeria-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nigeria-500 lg:hidden"
          >
            {mobileOpen ? (
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav id="mobile-menu" aria-label="Primary mobile" className="border-t border-road-200 bg-white px-4 py-3 lg:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="rounded-md px-3 py-2 text-sm font-medium text-road-700 transition hover:bg-road-50 hover:text-nigeria-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nigeria-500"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://nas-alert.vercel.app/signup"
              onClick={closeMobileMenu}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-nigeria-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-nigeria-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nigeria-500"
            >
              Get Started
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
