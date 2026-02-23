import AvailabilityBadge from "@/components/AvailabilityBadge";

interface ContactCardProps {
  email: string;
  copied: boolean;
  onCopy: () => void;
}

export default function ContactCard({ email, copied, onCopy }: ContactCardProps) {
  return (
    <div className="flex flex-col gap-5">
      {/* Identity & info card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 shadow-sm">
        {/* Avatar + name */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-xl font-bold text-indigo-600 dark:text-indigo-400 shrink-0 select-none">
            AB
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
              Andrew Beaver
            </h2>
            <p className="text-indigo-500 dark:text-indigo-400 font-medium text-sm mt-0.5">
              Software Developer
            </p>
          </div>
        </div>

        {/* Detail rows */}
        <ul className="flex flex-col gap-3.5 text-sm mb-6">
          <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
            <svg
              aria-hidden="true"
              className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Halifax, Nova Scotia, Canada
          </li>

          <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
            <svg
              aria-hidden="true"
              className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Atlantic Time | UTC&minus;4
          </li>
        </ul>

        {/* Availability */}
        <div className="border border-emerald-100 dark:border-emerald-900/50 rounded-xl p-4 bg-emerald-50/40 dark:bg-emerald-900/10">
          <AvailabilityBadge variant="card" />
        </div>

        <div className="border-t border-slate-100 dark:border-slate-700 my-5" />

        {/* Email + copy */}
        <div>
          <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">
            Direct Email
          </p>
          <div className="flex items-center justify-between gap-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-3">
            <span className="text-sm text-slate-800 dark:text-slate-200 font-medium truncate">
              {email}
            </span>
            <button
              onClick={onCopy}
              aria-label={
                copied
                  ? "Email address copied"
                  : "Copy email address to clipboard"
              }
              className="shrink-0 flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded"
            >
              {copied ? (
                <>
                  <svg
                    aria-hidden="true"
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg
                    aria-hidden="true"
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  Copy
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Social links card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-sm">
        <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">
          Also Find Me On
        </p>
        <div className="flex flex-col gap-3">
          <a
            href="https://github.com/andbeaver"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm font-medium group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-indigo-500 transition-colors shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.509 11.509 0 013.004-.404c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.825.576C20.565 21.796 24 17.302 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            github.com/andbeaver
            <span className="sr-only">(opens in new tab)</span>
          </a>

          <a
            href="https://www.linkedin.com/in/andrewbeaver-software"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm font-medium group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-indigo-500 transition-colors shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            linkedin.com/in/andrewbeaver-software
            <span className="sr-only">(opens in new tab)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
