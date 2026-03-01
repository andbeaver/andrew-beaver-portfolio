"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

function isActive(href: string, pathname: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
}

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  // Scroll-based header styling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close menu on Escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header
      className={`nav-gradient-border relative backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 dark:bg-slate-900/95 shadow-md" : "bg-white/90 dark:bg-slate-900/90 shadow-sm"
      }`}
    >
      <nav
        className={`max-w-5xl mx-auto px-8 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        {/* Left: Logo (name acts as home) */}
        <div className="flex items-center">
          <Link href="/" className="flex flex-col leading-none group">
            <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              Andrew Beaver
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
              Developer Portfolio
            </span>
          </Link>
        </div>

        {/* Center: primary nav links (Projects, About, Resume) */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-1">
            {navLinks.map(({ href, label }) => {
              const active = isActive(href, pathname);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`group relative px-4 py-2 text-sm font-medium transition-colors ${
                      active ? "text-indigo-600 dark:text-indigo-400" : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    {label}
                    <span
                      className={`nav-underline absolute bottom-0 left-0 h-0.5 rounded-full bg-indigo-600 dark:bg-indigo-400 ${
                        active ? "w-full" : "w-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}

            {/* Resume link – desktop (centered) */}
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="Open resume (PDF, opens in new tab)"
                aria-label="Open resume — PDF, opens in new tab"
                className="group relative px-4 py-2 text-sm font-medium transition-colors text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white inline-flex items-center gap-2"
              >
                <span>Resume</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-slate-500 dark:text-slate-300" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM13 3.5L18.5 9H13V3.5zM8 13h8v2H8v-2zm0-4h8v2H8V9z" />
                </svg>
                <span className="nav-underline absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-indigo-600 dark:bg-indigo-400" />
              </a>
            </li>
          </ul>
        </div>

        {/* Right group: desktop controls (socials, theme, contact) */}
        <div className="hidden md:flex items-center gap-1">
          <div className="hidden lg:flex items-center gap-3 mr-2">
            <a
              href="https://github.com/andbeaver"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 p-1 rounded-full"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.42-3.88-1.42-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.14 1.18a10.95 10.95 0 012.86-.39c.97.01 1.95.13 2.86.39 2.18-1.49 3.14-1.18 3.14-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.08 0 4.43-2.71 5.41-5.29 5.69.41.35.77 1.03.77 2.08 0 1.5-.01 2.71-.01 3.08 0 .3.21.66.79.55A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
              </svg>
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/andrewbeaver-software/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 p-1 rounded-full"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>

          <ThemeToggle />

          <Link
            href="/contact"
            className={`text-sm font-semibold px-4 py-2 rounded-lg border transition-colors ${
              pathname === "/contact"
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 border-indigo-300 dark:border-indigo-700 hover:bg-indigo-600 hover:text-white hover:border-indigo-600"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile: Hamburger button */}
        <button
          ref={hamburgerRef}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          {/* Animated hamburger → X */}
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          <span
            className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${
              menuOpen ? "translate-y-[3px] rotate-45" : "-translate-y-0.5"
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 my-0.5 ${
              menuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${
              menuOpen ? "-translate-y-[3px] -rotate-45" : "translate-y-0.5"
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Navigation menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 pb-5 pt-1 gap-1 border-t border-slate-100 dark:border-slate-800">
          {navLinks.map(({ href, label }) => {
            const active = isActive(href, pathname);
            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  {active && (
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0" />
                  )}
                  {label}
                </Link>
              </li>
            );
          })}
          {/* Resume link – mobile */}
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}

              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <span>Resume</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-slate-600 dark:text-slate-300" aria-hidden="true">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM13 3.5L18.5 9H13V3.5zM8 13h8v2H8v-2zm0-4h8v2H8V9z" />
              </svg>
            </a>
          </li>
          <li className="flex gap-4 px-4 py-3">
            <a
              href="https://github.com/andbeaver"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 p-1 rounded-full"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.42-3.88-1.42-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.14 1.18a10.95 10.95 0 012.86-.39c.97.01 1.95.13 2.86.39 2.18-1.49 3.14-1.18 3.14-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.08 0 4.43-2.71 5.41-5.29 5.69.41.35.77 1.03.77 2.08 0 1.5-.01 2.71-.01 3.08 0 .3.21.66.79.55A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
              </svg>
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/andrewbeaver-software/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 p-1 rounded-full"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4zM8.5 8h3.84v2.18h.05c.54-1 1.86-2.18 3.84-2.18 4.11 0 4.87 2.71 4.87 6.23V24h-4v-7.56c0-1.8-.03-4.12-2.51-4.12-2.51 0-2.9 1.96-2.9 3.99V24h-4z" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
          </li>
          <li className="pt-1 flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className={`flex-1 block text-center text-sm font-semibold px-4 py-3 rounded-lg border transition-colors ${
                pathname === "/contact"
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 border-indigo-300 dark:border-indigo-700 hover:bg-indigo-600 hover:text-white hover:border-indigo-600"
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
