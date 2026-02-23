const opportunities = [
  { label: "Full-Time Opportunities", icon: "💼" },
  { label: "Part-Time Opportunities", icon: "🕐" },
  { label: "5–16 Week Work Terms", icon: "📅" },
  { label: "Freelance Projects", icon: "🚀" },
];

interface AvailabilityBadgeProps {
  /** "card" = full card with header, used in contact sidebar.
   *  "inline" = compact pill row, used in hero / page headers. */
  variant?: "card" | "inline";
}

export default function AvailabilityBadge({
  variant = "card",
}: AvailabilityBadgeProps) {
  if (variant === "inline") {
    return (
      <span className="inline-flex items-center gap-2 self-start bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800">
        {/* Pulsing dot */}
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        Open to opportunities
      </span>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        {/* Pulsing dot */}
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-500 uppercase tracking-widest">
          Available Now
        </span>
      </div>

      {/* Opportunity pills */}
      <ul className="flex flex-col gap-2">
        {opportunities.map(({ label, icon }) => (
          <li
            key={label}
            className="flex items-center gap-2.5 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/50 rounded-lg px-3.5 py-2 text-sm text-emerald-800 dark:text-emerald-400 font-medium"
          >
            <span className="text-base leading-none" aria-hidden="true">
              {icon}
            </span>
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
