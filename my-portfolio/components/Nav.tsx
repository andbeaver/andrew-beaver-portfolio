"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
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
      className={`backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md" : "bg-white/90 shadow-sm"
      }`}
    >
      <nav
        className={`max-w-5xl mx-auto px-8 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        {/* Logo / Brand */}
        <Link href="/" className="flex flex-col leading-none group">
          <span className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
            Andrew Beaver
          </span>
          <span className="text-xs text-slate-400 font-medium mt-0.5">
            Developer Portfolio
          </span>
        </Link>

        {/* Desktop: Links + CTA */}
        <div className="hidden md:flex items-center gap-1">
          <ul className="flex items-center gap-1 mr-4">
            {navLinks.map(({ href, label }) => {
              const active = isActive(href, pathname);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`group relative px-4 py-2 text-sm font-medium transition-colors ${
                      active ? "text-indigo-600" : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    {label}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-indigo-600 transition-all duration-300 ${
                        active ? "w-4/5" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
            {/* Resume link – desktop */}
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-4 py-2 text-sm font-medium transition-colors text-slate-500 hover:text-slate-900"
              >
                Resume
                <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-indigo-600 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          </ul>

          <Link
            href="/contact"
            className={`text-sm font-semibold px-4 py-2 rounded-lg border transition-colors ${
              pathname === "/contact"
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-white text-indigo-600 border-indigo-300 hover:bg-indigo-600 hover:text-white hover:border-indigo-600"
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
        <ul className="flex flex-col px-6 pb-5 pt-1 gap-1 border-t border-slate-100">
          {navLinks.map(({ href, label }) => {
            const active = isActive(href, pathname);
            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? "text-indigo-600 bg-indigo-50"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
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
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            >
              Resume
            </a>
          </li>
          <li className="pt-1">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className={`block text-center text-sm font-semibold px-4 py-3 rounded-lg border transition-colors ${
                pathname === "/contact"
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white text-indigo-600 border-indigo-300 hover:bg-indigo-600 hover:text-white hover:border-indigo-600"
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
