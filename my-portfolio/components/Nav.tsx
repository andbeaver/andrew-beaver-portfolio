"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <nav className="max-w-5xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* Logo / Brand */}
        <Link href="/" className="flex flex-col leading-none group">
          <span className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
            Andrew Beaver
          </span>
          <span className="text-xs text-slate-400 font-medium mt-0.5">
            Developer Portfolio
          </span>
        </Link>

        {/* Links + CTA */}
        <div className="flex items-center gap-1">
          <ul className="flex items-center gap-1 mr-4">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      active
                        ? "text-indigo-600 bg-indigo-50"
                        : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    {label}
                    {active && (
                      <span className="absolute inset-0 rounded-lg border-2 border-indigo-600 pointer-events-none animate-pulse"></span>
                    )}
                    
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Contact pill button */}
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
      </nav>
    </header>
  );
}
