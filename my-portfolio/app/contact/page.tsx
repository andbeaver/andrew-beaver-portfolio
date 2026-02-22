import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Andrew Beaver",
  description: "Get in touch with Andrew Beaver.",
};

const contactItems = [
  {
    label: "Email",
    display: "andrew@example.com",
    href: "mailto:andrew@example.com",
    external: false,
  },
  {
    label: "GitHub",
    display: "github.com/andrewbeaver",
    href: "https://github.com/andrewbeaver",
    external: true,
  },
  {
    label: "LinkedIn",
    display: null,
    href: null,
    external: false,
  },
];

export default function ContactPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
          Contact
        </h1>
        <p className="text-slate-400 mt-2 text-sm">
          The best ways to reach me.
        </p>
      </div>

      <div className="flex flex-col gap-4 max-w-md">
        {contactItems.map(({ label, display, href, external }) => (
          <div
            key={label}
            className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col gap-1.5 shadow-sm hover:border-indigo-200 transition-colors"
          >
            <p className="text-xs font-semibold text-indigo-500 uppercase tracking-widest">
              {label}
            </p>
            {href && display ? (
              <Link
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="text-slate-900 font-medium hover:text-indigo-600 transition-colors"
              >
                {display}
              </Link>
            ) : (
              <p className="text-slate-400 text-sm italic">Coming soon</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
